
export const ACTIONS = {
    ADD_TO_CART : 'ADD_TO_CART',
    REMOVE_FROM_CART : 'REMOVE_FROM_CART',
    DELETE_ALL : 'DELETE_ALL',
    SORT_BY_PRICE : 'SORT_BY_PRICE',
    FILTER_BY_SEARCH : 'FILTER_BY_SEARCH',
    CLEAR_FILTERS : 'CLEAR_FILTERS',
    VEGAN : 'VEGAN',
    DIET : 'DIET',
    DRINKS : 'DRINKS',
    BURGERS : 'BURGERS',
    ADD : 'ADD',
    INCREASE_QUANTITY : 'INCREASE_QUANTITY',
    REDUCE_QUANTITY : 'REDUCE_QUANTITY',
}

export const cartReducer = (state, action) => {
    switch(action.type){
        case ACTIONS.ADD_TO_CART : 
            return {
                ...state, cart :[...state.cart , {...action.payload, qty :1 }]
            }
        case ACTIONS.REMOVE_FROM_CART : 
            return {
                ...state,
                cart: state.cart.filter((e) => e.id !== action.payload.id)
            }
        case ACTIONS.DELETE_ALL :
            return {
                ...state, cart : []
            }
        case ACTIONS.ADD :
            return {
                ...state,
                products : [...state.products , action.payload ] 
            }
        case ACTIONS.INCREASE_QUANTITY :
            const item = state.cart.slice()
            item[action.payload.index].qty = action.payload.itemqty +  1 ;
            return {
                ...state,
                cart : item
            }
        case ACTIONS.REDUCE_QUANTITY : 
            const item2 = state.cart.slice()
            item2[action.payload.index].qty  =  action.payload.itemqty - 1 ;
            return {
                ...state,
                cart : item2
            }
        default :
            return state
    }
}

export const productReducer = (state, action) => {
    switch(action.type){
        case ACTIONS.SORT_BY_PRICE :
            return {... state, sort: action.payload}
        case ACTIONS.FILTER_BY_SEARCH :
            return {...state, searchQuery : action.payload}
        case ACTIONS.VEGAN : 
            return { ...state, vegan: !state.vegan }
        case ACTIONS.DIET :
            return {...state, diet: !state.diet}
        case ACTIONS.DRINKS :
            return {...state, drinks : !state.drinks}
        case ACTIONS.BURGERS :
            return {...state, burgers : !state.burgers}
        case ACTIONS.CLEAR_FILTERS :
            return {
                searchQuery : "",
                vegan : false,
                diet : false,      
            } 
        default:
            return { state }
    }
}