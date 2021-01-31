function generator() {
    const min = 1000;
    const max = 10000;
    const number = Math.random() * (max - min) + min;
    const output = (number + "").split(".")[0];
    return output;
};

function getGenerator() {
    document.getElementById("generated-pin").value = generator();
};

document.getElementById("pin-typer").addEventListener("click", function (event) {
    const digit = event.target.innerText;
    const input = document.getElementById("typed-pin");
    if (isNaN(digit)) {
        if (digit == "B") {
            const inputFilled = input.value.slice(0, -1);
            input.value = inputFilled
        } else if (digit == "C") {
            const inputFilled = "";
            input.value = inputFilled;
        }
    } else {
        const inputFilled = input.value + digit;
        input.value = inputFilled;
    }
});

document.getElementById("submit").addEventListener("click", function () {
    let code = document.getElementById("generated-pin").value;
    let input = document.getElementById("typed-pin").value;
    const times = document.getElementById("times");
    if (code == input) {
        display("block", "none");

    } else if (code != input) {
        display("none", "block");
        if(parseInt(times.innerText) == 0){
            document.getElementById("submit").disabled = true;
        }
        else{
        const timesNumber = parseInt(times.innerText);
        const newTimes = timesNumber - 1;
        times.innerText = newTimes;
    }}

});

function display(right, wrong) {
    const correct = document.getElementById("correct");
    correct.style.display = right;
    const incorrect = document.getElementById("incorrect");
    incorrect.style.display = wrong;
    document.getElementById("generated-pin").value = "";
    document.getElementById("typed-pin").value = "";
};