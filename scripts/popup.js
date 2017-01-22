var tabUrls = [];
var tabTitles = [];

$(function() {
    $('#open').siblings('button').click(function() {
        chrome.tabs.create({url: $('#open').val()});
    });

    $('#search').siblings('button').click(function() {
        getTabsUrl($('#search').val());
    });
});


function getTabsUrl(string) {
    if(!string) {
        $('#search').val('no url');
        return;
    }

    chrome.tabs.query({currentWindow: true}, function(tabList) {
        for(var i = 0; i < tabList.length; i++) {
            if(tabList[i].url.includes(string)) {
                chrome.tabs.highlight({'tabs': i});
                return;
            }
        }
    });

    $('#search').val('no url');
}