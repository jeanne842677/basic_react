import React from "react";

function AddItem(props){
    return (
        <div className="addDiv">
            <div className="addTitle">{props.item}</div>
            <button className="Delbtn" onClick={()=> props.doDelDiv(props.index)}>삭제</button>
        </div>

    )
}

export default AddItem