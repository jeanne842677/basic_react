"use client";

import { LocalDateTime, PropsWithDefault } from "@/type/common/utils";
import { BoardType, PostSummaryResponse } from "@/type/domain/post";
import React, { useMemo } from "react";
import { renderValue } from "@/components/common/CommonAdminTable";
import { ColumnOption } from "@/type/common/adminTable";
import { formatUtils } from "@/utils/formatUtils";
import { useRouter } from "next/navigation";
import { postApi } from "@/api/domain/postApi";
import { useFetchData } from "@/hooks/reactUtils";
import { convertBoardUrl } from "@/shared/domain/post";
import { usePage } from "@/hooks/pageHook";
import { CommonPagination } from "@/components/common/CommonPagination";
import { dayUtils } from "@/utils/dayUtils";
import { NicknamePopover } from "@/components/member/NicknamePopover";

export function BoardPostTable(
  props: PropsWithDefault<{
    boardType: BoardType;
  }>
) {
  const { boardType } = props;
  const { page, setPage } = usePage();
  const { data: postList } = useFetchData({
    queryKey: ["board", boardType, page],
    queryFn: () => postApi.list({ boardType, page }),
  });
  const router = useRouter();
  const columnOptions: ColumnOption<PostSummaryResponse>[] = useMemo(() => {
    return [
      {
        label: "번호",
        id: "boardNo",
        align: "center",
        width: "30px",
        type: "slot",
        render: (data) => (data.blind ? "-" : data.id),
      },
      {
        label: "제목",
        id: "title",
        align: "start",
        type: "slot",
        render: (data) => {
          return (
            <div className={"flex gap-1 items-center"}>
              <span
                className={`${
                  data.blind
                    ? "text-gray-400"
                    : "hover:cursor-pointer hover:underline"
                }`}
                onClick={() => {
                  if (data.blind) {
                    return;
                  }
                  router.push(
                    `/board/${convertBoardUrl(data.boardType)}/${data.boardNo}`
                  );
                }}
              >
                {data.title}
              </span>
              <span className={"text-gray-500"}>[{data.replyCount}]</span>
              <span className={"mx-1"}>
                {dayUtils.isToday(data.createdAt) && (
                  <div className={"new-icon"}>N</div>
                )}
              </span>
            </div>
          );
        },
      },
      {
        label: "닉네임",
        id: "memberNickname",
        align: "center",
        width: "60px",
        type: "slot",
        render: (data) => {
          return (
            <NicknamePopover
              className={"font-semibold"}
              nickname={data.memberNickname}
              memberId={data.memberId}
              contentsId={data.id}
              reportUrl={`/board/${convertBoardUrl(data.boardType)}/${
                data.boardNo
              }`}
            ></NicknamePopover>
          );
        },
      },
      {
        label: "작성일",
        id: "createdAt",
        width: "100px",
        align: "center",
        format: (createdAt: LocalDateTime) =>
          formatUtils.dateViewFormat(createdAt),
      },
      { label: "조회", id: "viewCount", align: "center", width: "30px" },
      { label: "추천", id: "likeCount", align: "center", width: "30px" },
    ];
  }, []);

  return (
    <>
      <table className={"w-full"}>
        <thead>
          <tr className={"border-t-1 border-b-1"}>
            {columnOptions.map((option) => (
              <td className={"p-2"} key={option.id as string}>
                <span className={`flex justify-${option.align} font-bold`}>
                  {option.label}
                </span>
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {postList?.contents?.map((post, index) => (
            <tr key={post.id} className={"hover:bg-gray-100"}>
              {columnOptions.map((option) => (
                <React.Fragment key={option.id as string}>
                  <td
                    className={"p-2 py-1 border-b-1"}
                    style={{ width: option.width }}
                  >
                    <div
                      style={{ width: option.width }}
                      className={`flex justify-${option.align}`}
                    >
                      {option.type === "slot"
                        ? option.render?.(post)
                        : renderValue(post[option.id], option.format)}
                    </div>
                  </td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <CommonPagination
        pageInfo={postList?.pageInfo}
        onChangePage={setPage}
      ></CommonPagination>
    </>
  );
}
