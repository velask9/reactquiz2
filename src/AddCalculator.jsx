import React, {useState} from "react";

export const AddCalculator = () => {
    let[total, setTotal]= useState(0)
    const onHandleClick=(value)=>{
        setTotal(total+=value)
    }


    return (
        <>
            <button onClick={()=>onHandleClick(1)}>Add 1</button>
            <button onClick={()=>onHandleClick(2)}>Add 2</button>
            <button onClick={()=>onHandleClick(3)}>Add 3</button>
            <br></br>
            Total:{total}
        </>
    )
}