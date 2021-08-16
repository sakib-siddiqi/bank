// calculation
let dipoBtn = document.querySelector("#dipoBtn");
let diposite = document.querySelector("#dipo");
let dipoMoney = document.querySelector(".dipoMoney");
let withdrowBtn = document.querySelector("#withdrowBtn");
let withdrow = document.querySelector("#withdrow");
let withdrowMoney = document.querySelector(".withdrowMoney");
let balanceMoney = document.querySelector(".balanceMoney");
//clear fuild
function clearFuild(fuild) {
    fuild.forEach(function (e) { e.value = "" });
}
// calculation function
function calculateIT(balance, newAmount, oldAmount) {
    let balanceValue = parseFloat(balance.innerText);
    let newAmountValue = parseFloat(newAmount.value);
    let oldAmountValue = parseFloat(oldAmount.innerText);

    if (newAmountValue > 0 && balanceValue > 0) {
        if (newAmount == withdrow) {
            let totalBalance = balanceValue - newAmountValue;
            let total = newAmountValue + oldAmountValue;
            if (totalBalance < 0) {
                newAmount.style.borderColor = '#FF4848';
                clearFuild([newAmount]);
            } else {
                oldAmount.innerText = total;
                balance.innerText = totalBalance;
            }

        } else {
            let totalBalance = balanceValue + newAmountValue;
            let total = newAmountValue + oldAmountValue;
            oldAmount.innerText = total;
            balance.innerText = totalBalance;
        }
        newAmount.style.borderColor = '#00ADB5';
        clearFuild([newAmount]);
    }
    else if (newAmount.value.length == 0 || newAmountValue < 0) {
        newAmount.style.borderColor = '#FF4848';
        setTimeout(() => {
            newAmount.style.borderColor = '#00ADB5';
        }, 200);
        clearFuild([newAmount]);
    }
}
// diposite
dipoBtn.addEventListener("click", function () {
    calculateIT(balanceMoney, diposite, dipoMoney)
});
// withdrow
withdrowBtn.addEventListener("click", function () {
    calculateIT(balanceMoney, withdrow, withdrowMoney)
});