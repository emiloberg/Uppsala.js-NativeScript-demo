function pageLoaded(args) {
	var page = args.object;
	page.bindingContext = page.navigationContext;
}

exports.pageLoaded = pageLoaded;