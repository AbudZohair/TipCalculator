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
    
    	if (tipCalculator.billAmount <= 0 || tipCalculator.numberOfPeople <= 0) {
       alert("Fill a valid value of your bill and People number");
        e.currentTarget.reset();
            
        }else{
// Instantiat a TipCalculator
    const tipCalculator = new TipCalculator(
        document.getElementById('bill-Amount').value,
        document.getElementById('service').value,
        document.getElementById('people').value
    );
 //disable Calculate button
        document.getElementById('calculate').disabled = true;
            
// Showing the tip on the UI
    document.querySelector('.result').innerHTML = `
                    <p class="font-weight-bold mb-2">Tip Amount</p>
                    <p class="amount font-weight-bold d-inline-block m-0 px-5 py-2">$ ${tipCalculator.calculate()}</p>
                    <p class="font-weight-bold">Each</p>
<input type="button" value="Calculat Another tip" class="btn p-3 font-weight-bold text-white ml-3" id="reset">`
    
    // Rest the form of the calculator after submission
        e.currentTarget.reset();

        // reset the result section 
        document.querySelector("#reset").addEventListener("click", () => {
            document.querySelector(".result").innerHTML = "";
            document.getElementById('calculate').disabled = false;
        });
        }
});
