console.log("background");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    console.log("Button clicked!");
    var msg = {
        txt: "click"
    };
    chrome.tabs.sendMessage(tab.id, msg);
}