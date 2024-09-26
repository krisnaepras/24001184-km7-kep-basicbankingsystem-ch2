import { BankAccount } from './bank_account.js';

const account = new BankAccount(27000);
const balanceDisplay = document.getElementById('balance');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const amountInput = document.getElementById('amount-input');
const cancelBtn = document.getElementById('cancel-btn');
const confirmBtn = document.getElementById('confirm-btn');

let currentAction = '';

function updateBalance() {
    balanceDisplay.textContent = `Rp${account.checkBalance()}`;
}

function showModal(action) {
    modalTitle.textContent =
        action === 'deposit'
            ? 'Masukkan nominal deposit'
            : 'Masukkan nominal withdraw';
    amountInput.value = '';
    currentAction = action;
    modal.classList.remove('hidden');
}

function hideModal() {
    modal.classList.add('hidden'); 
}

async function handleTransaction() {
    const amount = Number(amountInput.value);
    try {
        if (currentAction === 'deposit') {
            const result = await account.deposit(amount);
            alert(result);
        } else if (currentAction === 'withdraw') {
            const result = await account.withdraw(amount);
            alert(result);
        }
        updateBalance();
    } catch (error) {
        alert(error);
    }
    hideModal();
}

depositBtn.addEventListener('click', () => showModal('deposit'));
withdrawBtn.addEventListener('click', () => showModal('withdraw'));
cancelBtn.addEventListener('click', hideModal);
confirmBtn.addEventListener('click', handleTransaction);

document.addEventListener('DOMContentLoaded', updateBalance);
