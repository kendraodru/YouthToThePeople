import {RECEIVE_CART} from '../actions/cart_actions';

const cartReducer = (state={}, action) =>{
    Object.freeze(state)
    let nextState = Object.assign({},state)
    switch (action.type) {
        case RECEIVE_CART:
            return action.payload.cart;
        // case:
        default:
            return state;
    }
}

export default cartReducer;