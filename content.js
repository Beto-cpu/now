console.log("content!");

chrome.runtime.onMessage.addListener(getMessage);

function getMessage(request, sender, sendResponse) {
    console.log(request.txt);
}