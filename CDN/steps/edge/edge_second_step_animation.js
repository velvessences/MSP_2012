(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes

// library properties:
	lib.properties = {
		width: 1646,
		height: 955,
		fps: 24,
		color: "#454545",
		manifest: []
	};



// symbols:



	(lib.edge1 = function() {
		this.spriteSheet = ss["edge_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.edge2 = function() {
		this.spriteSheet = ss["edge_atlas_"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.edge3 = function() {
		this.spriteSheet = ss["edge_atlas_"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.edge4 = function() {
		this.spriteSheet = ss["edge_atlas_"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.Pixi = function() {
		this.spriteSheet = ss["edge_atlas_"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.Zac = function() {
		this.spriteSheet = ss["edge_atlas_"];
		this.gotoAndStop(5);
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


	(lib.Анимация20 = function() {
		this.initialize();

		// Слой 1
		this.text = new cjs.Text("1", "20px 'Trebuchet MS'");
		this.text.textAlign = "center";
		this.text.lineHeight = 22;
		this.text.lineWidth = 20;
		this.text.setTransform(-2,-14.9);

		this.addChild(this.text);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-12,-14.9,24,29.8);


	(lib.Анимация18 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.edge4();
		this.instance.setTransform(-250,-177.2,1.266,1.266);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-250,-177.2,500,354.4);


	(lib.Анимация16 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.edge3();
		this.instance.setTransform(-107.5,-244);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-107.5,-244,215,488);


	(lib.Анимация14 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.edge2();
		this.instance.setTransform(-105.5,-157.5);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-105.5,-157.5,211,315);


	(lib.Анимация13 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.edge1();
		this.instance.setTransform(-262.5,-58);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-262.5,-58,525,116);


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


	(lib.Символ32 = function() {
		this.initialize();

		// Слой 1
		this.instance = new lib.Анимация20("synched",0);
		this.instance.setTransform(12,14.9);

		this.addChild(this.instance);
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(0,0,24,29.8);


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
	(lib.girl_boy_edgelast = function(mode,startPosition,loop) {
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

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).wait(818));

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

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).wait(818));

		// number4
		this.text = new cjs.Text("4", "20px 'Trebuchet MS'");
		this.text.textAlign = "center";
		this.text.lineHeight = 22;
		this.text.lineWidth = 18;
		this.text.setTransform(1068.7,430.9);
		this.text._off = true;

		this.timeline.addTween(cjs.Tween.get(this.text).wait(226).to({_off:false},0).wait(614));

		// circle4
		this.instance_10 = new lib.Символ35("synched",0);
		this.instance_10.setTransform(1071.5,443.5,1,1,0,0,0,7.5,7.5);
		this.instance_10.alpha = 0;
		this.instance_10._off = true;

		this.instance_11 = new lib.Символ36("synched",0);
		this.instance_11.setTransform(1070.5,443.5,1,1,0,0,0,7.5,7.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},217).to({state:[{t:this.instance_11}]},6).wait(617));
		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(217).to({_off:false},0).to({_off:true,x:1070.5,alpha:1},6).wait(617));

		// edge4
		this.instance_12 = new lib.Анимация18("synched",0);
		this.instance_12.setTransform(1320,1150);
		this.instance_12._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(200).to({_off:false},0).to({x:1315.4,y:620},13).wait(627));

		// number3
		this.text_1 = new cjs.Text("3", "20px 'Trebuchet MS'");
		this.text_1.textAlign = "center";
		this.text_1.lineHeight = 22;
		this.text_1.lineWidth = 19;
		this.text_1.setTransform(828.2,429.9);
		this.text_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.text_1).wait(173).to({_off:false},0).wait(667));

		// circle3
		this.instance_13 = new lib.Символ35("synched",0);
		this.instance_13.setTransform(827.5,442.5,1,1,0,0,0,7.5,7.5);
		this.instance_13.alpha = 0;
		this.instance_13._off = true;

		this.instance_14 = new lib.Символ36("synched",0);
		this.instance_14.setTransform(827.5,442.5,1,1,0,0,0,7.5,7.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},164).to({state:[{t:this.instance_14}]},6).wait(670));
		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(164).to({_off:false},0).to({_off:true,alpha:1},6).wait(670));

		// edge3
		this.instance_15 = new lib.Анимация16("synched",0);
		this.instance_15.setTransform(935,1222);
		this.instance_15._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(141).to({_off:false},0).to({y:685},14).wait(685));

		// number2
		this.text_2 = new cjs.Text("2", "20px 'Trebuchet MS'");
		this.text_2.textAlign = "center";
		this.text_2.lineHeight = 22;
		this.text_2.lineWidth = 11;
		this.text_2.setTransform(595.1,430.6);
		this.text_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.text_2).wait(124).to({_off:false},0).wait(716));

		// circle2
		this.instance_16 = new lib.Символ35("synched",0);
		this.instance_16.setTransform(594.5,442.5,1,1,0,0,0,7.5,7.5);
		this.instance_16.alpha = 0;
		this.instance_16._off = true;

		this.instance_17 = new lib.Символ36("synched",0);
		this.instance_17.setTransform(594.5,442.5,1,1,0,0,0,7.5,7.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},114).to({state:[{t:this.instance_17}]},6).wait(720));
		this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(114).to({_off:false},0).to({_off:true,alpha:1},6).wait(720));

		// edge2
		this.instance_18 = new lib.Анимация14("synched",0);
		this.instance_18.setTransform(700,1125);
		this.instance_18._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(91).to({_off:false},0).to({y:599},14).wait(735));

		// number1
		this.instance_19 = new lib.Символ32("synched",0);
		this.instance_19.setTransform(1040,219.8,1,1,0,0,0,12,14.9);
		this.instance_19._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(67).to({_off:false},0).wait(773));

		// circle1
		this.instance_20 = new lib.Символ35("synched",0);
		this.instance_20.setTransform(1037.5,217.5,1,1,0,0,0,7.5,7.5);
		this.instance_20.alpha = 0;
		this.instance_20._off = true;

		this.instance_21 = new lib.Символ36("synched",0);
		this.instance_21.setTransform(1037.5,217.5,1,1,0,0,0,7.5,7.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},57).to({state:[{t:this.instance_21}]},6).wait(777));
		this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(57).to({_off:false},0).to({_off:true,alpha:1},6).wait(777));

		// edge1
		this.instance_22 = new lib.Анимация13("synched",0);
		this.instance_22.setTransform(1300,-70);
		this.instance_22._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(35).to({_off:false},0).to({y:275},15).to({startPosition:0},68).wait(722));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;