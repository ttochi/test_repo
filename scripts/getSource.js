function get_source(document_body){
    return window.location.href;
}

chrome.extension.sendMessage({
    action: "getSource",
    source: get_source(document.body)
});