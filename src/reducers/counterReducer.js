const counterReducer = (state,action) =>{
    switch(action.type){
        case "increase" :
            return{
                count : state.count+1
            }
        case "decrease" :
            return {
                count : state.count-1
            }
        default :
            return state;
    }
}

export {counterReducer}