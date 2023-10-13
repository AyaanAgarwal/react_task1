import  { useState } from "react";

function Wors(){
    const [val,setVal]=useState('')
    const [word,setWord]=useState(0)

    const handleChange =(e)=>{
        const data = e.target.value.split(' ')
        console.log(data)

        if(data.length<=50000000){
            setVal(e.target.value)
            setWord(data.length)
            if(e.target.value == ''){
                setWord(0)
            }
        }else{
        }
    }

    return(
        <div style={{textAlign: "center" , marginTop: "100px"}}>
            <h1>Enter Text Below</h1>
            <input style={{width: "370px" , padding: "5px", font: "20px"}} value={val} onChange={(e)=>handleChange(e)} />
            <h1>Words count: {word}</h1>
        </div>
    )
}
export default Wors;
