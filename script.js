// script.js
function convertCurrency() {
  let fromCurrency = document.getElementById('currencyFrom').value;
  let toCurrency = document.getElementById('currencyTo').value;
  let amount = document.getElementById('amount').value;

  // API URL to fetch exchange rates
  let apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let rate = data.rates[toCurrency];
      let convertedAmount = (amount * rate).toFixed(2);
      document.getElementById('result').innerText = `Converted Amount: ${convertedAmount} ${toCurrency}`;
    })
    .catch(error => console.error("Error fetching the exchange rate:", error));
}
