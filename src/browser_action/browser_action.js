chrome.tabs.executeScript({
    code: 'chrome.runtime.sendMessage({popupopen: true});'
});

var generate = function(code) {
    chrome.windows.getCurrent(w => {
      chrome.tabs.query({active: true, windowId: w.id}, tabs => {
        const url = tabs[0].url;
        fetch("https://us-central1-cacheem.cloudfunctions.net/cache", {
          method: 'POST',
          body: JSON.stringify({code, url}),
          headers:{
            'Content-Type': 'application/json'
        } })
      .then(res => {
        alert("Created!")
       })
      .catch(error => console.error('Error:', error));
        });
      });
};

var validate = function(code) {
    fetch(`https://us-central1-cacheem.cloudfunctions.net/cache?code=${code}`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
    } })
    .then(res => res.json())
    .then(res => {
      chrome.tabs.create({ url: res.value });
     })
    .catch(error => console.error('Error:', error));
};

var add = function(n) {
  document.getElementById('selection').innerText += n;
}

document.getElementById("generate").addEventListener("click", () => generate(document.getElementById('selection').innerText));
document.getElementById("validate").addEventListener("click", () => validate(document.getElementById('selection').innerText));

document.getElementById("il").addEventListener("click", () => add('B'));
document.getElementById("i").addEventListener("click", () => add('C'));
document.getElementById("sam").addEventListener("click", () => add('G'));
document.getElementById("sa").addEventListener("click", () => add('J'));
document.getElementById("o").addEventListener("click", () => add('L'));
document.getElementById("yuk").addEventListener("click", () => add('M'));
document.getElementById("chil").addEventListener("click", () => add('O'));
document.getElementById("pal").addEventListener("click", () => add('P'));
document.getElementById("gu").addEventListener("click", () => add('S'));
