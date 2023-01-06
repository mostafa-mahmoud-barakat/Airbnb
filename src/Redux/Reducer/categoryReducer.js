const initial = {
    Cate:""
}
export default function CategoryRed(state =initial, action){
    switch(action.type){
        case("Set-Cat"):
        return{
            ...state,
            Cate:action.payload
        }

    default:
    return state;

    }
   
}