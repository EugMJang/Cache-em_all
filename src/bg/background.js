// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.popupopen) {
    console.log(sender.tab.url);
  }
});
