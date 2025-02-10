// script.js
function convertCurrency() {
  let fromCurrency = document.getElementById('currencyFrom').value;
  let toCurrency = document.getElementById('currencyTo').value;
  let amount = document.getElementById('amount').value;

  if (amount === "" || amount <= 0) {
    document.getElementById('result').innerText = "Please enter a valid amount.";
    return;
  }

  let apiUrl = `https://api.exchangerate.host/latest?base=${fromCurrency}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.rates && data.rates[toCurrency]) {
        let rate = data.rates[toCurrency];
        let convertedAmount = (amount * rate).toFixed(2);
        document.getElementById('result').innerText = `Converted Amount: ${convertedAmount} ${toCurrency}`;
      } else {
        document.getElementById('result').innerText = "Error: Unable to fetch exchange rate.";
      }
    })
    .catch(error => {
      console.error("Error fetching the exchange rate:", error);
      document.getElementById('result').innerText = "Error fetching exchange rate. Please try again.";
    });
}
