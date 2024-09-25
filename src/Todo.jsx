import './App.css';
import React, {useState} from "react";

function Todo (){

    const [mkDiv, setMkDiv] = useState([]);

    const doDelDiv = (e) => {
        console.log(e.target.id);
        const IDval = e.target.id;
        var regex = /[^0-9]/g;
        const indexVal = IDval.replace(regex,"");
        console.log(indexVal);
        const newMkDiv = [...mkDiv];
        newMkDiv.splice(indexVal,1);
        setMkDiv(newMkDiv);
        console.log(mkDiv);
    }
    const Clickbtn = () => {
        setMkDiv([...mkDiv,
        <div id={`addDiv-${mkDiv.length}`} key={`addDiv-${mkDiv.length}`} className="addDiv" >
            <div id={`addTitle-${mkDiv.length}`} key={`addTitle-${mkDiv.length}`} className="addTitle">insert todo ${mkDiv.length}</div>
            <button id={`Delbtn-${mkDiv.length}`} key={`Delbtn-${mkDiv.length}`} className="Delbtn"
                onClick={doDelDiv}>삭제</button>
        </div>])
        console.log(setMkDiv);
        console.log(mkDiv);
        console.log(mkDiv.length);
    }


    return(
        <div id="body1">
            <div id="section1">
                <input id="inputbox" type="text"></input>
                <button onClick={Clickbtn} id="addbtn">추가</button>
            </div>
            <div id="section2">
                <div id="title">Todo List</div>
            </div>
            <div id="section3" >
                {mkDiv}
            </div>
        </div>
    )
}

export default Todo;