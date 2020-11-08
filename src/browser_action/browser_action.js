chrome.tabs.executeScript({
    code: 'chrome.runtime.sendMessage({popupopen: true});'
});


var generate = function() {

};

var validate = function() {
    // var newUrl = "";
    fetch("https://us-central1-cacheem.cloudfunctions.net/cache", {
      method: 'GET',
      // body: JSON.stringify(textToSend),
      headers:{
        'Content-Type': 'application/json'
    } })
    .then(res => res.text())
    .then(res => {
    //   newUrl = res;
    //   console.log('test')
      chrome.tabs.create({ url: res });
      // $.each(res, function( index, value ) {
      //   value = unicodeToChar(value).replace(/\\n/g, '');
      //   document.body.innerHTML = document.body.innerHTML.split(value).join('<span style="background-color: #fff799;">' + value + '</span>');
      // });
     })
    .catch(error => console.error('Error:', error));
};

document.getElementById("generate").addEventListener("click", () => generate());
document.getElementById("validate").addEventListener("click", () => validate());