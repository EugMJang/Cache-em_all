// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.popupopen) {
      fetch("https://us-central1-cacheem.cloudfunctions.net/cache", {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json'
      } })
    .catch(error => console.error('Error:', error));
  }
});
