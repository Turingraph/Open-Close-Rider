import * as a from "../../type/alias"

export type button_click_t = {
    name?:a.name,
    func_event:a.func_event
}

export default function Button_click(
{
    name = "button" as a.name,
    func_event,
}:button_click_t
){
    return (<>
        <button onClick={func_event} >
            {name}
        </button>
    </>);
}
