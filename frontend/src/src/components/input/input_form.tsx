import {useEffect, useState, useRef, useReducer} from "react";
import * as a from "../../type/alias"
import BUTTON_CLICK from "../button/button_click";
import INPUT_STR from "./input_str";
import {STR_TO_H, avarr_to_value, str_to_default_num} from "../../utility/convert";
import { use_objarr_t } from "../../use_reducer/act_objarr";
import "./index.css"
import act_arr from "../../use_reducer/act_arr";

export type input_form_t = {
    opt_name?:a.opt_name|undefined
    arr:use_objarr_t<a.attr_value<string|number>>
    except_arr?:string[]
    func_activate?:a.func_event
    is_undo?:boolean
}

export default function INPUT_FORM({
    opt_name = undefined,
    arr,
    except_arr = [],
    func_activate = (()=>undefined) as a.func_event,
    is_undo = false
}:input_form_t){
    const ref_DEFAULT_ARR = useRef(arr.ss)
    const [ss_texts, setss_texts] = useReducer(act_arr, avarr_to_value(arr.ss) as string[])
    const [ss_update, setss_update] = useState<0|1>(0)
    useEffect(()=>{
        const UPDATE_TEXT = avarr_to_value(arr.ss) as string[]
        setss_texts({type:"SET", input:UPDATE_TEXT})
        setss_update(0)
    }, [ss_update, arr])
    function func_set_default(){
        arr.setss({
            type:"SET",
            input:ref_DEFAULT_ARR.current
        })
        setss_texts({
            type:"SET", 
            input:avarr_to_value(ref_DEFAULT_ARR.current) as string[]
        })
    }
    function func_set_ok(){
        // https://www.geeksforgeeks.org/
        // how-to-resolve-usestate-set-method-is-not-reflecting-change-immediately/
        arr.ss.forEach((item, index)=>{
            if(typeof ref_DEFAULT_ARR.current[index] === "number" && typeof item.value === "number"){
                const CONST_INPUT = str_to_default_num(
                    ref_DEFAULT_ARR.current[index] as number,
                    ss_texts[index]
                )
                arr.setss({
                    type:"EDIT_ATTR",
                    index:index,
                    attr:"value",
                    input:CONST_INPUT
                })
            }
            else{
                arr.setss({
                    type:"EDIT_ATTR",
                    index:index,
                    attr:"value",
                    input:ss_texts[index]
                })
            }
        })
        setss_update(1)
        func_activate()
    }
    function func_set_cancel(){
        setss_texts({
            type:"SET", 
            input:avarr_to_value(arr.ss) as string[]
        })
    }
    const JSX_ELEMENTS = arr.ss.map((item,index)=>{
        // https://stackoverflow.com/questions/28329382/
        // understanding-unique-keys-for-array-children-in-react-js
        if(except_arr.includes((item.attr as string))){
            return <div key={index}></div>
        }
        return <div key={index}>
        <STR_TO_H opt_name={item.attr}/>
        <INPUT_STR
            opt_name={undefined}
            input={{ 
                ss: ss_texts, 
                setss: ((e:string) => {
                    setss_texts({
                        type:"EDIT",
                        index:index,
                        input:e
                    })
                }),
            } as unknown as a.use_state_t<string>}
            index = {index}
        />
        </div>
    })
    return <>
        <STR_TO_H opt_name={opt_name}/>
        {JSX_ELEMENTS}
        <BUTTON_CLICK
            name={"apply change" as a.attr}
            func_event={(()=>{func_set_ok()}) as a.func_event}
        />
        {is_undo ? <BUTTON_CLICK
            name={"cancel change" as a.attr}
            func_event={(()=>{func_set_cancel()}) as a.func_event}
        /> : <></>}
        <BUTTON_CLICK
            name={"reset all" as a.attr}
            func_event={(()=>{func_set_default()}) as a.func_event}
        />
    </>
}