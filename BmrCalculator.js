function handleBmrCalculatorSubmit() {

    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    const sex = document.getElementById('sex').value;

    // Men	BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
    const maleBmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    // Women	BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
    const womanBmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;

    let bmr;

    if(sex === 'f') {
        bmr = womanBmr;
    } else {
        bmr = maleBmr;
    }

    document.getElementById('bmr').innerText = bmr;

}