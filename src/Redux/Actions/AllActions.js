export default function UsersAccounts(data){
    return{
        type:"get-users",
        payload:data
    }
}
export function HosterAccounts(data){
    return{
        type:"get-hosters",
        payload:data
    }
}
export function RequstsData(data){
    return{
        type:"get-requests",
        payload:data
    }
}
export function SingleData(data){
    return{
        type:"single-user",
        payload:data
    }
}
export function RequestInfo(data){
    return{
        type:"requst-info",
        payload:data
    }
}
export function WishListData(data){
    return{
        type:"Wish-Data",
        payload: data
    }
}
export function changeGuests(data){
    return{
        type:"SET_GUESTS",
        data,
    }

}
export function changeGuests2(data){
    return{
        type:"SET_GUEST",
        data,
    }

}
export function CatgoryAction(data){
    return{
        type:"Set-Cat",
        payload:data
    }
}