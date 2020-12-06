import { TXFR_FROM_CHECKING, TXFR_FROM_SAVINGS } from "./actionTypes"

export const txfrFromChecking = amount => {
    //code here that calculates the new balance
    const balance = 100 + amount;
    return {
        type: TXFR_FROM_CHECKING,
        payload: {
            amount
        }
    }
}