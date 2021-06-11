// action creators are functions that dispatch actions
// we have 3 different action creators that will dispatch three different actions
import {ActionType} from "../action-types";
// import Dispatch type for setting return type
import {Dispatch} from 'redux';
import {IAction} from '../actions/index';
// Deposit Money Action Creator
export const depositMoney=(amount:number)=>{
    return (dispatch:Dispatch<IAction>)=>{
        dispatch({
            type:ActionType.DEPOSIT,
            payload:amount
        })
    }
}
// Withdraw Money Action Creator
export const withdrawMoney=(amount:number)=>{
    return (dispatch:Dispatch<IAction>)=>{
        dispatch({
            type:ActionType.WITHDRAW,
            payload:amount
        })
    }
}
// Bankrupt Money Action Creator
export const bankrupt=(amount:number)=>{
    return (dispatch:Dispatch<IAction>)=>{
        dispatch({
            type:ActionType.BANKRUPT,            
        })
    }
}