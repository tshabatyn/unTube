// chrome.runtime.onInstalled.addListener(function() {
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//       chrome.declarativeContent.onPageChanged.addRules([{
//         conditions: [new chrome.declarativeContent.PageStateMatcher({
//           pageUrl: {hostEquals: 'youtube.com'},
//         })
//         ],
//             actions: [new chrome.declarativeContent.ShowPageAction()]
//       }]);
//     });
// });

// chrome.browserAction.onClicked.addListener(function(tab) {
//   console.log('Turning ' + tab.url + ' red!');
//   chrome.tabs.executeScript({
//         file: 'unTube.js'
//   });
// });



// chrome.runtime.onMessage.addListener(
//   function(message, callback) {
//     if (message == “runContentScript”){
//       chrome.tabs.executeScript({
//         file: 'unTube.js'
//       });
//     }
// });


// document.addEventListener("DOMContentLoaded", () => {
//  let recomendationsList = document.getElementById('items');
//  recomendationsList.outerHTML = "";
//  recomendationsList.outerHTML = "";
// })

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
});