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



    (lib.Pixi = function() {
        this.spriteSheet = ss["safari_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.safari1 = function() {
        this.spriteSheet = ss["safari_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.safari2 = function() {
        this.spriteSheet = ss["safari_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.safari3 = function() {
        this.spriteSheet = ss["safari_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.safari4 = function() {
        this.spriteSheet = ss["safari_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.Zac = function() {
        this.spriteSheet = ss["safari_atlas_"];
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


    (lib.Анимация6 = function() {
        this.initialize();

        // Слой 1
        this.instance = new lib.safari4();
        this.instance.setTransform(-287.5,-191.5);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-287.5,-191.5,575,383);


    (lib.Анимация5 = function() {
        this.initialize();

        // Слой 1
        this.instance = new lib.safari3();
        this.instance.setTransform(-288.5,-115.5);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-288.5,-115.5,577,231);


    (lib.Анимация4 = function() {
        this.initialize();

        // Слой 1
        this.instance = new lib.safari2();
        this.instance.setTransform(-287,-97.5);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-287,-97.5,574,195);


    (lib.Анимация1 = function() {
        this.initialize();

        // Слой 1
        this.instance = new lib.safari1();
        this.instance.setTransform(-204.5,-169);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-204.5,-169,409,338);


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
    (lib.girl_boy_safarilast = function(mode,startPosition,loop) {
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

        // number4
        this.text = new cjs.Text("4", "24px 'Trebuchet MS'");
        this.text.textAlign = "center";
        this.text.lineHeight = 26;
        this.text.lineWidth = 18;
        this.text.setTransform(1070,461.7);
        this.text._off = true;

        this.timeline.addTween(cjs.Tween.get(this.text).wait(178).to({_off:false},0).wait(422));

        // circle4
        this.instance_10 = new lib.Символ35("synched",0);
        this.instance_10.setTransform(1070.1,475.4,1,1,0,0,0,7.5,7.5);
        this.instance_10.alpha = 0;
        this.instance_10._off = true;

        this.instance_11 = new lib.Символ36("synched",0);
        this.instance_11.setTransform(1070.1,476.9,1,1,0,0,0,7.5,7.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},169).to({state:[{t:this.instance_11}]},6).wait(425));
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(169).to({_off:false},0).to({_off:true,y:476.9,alpha:1},6).wait(425));

        // s4
        this.instance_12 = new lib.Анимация6("synched",0);
        this.instance_12.setTransform(1948.5,1160.5);
        this.instance_12._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(158).to({_off:false},0).to({x:1358.5,y:665.8},7).wait(435));

        // number3
        this.text_1 = new cjs.Text("3", "24px 'Trebuchet MS'");
        this.text_1.textAlign = "center";
        this.text_1.lineHeight = 26;
        this.text_1.lineWidth = 13;
        this.text_1.setTransform(586.1,677);
        this.text_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.text_1).wait(136).to({_off:false},0).wait(464));

        // circle3
        this.instance_13 = new lib.Символ35("synched",0);
        this.instance_13.setTransform(584.7,691.3,1,1,0,0,0,7.5,7.5);
        this.instance_13.alpha = 0;
        this.instance_13._off = true;

        this.instance_14 = new lib.Символ36("synched",0);
        this.instance_14.setTransform(585.5,690.8,1,1,0,0,0,7.5,7.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},127).to({state:[{t:this.instance_14}]},6).wait(467));
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(127).to({_off:false},0).to({_off:true,x:585.5,y:690.8,alpha:1},6).wait(467));

        // s3
        this.instance_15 = new lib.Анимация5("synched",0);
        this.instance_15.setTransform(873.5,1084.3);
        this.instance_15._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(116).to({_off:false},0).to({y:806.9},7).wait(477));

        // number2
        this.text_2 = new cjs.Text("2", "24px 'Trebuchet MS'");
        this.text_2.textAlign = "center";
        this.text_2.lineHeight = 26;
        this.text_2.lineWidth = 15;
        this.text_2.setTransform(585.4,461.7);
        this.text_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.text_2).wait(100).to({_off:false},0).wait(500));

        // circle2
        this.instance_16 = new lib.Символ35("synched",0);
        this.instance_16.setTransform(585.5,477.5,1,1,0,0,0,7.5,7.5);
        this.instance_16.alpha = 0;
        this.instance_16._off = true;

        this.instance_17 = new lib.Символ36("synched",0);
        this.instance_17.setTransform(585.5,477.6,1,1,0,0,0,7.5,7.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},91).to({state:[{t:this.instance_17}]},6).wait(503));
        this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(91).to({_off:false},0).to({_off:true,y:477.6,alpha:1},6).wait(503));

        // s2
        this.instance_18 = new lib.Анимация4("synched",0);
        this.instance_18.setTransform(872,1066.1);
        this.instance_18._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(79).to({_off:false},0).to({y:573.9},7).wait(514));

        // number1
        this.text_3 = new cjs.Text("1", "24px 'Trebuchet MS'");
        this.text_3.textAlign = "center";
        this.text_3.lineHeight = 26;
        this.text_3.lineWidth = 18;
        this.text_3.setTransform(1063.8,97.7);
        this.text_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.text_3).wait(57).to({_off:false},0).wait(543));

        // circle1
        this.instance_19 = new lib.Символ35("synched",0);
        this.instance_19.setTransform(1064.5,112.5,1,1,0,0,0,7.5,7.5);
        this.instance_19.alpha = 0;
        this.instance_19._off = true;

        this.instance_20 = new lib.Символ36("synched",0);
        this.instance_20.setTransform(1064.5,112.5,1,1,0,0,0,7.5,7.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},47).to({state:[{t:this.instance_20}]},6).wait(547));
        this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(47).to({_off:false},0).to({_off:true,alpha:1},6).wait(547));

        // s1
        this.instance_21 = new lib.Анимация1("synched",0);
        this.instance_21.setTransform(1270,-214.8);
        this.instance_21._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(36).to({_off:false},0).to({y:281},6).wait(558));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;