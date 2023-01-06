const initial = {
    users:[]
}
export default function usersAcc(state =initial, action){
    switch(action.type){
        case("get-users"):
        return{
            ...state,
            users:action.payload
        }

    default:
    return state;

    }
   
}