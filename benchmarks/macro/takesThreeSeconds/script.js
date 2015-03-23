parent.postMessage("test-start", "*");

var element = document.querySelector("div");
element.innerText = "Set from script";

setTimeout(function() {
    parent.postMessage("test-end", "*");
}, 3000);
