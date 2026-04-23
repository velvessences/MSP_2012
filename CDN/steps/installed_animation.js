(function (lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes

// library properties:
    lib.properties = {
        width: 1646,
        height: 955,
        fps: 24,
        color: "#FFFFFF",
        manifest: []
    };



// symbols:



    (lib.Pixi = function() {
        this.spriteSheet = ss["installed_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Zac = function() {
        this.spriteSheet = ss["installed_atlas_"];
        this.gotoAndStop(1);
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


// stage content:
    (lib.Безымянный1 = function(mode,startPosition,loop) {
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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).wait(67));

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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},14).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).wait(61));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;