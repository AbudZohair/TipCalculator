//Tip calculator Form Selection
const tipCalculatorForm = document.getElementById("form");
// Input Field Selection
const billAmount = document.getElementById("bill-Amount");
const serviceRating = document.getElementById("service");
const numberOfPeople = document.getElementById("people");

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

// Reset Button
document.getElementById("reset-button").addEventListener("click", () => {
	tipCalculatorForm.reset();
});

// Event listener on submiting the form
tipCalculatorForm.addEventListener("submit", e => {
	e.preventDefault();

	// Instantiat a TipCalculator
	const tipCalculator = new TipCalculator(billAmount.value, serviceRating.value, numberOfPeople.value);

	if (tipCalculator.billAmount == "") {
		alert("Enter your bill Abmount");
		billAmount.focus();
	} else if (tipCalculator.numberOfPeople == "") {
		alert("Enter the number of people");
		numberOfPeople.focus();
	} else if (tipCalculator.billAmount <= 0 || tipCalculator.numberOfPeople <= 0 || isNaN(parseFloat(tipCalculator.billAmount)) || isNaN(parseFloat(tipCalculator.numberOfPeople))) {
		alert("Fill a valid positive number value of your bill and People number");
	} else {
		//disable Calculate button
		document.getElementById("calculate").disabled = true;
		//disable Reset button
		document.getElementById("reset-button").disabled = true;
		// Showing the tip on the UI
		document.querySelector(".result").innerHTML = `<p class="font-weight-bold mb-2">Tip Amount</p>
			<p class="amount font-weight-bold d-inline-block m-0 px-5 py-2">$ ${tipCalculator.calculate()}</p>
			<p class="font-weight-bold">Each</p>
			<input type="button" value="Calculat Another tip" class="btn p-3 font-weight-bold text-white ml-3" id="calc-again">`;

		// Rest the form of the calculator after submission
		e.currentTarget.reset();
		// calculate A New bill
		document.querySelector("#calc-again").addEventListener("click", () => {
			document.querySelector(".result").innerHTML = "";
			document.getElementById("calculate").disabled = false;
			document.getElementById("reset-button").disabled = false;
		});
	}
});
