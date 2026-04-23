(function (lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtFilters = {};

// library properties:
    lib.properties = {
        width: 1646,
        height: 955,
        fps: 24,
        color: "#666666",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            {src:"media/shit_test_atlas_.png", id:"shit_test_atlas_"}
        ]
    };



    lib.ssMetadata = [
        {name:"shit_test_atlas_", frames: [[222,0,186,499],[0,0,220,500]]}
    ];


    lib.webfontAvailable = function(family) {
        lib.properties.webfonts[family] = true;
        var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
        for(var f = 0; f < txtFilters.length; ++f) {
            txtFilters[f].updateCache();
        }
    };
// symbols:



    (lib.Pixi = function() {
        this.spriteSheet = ss["shit_test_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Zac = function() {
        this.spriteSheet = ss["shit_test_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Символ14 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.instance = new lib.Zac();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,220,500);


    (lib.Символ10 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.instance = new lib.Zac();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,220,500);


    (lib.Символ9копия = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.instance = new lib.Zac();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,220,500);


    (lib.Символ8 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.instance = new lib.Zac();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,220,500);


    (lib.Символ5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.instance = new lib.Pixi();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,186,499);


    (lib.Символ4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.instance = new lib.Pixi();
        this.instance.setTransform(0,0,0.995,1.002);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,185,500);


    (lib.Символ3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.instance = new lib.Pixi();
        this.instance.setTransform(0,0,0.995,1.002);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,185,500);


    (lib.Символ2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.instance = new lib.Pixi();
        this.instance.setTransform(0,0,0.995,1.002);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,185,500);


    (lib.Символ12 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.instance = new lib.Символ9копия();
        this.instance.setTransform(110,250,1,1,0,0,0,110,250);
        this.instance.filters = [new cjs.ColorFilter(0.89, 0.89, 0.89, 1, 28.05, 28.05, 28.05, 0)];
        this.instance.cache(-2,-2,224,504);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,220,500);


// stage content:
    (lib.girl_boy_new = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 3
        this.instance = new lib.Символ14();
        this.instance.setTransform(1120,440,1,1,0,0,0,110,250);
        this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
        this.instance.cache(-2,-2,224,504);

        this.instance_1 = new lib.Символ8();
        this.instance_1.setTransform(1120,440,1,1,0,0,0,110,250);
        this.instance_1.alpha = 0.898;

        this.instance_2 = new lib.Символ12();
        this.instance_2.setTransform(1120,440,1,1,0,0,0,110,250);
        this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
        this.instance_2.cache(-2,-2,224,504);

        this.instance_3 = new lib.Символ10();
        this.instance_3.setTransform(1120,440,1,1,0,0,0,110,250);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},3).wait(588));

        // girl
        this.instance_4 = new lib.Символ2();
        this.instance_4.setTransform(512.5,430,1,1,0,0,0,92.5,250);
        this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
        this.instance_4.cache(-2,-2,189,504);

        this.instance_5 = new lib.Символ3();
        this.instance_5.setTransform(512.5,430,1,1,0,0,0,92.5,250);
        this.instance_5.alpha = 0.898;

        this.instance_6 = new lib.Символ4();
        this.instance_6.setTransform(512.5,430,1,1,0,0,0,92.5,250);
        this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
        this.instance_6.cache(-2,-2,189,504);

        this.instance_7 = new lib.Символ5();
        this.instance_7.setTransform(512.5,430,0.995,1.002,0,0,0,93,249.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_7}]},3).wait(588));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;