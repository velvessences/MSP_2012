(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

// library properties:
	lib.properties = {
		width: 1646,
		height: 955,
		fps: 24,
		color: "#666666",
		manifest: []
	};



// symbols:



	(lib.ie1 = function() {
		this.spriteSheet = ss["ie_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.ie2 = function() {
		this.spriteSheet = ss["ie_atlas_"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.ie3 = function() {
		this.spriteSheet = ss["ie_atlas_"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.Pixi = function() {
		this.spriteSheet = ss["ie_atlas_"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.Zac = function() {
		this.spriteSheet = ss["ie_atlas_"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.Символ10 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.Zac();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,220,500);


	(lib.Символ9копия = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.Zac();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,220,500);


	(lib.Символ8 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.Zac();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,220,500);


	(lib.Символ7 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.Zac();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,220,500);


	(lib.Символ5 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.Pixi();

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,186,499);


	(lib.Символ4 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.Pixi();
		this.instance.setTransform(0,0,0.995,1.002);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,185,500);


	(lib.Символ3 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.Pixi();
		this.instance.setTransform(0,0,0.995,1.002);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,185,500);


	(lib.Символ2 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.Pixi();
		this.instance.setTransform(0,0,0.995,1.002);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,185,500);


	(lib.Анимация22 = function() {
		this.initialize();

		// Слой 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#FFFFFF").ss(15,0,2).p("ABLAAQAAAfgXAWQgWAWgeAAQgeAAgVgWQgXgWAAgfQAAgeAXgWQAVgWAeAAQAeAAAWAWQAXAWAAAeg");

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("Ag0A1QgWgXABgeQgBgeAWgVQAXgXAdAAQAeAAAXAXQAVAVAAAeQAAAegVAXQgXAVgeAAQgdAAgXgVg");

		this.addChild(this.shape_1,this.shape);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


	(lib.Анимация10 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.ie3();
		this.instance.setTransform(-235,-179.1,0.894,0.894);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-235,-179.1,470,358.4);


	(lib.Анимация9 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.ie2();
		this.instance.setTransform(-250,-191.2,0.956,0.956);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-250,-191.2,500,382.4);


	(lib.Анимация8 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.ie1();
		this.instance.setTransform(-267,-62.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-267,-62.5,534,125);


	(lib.Символ36 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.Анимация22("synched",0);
		this.instance.setTransform(7.5,7.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-7.5,-7.5,30,30);


	(lib.Символ34 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.Анимация22("synched",0);
		this.instance.setTransform(7.5,7.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-7.5,-7.5,30,30);


	(lib.Символ13 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.Символ7();
		this.instance.setTransform(110,250,1,1,0,0,0,110,250);
		this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
		this.instance.cache(-2,-2,224,504);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,220,500);


	(lib.Символ12 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.Символ9копия();
		this.instance.setTransform(110,250,1,1,0,0,0,110,250);
		this.instance.filters = [new cjs.ColorFilter(0.89, 0.89, 0.89, 1, 28.05, 28.05, 28.05, 0)];
		this.instance.cache(-2,-2,224,504);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,220,500);


	(lib.Символ35 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.Символ34("synched",0);
		this.instance.setTransform(7.5,7.5,1,1,0,0,0,7.5,7.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-7.5,-7.5,30,30);


// stage content:
	(lib.girl_boy_ielast = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Слой 3
		this.instance = new lib.Символ13();
		this.instance.setTransform(270,430,1,1,0,0,0,110,250);

		this.instance_1 = new lib.Символ8();
		this.instance_1.setTransform(270,430,1,1,0,0,0,110,250);
		this.instance_1.alpha = 0.898;

		this.instance_2 = new lib.Символ12();
		this.instance_2.setTransform(270,430,1,1,0,0,0,110,250);
		this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
		this.instance_2.cache(-2,-2,224,504);

		this.instance_3 = new lib.Символ10();
		this.instance_3.setTransform(270,430,1,1,0,0,0,110,250);

		this.instance_4 = new lib.Zac();
		this.instance_4.setTransform(160,180);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).wait(578));

		// girl
		this.instance_5 = new lib.Символ2();
		this.instance_5.setTransform(492.5,430,1,1,0,0,0,92.5,250);
		this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
		this.instance_5.cache(-2,-2,189,504);

		this.instance_6 = new lib.Символ3();
		this.instance_6.setTransform(492.5,430,1,1,0,0,0,92.5,250);
		this.instance_6.alpha = 0.898;

		this.instance_7 = new lib.Символ4();
		this.instance_7.setTransform(492.5,430,1,1,0,0,0,92.5,250);
		this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
		this.instance_7.cache(-2,-2,189,504);

		this.instance_8 = new lib.Символ5();
		this.instance_8.setTransform(492.5,430,0.995,1.002,0,0,0,93,249.5);

		this.instance_9 = new lib.Pixi();
		this.instance_9.setTransform(400,180,0.995,1.002);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).wait(578));

		// number3
		this.text = new cjs.Text("3", "24px 'Trebuchet MS'");
		this.text.textAlign = "center";
		this.text.lineHeight = 26;
		this.text.lineWidth = 13;
		this.text.setTransform(1087.3,438.6);
		this.text._off = true;

		this.timeline.addTween(cjs.Tween.get(this.text).wait(154).to({_off:false},0).wait(446));

		// circle3
		this.instance_10 = new lib.Символ35("synched",0);
		this.instance_10.setTransform(1087.6,454.3,1,1,0,0,0,7.5,7.5);
		this.instance_10.alpha = 0;
		this.instance_10._off = true;

		this.instance_11 = new lib.Символ36("synched",0);
		this.instance_11.setTransform(1087.6,454.2,1,1,0,0,0,7.5,7.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},145).to({state:[{t:this.instance_11}]},6).wait(449));
		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(145).to({_off:false},0).to({_off:true,y:454.2,alpha:1},6).wait(449));

		// ie3
		this.instance_12 = new lib.Анимация10("synched",0);
		this.instance_12.setTransform(1890.2,635);
		this.instance_12._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(129).to({_off:false},0).to({x:1320},12).wait(459));

		// number2
		this.text_1 = new cjs.Text("2", "24px 'Trebuchet MS'");
		this.text_1.textAlign = "center";
		this.text_1.lineHeight = 26;
		this.text_1.lineWidth = 20;
		this.text_1.setTransform(587.7,438.6);
		this.text_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.text_1).wait(107).to({_off:false},0).wait(493));

		// circle2
		this.instance_13 = new lib.Символ35("synched",0);
		this.instance_13.setTransform(587.9,454,1,1,0,0,0,7.5,7.5);
		this.instance_13.alpha = 0;
		this.instance_13._off = true;

		this.instance_14 = new lib.Символ36("synched",0);
		this.instance_14.setTransform(587.6,454,1,1,0,0,0,7.5,7.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},97).to({state:[{t:this.instance_14}]},6).wait(497));
		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(97).to({_off:false},0).to({_off:true,x:587.6,alpha:1},6).wait(497));

		// ie2
		this.instance_15 = new lib.Анимация9("synched",0);
		this.instance_15.setTransform(820,1150.7,0.94,0.94);
		this.instance_15._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(81).to({_off:false},0).to({y:635},12).wait(507));

		// number1
		this.text_2 = new cjs.Text("1", "24px 'Trebuchet MS'");
		this.text_2.textAlign = "center";
		this.text_2.lineHeight = 26;
		this.text_2.lineWidth = 17;
		this.text_2.setTransform(1012.3,217.1);
		this.text_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.text_2).wait(60).to({_off:false},0).wait(540));

		// circle1
		this.instance_16 = new lib.Символ35("synched",0);
		this.instance_16.setTransform(1012.2,231,1,1,0,0,0,7.5,7.5);
		this.instance_16.alpha = 0;
		this.instance_16._off = true;

		this.instance_17 = new lib.Символ36("synched",0);
		this.instance_17.setTransform(1012.2,230.9,1,1,0,0,0,7.5,7.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},51).to({state:[{t:this.instance_17}]},6).wait(543));
		this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(51).to({_off:false},0).to({_off:true,y:230.9,alpha:1},6).wait(543));

		// ie1
		this.instance_18 = new lib.Анимация8("synched",0);
		this.instance_18.setTransform(1280,-78.2);
		this.instance_18._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(34).to({_off:false},0).to({y:292.1},12).wait(554));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;