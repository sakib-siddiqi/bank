// calculation
let dipoBtn = document.querySelector("#dipoBtn");
let diposite = document.querySelector("#dipo");
let dipoMoney = document.querySelector(".dipoMoney");
let withdrowBtn = document.querySelector("#withdrowBtn");
let withdrow = document.querySelector("#withdrow");
let withdrowMoney = document.querySelector(".withdrowMoney");
let balanceMoney = document.querySelector(".balanceMoney");
//clear fuild
 function clearFuild(fuild){
    fuild.forEach(function(e){e.value=""});
}
// diposite
dipoBtn.addEventListener("click", function () {
    let balance = parseFloat(balanceMoney.innerText);
    let newBalance = parseFloat(diposite.value);
    let oldBalance = parseFloat(dipoMoney.innerText);
    if (newBalance < 0 || diposite.value.length==0) {
        clearFuild([diposite])
        diposite.style.borderColor = '#FF4848';
    }
    else {
        let totalBalance = balance + newBalance;
        let totalDipo = newBalance + oldBalance;
        dipoMoney.innerText = totalDipo; 
        balanceMoney.innerText=totalBalance;
        diposite.style.borderColor = '#00ADB5';
        clearFuild([diposite])
    }
})
// withdrow
withdrowBtn.addEventListener("click", function () {
    let newBalance = parseFloat(withdrow.value);
    let oldBalance=parseFloat(withdrowMoney.innerText)
    let balance = parseFloat(balanceMoney.innerText);
    if (newBalance>0) {
        let totalwithdrow = oldBalance + newBalance;
        let totalBalance = balance - newBalance;
        withdrowMoney.innerText = totalwithdrow;
        balanceMoney.innerText = totalBalance;
        withdrow.style.borderColor = '#00ADB5';
        clearFuild([withdrow])
    }
    else {
        withdrow.style.borderColor = '#FF4848';
        clearFuild([withdrow])
    }

})