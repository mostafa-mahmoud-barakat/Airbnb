const initial = {
    wishArr:[]
}
export default function wishData(state =initial, action){
    switch(action.type){
        case("Wish-Data"):
        return{
            ...state,
            wishArr:action.payload
        }

    default:
    return state;

    }
   
}