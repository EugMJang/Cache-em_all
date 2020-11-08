// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.popupopen) {
    console.log(sender.tab.url);
    fetch("https://us-central1-cacheem.cloudfunctions.net/cache", {
      method: 'GET',
      // body: JSON.stringify(textToSend),
      headers:{
        'Content-Type': 'application/json'
    } })
    .then(res => {
      console.log('test')
      // $.each(res, function( index, value ) {
      //   value = unicodeToChar(value).replace(/\\n/g, '');
      //   document.body.innerHTML = document.body.innerHTML.split(value).join('<span style="background-color: #fff799;">' + value + '</span>');
      // });
     })
    .catch(error => console.error('Error:', error));
  }
});
