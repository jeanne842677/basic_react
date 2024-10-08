//import './App.css';
import React, {useRef, useState} from "react";

function WordRelay (){
    const [beforeWord, setBeforeWord] = useState("끝말잇기");
    const inputValue = useRef("");
    const [inputWord, setInputWord] = useState("");
    const [result, setResult] = useState("끝말잇기 시이작!!!");
    const [wordArray, setWordArray] = useState([""]);

    const btnClick= ()=> {
        if (beforeWord.slice(-1) === inputWord.slice(0,1)) {
            setResult("딩동댕!!");
            setBeforeWord(inputWord);
            setInputWord("");
            wordArray.push(inputWord);
        } else {
            setResult("땡!!");
            setInputWord("");
        }
    }

    return(
        <>
            <div>{beforeWord}</div>
            <div>
                <input type="text" ref={inputValue} value={inputWord} onChange={(e)=>setInputWord(e.target.value)}/>
                <button onClick={btnClick}>입력</button>
            </div>
            <div>{result}</div>
            <div>{wordArray}</div>
        </>
    )
}

export default WordRelay;