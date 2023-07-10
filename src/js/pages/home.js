const Home = {
    async init() {
        await this._initialData();
    },
   
    async _initialData() {
        const fetchRecords = await fetch('/data/DATA.json');
        const responseRecords = await fetchRecords.json()
            .then((data) => console.log(data));
    },
        // this._userTransactionsHistory = responseRecords.results.transactionsHistory;
        // this._populateTransactionsRecordToTable(this._userTransactionsHistory);
        // this._populateTransactionsDataToCard(this._userTransactionsHistory);
   
    // _populateTransactionsDataToCard(transactionsHistory = null) {
    //     if (!(typeof transactionsHistory === 'object')) {
    //         throw new Error(
    //             `Parameter responseRecords should be an object.`,
    //         );
    //     }
   
    //     if (!Array.isArray(transactionsHistory)) {
    //         throw new Error('Parameter transactionsHistory should be an array.');
    //     }
   
    //     let amountIncome = 0;
    //     let amountExpense = 0;
   
    //     transactionsHistory.forEach((item) => {
    //         if (item.type === 'income') {
    //             amountIncome += item.amount;
    //         } else if (item.type === 'expense') {
    //             amountExpense += item.amount;
    //         }
    //     });
   
    //     document.querySelector('#numberOfTransactions').innerText =
    //         transactionsHistory.length;
    //     document.querySelector('#amountIncome').innerText = amountIncome;
    //     document.querySelector('#amountExpense').innerText = amountExpense;
    // },  
};
   
export default Home;