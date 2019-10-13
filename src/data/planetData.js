import { objectives } from "./objectives";

export const STRATEGIC_EFFECT_DIPLOMATS = "Diplomats";
export const STRATEGIC_EFFECT_SPYNET = "Spynet";
export const STRATEGIC_EFFECT_REPAIR_YARDS = "Repair Yards";
export const STRATEGIC_EFFECT_SKILLED_SPACERS = "Skilled Spacers";
export const STRATEGIC_EFFECT_ASSASSINS = "Assassins";
export const STRATEGIC_EFFECT_HYPERSPACE_SPECIALISTS = "Hyperspace Specialists";

export const PLANET_AUREA = {
    name: "Aurea",
    imageSmall: "http://img12.deviantart.net/e0e2/i/2009/357/c/2/planet___alaerin_by_stock7000.jpg",
    imageLarge: "https://img5.goodfon.com/wallpaper/nbig/0/3a/radeblunner-planeta-kosmos-fantasy-art-space-art-planet-fant.jpg",
    imageAlt: "",
    ccResourceBonusValue: 9,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_DIPLOMATS,
    skywalkerObjective: "objectives/fighter_ambush",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "36%",
    mapY: "81%"
};

export const PLANET_CENTERPOINT = {
    name: "Centerpoint",
    imageSmall: "https://us.123rf.com/450wm/jetrel/jetrel1011/jetrel101100003/8172532-abstract-space-background-stars-and-nebulas-square.jpg?ver=6",
    imageLarge: "https://vignette.wikia.nocookie.net/starwars/images/0/03/CenterpointStation-SoF.png/revision/latest?cb=20170222022328",
    imageAlt: "",
    ccResourceBonusValue: 5,
    ccVictoryBonusValue: 0,
    ccObjectives: ["objectives/independent_station"],
    ccOtherObjectives: 1,
    ccStrategicEffect: STRATEGIC_EFFECT_SPYNET,
    skywalkerObjective: "objectives/contested_outpost",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "35.6%",
    mapY: "56.8%"
};

export const PLANET_CORELLIA = {
    name: "Corellia",
    imageSmall: "https://i.pinimg.com/564x/65/fb/42/65fb42f84879355414ac3cbe11f2c4d7.jpg",
    imageLarge: "https://www.iamag.co/wp-content/uploads/2017/07/omar-sabrou-ocean-planet-9-light.jpg",
    imageAlt: "",
    ccResourceBonusValue: 20,
    ccVictoryBonusValue: 2,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_REPAIR_YARDS,
    skywalkerObjective: "objectives/base_defense_armed_station",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "28.1%",
    mapY: "48.8%"
};

export const PLANET_CORFAI = {
    name: "Corfai",
    imageSmall: "https://img00.deviantart.net/1cc0/i/2010/137/0/e/planet___erdea_by_stock7000.jpg",
    imageLarge: "https://cdn.suwalls.com/wallpapers/space/planet-surrounded-by-asteroids-46003-1920x1080.jpg",
    imageAlt: "",
    ccResourceBonusValue: 19,
    ccVictoryBonusValue: 2,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: undefined,
    skywalkerObjective: "objectives/precision_strike",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "65.8%",
    mapY: "53.8%"
};

export const PLANET_CRASHS_DRIFT = {
    name: "Crash's Drift",
    imageSmall: "https://cdn.mos.cms.futurecdn.net/ht9Ne9WAubRxeypYdGnCSk-320-80.jpg",
    imageLarge: "https://cdn.mos.cms.futurecdn.net/ht9Ne9WAubRxeypYdGnCSk-1024-80.jpg",
    imageAlt: "Crash's Drift Nebula",
    ccResourceBonusValue: 13,
    ccVictoryBonusValue: 1,
    ccObjectives: ["objectives/nebula_outskirts"],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_SKILLED_SPACERS,
    skywalkerObjective: "objectives/nebula_outskirts",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "6.2%",
    mapY: "53.8%"
};

export const PLANET_DRALL = {
    name: "Drall",
    imageSmall: "https://i.pinimg.com/564x/af/73/2c/af732c57b0288ace30afc6d42b2f9f28.jpg",
    imageLarge: "https://wallpapersite.com/images/pages/pic_h/1754.jpg",
    imageAlt: "",
    ccResourceBonusValue: 9,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_DIPLOMATS,
    skywalkerObjective: "objectives/close_range_intel_scan",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "33.2%",
    mapY: "31.5%"
};

export const PLANET_DURO = {
    name: "Duro",
    imageSmall: "https://i.pinimg.com/564x/fb/d9/91/fbd991f6688dd0138831713ac2355606.jpg",
    imageLarge: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/281610/5ad7a1cd8169560766aca8f88a34ea7379473dbb.jpg",
    imageAlt: "",
    ccResourceBonusValue: 17,
    ccVictoryBonusValue: 2,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_SKILLED_SPACERS,
    skywalkerObjective: "objectives/hyperspace_assault",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "87%",
    mapY: "79.5%"
};

