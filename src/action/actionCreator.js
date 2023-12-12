import { DEL, TOGGLE } from "./actionConstent";

function delAction(id)
{
    return {type:DEL,payload:id}
}
function toggler()
{
    return {type:TOGGLE}
}
export  {delAction,toggler}