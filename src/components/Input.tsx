import React, {useRef} from "react";
import { UseAppStore } from "../store";


export const Input = () =>{
    const inputRef = useRef<HTMLInputElement>(null);
    const addPerson = UseAppStore(state=> state.addPerson)
    const add = () =>{
        if(inputRef && inputRef.current){
            addPerson(inputRef.current.value);
            inputRef.current.value = ""
        }
    }
    return(
        <div>
            <input className="inp" type="text" ref={inputRef} placeholder="persone name" />
                <button disabled = {!inputRef.current?.value ? false : true} onClick={add} className="btn btn-in">Add Person</button>
                {/* <button disabled = {inputRef.current?.value ===""} onClick={add}>Add Person</button> */}
        </div>
    )
}