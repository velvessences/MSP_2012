//var Browserlanguage = 'da';
//var Browserlanguage = navigator.language;
var Browserlanguage = getCookie('language') || navigator.language;
//var language=Browserlanguage.substring(0,2).toLowerCase();
var lan = Browserlanguage.toLowerCase();
var languageArray = ["de", "gb", "fr", "nl", "pl", "se", "dk", "no", "fi", "tr", "ie", "au", "nz", "ca", "es"];

var splitString = new Array;
splitString = lan.split('-');
//splitString.forEach(function(item,i,arr){
//    //console.log(item);
//    if(languageArray.indexOf(item)!=-1){
//        lan=item;
//
//    }
//
//});
var language = 'gb';
if(splitString){
    splitString.every(function (item) {
        if (languageArray.indexOf(item) != -1) {
            language = item;
            return false;
        }
        return true;
    });
}

console.log(language);



//de-AT,de-DE,dsb-DE,hsb-DE
//en-GB,gd-GB,cy-GB,
//fr-BE,fr-CA,gsw-FR,br-FR,co-FR,fr-FR,oc-FR      !fr-CA!
//nl-BE,nl-NL,fy-NL
//pl-PL
//se-FI,se-NO,smj-SE,se-SE,sma-SE,sv-SE        !se-NO se-FI
//da-DK
//nb-NO,nn-NO,smj-NO,se-NO,sma-NO     !se-NO
//fi-FI,smn-FI,se-FI,sms-FI,sv-FI   !fil-PH!    !se-FI
//    tr-TR
//en-IE,ga-IE
//en-AU,
//en-NZ,mi-NZ
//
//
//en-CA,fr-CA,iu-CA,iu-CA,moh-CA,ca-ES        !fr-CA ca-ES
//
//
//
//es-AR,es-VE,es-BO,es-CL,es-CO,es-CR,es-DO,es-EC,es-SV,es-GT,es-HN,es-MX,es-NI,es-PA,es-PY,es-PE,es-PR,eu-ES,ca-ES,gl-ES,es-ES,es-US,es-UY     !ca-ES


//console.log(language);

var s = new Array('Deutschland', 'United Kingdom', 'France', 'Nederland', 'Polska', 'Sverige', 'Danmark', 'Norge', 'Suomi', 'Türkiye', 'Ireland', 'Australia', 'New Zealand', 'Canada', 'España');
var Translatearray = {
    'de': {
        title: 'Willkommen',
        text: 'Klicken Sie unten zu starten',
        setSettings: 'Stellen Sie diese Einstellungen',
    },
    'gb': {
        title: 'Welcome',
        text: 'Click below to start',
        setSettings: 'Set these settings',
    },
    'fr': {
        title: 'Bienvenue',
        text: 'Cliquez ci-dessous pour commencer',
        setSettings: 'Définissez ces paramètres',
    },
    'nl': {
        title: 'Welkom',
        text: 'Klik hieronder om te beginnen',
        setSettings: 'Stel deze instellingen',
    },
    'pl': {
        title: 'Witamy',
        text: 'Kliknij poniżej, aby rozpocząć',
        setSettings: 'Ustaw te ustawienia',
    },
    'se': {
        title: 'Välkommen',
        text: 'Klicka nedan för att börja',
        setSettings: 'Ange dessa inställningar',
    },
    'dk': {
        title: 'Velkomst',
        text: 'Klik nedenfor for at starte',
        setSettings: 'Sæt disse indstillinger',
    },
    'no': {
        title: 'Velkommen',
        text: 'Klikk under for å starte',
        setSettings: 'Angi disse innstillingene',
    },
    'fi': {
        title: 'Tervetuloa',
        text: 'Klikkaa alla aloittaa',
        setSettings: 'Määritä nämä asetukset',
    },
    'tr': {
        title: 'Hoşgeldiniz',
        text: 'başlatmak için aşağıya tıklayın',
        setSettings: 'bu ayarları',
    },
    'ie': {
        title: 'Fáilte',
        text: 'Cliceáil thíos chun tús a chur',
        setSettings: 'Socraigh na socruithe seo',
    },
    'au': {
        title: 'Welcome!',
        text: 'Click below to start',
        setSettings: 'Set these settings',
    },
    'nz': {
        title: 'Welcome!',
        text: 'Click below to start',
        setSettings: 'Set these settings',
    },
    'ca': {
        title: 'Welcome!',
        text: 'Click below to start',
        setSettings: 'Set these settings',
    },
    'es': {
        title: 'Bienvenido!',
        text: 'Haga clic abajo para empezar',
        setSettings: 'Establecer estos ajustes',
    }

};
//document.getElementById('languageSelector').onchange = function() {
//    if(document.getElementById('title')){
//        document.getElementById('title').innerHTML = Translatearray[this.value].title;
//    }
//    if(document.getElementById('subTitle')){
//        document.getElementById('subTitle').innerHTML = Translatearray[this.value].text;
//    }
//    if(document.getElementById('setSettings')){
//        document.getElementById('setSettings').innerHTML = Translatearray[this.value].setSettings;
//    }
//
//    setCookies('language', this.value);
//};

//document.getElementById("languageSelector").value = language;

//swfobject.embedSWF("/swf/sampleswf.swf", "FlashCheckContent", "550", "400", "9", false, false, false, false, callback);

