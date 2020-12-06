import { TXFR_FROM_CHECKING } from "../actionTypes"

const initialState = {
    balance: 129
};

export default function(state = initialState, action) {
    switch (action.type) {
        case TXFR_FROM_CHECKING: {
            return {
                ...state, //makes a copy of the initial state, equals - balance: 129
                balance: state.balance + action.payload.amount
            }
        }
        default:
            return state;
    }
}