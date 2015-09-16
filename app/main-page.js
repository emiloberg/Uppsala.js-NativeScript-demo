var Observable = require('data/observable');
var ObservableArray = require('data/observable-array');
var http = require("http");
var moment = require('moment');

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
            var out = item.data;
            out.friendlyTime = moment(item.data.created_utc * 1000).fromNow();
            bindingContext.myItems.push(out);
        });
    });
}

exports.pageLoaded = pageLoaded;
