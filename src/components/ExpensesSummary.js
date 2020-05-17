import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expense-total';
import { Link } from 'react-router-dom';

export const ExpensesSummary = ({ expenseCount, expensesTotal} ) =>{
    const expenseWord = (expenseCount === 1 ? 'expense': 'expenses');
    const formattedExpensesTotal = numeral(expensesTotal/100).format('0,0.00');
    return (
        <div className = "page-header">
            <div className = "content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                <div className="page-header__actions">
                    <Link className = "button" to="/create">Add Expense</Link>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpenseTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary)