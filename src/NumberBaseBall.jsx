import React, {useState} from "react";

const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
};

function NumberBaseBall () {


    const [result, setResult] = useState("");
    const [inputValue, setInputValue] = useState("")
    const [chosenNum, setChosenNum] = useState(getNumbers);
    const [tryArray, setTryArray] = useState([]);

    const onSubmitForm = (e) =>{
        e.preventDefault();
        var strikeCnt = 0
        for(let i=0; i<chosenNum.length; i+=1){
            if(chosenNum[i] === parseInt(inputValue.substr(i,1))){
                strikeCnt += 1;
            }
        }
        if(strikeCnt === 4){
            setResult("홈런!!!!⚾️⚾️⚾️⚾️");
            alert("게임을 다시 시작합니다.");
            setChosenNum(getNumbers());
            setTryArray([]);
            setInputValue("");

        }else{
            setResult(strikeCnt + "스트라이크" + (4-strikeCnt) + "볼" );
            setTryArray([...tryArray, {try: tryArray.length+1, tryValue: inputValue, result: strikeCnt + "스트라이크" + (4-strikeCnt) + "볼"}]);
            setInputValue("");

            if (tryArray.length === 10){
                setResult("10번 넘게 틀려서 실패! 답은 " + chosenNum.join(',') + "이었습니다");
                alert("게임을 다시 시작합니다.");
                setChosenNum(getNumbers());
                setTryArray([]);
                setInputValue("");

            }
        }

    }


    return(
        <>
            <div>{chosenNum}</div>
            <div>{result}</div>
            <form onSubmit={onSubmitForm} >
                <input type="number" maxLength={4} value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
                <button>입력!</button>
            </form>
            <div>시도: {tryArray.length}</div>
            <div>{tryArray.map((v)=> {
                return (
                    <>
                        <div>{v.tryValue}</div>
                        <div>{v.result}</div>
                    </>
                )
            })}</div>
        </>
    )
}

export default NumberBaseBall;