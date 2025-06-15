(() => {
  const BASE_URL =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

  const dropdowns = document.querySelectorAll(".dropdown select");
  const fromCurr = document.querySelector(".from select");
  const toCurr = document.querySelector(".to select");
  const msg = document.querySelector(".msg");
  const btn = document.querySelector("form button");
  const amountInput = document.querySelector(".amount input");
  const swapBtn = document.querySelector(".dropdown i");

  // Populate dropdowns
  function populateDropdowns() {
    dropdowns.forEach((select) => {
      for (const code in countryList) {
        const newOption = document.createElement("option");
        newOption.innerHTML = code;
        newOption.value = code;
        if (select.name === "from" && code === "USD") {
          newOption.selected = true;
        } else if (select.name === "to" && code === "NPR") {
          newOption.selected = true;
        }
        select.append(newOption);
      }
      select.addEventListener("change", (e) => updateFlag(e.target));
    });
  }

  function updateFlag(element) {
    const code = element.value;
    const countryCode = countryList[code];
    const img = element.parentElement.querySelector("img");
    if (img && countryCode) {
      img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
      img.alt = `${code} flag`;
    }
  }

  function validateInput(value) {
    // Check if input is a valid positive number
    const num = parseFloat(value);
    return !isNaN(num) && num > 0;
  }

  function formatNumber(num, decimals = 2) {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(num);
  }

  async function updateExchangeRates() {
    let amtVal = amountInput.value.trim();

    // Enhanced input validation
    if (!amtVal || !validateInput(amtVal)) {
      amtVal = 1;
      amountInput.value = "1";
      showMessage("Please enter a valid positive number", "error");
      return;
    }

    const amount = parseFloat(amtVal);
    const fromCurrency = fromCurr.value;
    const toCurrency = toCurr.value;

    // Check if trying to convert same currency
    if (fromCurrency === toCurrency) {
      msg.innerText = `${formatNumber(amount)} ${fromCurrency} = ${formatNumber(amount)} ${toCurrency}`;
      return;
    }

    // Show loading state
    msg.innerText = "Getting exchange rate...";
    btn.disabled = true;
    btn.innerText = "Loading...";

    const URL = `${BASE_URL}/${fromCurrency.toLowerCase()}.json`;

    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      const rate = data[fromCurrency.toLowerCase()]?.[toCurrency.toLowerCase()];

      if (!rate) throw new Error("Exchange rate not available for this currency pair");

      const finalAmt = amount * rate;
      msg.innerText = `${formatNumber(amount)} ${fromCurrency} = ${formatNumber(finalAmt, 4)} ${toCurrency}`;
      msg.style.color = "#af4d98";

    } catch (error) {
      console.error("Exchange rate fetch error:", error);
      showMessage("Unable to fetch exchange rates. Please try again later.", "error");
    } finally {
      // Reset button state
      btn.disabled = false;
      btn.innerText = "Get Exchange Rate";
    }
  }

  function showMessage(message, type = "info") {
    msg.innerText = message;
    msg.style.color = type === "error" ? "#dc3545" : "#af4d98";
  }

  function swapCurrencies() {
    const fromValue = fromCurr.value;
    const toValue = toCurr.value;

    // Swap the select values
    fromCurr.value = toValue;
    toCurr.value = fromValue;

    // Update flags
    updateFlag(fromCurr);
    updateFlag(toCurr);

    // Update exchange rate
    updateExchangeRates();
  }

  // Event listeners
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    updateExchangeRates();
  });

  // Add swap functionality
  swapBtn.addEventListener("click", () => {
    swapCurrencies();
  });

  // Real-time conversion on input change
  amountInput.addEventListener("input", () => {
    if (validateInput(amountInput.value)) {
      clearTimeout(amountInput.timeout);
      amountInput.timeout = setTimeout(updateExchangeRates, 500);
    }
  });

  // Handle form submission with Enter key
  amountInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateExchangeRates();
    }
  });

  // Initialize on page load
  window.addEventListener("load", () => {
    populateDropdowns();
    updateExchangeRates();
  });
})();
