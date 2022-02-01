import React, {useRef, useState} from "react";
import { UseAppStore } from "../store";


export const Input = () =>{
    const [inputPerson, setInput] = useState("");
    const handleInChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value);
    } 
    const inputRef = useRef<HTMLInputElement>(null);
    const addPerson = UseAppStore(state=> state.addPerson)
    const add = () =>{
        if(inputRef && inputRef.current){
            addPerson(inputRef.current.value);
            inputRef.current.value = "";
            setInput("");
        }
    }
    return(
        <div>
            <input className="inp" type="text" name="inputPerson" onChange={handleInChange} ref={inputRef} placeholder="person name" />
                <button disabled = {!inputPerson} onClick={add} className="btn btn-in">Add Person</button>
                {/* <button disabled = {inputRef.current?.value ===""} onClick={add}>Add Person</button> */}
        </div>
    )
}