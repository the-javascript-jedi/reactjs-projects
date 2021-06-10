import {ActionType} from '../action-types/index';

//we specify interfaces for each of the actions
interface IDepositAction{
    type:ActionType.DEPOSIT,
    payload:number
}
interface IWithdrawAction{
    type:ActionType.WITHDRAW,
    payload:number
}
interface IBankruptAction{
    type:ActionType.BANKRUPT,    
}
// Action types for each of the actions
export type IAction=IDepositAction|IWithdrawAction|IBankruptAction