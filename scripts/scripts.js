// $( function() {
// 	$('#tabs')
// 	    .tabs()
// 	    .addClass('ui-tabs-vertical ui-helper-clearfix');
// 			console.log("test");
// 	});

$(document).on('ready', function() {
	$('#tabs')
	    .tabs()
	    .addClass('ui-tabs-vertical ui-helper-clearfix');

	$('#work-slick').on('click', function(){
		dispatchEvent(new Event('resize'));
	});

	$(".fade").slick({
			dots: true,
			infinite: true,
			speed: 500,
			fade: true,
			accessibility: true,
			draggable: false,
			// appendDots: $('.post-fade'),
			// this adds a custom class to slick-dots
			dotsClass: 'customDots slick-dots',
			// appendArrows: $('.post-fade'),
			// focusOnSelect: true,
			cssEase: 'linear',
			prevArrow:"<img class='previous slick-prev' src='./images/prev.svg'>",
			nextArrow:"<img class='next slick-next' src='./images/next.svg'>",
		});

	// nav onclick
	$(".nav-list").click(function(e){
		var element = e.currentTarget;
		$('.nav-list').removeClass('active-nav');
		element.classList.add('active-nav');
	})

	});


// 	function CSSDone() {
//   alert('zOMG, CSS is done');
// }
//
//
// // load me some stylesheet
// var url = "http://tools.w3clubs.com/pagr/1.sleep-1.css",
//     head = document.getElementsByTagName('head')[0];
//     link = document.createElement('link');
//
// link.type = "text/css";
// link.rel = "stylesheet"
// link.href = url;
//
// // MAGIC
// // call CSSDone() when CSS arrives
//
//
//
// 	// MAGIC
//    // #1
//    link.onload = function () {
//      CSSDone('onload listener');
//    }
//    // #2
//    if (link.addEventListener) {
//      link.addEventListener('load', function() {
//        CSSDone("DOM's load event");
//      }, false);
//    }
//    // #3
//    link.onreadystatechange = function() {
//      var state = link.readyState;
//      if (state === 'loaded' || state === 'complete') {
//        link.onreadystatechange = null;
//        CSSDone("onreadystatechange");
//      }
//    };
//
//    // #4
//    var cssnum = document.styleSheets.length;
//    var ti = setInterval(function() {
//      if (document.styleSheets.length > cssnum) {
//        // needs more work when you load a bunch of CSS files quickly
//        // e.g. loop from cssnum to the new length, looking
//        // for the document.styleSheets[n].href === url
//        // ...
//
//        // FF changes the length prematurely :()
//        CSSDone('listening to styleSheets.length change');
//        clearInterval(ti);
//
//      }
//    }, 10);
//
//    // MAGIC ends
// head.appendChild(link);
