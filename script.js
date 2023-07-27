const btnS = document.getElementById("img-submit");

// INPUTS / ENTRADA

let daysIn = document.getElementById("days");
let monthsIn = document.getElementById("months");
let yearsIn = document.getElementById("years");

// OUTPUTS / SAÍDA

let daysOt = document.getElementById("days-ot");
let monthsOt = document.getElementById("months-ot");
let yearsOt = document.getElementById("years-ot");

// DATE CURRENT / DATA ATUAL

const date = new Date();
let day = date.getDate(); // CURRENT DAY 
let month = date.getMonth() + 1; // CURRENT MONTH +1 (BECAUSE STARTING 0)
let years = date.getFullYear(); // CURRENT YEAR

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // NUMBERS OF THE MONTHS


// FUNCTIONS / FUNÇÕES


// WELL SUMMARY: VALIDATE
/*
- VALID IF THE FIELD IS EMPTY
- VALID IF THE DAY OF THE MONTH EXCEEDS 28, 30 OR 31
- VALID IF THE NUMBER OF THE MONTH (IF IT GOES THROUGH 12)
- VALIDATE THE YEAR
*/

function validate() {
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "red";
            parent.querySelector("small").innerText = "This field is required";
            validator = false;
        } else if (monthsIn.value > 12) {
            monthsIn.style.borderColor = "red";
            monthsIn.parentElement.querySelector("small ").innerText = "Must be a valid";
            validator = false;
        } else if (daysIn.value > 31) {
            daysIn.style.borderColor = "red"
            daysIn.parentElement.querySelector("small ").innerText = "Must be a valid day";
            validator = false;
        } else if (yearsIn.value > years) {
            yearsIn.style.borderColor = "red"
            yearsIn.parentElement.querySelector("small").innerText = "Must be in the past";
            validator = false;
        } else {
            i.style.borderColor = "black";
            parent.querySelector("small ").innerText = "";
            validator = true;
        }
    });
    return validator;
}

function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
        if (daysIn.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (monthsIn.value > month) {
            month = month + 12;
            years = years - 1;
        }

        const d = day - daysIn.value;
        const m = month - monthsIn.value;
        const y = years - yearsIn.value;
        daysOt.innerHTML = d;
        monthsOt.innerHTML = m;
        yearsOt.innerHTML = y;
    }
}

btnS.addEventListener("click", handleSubmit);