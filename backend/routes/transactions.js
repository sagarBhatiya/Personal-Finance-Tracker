import { Router } from 'express';
import { addExpense, getExpense, deleteExpense } from '../controllers/expense.js';
import { addIncome, getIncomes, deleteIncome } from '../controllers/income.js';

const router = Router();

router.post('/transaction/add-income', addIncome)
router.get('/transaction/get-incomes', getIncomes)
router.delete('/transaction/delete-income/:id', deleteIncome)
router.post('/transaction/add-expense', addExpense)
router.get('/transaction/get-expenses', getExpense)
router.delete('/transaction/delete-expense/:id', deleteExpense);

export default router;
