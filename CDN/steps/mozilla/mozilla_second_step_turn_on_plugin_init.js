var canvas, stage, exportRoot;

function init() {
    canvas = document.getElementById("canvas");
    images = images||{};
    ss = ss||{};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadFile({src:"images/mozilla_atlas_.json", type:"spritesheet", id:"mozilla_atlas_"}, true);
    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete(evt) {
    var queue = evt.target;
    ss["mozilla_atlas_"] = queue.getResult("mozilla_atlas_");
    exportRoot = new lib.Безымянный2();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
    (function(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w*pRatio*sRatio;
            canvas.height = h*pRatio*sRatio;
            canvas.style.width = w*sRatio+'px';
            canvas.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
        }
    })(true,'both',false,1);
}


$(document).ready(function(){
    setTimeout(function() {
        $('.textBox .text').addClass('active');
        $('.flashBox').addClass('active');
        $('.linkM').addClass('active');
        $('.linkM').on('click', function () {
            $('.showPopup').fadeIn(500).delay(2000).fadeOut(500);
            $('.showPopupNext').fadeIn(500).delay(3000).fadeOut(500);
        })
    },1000);
});