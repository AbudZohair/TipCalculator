// TipCalculator Class
class TipCalculator {
    constructor(billAmount, serviceRating, numberOfPeople) {
        this.billAmount = billAmount;
        this.serviceRating = serviceRating;
        this.numberOfPeople = numberOfPeople;
    }
// Calculation ot the tip amoumt per each one
    calculate() {
        let tip = (this.billAmount / this.numberOfPeople) * this.serviceRating;
        return tip;
    }
}
// Event listener on submiting the form
document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
// Instantiat a TipCalculator
    const tipCalculator = new TipCalculator(
        document.getElementById('bill-Amount').value,
        document.getElementById('service').value,
        document.getElementById('people').value
    );
// Showing the tip on the UI
    document.querySelector('.result').innerHTML = `
                    <p class="font-weight-bold mb-2">Tip Amount</p>
                    <p class="amount font-weight-bold d-inline-block m-0 px-5 py-2">$ ${tipCalculator.calculate()}</p>
                    <p class="font-weight-bold">Each</p>`
});