export const PLANET_FORVAND = {
    name: "Forvand",
    imageSmall: "https://vignette.wikia.nocookie.net/starwars/images/9/97/Kaliida_Shoals_medcenter.png/revision/latest?cb=20151103020300",
    imageLarge: "https://vignette.wikia.nocookie.net/starwars/images/3/36/Ord_Cestus_medical_station.png/revision/latest?cb=20120902211459",
    imageAlt: "Forvand Space Station",
    ccResourceBonusValue: 2,
    ccVictoryBonusValue: 0,
    ccObjectives: ["objectives/nebula_outskirts", "objectives/independent_station"],
    ccOtherObjectives: 0,
    ccStrategicEffect: STRATEGIC_EFFECT_SPYNET,
    skywalkerObjective: "objectives/independent_station",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "84%",
    mapY: "51.8%"
};

export const PLANET_FROZ = {
    name: "Froz",
    imageSmall: "https://i.stack.imgur.com/mohEa.jpg",
    imageLarge: "https://www.bestfunforall.com/better/imgs/Sun%20Rise%20in%20Space%20wallpaper%20%209.jpg",
    imageAlt: "",
    ccResourceBonusValue: 0,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_DIPLOMATS,
    skywalkerObjective: "objectives/opening_salvo",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "11.1%",
    mapY: "15%"
};

export const PLANET_NEW_PLYMPTO = {
    name: "New Plympto",
    imageSmall: "http://orig02.deviantart.net/05d6/f/2011/210/3/a/vendaxa_by_holonet_news-d422kxj.png",
    imageLarge: "http://eskipaper.com/images/high-resolution-backgrounds-13.jpg",
    imageAlt: "",
    ccResourceBonusValue: 9,
    ccVictoryBonusValue: 0,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: undefined,
    skywalkerObjective: "objectives/dangerous_territory",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "72.2%",
    mapY: "77%"
};

export const PLANET_NUBIA = {
    name: "Nubia",
    imageSmall: "https://vignette.wikia.nocookie.net/starwars/images/6/66/Makeb.png/revision/latest/scale-to-width-down/499?cb=20130327020540",
    imageLarge: "https://cdn.suwalls.com/wallpapers/space/green-nebula-surrounding-the-planet-53896-1920x1080.jpg",
    imageAlt: "",
    ccResourceBonusValue: 16,
    ccVictoryBonusValue: 2,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_REPAIR_YARDS,
    skywalkerObjective: "objectives/sensor_net",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "89%",
    mapY: "30%"
};

export const PLANET_PHEMIS = {
    name: "Phemis",
    imageSmall: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/216cbb1f-12f1-419e-b84d-bbddbd412347/d4l5baj-d1d2bb43-c9d9-46f9-a494-8e3201082053.jpg/v1/fill/w_1024,h_1024,q_75,strp/tatooine_by_fallenzeraphine_d4l5baj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzIxNmNiYjFmLTEyZjEtNDE5ZS1iODRkLWJiZGRiZDQxMjM0N1wvZDRsNWJhai1kMWQyYmI0My1jOWQ5LTQ2ZjktYTQ5NC04ZTMyMDEwODIwNTMuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.755VydY1twDnetrAx9cHsouPPFiD84C7kWcajOE0WSY",
    imageLarge: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/216cbb1f-12f1-419e-b84d-bbddbd412347/d4l7t4i-d2ea20b3-420c-4a58-845e-3a27aabf748c.jpg/v1/fill/w_1280,h_545,q_75,strp/passing_of_ghomrassen_by_fallenzeraphine_d4l7t4i-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQ1IiwicGF0aCI6IlwvZlwvMjE2Y2JiMWYtMTJmMS00MTllLWI4NGQtYmJkZGJkNDEyMzQ3XC9kNGw3dDRpLWQyZWEyMGIzLTQyMGMtNGE1OC04NDVlLTNhMjdhYWJmNzQ4Yy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.GvQMfE-EksFNK2KMtQ380Y8xyAN58t1sF-XCnTR4HrA",
    imageAlt: "",
    ccResourceBonusValue: 2,
    ccVictoryBonusValue: 0,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: undefined,
    skywalkerObjective: "objectives/most_wanted",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "38%",
    mapY: "8%"
};

