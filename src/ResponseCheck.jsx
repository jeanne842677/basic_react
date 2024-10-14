import React, {useState} from "react";
import './responseCheck.css';


function ResponseCheck(){
    const [state, setState] = useState("waiting");
    const [message, setMessage] = useState("클릭해서 시작하세요");
    const [result, setResult] = useState("");

    let timeout;
    const onClickScreen = () => {
        if(state === "waiting") {
            setState("ready");
            setMessage("초록색이 되면 클릭하세요");
            let timeout = setTimeout(() => {
                setState("now");
                setMessage("지금 클릭!!↙️");
            }, Math.floor(Math.random() * 1000) + 2000);

        }else if(state === "ready"){
            clearTimeout(timeout);
            setState("waiting");
            setMessage("너무 성급하시군요!! 초록색이 된 후에 클릭하세요.");
        }else if(state === "now"){
            setResult("클릭했습니다.");
            setState("waiting");
            setMessage("클릭해서 시작하세요");
        }


    };

    const renderAverage=()=>{
        if (result.length === 0){
            setResult(null);
        }else{
            setResult(<div> 평균시간 : {result.reduce((a,c) =>  a + c) / result.length}ms</div>);
        }
    }


    return(
        <>
            <div id="screen" className={state} onClick={onClickScreen}>{message}</div>
            <div>{result}</div>
        </>
    )
}

export default ResponseCheck;