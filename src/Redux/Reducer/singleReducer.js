const initial = {
    info:{}
}
export default function singleInfo(state =initial, action){
    switch(action.type){
        case("single-user"):
        return{
            ...state,
            info:action.payload
        }

    default:
    return state;

    }
   
}