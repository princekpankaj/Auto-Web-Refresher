document.getElementById("startButton").addEventListener("click", () => {
    const time = parseInt(document.getElementById("timeInput").value);
    if (isNaN(time) || time <= 0) {
        alert("Please enter a valid time in seconds.");
        return;
    }
    chrome.runtime.sendMessage({ action: "start", interval: time }, (response) => {
        console.log(response.status);  // Optional: log the status of start action
    });
});

document.getElementById("stopButton").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "stop" }, (response) => {
        console.log(response.status);  // Optional: log the status of stop action
    });
});