export const PLANET_PLYMPTO = {
    name: "Plympto",
    imageSmall: "https://i1.sndcdn.com/artworks-000214368429-wro8d5-t500x500.jpg",
    imageLarge: "https://i.pinimg.com/originals/34/c8/da/34c8da09460401bcbd130358f010ff0b.jpg",
    imageAlt: "Plympto Station within an Asteroid Field",
    ccResourceBonusValue: 1,
    ccVictoryBonusValue: 0,
    ccObjectives: ["objectives/asteroids", "objectives/nebula_outskirts", "objectives/independent_station"],
    ccOtherObjectives: 0,
    ccStrategicEffect: STRATEGIC_EFFECT_SKILLED_SPACERS,
    skywalkerObjective: "objectives/salvage_run",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "51%",
    mapY: "71%"
}

export const PLANET_POLANIS = {
    name: "Polanis",
    imageSmall: "https://i.pinimg.com/564x/c7/93/c8/c793c8490e9cc58c5d5273b5a1319991.jpg",
    imageLarge: "https://www.wallpapermaiden.com/wallpaper/34766/download/1920x1080/earth-atmosphere-galaxy-scary-dark-space-space.jpeg",
    imageAlt: "",
    ccResourceBonusValue: 15,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: undefined,
    skywalkerObjective: "objectives/jamming_barrier",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "42%",
    mapY: "22%"
};

export const PLANET_RAIDERS_POINT = {
    name: "Raider's Point",
    imageSmall: "https://s3.envato.com/files/219105744/Untitled-1.jpg",
    imageLarge: "https://i.redd.it/a7k2i72an6qy.jpg",
    imageAlt: "Raider's Point Nebula",
    ccResourceBonusValue: 4,
    ccVictoryBonusValue: 0,
    ccObjectives: ["objectives/nebula_outskirts"],
    ccOtherObjectives: 0,
    ccStrategicEffect: STRATEGIC_EFFECT_SPYNET,
    skywalkerObjective: "objectives/fleet_ambush",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "50.5%",
    mapY: "33%"
};

export const PLANET_SABERHING_ASTEROID_BELT = {
    name: "Saberhing Asteroid Belt",
    imageSmall: "https://media.istockphoto.com/photos/asteroid-field-picture-id506321720?k=6&m=506321720&s=612x612&w=0&h=95iZ83eOiy5CjRzh6i9bSNF4I9XlMTJwCvk3nmU0wNw=",
    imageLarge: "https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F1355decbdedf32d435d459f17db90415%2F205545750%2Fasteroids-main-dl.jpg&client=amp-blogside-v2&signature=3af6fe1e60ea3a6f3156b7e68e02f070ac4f2dde",
    imageAlt: "Saberhing Asteroid Belt",
    ccResourceBonusValue: 16,
    ccVictoryBonusValue: 2,
    ccObjectives: ["objectives/asteroids"],
    ccOtherObjectives: 0,
    ccStrategicEffect: STRATEGIC_EFFECT_REPAIR_YARDS,
    skywalkerObjective: "objectives/asteroids",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "9%",
    mapY: "80%"
};

export const PLANET_SACORRIA = {
    name: "Sacorria",
    imageSmall: "https://i.pinimg.com/564x/9e/d1/47/9ed1478a86d6ba6c59e918c6ab268e49.jpg",
    imageLarge: "http://cdn.paperhi.com/1920x1080/20130314/outer%20space%20planets%201920x1080%20wallpaper_www.paperhi.com_12.jpg",
    imageAlt: "",
    ccResourceBonusValue: 10,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: undefined,
    skywalkerObjective: "objectives/solar_corona",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "22%",
    mapY: "89%"
}

export const PLANET_SELONIA = {
    name: "Selonia",
    imageSmall: "https://i.pinimg.com/564x/24/70/c7/2470c7034c3a5ae4c274960687e3e8ce.jpg",
    imageLarge: "https://images5.alphacoders.com/501/thumb-1920-501150.jpg",
    imageAlt: "",
    ccResourceBonusValue: 12,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_REPAIR_YARDS,
    skywalkerObjective: "objectives/fire_lanes",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "18.8%",
    mapY: "38%"
};

export const PLANET_SILERIA = {
    name: "Sileria",
    imageSmall: "https://ak8.picdn.net/shutterstock/videos/16731628/thumb/10.jpg",
    imageLarge: "https://i.pinimg.com/originals/59/35/e0/5935e08a0778422990c6249463e91600.jpg",
    imageAlt: "Sileria Asteroid Field",
    ccResourceBonusValue: 7,
    ccVictoryBonusValue: 0,
    ccObjectives: ["objectives/asteroids"],
    ccOtherObjectives: 0,
    ccStrategicEffect: STRATEGIC_EFFECT_SKILLED_SPACERS,
    skywalkerObjective: "objectives/navigational_hazards",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "67%",
    mapY: "16%"
};

