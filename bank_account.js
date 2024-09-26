export class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    if (amount <= 0 || isNaN(amount)) {
                        throw new Error('Nominal tidak valid');
                    }
                    this.balance += amount;
                    resolve(
                        `Deposit Rp${amount} sukses. Saldo anda saat ini Rp${this.balance}.`
                    );
                } catch (error) {
                    reject(error.message);
                }
            }, 1000);
        });
    }

    withdraw(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    if (amount <= 0 || isNaN(amount)) {
                        throw new Error('Nominal tidak valid');
                    }
                    if (amount > this.balance) {
                        throw new Error('Saldo tidak mencukupi');
                    }
                    this.balance -= amount;
                    resolve(
                        `Withdraw Rp${amount} sukses. Saldo anda saat ini Rp${this.balance}.`
                    );
                } catch (error) {
                    reject(error.message);
                }
            }, 1000);
        });
    }

    checkBalance() {
        return this.balance;
    }
}
