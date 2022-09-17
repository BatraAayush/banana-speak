var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var clear = document.querySelector("#clear-txt");
var errorMsg = document.querySelector("#error-msg")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text="+ text
}

function clickHandler() {
        errorMsg.innerText = "";
        // var inputText = txtInput.value;
        if(txtInput.value === '') {
            errorMsg.innerText = "Please fill Input!!!";
        } else {
            fetch(getTranslationURL(txtInput.value))
            .then(response => response.json())
            .then(json => {
                // var translatedText = json.contents.translated;
                if(json.contents.translated === undefined) {
                    error.innerHTML = "ERROR! No output returned from API. May be no of api calls exceded. Please try again after an hour.";
                } else {
                    outputDiv.innerText = json.contents.translated;                    
                }
            })  
        }

    };

    function clearHandler(){
        txtInput.value = "";
        outputDiv.innerText = "";
    }

clear.addEventListener("click", clearHandler);
btnTranslate.addEventListener("click", clickHandler);

