var socialShare = require("nativescript-social-share");

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