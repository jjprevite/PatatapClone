	

	var keyData = {
		q: {
			color: "orange",
			sound: new Howl({
  			src: ['sounds/bubbles.mp3']
			})
		},
		w: {
			color: "yellow",
			sound: new Howl({
  			src: ['sounds/clay.mp3']
			})
		},
		e: {
			color: "#67857c",
			sound: new Howl({
  			src: ['sounds/confetti.mp3']
			})
		},
		r: {
			color: "#e22705",
			sound: new Howl({
  			src: ['sounds/corona.mp3']
			})
		},
		t: {
			color: "#07ae90",
			sound: new Howl({
  			src: ['sounds/dotted-spiral.mp3']
			})
		},
		y: {
			color: "#9ae75c",
			sound: new Howl({
  			src: ['sounds/flash-1.mp3']
			})
		},
		u: {
			color: "#2ad2fb",
			sound: new Howl({
  			src: ['sounds/flash-2.mp3']
			})
		},
		i: {
			color: "#8ff5ea",
			sound: new Howl({
  			src: ['sounds/flash-3.mp3']
			})
		},
		o: {
			color: "#cb79c2",
			sound: new Howl({
  			src: ['sounds/glimmer.mp3']
			})
		},
		p: {
			color: "#b2424b",
			sound: new Howl({
  			src: ['sounds/moon.mp3']
			})
		},
		a: {
			color: "#049cb7",
			sound: new Howl({
  			src: ['sounds/pinwheel.mp3']
			})
		},
		s: {
			color: "#1ab4de",
			sound: new Howl({
  			src: ['sounds/piston-1.mp3']
			})
		},
		d: {
			color: "#cfc47a",
			sound: new Howl({
  			src: ['sounds/piston-2.mp3']
			})
		},
		f: {
			color: "#c5691f",
			sound: new Howl({
  			src: ['sounds/piston-3.mp3']
			})
		},
		g: {
			color: "#92481f",
			sound: new Howl({
  			src: ['sounds/prism-1.mp3']
			})
		},
		h: {
			color: "#816b11",
			sound: new Howl({
  			src: ['sounds/prism-2.mp3']
			})
		},
		j: {
			color: "#65e4ee",
			sound: new Howl({
  			src: ['sounds/prism-3.mp3']
			})
		},
		k: {
			color: "#d10ac6",
			sound: new Howl({
  			src: ['sounds/splits.mp3']
			})
		},
		l: {
			color: "#7a4e55",
			sound: new Howl({
  			src: ['sounds/squiggle.mp3']
			})
		},
		z: {
			color: "#feaeb8",
			sound: new Howl({
  			src: ['sounds/strike.mp3']
			})
		},
		x: {
			color: "#f23f53",
			sound: new Howl({
  			src: ['sounds/suspension.mp3']
			})
		},
		c: {
			color: "#27eca0",
			sound: new Howl({
  			src: ['sounds/timer.mp3']
			})
		},
		v: {
			color: "#3759e9",
			sound: new Howl({
  			src: ['sounds/wipe.mp3']
			})
		},
		b: {
			color: "#dec9b5",
			sound: new Howl({
  			src: ['sounds/ufo.mp3']
			})
		},
		n: {
			color: "#865aa8",
			sound: new Howl({
  			src: ['sounds/veil.mp3']
			})
		},
		m: {
			color: "#32f9f3",
			sound: new Howl({
  			src: ['sounds/zig-zag.mp3']
			})
		}
	}

	var circles = [];
	
	function onKeyDown(event) {
		if (keyData[event.key]){
			var maxPoint = new Point(view.size.width, view.size.height);
			var randomPoint = Point.random();
			var point = maxPoint * randomPoint;
			var newCircle = new Path.Circle(point, 500);
			newCircle.fillColor = keyData[event.key].color;
			keyData[event.key].sound.play();
			circles.push(newCircle);
		}
	}

	function onFrame(event){
  for(var i = 0; i < circles.length; i++){
    circles[i].scale(0.9);
    circles[i].fillColor.hue += 1;
    if(circles[i].area < 1){
      circles[i].remove();
      circles.splice(i, 1);
      console.log(circles);
		}
	}
}


	// backup

	

	// var sound1 = new Howl({
 //  src: ['sounds/bubbles.mp3']
	// });

	// var sound2 = new Howl({
 //  src: ['sounds/clay.mp3']
	// });

	

	// var circles = [];
	// function onKeyDown(event) {
		

	// 	var maxPoint = new Point(view.size.width, view.size.height);
	// 	var randomPoint = Point.random();
	// 	var point = maxPoint * randomPoint;
	// 	var newCircle = new Path.Circle(new Point(point), 500);
	// 	if(event.key === "a"){
	// 		sound1.play();
	// 		newCircle.fillColor = "#2c3e50";
	// 	} else if (event.key === "s"){
	// 		sound2.play();
	// 		newCircle.fillColor = "#16a085";
	// 	} else {
	// 		newCircle.fillColor = "purple";
	// 	}

	// 	circles.push(newCircle);
	// }

	// function onFrame(event){
	// 	for(var i = 0; i < circles.length; i++){
	// 	circles[i].fillColor.hue += 3;
	// 	circles[i].scale(.9);
	// 	}
	// }
	
