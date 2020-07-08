const calculateBtn = document.querySelector(".calculateBtn");

const billTotalElement = document.querySelector(".billTotal");

const billStringField = document.querySelector(".billString");

const billTotalSpanElement = document.querySelector(".total");

// function totalPhoneBill(billString) {

//var billItems = billString.split(",");

// var billTotal = 0;

// for (var i=0;i<billItems.length;i++){
// var billItem = billItems[i].trim();

// if (billItem === "call"){
// billTotal += 2.75;
// }

// else if (billItem === "sms"){ 
// billTotal += 0.75;
// }

// }

// var roundedBillTotal = billTotal.toFixed(2);
// return roundedBillTotal;
// }

function styleTotalColor(roundedBillTotal) {

    // const currentTotal = Number(roundedBillTotal);
    // // alert(currentTotal)
    // billTotalSpanElement.classList.remove("danger");
    // billTotalSpanElement.classList.remove("warning");

    // if (currentTotal >= 30) {
    // // alert(currentTotal)
    // billTotalSpanElement.classList.add("danger");
    // }
    // else if (currentTotal >= 20 && currentTotal < 30) {
    // billTotalSpanElement.classList.add("warning");
    // }
}

function calculateBtnClicked() {

    var billString = billStringField.value;

    const roundedBillTotal = CalculateBill(billString);



    billTotalElement.innerHTML = roundedBillTotal.toFixed(2);

    // styleTotalColor(roundedBillTotal);
    const currentTotal = Number(roundedBillTotal);
    // alert(currentTotal)
    billTotalSpanElement.classList.remove("danger");
    billTotalSpanElement.classList.remove("warning");

    if (currentTotal >= 30) {
        // alert(currentTotal)
        billTotalSpanElement.classList.add("danger");
    }
    else if (currentTotal >= 20 && currentTotal < 30) {
        billTotalSpanElement.classList.add("warning");
    }


}


calculateBtn.addEventListener("click", calculateBtnClicked);