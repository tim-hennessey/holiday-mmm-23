var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var w = document.getElementById("banner").offsetWidth;
	var h = document.getElementById("banner").offsetHeight;
	var txt1 = document.getElementById("txt1");
	var txt2 = document.getElementById("txt2");
	var txt3 = document.getElementById("txt3");
	var cta = document.getElementById("cta");
	var t = TweenMax;
	var tl1 = new TimelineMax();
	var tl2 = new TimelineMax();
	var container1 = document.getElementById("container1");
	var container2 = document.getElementById("container2");
	var buttonExit = document.getElementById("button-exit");
	

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		t.set(container1, {perspective: 600});
		t.set(container2, {perspective: 600});
		t.set(cta, {transformOrigin: "80% 90%"});
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl2.to(txt1, .5, {opacity:1})
		.to(txt1, .5, {autoAlpha:0}, "+=1.5")

		.to(txt2, .5, {opacity:1})
		.to(txt2, .5, {autoAlpha:0}, "+=1.5")

		.to(txt3, .5, {opacity:1})
		.to(img, .5, {x:"+=300", ease:Sine.easeIn}, "-=.5");


		var total1 = Math.round(h*w/900);
		var total2 = 10;

		for (var i = 0; i < total1; i++) {
			var Div1 = document.createElement('div1');
			t.set(Div1, {
				attr: {class: 'dot'},
				x: R(-100, w+100),
				y:-100,
				z: R(-500, 200),
				transformStyle:"preserve-3d"
			});
			container1.appendChild(Div1); 
			anim(Div1);
		}

		for (var i = 0; i < total2; i++) {
			var Div2 = document.createElement('div2');
			t.set(Div2, {
				attr: {class: 'dot'},
				x: R(-100, w+100),
				y:-100,
				z: R(-500, 200),
				transformStyle:"preserve-3d"
			});
			container2.appendChild(Div2); 
			anim(Div2);
		}

        function anim(elm) {
            t.to(elm, R(4, 5), {y: h+100, ease: Linear.easeNone, repeat: -1, delay: -50});
            t.to(elm, R(2, 3), {x: R("+=25","+=50"), ease: Sine.easeInOut, yoyo:true, repeat: -1, delay: -50});
        } 

        function R(min, max) {
            return min + Math.random() * (max - min);
        }
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
