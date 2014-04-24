require("deepjs");
require("deep-node-webkit");

deep.globals.rootPath = __dirname;

var appSkeleton = {
	firstPage : deep.View({
		what:null,
		how:"<div>hello first page</div>",
		where:"dom.htmlOf::#content"
	})
};

module.exports = function(jQuery){
	deep.context.$ = jQuery;
    deep.jquery.init(jQuery);
	deep.route(appSkeleton).done(function (routes) {
		routes.init();
	});
	console.log("app started");
}