export const PLANET_TALFAGLIO = {
    name: "Talfaglio",
    imageSmall: "https://i.pinimg.com/564x/02/af/ec/02afec503c3e40790eb147e0c428ebfd.jpg",
    imageLarge: "https://www.1zoom.me/big2/159/306891-blackangel.jpg",
    imageAlt: "",
    ccResourceBonusValue: 6,
    ccVictoryBonusValue: 0,
    ccObjectives: ["objectives/asteroids"],
    ccOtherObjectives: 2,
    ccStrategicEffect: undefined,
    skywalkerObjective: "objectives/minefields",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "82%",
    mapY: "8%"
};

export const PLANET_TALUS = {
    name: "Talus",
    imageSmall: "https://space-facts.com/wp-content/uploads/saturn.png",
    imageLarge: "https://img5.goodfon.com/original/1920x1080/c/d1/vadim-sadovski-by-vadim-sadovski-gas-giant.jpg",
    imageAlt: "",
    ccResourceBonusValue: 8,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_SKILLED_SPACERS,
    skywalkerObjective: "objectives/superior_positions",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "19%",
    mapY: "59%"
};

export const PLANET_TRALUS = {
    name: "Tralus",
    imageSmall: "https://i.pinimg.com/564x/db/3b/09/db3b09edeedfd907634a39b06512ccdb.jpg",
    imageLarge: "https://www.jakpost.travel/imgfiles/full/63/634793/star-wars-planet-wallpaper.jpg",
    imageAlt: "",
    ccResourceBonusValue: 8,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_SKILLED_SPACERS,
    skywalkerObjective: "objectives/intel_sweep",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "26%",
    mapY: "68%"
};

export const PLANET_TRUUZDANN = {
    name: "Truuzdann",
    imageSmall: "https://i.pinimg.com/564x/60/dc/b2/60dcb2beaeb116efbc93cb69139b54be.jpg",
    imageLarge: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/62616c22-fbc8-4a7f-ae54-a7e5d506e147/d3fpsfu-235f8ad1-0c72-483e-a791-f9a49c13ee0b.jpg/v1/fill/w_1115,h_717,q_70,strp/arid_planet_by_bs4711_d3fpsfu-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNjI2MTZjMjItZmJjOC00YTdmLWFlNTQtYTdlNWQ1MDZlMTQ3XC9kM2Zwc2Z1LTIzNWY4YWQxLTBjNzItNDgzZS1hNzkxLWY5YTQ5YzEzZWUwYi5qcGciLCJ3aWR0aCI6Ijw9MTQwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.tocNS-OKnjIC0LC74TtJwNbiLT7c5AQ6FOxoEkr1Z1Y",
    imageAlt: "",
    ccResourceBonusValue: 8,
    ccVictoryBonusValue: 0,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: undefined,
    skywalkerObjective: "objectives/capture_the_vip",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "68.8%",
    mapY: "29%"
};

export const PLANET_VAGRAN = {
    name: "Vagran",
    imageSmall: "https://i.pinimg.com/564x/4f/33/6a/4f336aed03eb2c9571c777564b2efe91.jpg",
    imageLarge: "https://i.pinimg.com/originals/6c/60/59/6c6059600cfee3ffb6625599dea3dd28.jpg",
    imageAlt: "",
    ccResourceBonusValue: 8,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_REPAIR_YARDS,
    skywalkerObjective: "objectives/targeting_beacons",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "53%",
    mapY: "90%"
};

export const PLANET_XYQUINE_II = {
    name: "Xyquine II",
    imageSmall: "https://i.pinimg.com/564x/4a/21/61/4a21618f8807b71bb6ceafbc4fb1e124.jpg",
    imageLarge: "https://cdn.spacetelescope.org/archives/images/screen/heic1916a.jpg",
    imageAlt: "",
    ccResourceBonusValue: 11,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_REPAIR_YARDS,
    skywalkerObjective: "objectives/advanced_gunnery",
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "68%",
    mapY: "88%"
};

export const planets = [PLANET_AUREA, PLANET_CENTERPOINT, PLANET_CORELLIA, PLANET_CORFAI, PLANET_CRASHS_DRIFT, PLANET_DRALL, PLANET_DURO, PLANET_FORVAND, PLANET_FROZ, PLANET_NEW_PLYMPTO, PLANET_NUBIA, PLANET_PHEMIS, PLANET_PLYMPTO, PLANET_POLANIS, PLANET_RAIDERS_POINT, PLANET_SABERHING_ASTEROID_BELT, PLANET_SACORRIA, PLANET_SELONIA, PLANET_SILERIA, PLANET_TALFAGLIO, PLANET_TALUS, PLANET_TRALUS, PLANET_TRUUZDANN, PLANET_VAGRAN, PLANET_XYQUINE_II];