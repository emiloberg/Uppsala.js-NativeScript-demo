var Observable = require('data/observable');
var ObservableArray = require('data/observable-array');
var http = require("http");
var moment = require('moment');
var frameModule = require('ui/frame');

var bindingContext = new Observable.Observable({
    title: 'Nice title',
    myItems: new ObservableArray.ObservableArray([])
});

    function pageLoaded(args) {
        var page = args.object;
        page.bindingContext = bindingContext;

    loadReddit();
}


function loadReddit() {
    http.getJSON("https://www.reddit.com/.json")
    .then(function (r) {
        bindingContext.title = 'Reddit loaded';

        r.data.children.map(function(item) {
            item.data.friendlyTime = moment(item.data.created_utc * 1000).fromNow();
            bindingContext.myItems.push(item.data);
        });
    });
}

function itemTap(args) {
    var item = args.view.bindingContext;
    var topmost = frameModule.topmost();
    topmost.navigate({
        moduleName: 'details',
        context: item
    });
}

exports.pageLoaded = pageLoaded;
exports.itemTap = itemTap;