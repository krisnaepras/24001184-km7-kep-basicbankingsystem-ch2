// Bisa Langsung dijalankan diterminal dengan => node banking_system_v_terminal.js

import { BankAccount } from './bank_account.js';
import readline from 'readline';

const balance = new BankAccount(27000);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function main() {
    console.log(`Saldo saat ini: Rp${balance.checkBalance()}`);
    rl.question(
        `Menu:
        1. Deposit
        2. Withdraw
        3. Exit
        Pilih menu [1/2/3] : `,
        async (menu) => {
            switch (menu) {
                case '1':
                    rl.question(
                        'Masukkan nominal deposit: Rp',
                        async (input) => {
                            let amount = Number(input);
                            try {
                                const result = await balance.deposit(amount);
                                console.log("\n"+result+"\n\n\n");
                            } catch (error) {
                                console.log(error);
                            }
                            main();
                        }
                    );
                    break;
                case '2':
                    rl.question(
                        'Masukkan nominal withdraw: Rp',
                        async (input) => {
                            let amount = Number(input);
                            try {
                                const result = await balance.withdraw(amount);
                                console.log("\n"+result+"\n\n\n");
                            } catch (error) {
                                console.log(error);
                            }
                            main();
                        }
                    );
                    break;
                case '3':
                    console.log('Terima kasih!');
                    rl.close();
                    break;
                default:
                    console.log('Pilih sesuai dengan menu yang tersedia!');
                    main();
                    break;
            }
        }
    );
}

main();
