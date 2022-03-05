interface IAccount {
    name: string,
        balance: number,
        status ? : string,
        deposit ? : () => void
};

const account: IAccount = {
    name: "Louis",
    balance: 55
};

let accounts: IAccount[];