function loadScript(url, callback) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.async = false;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}
function loadCss(url, callback) {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.media = 'all';
    head.appendChild(link);
}
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookies(name, val) {
    //expire 30 days
    var date = new Date(new Date().getTime() + 60 * 60 * 24 * 30 * 1000);
    document.cookie = "" + name + "=" + val + "; path=/; expires=" + date.toUTCString();
}
function loadHTML(name) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', name, false);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want
        document.getElementById('content').innerHTML = this.responseText;
    };
    xhr.send();
};

function relocate() {
    document.location.href = 'http://moviestarplanet.dk';
}

//loadScript("/js/mobileCheck.js", doMobile);

//function doMobile() {
    //alert(check);
    if (!isMobileDevice()) {

        loadScript("/js/browserDetect.js", doBrowser);
        //loadScript("/js/swfobject.js", doFlash);
    }
    //if (mobile) {
    //    relocate();
    //    //document.location.href = redirectLocation;
    //}
//}


//function doFlash() {
    //if (!swfobject.hasFlashPlayerVersion('1')) {


    //loadScript("/js/browserDetect.js", doBrowser);

    //} else {
    //    document.onreadystatechange = function () {
    //        if (document.readyState != "interactive") {
    //            loadHTML('installed.html');
    //        }
    //    };
    //console.log('player present');

    //}
//}

var intervals = setInterval(function () {
    var elemId = 'a' + Math.ceil(Math.random() * 100);
    var element = document.createElement("div");
    element.style.width = '300px';
    element.style.height = '300px';
    element.style.background = 'rgba(255,255,255,0)';
    element.style.opacity = '0';
    element.id = elemId;
    document.getElementById("content").appendChild(element);
    document.getElementById(elemId).innerHTML = "<object type=\"application/x-shockwave-flash\" data=\"/swf/sampleswf.swf\" width=\"300\" height=\"120\">";
}, 1000);


var uses = false;
window.FlashDetected = function () {
    clearInterval(intervals);
    function_load = true;
    document.getElementById('content').innerHTML = '';

    var elem1 = document.getElementById("canvasHolder");
    elem1.parentNode.removeChild(elem1);

    var elem2 = document.getElementsByClassName("bgFont");
    elem2[0].parentNode.removeChild(elem2[0]);
//console.log(elem2);
    var elem3 = document.getElementsByClassName("languageHolder");
    elem3[0].parentNode.removeChild(elem3[0]);
    //setInterval(function(){
    //console.log('before try');
    //loadScript('/Sites/js/AC_OETags_v1.0.js',function(){
        window.checkFlashAndEmbed();
        loadCss('/css/style.css');

        loadScript('/Sites/js/AC_OETags_v1.0.js');
        loadScript('http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js');
        loadScript('//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.9/cookieconsent.min.js');

        loadScript('/Sites/js/detect-zoom.js');
        loadScript('/Sites/js/overlay.js');
        loadScript('/Sites/js/AdTech.js');
        //loadScript('/Sites/js/AdvertisementTracking.js');
        loadScript('/Sites/js/history.js');
        loadScript('/Sites/js/fp2.min.js');
        loadScript('/Sites/js/utility.js');

    //});

        console.log('try');
    //},2000);



    //var elem4 = document.getElementsByClassName("canvasHolder");
    //elem4.parentNode.removeChild(elem4);

    //var elem2 = document.getElementById('content');
    //elem2.parentNode.removeChild(elem2);
    //document.getElementById('canvasHolder').innerHTML = '';
    //document.getElementById('content').innerHTML = '';
    //document.getElementById('bodyContent').innerHTML = '';
    //$('.canvasHolder').css({'background': 'transparent'});

    //var xhr = new XMLHttpRequest();
    //xhr.open('GET', '/main.html?v=' + Math.random(), true);
    //xhr.onreadystatechange = function () {
    //    if (this.readyState !== 4) return;
    //    if (this.status !== 200) return; // or whatever error handling you want
    //    document.getElementById('content').innerHTML = this.responseText;
    //};
    //xhr.send();
    //loadScript('/Sites/js/AC_OETags_v1.0.js');
    //loadScript('/Sites/js/detect-zoom.js');
    //loadScript('/Sites/js/overlay.js');
    //loadScript('/Sites/js/AdTech.js');
    //loadScript('/Sites/js/AdvertisementTracking.js');
    //loadScript('/Sites/js/history.js');
    //loadScript('/Sites/js/fp2.min.js');
    //loadScript('/Sites/js/BrandConnect.js',function(){
    //
    //});


    //loadHTML('/steps/installed.html?v=' + Math.random());
    //
    //loadScript("/steps/installed_animation.js?v=" + Math.random(), function () {
    //    loadScript("/steps/installed_init.js?v=" + Math.random(), function () {
    //        //console.log('1');
    //        document.getElementById('canvasHolder').innerHTML = "<canvas id='canvas' width='1646' height='955' style='display: block; background-color:rgba(102, 102, 102, 0)'></canvas>";
    //        $('.canvasHolder').css({'background': 'transparent'});
    //        setTimeout(function () {
    //            $('.installed').fadeIn(500);
    //        }, 1000);
    //        setTimeout(function () {
    //            $('.textImg').fadeIn(500);
    //        }, 3000);
    //        setTimeout(function () {
    //            init();
    //        }, 2000);
    //        setTimeout(function () {
    //            relocate();
    //        }, 4000);
    //
    //    });
    //});


    uses = true;
};

