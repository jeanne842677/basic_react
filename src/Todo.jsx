import './App.css';
import React, {useRef, useState} from "react";

const NewComponent = ({id,onDelete,onGetValue}) => {
    console.log(onGetValue);

    return <>
        <div className="addDiv">
            <div className="addTitle">{onGetValue}</div>
            <button className="Delbtn" onClick={()=>onDelete(id)}>삭제</button>
        </div>
    </>
};


function Todo() {
    const [mkDiv, setMkDiv] = useState([]);
    const [inputVal, setInputVal] = useState("");
    const inputToDo = useRef(null);

    const doDelDiv = (id) => {
        setMkDiv(mkDiv.filter((mkDiv)=> mkDiv.id !== id));

    }
    const Clickbtn = () => {
        const newComponentNum = {id: mkDiv.length+1};
        setMkDiv([...mkDiv, newComponentNum]);
        setInputVal("");
    }

    const getValue = () => {
        console.log(inputVal); // 현재 input 값 출력
    };


    return(
        <div id="body1">
            <div id="section1">
                <input id="inputbox" type="text" value={inputVal} ref={inputToDo} onChange={(e) => {setInputVal(e.target.value)}}></input>
                <button onClick={Clickbtn} id="addbtn">추가</button>
            </div>
            <div id="section2">
                <div id="title">Todo List!</div>
            </div>
            <div id="section3" >
                {mkDiv.map((mkDiv)=>(
                    <NewComponent key={mkDiv.id} id={mkDiv.id} onGetValue={getValue} onDelete={doDelDiv} ></NewComponent>
                ))}
            </div>
        </div>
    )
}



export default Todo;