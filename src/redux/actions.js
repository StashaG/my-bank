import { TXFR_FROM_CHECKING, DO_BILL_PAY, TXFR_FROM_SAVINGS } from "./actionTypes"

export const txfrFromChecking = amount => {
    //code here that calculates the new balance
    const balance = 100 + amount;
    return {
        type: TXFR_FROM_CHECKING,
        payload: {
            amount,
            transaction: {
                amount,
                date: Date.now(),
                destination: 'savings',
                source: 'checking'
            }
        }
    }
}

export const doBillPay = (amount, vendor) => {
    console.log('pota', amount, vendor);
    return {
        type: DO_BILL_PAY,
        payload: {
            amount,
            date: Date.now(),
            destination: vendor,
            source: 'checking'
        
        }
    }
};