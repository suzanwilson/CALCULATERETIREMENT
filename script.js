function calculateRetirement() {
    const currentAge = parseInt(document.getElementById("current-age").value);
    const retirementAge = parseInt(document.getElementById("retirement-age").value);
    const currentSavings = parseFloat(document.getElementById("current-savings").value);
    const annualContribution = parseFloat(document.getElementById("annual-contribution").value);
    const expectedReturn = parseFloat(document.getElementById("return-rate").value) / 100;

    const yearsUntilRetirement = retirementAge - currentAge;
    let futureValue = currentSavings;

    for (let i = 0; i < yearsUntilRetirement; i++) {
        futureValue = futureValue * (1 + expectedReturn) + annualContribution;
    }

    document.getElementById("result").innerText = `You will have Rs${futureValue.toFixed(2)} at retirement.`;
}
