// services/LoadDataForRegisterNewUser.js
const libamf = require('libamf'); // Must match the server.js library
// 1. Strongly Typed Classes
// Adding _explicitType is a bulletproof fallback to force the AMF library to map it to AS3
class RegisterNewUserData { constructor() { this._explicitType = "com.moviestarplanet.moviestar.valueObjects.RegisterNewUserData"; } }
class Eye { constructor() { this._explicitType = "com.moviestarplanet.moviestar.valueObjects.Eye"; } }
class EyeShadow { constructor() { this._explicitType = "com.moviestarplanet.moviestar.valueObjects.EyeShadow"; } }
class Nose { constructor() { this._explicitType = "com.moviestarplanet.moviestar.valueObjects.Nose"; } }
class Mouth { constructor() { this._explicitType = "com.moviestarplanet.moviestar.valueObjects.Mouth"; } }
class Cloth { constructor() { this._explicitType = "com.moviestarplanet.moviestar.valueObjects.Cloth"; } }

// 2. Bind the Javascript classes to the ActionScript classes so Flash accepts them
if (libamf.registerClassAlias) {
    libamf.registerClassAlias("com.moviestarplanet.moviestar.valueObjects.RegisterNewUserData", RegisterNewUserData);
    libamf.registerClassAlias("com.moviestarplanet.moviestar.valueObjects.Eye", Eye);
    libamf.registerClassAlias("com.moviestarplanet.moviestar.valueObjects.EyeShadow", EyeShadow);
    libamf.registerClassAlias("com.moviestarplanet.moviestar.valueObjects.Nose", Nose);
    libamf.registerClassAlias("com.moviestarplanet.moviestar.valueObjects.Mouth", Mouth);
    libamf.registerClassAlias("com.moviestarplanet.moviestar.valueObjects.Cloth", Cloth);
}

// Helper Functions
function makeEye(id, swfSubfolder, skinId) {
    const o = new Eye();
    Object.assign(o, {
        EyeId:         id,
        Name:          swfSubfolder,
        SWF:           swfSubfolder,       
        SWFLocation:   swfSubfolder,
        DragonBone:    true,
        SkinId:        skinId,
        RegNewUser:    skinId,
        type:          "eyes",
        DefaultColors: "0",
        sortorder:     id,
        hidden:        false,
    });
    return o;
}

function makeEyeShadow(id, swfSubfolder, skinId) {
    const o = new EyeShadow();
    Object.assign(o, {
        EyeShadowId:   id,
        Name:          swfSubfolder,
        SWF:           swfSubfolder,       
        SWFLocation:   swfSubfolder,
        DragonBone:    true,
        SkinId:        skinId,
        RegNewUser:    skinId,
        type:          "eyeShadow",
        DefaultColors: "0",
        sortorder:     id,
        hidden:        false,
    });
    return o;
}

function makeNose(id, swfFilename, skinId) {
    const o = new Nose();
    Object.assign(o, {
        NoseId:        id,
        Name:          swfFilename,
        SWF:           swfFilename,
        SWFLocation:   `noses/${swfFilename}`,        
        DragonBone:    false,
        SkinId:        skinId,
        RegNewUser:    skinId,
        type:          "nose",
        DefaultColors: "0",
        sortorder:     id,
        hidden:        false,
    });
    return o;
}

function makeMouth(id, swfFilename, skinId) {
    const o = new Mouth();
    Object.assign(o, {
        MouthId:       id,
        Name:          swfFilename,
        SWF:           swfFilename,
        SWFLocation:   `mouths/${swfFilename}`,        
        DragonBone:    false,
        SkinId:        skinId,
        RegNewUser:    skinId,
        type:          "mouth",
        DefaultColors: "0",
        sortorder:     id,
        hidden:        false,
    });
    return o;
}

function makeCloth(id, subdir, filename, categoryId, skinId) {
    const clothPath = `${subdir}/${filename}`;
    const o = new Cloth();
    Object.assign(o, {
        ClothesId:          id,
        Name:               filename,
        path:               clothPath,     
        SWF:                clothPath,
        ClothesCategoryId:  categoryId,
        SkinId:             skinId,
        RegNewUser:         skinId,
        ColorScheme:        "0",
        hidden:             false,
    });
    return o;
}

