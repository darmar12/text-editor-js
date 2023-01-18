let selectFontFamily = document.getElementById("fontFamily");
let selectFontSizes = document.getElementById("fontSize");

let arrFontFamily = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];

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