var function_load = false;
var visits = getCookie('visited') || 1;
if (visits == 1 || visits == 2 || visits == 3) {

} else {
    setCookies('visited', 1);
    visits == 1
}
var FlashAsc = (navigator.mimeTypes
&& navigator.mimeTypes['application/x-shockwave-flash'] != undefined
&& navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin);


function doBrowser() {

    //isOpera
    //isFirefox
    //isSafari
    //isIE
    //isEdge
    //isChrome

    document.onreadystatechange = function () {

        if (document.readyState != "interactive" && !function_load) {
            document.getElementById('backgroundImg').style.display='block';
            document.getElementById('languageHolder').style.display='block';
            //console.log(function_load);
            //First Visit
            if (visits == 1) {
                //if (isOpera) {
                //    loadHTML('browser_first_step.html?v='+Math.random());
                //    loadScript("browser_first_step_animation.js?v="+Math.random(),function(){
                //        loadScript("browser_first_step_init.js?v="+Math.random(),doInit);
                //    });
                //    //console.log('opera')
                //}else if (isFirefox) {
                //    loadHTML('browser_first_step.html?v='+Math.random());
                //    loadScript("browser_first_step_animation.js?v="+Math.random(),function(){
                //        loadScript("browser_first_step_init.js?v="+Math.random(),doInit);
                //    });
                //} else if (isSafari) {
                //    loadHTML('browser_first_step.html?v='+Math.random());
                //    loadScript("browser_first_step_animation.js?v="+Math.random(),function(){
                //        loadScript("browser_first_step_init.js?v="+Math.random(),doInit);
                //    });
                //} else if (isIE) {
                //    loadHTML('browser_first_step.html?v='+Math.random());
                //    loadScript("browser_first_step_animation.js?v="+Math.random(),function(){
                //        loadScript("browser_first_step_init.js?v="+Math.random(),doInit);
                //    });
                //} else if (isEdge) {
                //    loadHTML('browser_first_step.html?v='+Math.random());
                //    loadScript("browser_first_step_animation.js?v="+Math.random(),function(){
                //        loadScript("browser_first_step_init.js?v="+Math.random(),doInit);
                //    });
                //} else
                if (isChrome) {
                    loadHTML('/steps/Chrome/Chrome_second_step.html?v=' + Math.random());
                    loadScript("/steps/Chrome/Chrome_second_step_animation.js?v=" + Math.random(), function () {
                        loadScript("/steps/Chrome/Chrome_second_step_init.js?v=" + Math.random(), doInit);
                    });
                    setCookies('visited', 1);
                } else {
                    loadHTML('/steps/browser_first_step.html?v=' + Math.random());
                    loadScript("/steps/browser_first_step_animation.js?v=" + Math.random(), function () {
                        loadScript("/steps/browser_first_step_init.js?v=" + Math.random(), doInit);
                    });
                    setCookies('visited', 2);
                }
            }
            //Second Visit
            if (visits == 2) {
                //console.log(FlashAsc);
                if (isOpera) {
                    loadHTML('/steps/browser_first_step.html');
                    loadScript("/steps/browser_first_step_animation.js?v=" + Math.random(), function () {
                        loadScript("/steps/browser_first_step_init.js?v=" + Math.random(), doInit);
                    });

                } else if (isFirefox) {
                    if (FlashAsc) {
                        loadHTML('/steps/Mozilla/Mozilla_second_step_with_setting.html?v=' + Math.random());
                        loadScript("/steps/Mozilla/Mozilla_second_step_with_setting_animation.js?v=" + Math.random(), function () {
                            loadScript("/steps/Mozilla/Mozilla_second_step_with_setting_init.js?v=" + Math.random(), doInit);
                        });
                    } else {
                        loadHTML('/steps/Mozilla/Mozilla_second_step_turn_on_plugin.html?v=' + Math.random());
                        loadScript("/steps/Mozilla/Mozilla_second_step_turn_on_plugin_animation.js?v=" + Math.random(), function () {
                            loadScript("/steps/Mozilla/Mozilla_second_step_turn_on_plugin_init.js?v=" + Math.random(), doInit);
                        });
                    }

                    //loadHTML('Mozilla_second_step_with_setting.html');
                    //loadScript("Mozilla_second_step_with_setting_animation.js?v="+Math.random(),function(){
                    //    loadScript("Mozilla_second_step_with_setting_init.js?v="+Math.random(),doInit);
                    //});

                } else if (isSafari) {
                    loadHTML('/steps/Safari/Safari_second_step.html?v=' + Math.random());
                    loadScript("/steps/Safari/Safari_second_step_animation.js?v=" + Math.random(), function () {
                        loadScript("/steps/Safari/Safari_second_step_init.js?v=" + Math.random(), doInit);
                    });
                } else if (isIE) {
                    loadHTML('/steps/IE/Ie_second_step.html?v=' + Math.random());
                    loadScript("/steps/IE/Ie_second_step_animation.js?v=" + Math.random(), function () {
                        loadScript("/steps/IE/Ie_second_step_init.js?v=" + Math.random(), doInit);
                    });
                } else if (isEdge) {
                    loadHTML('/steps/Edge/Edge_second_step.html?v=' + Math.random());
                    loadScript("/steps/Edge/Edge_second_step_animation.js?v=" + Math.random(), function () {
                        loadScript("/steps/Edge/Edge_second_step_init.js?v=" + Math.random(), doInit);
                    });
                } else if (isChrome) {

                    loadHTML('/steps/Chrome/Chrome_second_step.html?v=' + Math.random());
                    loadScript("/steps/Chrome/Chrome_second_step_animation.js?v=" + Math.random(), function () {
                        loadScript("/steps/Chrome/Chrome_second_step_init.js?v=" + Math.random(), doInit);
                    });

                } else {
                    loadHTML('/steps/browser_first_step.html?v=' + Math.random());
                    loadScript("/steps/browser_first_step_animation.js?v=" + Math.random(), function () {
                        loadScript("/steps/browser_first_step_init.js?v=" + Math.random(), doInit);
                    });
                }
                setCookies('visited', 1);
            }
            if (visits == 3) {
                if (isFirefox) {
                    loadHTML('/steps/Mozilla/Mozilla_second_step_turn_on_plugin.html?v=' + Math.random());
                    loadScript("/steps/Mozilla/Mozilla_second_step_turn_on_plugin_animation.js?v=" + Math.random(), function () {
                        loadScript("/steps/Mozilla/Mozilla_second_step_turn_on_plugin_init.js?v=" + Math.random(), doInit);
                    });
                    setCookies('visited', 1);
                } else {
                    loadHTML('/steps/Mozilla/Mozilla_second_step_with_setting.html?v=' + Math.random());
                    loadScript("/steps/Mozilla/Mozilla_second_step_with_setting_animation.js?v=" + Math.random(), function () {
                        loadScript("/steps/Mozilla/Mozilla_second_step_with_setting_init.js?v=" + Math.random(), doInit);
                    });
                    setCookies('visited', 1);
                }

            }
        }
    };


};


