let intervalId = null;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "start") {
        const interval = message.interval * 1000;
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(() => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: () => location.reload()
                });
            });
        }, interval);
        sendResponse({ status: "started" });
    } else if (message.action === "stop") {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        sendResponse({ status: "stopped" });
    }
});
