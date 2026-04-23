// services/LoadDataForRegisterNewUser.js

module.exports = {
    execute: function(req, res) {
        console.log("      => LoadDataForRegisterNewUser is feeding Character Creator data!");

        // SkinId 1 = Girl, SkinId 2 = Boy
        // We bypass the database and hardcode the arrays exactly how the AMF client expects them
        const responseData = {
            eyes: [
                { EyeId: 1, Name: "Girl Eyes 1", SWF: "1", SkinId: 1 },
                { EyeId: 2, Name: "Boy Eyes 1", SWF: "2", SkinId: 2 }
            ],
            noses: [
                { NoseId: 1, Name: "Girl Nose 1", SWF: "1", SkinId: 1 },
                { NoseId: 2, Name: "Boy Nose 1", SWF: "2", SkinId: 2 }
            ],
            mouths: [
                { MouthId: 1, Name: "Girl Mouth 1", SWF: "1", SkinId: 1 },
                { MouthId: 2, Name: "Boy Mouth 1", SWF: "2", SkinId: 2 }
            ],
            clothes: [
                {
                    ClothesId: 1, Name: "Basic Girl Top", SWF: "1", ClothesCategoryId: 1,
                    Price: 100, ShopId: 1, SkinId: 1, Filename: "shirt", Scale: 1,
                    Vip: 0, RegNewUser: 1, sortorder: 1, New: false, Discount: 0,
                    ClothesCategory: {
                        ClothesCategoryId: 1, Name: "Top", SlotTypeId: 1,
                        SlotType: { SlotTypeId: 1, Name: "Top" }
                    }
                },
                {
                    ClothesId: 2, Name: "Basic Boy Top", SWF: "2", ClothesCategoryId: 1,
                    Price: 100, ShopId: 1, SkinId: 2, Filename: "shirt", Scale: 1,
                    Vip: 0, RegNewUser: 1, sortorder: 1, New: false, Discount: 0,
                    ClothesCategory: {
                        ClothesCategoryId: 1, Name: "Top", SlotTypeId: 1,
                        SlotType: { SlotTypeId: 1, Name: "Top" }
                    }
                }
            ]
        };

        // For right now, we are just returning it as JSON.
        res.status(200).json(responseData);
    }
};