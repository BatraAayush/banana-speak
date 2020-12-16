var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var clear = document.querySelector("#clear-txt");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text="+ text
}

function clickHandler() {

        // var inputText = txtInput.value;
        fetch(getTranslationURL(txtInput.value))
        .then(response => response.json())
        .then(json => {
            // var translatedText = json.contents.translated;
            outputDiv.innerText = json.contents.translated;
        })  
    };

    function clearHandler(){
        txtInput.value = "";
        outputDiv.innerText = "";
    }

clear.addEventListener("click", clearHandler);
btnTranslate.addEventListener("click", clickHandler);
