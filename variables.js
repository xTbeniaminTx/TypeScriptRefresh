;
var account = {
    name: "Louis",
    balance: 55
};
var accounts;
var InvestmentsAccount = /** @class */ (function () {
    function InvestmentsAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentsAccount.prototype.withdraw = function () { };
    return InvestmentsAccount;
}());
