chrome.storage.sync.get(['asvberiabd'], function(result) {
    if(result.asvberiabd === "start"){
        document.getElementById("toggle-btn").innerHTML = "ON";
    }
    else if(result.asvberiabd !== 'stop' && result.asvberiabd !== 'start'){
        chrome.storage.sync.set({"asvberiabd": "stop"}, function() {
            document.getElementById("toggle-btn").innerHTML = "OFF";
        });
    }
});

document.getElementById("toggle-btn").addEventListener("click", function() {
    chrome.storage.sync.get(['asvberiabd'], function(result) {
        var $toggleBtn = document.getElementById("toggle-btn");

        if(result.asvberiabd==="start"){
            chrome.storage.sync.set({"asvberiabd": "stop"}, function() {
            });
            $toggleBtn.innerHTML = "OFF";
        }
        if(result.asvberiabd==="stop"){
            chrome.storage.sync.set({"asvberiabd": "start"}, function() {
            });
            $toggleBtn.innerHTML = "ON";
        }
    });
});