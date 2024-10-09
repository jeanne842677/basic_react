import React, {useRef, useState} from "react";

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

    const [chosenNum, setChosenNum] = useState(getNumbers());
    const [result, setResult] = useState("");
    const [inputValue, setInputValue] = useState("");
    const refValue = useRef(null);
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
            setChosenNum(getNumbers());
            alert("게임을 다시 시작합니다.");
            setTryArray([]);
        }else{
            setResult(strikeCnt + "스트라이크" + (4-strikeCnt) + "볼" );
            setTryArray([...tryArray, inputValue]);

            if (tryArray.length === 10){
                setChosenNum(getNumbers());
                alert("게임을 다시 시작합니다.");
                setTryArray([]);

            }
        }

    }


    return(
        <>
            <div>{chosenNum}</div>
            <div>{result}</div>
            <form onSubmit={onSubmitForm} >
                <input type="number" maxLength={4} value={inputValue} ref={refValue} onChange={(e)=>setInputValue(e.target.value)}/>
                <button>입력!</button>
            </form>
            <div>{tryArray.map((v,i)=> {return (<div key={v-i}>{v}</div>)})}</div>
        </>
    )
}

export default NumberBaseBall;