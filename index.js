let selectFontFamily = document.getElementById("fontFamily");
let selectFontSizes = document.getElementById("fontSize");
let arrBtnChanged = document.querySelectorAll(".editor__btn--change");
let arrBtnInput = document.querySelectorAll(".editor__input input");
let arrBtnOptions = document.querySelectorAll(".editor__btn");
let linkButton = document.getElementById("createLink");

let arrBtnChangedAll = [...arrBtnChanged, ...arrBtnInput];

let arrFontFamily = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];

arrBtnOptions.forEach(btn => {
    btn.addEventListener("click", function() {
        document.execCommand(btn.id, false, null);
        removeAllActive();
        btn.classList.toggle("active");
    });
});

linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL");
    if (!/https/i.test(userLink)) userLink = "https://" + userLink;
    modifyText(linkButton.id, false, userLink);
});

arrBtnChangedAll.forEach(btn => {
    btn.addEventListener("change", function() {
        document.execCommand(btn.id, false, btn.value);
    });
});

function removeAllActive() {
    arrBtnOptions.forEach(btn => {
        btn.classList.remove("active");
    });
}

(function init() {
    arrFontFamily.map(item => {
        let option = document.createElement("option");
        option.value = item;
        option.innerHTML = item;
        selectFontFamily.appendChild(option);
    });

    for(let i=1;i<=10;i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        selectFontSizes.appendChild(option);
    }

    selectFontSizes.value = 6;
})();