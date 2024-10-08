import React, {useRef, useState} from "react";

function NumberBaseBall () {


    const [strikeNum, setStrike] = useState("");
    const [ballNum, setBallNum] = useState("");
    const [inputValue, setInputValue] = useState([]);
    const refValue = useRef(null);

    const onSubmitForm = (e) =>{
        e.preventDefault();

        var strikeCnt =0;
        var ballCnt=0;
        const firstNum = Math.floor(Math.random() * 9);
        const secondNum = Math.floor(Math.random() * 9);
        const thirdNum = Math.floor(Math.random() * 9);
        const fourthNum = Math.floor(Math.random() * 9);
        let firstVal = inputValue[0];
        let secondVal = inputValue[1];
        let thirdVal = inputValue[2];
        let fourthVal = inputValue[3];
        firstVal = inputValue.slice(0,1);
        secondVal = inputValue.slice(1,1);
        thirdVal = inputValue.slice(2,1);
        fourthVal = inputValue.slice(3,1);
        console.log(firstNum, secondNum, thirdNum, fourthNum);
        console.log("보고싶은값 : " + secondVal);
        if (firstNum === firstVal){
            strikeCnt +=1;
        }else{
            ballCnt +=1;
        }
        if (secondNum === secondVal){
            strikeCnt +=1;
        }else{
            ballCnt +=1;
        }
        if (thirdNum === thirdVal){
            strikeCnt +=1;
        }else{
            ballCnt +=1;
        }
        if (fourthNum === fourthVal){
            strikeCnt +=1;
        }else{
            ballCnt +=1;
        }

        setStrike(strikeCnt);
        setBallNum(ballCnt);



    }


    return(
        <>
            <div>{strikeNum}스트라이크 {ballNum}볼입니다.</div>
            <form onSubmit={onSubmitForm} >
                <input type="number" value={inputValue} ref={refValue} onChange={(e)=>setInputValue(e.target.value)}/>
                <button>입력!</button>
            </form>
        </>
    )
}

export default NumberBaseBall;