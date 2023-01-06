const initial = {
    requests:[]
}
export default function requestsInfo(state =initial, action){
    switch(action.type){
        case("get-requests"):
        return{
            ...state,
            requests:action.payload
        }

    default:
    return state;

    }
   
}