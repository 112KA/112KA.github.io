var $ = require("jquery");
var velocity = require('velocity-animate');

var xx = {
	inherits:function(sub, sup) {
		  sub.super_ = sup;
		  var F = function F () {};
		  F.prototype = sup.prototype;
		  sub.prototype = new F();
		  sub.prototype.constructor = sub;
		},
	internalLink:function() {
		$('a[href^="#"]').on("click", function () {
		    var speed = 600,
		        href = $(this).attr("href"),
		        target = $(href === "#" || href === "" ? 'html' : href),
		        position = target.offset().top;
		    velocity($("html, body"), {scrollTop: position}, speed, "swing");
		    return false;
		  });
	},
};
module.exports = xx;