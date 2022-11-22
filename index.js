const initialPrice = document.querySelector("#initial-price");
const numberOfStocks = document.querySelector("#number-of-stocks");
const currentPrice = document.querySelector("#current-price");
const btnCalculate = document.querySelector("#btn-calculate");
const body = document.querySelector("#body");

function validateInput() {
  if (
    initialPrice.value === "" ||
    numberOfStocks.value === "" ||
    currentPrice.value === ""
  ) {
    output.innerText = "Please enter valid number";
    return false;
  }

  if (initialPrice.value < 0 || currentPrice.value < 0) {
    output.innerText = "The value cannot be negative ";
    return false;
  }
  if (numberOfStocks.value <= 0) {
    output.innerText = "The number Of Stocks cannot be zero or negative  ";
    return false;
  }
  return true;
}

function calculateHandler() {
  if (!validateInput()) {
    return;
  }
  const totalInvestment = initialPrice.value * numberOfStocks.value;
  const currentInvestment = currentPrice.value * numberOfStocks.value;

  if (totalInvestment > currentInvestment) {
    var loss = totalInvestment - currentInvestment;
    var lossPercentage = (loss / totalInvestment) * 100;
    output.innerText = `The loss is of Rs. ${loss.toFixed(2)} and the loss percentage is ${lossPercentage.toFixed(2)}% `;

  } else if (totalInvestment < currentInvestment) {
    var profit = totalInvestment + currentInvestment;
    var profitPercentage = (profit / totalInvestment) * 100;
    output.innerText=`The profit is of Rs. ${profit.toFixed( 2 )} and the profit percentage is ${profitPercentage.toFixed(2)}% ` ;
  } else {
    output.innerText =`Both Profit and loss are equal.`
  }
}

btnCalculate.addEventListener("click", calculateHandler);
