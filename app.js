

    var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something Wrong With server try again after sometime");

}

function clickhandler() {

    // output.innerText="bota bota sulikha" + txtInput.value
    var inputText = txtInput.value; //input
    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText; //output


        })
};
btnTranslate.addEventListener("click", clickhandler)