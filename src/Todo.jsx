import './App.css';
import React, {useState} from "react";
//import AddItem from "./components/AddItem";


/* 1. 인풋창이 있고 버튼이 있다.
 * 2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가가 된다.
 * 3. 아이템 삭제버튼을 누르면 삭제가 가능하다.
 */

function Todo() {
    const [mkDiv, setMkDiv] = useState([]);
    const [inputVal, setInputVal] = useState("");

    const AddDiv = () => {

           setMkDiv([...mkDiv, inputVal])
            setInputVal("")
        console.log(mkDiv);

    }


    function AddItem(props){
        return (
            <div className="addDiv">
                <div className="addTitle">{props.item}</div>
                <button className="Delbtn" onClick={()=> doDelDiv(props.index)}>삭제</button>
            </div>
        )
    }

    function doDelDiv(index){
        console.log(index);
       const newMkDiv = [...mkDiv];
        newMkDiv.splice(index,1);
        setMkDiv(newMkDiv);

    }

    function AddBoard(props){
        return(
            <>
                {props.mkDiv.map((item,index) => <AddItem key={index} item={item}/>)}
            </>
        )
    }


    return (
        <div id="body1">
            <div id="section1">
                <input id="inputbox" type="text" value={inputVal} onChange={(e) => {setInputVal(e.target.value)}}></input>
                <button onClick={AddDiv} id="addbtn">추가</button>
            </div>
            <div id="section2">
                <div id="title">Todo List</div>
            </div>
            <div id="section3" >
                <AddBoard mkDiv={mkDiv}/>

            </div>
        </div>
    )
}



export default Todo;