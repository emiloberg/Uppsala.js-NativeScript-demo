var socialShare = require("nativescript-social-share");

var gestures = require('ui/gestures');
var frameModule = require('ui/frame');

var bindingContext;

function pageLoaded(args) {
	var page = args.object;
	bindingContext = page.navigationContext;
	page.bindingContext = bindingContext;
}

function share() {
	socialShare.shareText("Take a look at this awesome thing\n\n" + bindingContext.url);
}

exports.pageLoaded = pageLoaded;
exports.share = share;


exports.swipe = function(args) {
	if (args.direction === gestures.SwipeDirection.right) {
		frameModule.topmost().goBack();
	}
};