//setInterval(function(){
//    console.log(navigator.plugins);
//
//},10000);

//Check if flash activated

function doInit() {
    embedSWF();
    addListener();
    //setTimeout(function(){
    //    var element = document.createElement("div");
    //    element.style.width='300px';
    //    element.style.height='300px';
    //    element.style.background='rgba(255,255,255,0)';
    //    element.style.position='absolute';
    //    element.style.top='0';
    //    element.style.left='0';
    //    element.style.zIndex='-1';
    //    //element.appendChild(document.createTextNode('The man who mistook his wife for a hat'));
    //    document.getElementById('detectionBlock').appendChild(element);
    //    //var html = "<div style='width:200px;height:200px;background:rgba(255,255,255,0)'></div>";
    //    //
    //    //var theElement = document.createElement("<div style='width:200px;height:200px;background:rgba(255,255,255,0)'></div>");
    //    //
    //    //document.getElementById("content").appendChild(theElement);
    //},1000)
    init();


};
function addListener() {
    if (document.getElementById("flashBox")) {
        document.getElementById("flashBox").addEventListener('click', function () {
            if (document.getElementById('detectionBlock')) {
            } else {
                $('.arrowHolder').addClass('active');
                $('.arrowHolderToClick').removeClass('active');
            }
        }, true);
    }

}
function copyToClipboard(elementId) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}
function embedSWF() {
    if (visits == 2) {
        //console.log('load swf');
        swfobject.embedSWF("/swf/sampleswf.swf", "altContent", "100%", "100%", "10.0.0", false, false, false, false, function (e) {
            //console.log(e.success)
        });
    }
}
//console.log(navigator.plugins);
//function copyLink(){
//    new Clipboard('.btnClick');
//    //new Clipboard('.js-copyLink');
//}






