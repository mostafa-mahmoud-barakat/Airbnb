const initial = {
    hosters:[]
}
export default function hosterAcc(state =initial, action){
    switch(action.type){
        case("get-hosters"):
        return{
            ...state,
            hosters:action.payload
        }

    default:
    return state;

    }
   
}