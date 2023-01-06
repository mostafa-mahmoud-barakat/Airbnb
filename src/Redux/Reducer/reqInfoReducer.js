const initial = {
    details:{}
}
export default function requestDetails(state =initial, action){
    switch(action.type){
        case("requst-info"):
        return{
            ...state,
            details:action.payload
        }

    default:
    return state;

    }
   
}