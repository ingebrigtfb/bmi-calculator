var vekt, høyde, mål, bmi, feilmelding ;

function kalkuler() {
    vekt = document.getElementById("vekt").value;
    høyde = document.getElementById("høyde").value;
    feilmelding = "Legg inn verdier";
    høyde /= 100;
    høyde *= høyde;
    bmi = vekt/høyde;
    bmi = bmi.toFixed(1);

    if (bmi <= 18.4) {
        mål = "Din BMI er " + bmi + " som betyr at " + "du er undervektig";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        mål = "Din BMI er " + bmi + " som betyr at " + "du er normalvektig";
    } else if (bmi >= 25 && bmi <= 29.9) {
        mål = "Din BMI er " + bmi + " som betyr at " + "du er overvektig";
    } else if (bmi >= 30) {
        mål = "Din BMI er " + bmi + " som betyr at " + "du har fedme"; 
    }

    if (vekt === 0 ) {
        document.getElementById("results").innerHTML = feilmelding;
    } else if (høyde === 0) {
        document.getElementById("results").innerHTML = feilmelding;
    }

    else {
        document.getElementById("results").innerHTML = mål;
    }

    if (vekt < 0) {
        document.getElementById("results").innerHTML = "Negative verdier er ikke tilatt!";
    }
}