module.exports = {
    execute: function(req) {
        console.log("      => [LoadDataForRegisterNewUser] Building character creator data...");

        const responseData = new RegisterNewUserData();

        responseData.eyes = [
            // female
            makeEye(1,  "eyes_girlnextdoor_2013",  1),
            makeEye(2,  "eyes_prettyperfect_2013",  1),
            makeEye(3,  "eyes_glittergalore_2013",  1),
            makeEye(4,  "eyes_cateyes_2013",        1),
            makeEye(5,  "eyes_partyperfect_2013",   1),
            // male
            makeEye(11, "eyes_boynextdoor_2013",    2),
            makeEye(12, "eyes_theman_2013",         2),
            makeEye(13, "eyes_themanblue_2013",     2),
            makeEye(14, "eyes_honesthero_2013",     2),
            makeEye(15, "eyes_shadysunday_2013",    2),
        ];

        responseData.eyeShadows = [
            // female
            makeEyeShadow(1, "eyeshadow_sweetstuff_2013",   1),
            makeEyeShadow(2, "eyeshadow_femalestar_2013",   1),
            makeEyeShadow(3, "eyeshadow_partyperfect_2013", 1),
            makeEyeShadow(4, "eyeshadow_cateyes_2013",      1),
            // male
            makeEyeShadow(11, "eyeshadow_party_2013",       2),
            makeEyeShadow(12, "eyeshadow_bling_2013",       2),
        ];

        responseData.noses = [
            makeNose(1,  "nose_8_freckles.swf", 1),
            makeNose(11, "nose_3.swf",           2),
        ];

        responseData.mouths = [
            makeMouth(1,  "eternallove_2011_femalelips_nd.swf", 1),
            makeMouth(2,  "female_mouth_3.swf",                 1),
            makeMouth(11, "male_mouth_2.swf",                   2),
        ];

        responseData.clothes = [
            // HAIR — category 1 
            makeCloth(101, "hair", "miami_2011_female_hair_3.swf",  1, 1),
            makeCloth(102, "hair", "HouseParty_2011_female_hair_1_nd.swf", 1, 1),
            makeCloth(103, "hair", "valentines_2011_female_hair_2.swf", 1, 1),
            ///
            makeCloth(111, "hair", "Hair_clovn_Taunus.swf",      1, 2),
            makeCloth(112, "hair", "emo_2011_male_hair_3.swf",               1, 2),
            makeCloth(113, "hair", "2009_hair_boys_Honey_5.swf",               1, 2),

            // TOPS — category 2 
            makeCloth(201, "tops", "arabianProm_2015_diamond_dg.swf",         2, 1),
            makeCloth(202, "tops", "Aloha_2014_PineappleTee_FJ.swf",                         2, 1),
            makeCloth(203, "tops", "amusementpark_2011_female_top_7.swf",                         2, 1),
            ///
            makeCloth(211, "tops", "rockstarchristmas_2011_female_tops_1.swf",    2, 2),

            // BOTTOMS — category 3 
            makeCloth(301, "bottoms", "Mexico_2012_FemaleMariachiShorts_ms.swf", 3, 1),
            makeCloth(302, "bottoms", "grinch_2011_female_bottoms_4.swf",                      3, 1),
            makeCloth(303, "bottoms", "june_female_bottoms_3.swf",                      3, 1),
            ///
            makeCloth(311, "bottoms", "Christmas_2011_male_bottoms_nd_1.swf",                        3, 2),
            makeCloth(312, "bottoms", "elvistrousers.swf",                        3, 2),
            makeCloth(313, "bottoms", "Honey_bottoms_10_boys.swf",                        3, 2),

            // FOOTWEAR — category 5 
            makeCloth(501, "footwear", "may_shoes_female_1.swf",  5, 1),
            ///
            makeCloth(511, "footwear", "may_shoes_female_1.swf",        5, 2),

            // HEADWEAR — category 6 
            makeCloth(601, "accessories", "Christmas_2014_hairPin_dg.swf",  6, 1),
            makeCloth(602, "accessories", "easter_2012_ChickCap_nd.swf",  6, 1),
            //
            makeCloth(611, "accessories", "December_hat_6.swf",    6, 2),
            makeCloth(612, "accessories", "Kineserhat.swf",    6, 2),
        ];

        return responseData;
    }
};