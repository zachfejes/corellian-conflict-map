import { objectives } from "./objectives";

export const STRATEGIC_EFFECT_DIPLOMATS = "Diplomats";
export const STRATEGIC_EFFECT_SPYNET = "Spynet";
export const STRATEGIC_EFFECT_REPAIR_YARDS = "Repair Yards";
export const STRATEGIC_EFFECT_SKILLED_SPACERS = "Skilled Spacers";
export const STRATEGIC_EFFECT_ASSASSINS = "Assassins";
export const STRATEGIC_EFFECT_HYPERSPACE_SPECIALISTS = "Hyperspace Specialists";

export const PLANET_AUREA = {
    name: "Aurea",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 9,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_DIPLOMATS,
    skywalkerObjective: objectives.fighter_ambush,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "32%",
    mapY: "78%"
};

export const PLANET_CENTERPOINT = {
    name: "Centerpoint",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 5,
    ccVictoryBonusValue: 0,
    ccObjectives: [objectives.independent_station],
    ccOtherObjectives: 1,
    ccStrategicEffect: STRATEGIC_EFFECT_SPYNET,
    skywalkerObjective: objectives.contested_outpost,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "30%",
    mapY: "53%"
};

export const PLANET_CORELLIA = {
    name: "Corellia",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 20,
    ccVictoryBonusValue: 2,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_REPAIR_YARDS,
    skywalkerObjective: objectives.base_defense_armed_station,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "22.5%",
    mapY: "45%"
};

export const PLANET_CORFAI = {
    name: "Corfai",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 19,
    ccVictoryBonusValue: 2,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: undefined,
    skywalkerObjective: objectives.precision_strike,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "60%",
    mapY: "50%"
};

export const PLANET_CRASHS_DRIFT = {
    name: "Crash's Drift",
    imageSmall: "https://cdn.mos.cms.futurecdn.net/ht9Ne9WAubRxeypYdGnCSk-320-80.jpg",
    imageLarge: "https://cdn.mos.cms.futurecdn.net/ht9Ne9WAubRxeypYdGnCSk-1024-80.jpg",
    imageAlt: "Crash's Drift Nebula",
    ccResourceBonusValue: 13,
    ccVictoryBonusValue: 1,
    ccObjectives: [objectives.nebula_outskirts],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_SKILLED_SPACERS,
    skywalkerObjective: objectives.nebula_outskirts,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "1%",
    mapY: "50%"
};

export const PLANET_DRALL = {
    name: "Drall",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 9,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_DIPLOMATS,
    skywalkerObjective: objectives.close_range_intel_scan,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "29%",
    mapY: "33.5%"
};

export const PLANET_DURO = {
    name: "Duro",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 17,
    ccVictoryBonusValue: 2,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_SKILLED_SPACERS,
    skywalkerObjective: objectives.hyperspace_assault,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "82%",
    mapY: "75%"
};

export const PLANET_FORVAND = {
    name: "Forvand",
    imageSmall: "https://vignette.wikia.nocookie.net/starwars/images/9/97/Kaliida_Shoals_medcenter.png/revision/latest?cb=20151103020300",
    imageLarge: "https://vignette.wikia.nocookie.net/starwars/images/3/36/Ord_Cestus_medical_station.png/revision/latest?cb=20120902211459",
    imageAlt: "Forvand Space Station",
    ccResourceBonusValue: 2,
    ccVictoryBonusValue: 0,
    ccObjectives: [objectives.nebula_outskirts, objectives.independent_station],
    ccOtherObjectives: 0,
    ccStrategicEffect: STRATEGIC_EFFECT_SPYNET,
    skywalkerObjective: objectives.independent_station,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "78%",
    mapY: "48%"
};

export const PLANET_FROZ = {
    name: "Froz",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 0,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_DIPLOMATS,
    skywalkerObjective: objectives.opening_salvo,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "8%",
    mapY: "14%"
};

export const PLANET_NEW_PLYMPTO = {
    name: "New Plympto",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 9,
    ccVictoryBonusValue: 0,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: undefined,
    skywalkerObjective: objectives.dangerous_territory,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "70%",
    mapY: "69.5%"
};

export const PLANET_NUBIA = {
    name: "Nubia",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 16,
    ccVictoryBonusValue: 2,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_REPAIR_YARDS,
    skywalkerObjective: objectives.sensor_net,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "83%",
    mapY: "28%"
};

export const PLANET_PHEMIS = {
    name: "Phemis",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 2,
    ccVictoryBonusValue: 0,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: undefined,
    skywalkerObjective: objectives.most_wanted,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "37%",
    mapY: "3%"
};

export const PLANET_PLYMPTO = {
    name: "Plympto",
    imageSmall: "https://www.rolepages.com/wp-content/uploads/2018/07/main-qimg-f57ae1bbe9cc270eab090f4ac350527d-1.jpg",
    imageLarge: "https://i.pinimg.com/originals/34/c8/da/34c8da09460401bcbd130358f010ff0b.jpg",
    imageAlt: "Plympto Station within an Asteroid Field",
    ccResourceBonusValue: 1,
    ccVictoryBonusValue: 0,
    ccObjectives: [objectives.asteroids, objectives.nebula_outskirts, objectives.independent_station],
    ccOtherObjectives: 0,
    ccStrategicEffect: STRATEGIC_EFFECT_SKILLED_SPACERS,
    skywalkerObjective: objectives.salvage_run,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "49%",
    mapY: "62%"
}

export const PLANET_POLANIS = {
    name: "Polanis",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 15,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: undefined,
    skywalkerObjective: objectives.jamming_barrier,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "39%",
    mapY: "20%"
};

export const PLANET_RAIDERS_POINT = {
    name: "Raider's Point",
    imageSmall: "https://s3.envato.com/files/219105744/Untitled-1.jpg",
    imageLarge: "https://i.redd.it/a7k2i72an6qy.jpg",
    imageAlt: "Raider's Point Nebula",
    ccResourceBonusValue: 4,
    ccVictoryBonusValue: 0,
    ccObjectives: [objectives.nebula_outskirts],
    ccOtherObjectives: 0,
    ccStrategicEffect: STRATEGIC_EFFECT_SPYNET,
    skywalkerObjective: objectives.fleet_ambush,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "45%",
    mapY: "35%"
};

export const PLANET_SABERHING_ASTEROID_BELT = {
    name: "Saberhing Asteroid Belt",
    imageSmall: "https://media.istockphoto.com/photos/asteroid-field-picture-id506321720?k=6&m=506321720&s=612x612&w=0&h=95iZ83eOiy5CjRzh6i9bSNF4I9XlMTJwCvk3nmU0wNw=",
    imageLarge: "https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F1355decbdedf32d435d459f17db90415%2F205545750%2Fasteroids-main-dl.jpg&client=amp-blogside-v2&signature=3af6fe1e60ea3a6f3156b7e68e02f070ac4f2dde",
    imageAlt: "Saberhing Asteroid Belt",
    ccResourceBonusValue: 16,
    ccVictoryBonusValue: 2,
    ccObjectives: [objectives.asteroids],
    ccOtherObjectives: 0,
    ccStrategicEffect: STRATEGIC_EFFECT_REPAIR_YARDS,
    skywalkerObjective: objectives.asteroids,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "5%",
    mapY: "75%"
};

export const PLANET_SACORRIA = {
    name: "Sacorria",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 10,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: undefined,
    skywalkerObjective: objectives.solar_corona,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "22%",
    mapY: "89%"
}

export const PLANET_SELONIA = {
    name: "Selonia",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 12,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_REPAIR_YARDS,
    skywalkerObjective: objectives.fire_lanes,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "14%",
    mapY: "36%"
};

export const PLANET_SILERIA = {
    name: "Sileria",
    imageSmall: "https://ak8.picdn.net/shutterstock/videos/16731628/thumb/10.jpg",
    imageLarge: "https://i.pinimg.com/originals/59/35/e0/5935e08a0778422990c6249463e91600.jpg",
    imageAlt: "Sileria Asteroid Field",
    ccResourceBonusValue: 7,
    ccVictoryBonusValue: 0,
    ccObjectives: [objectives.asteroids],
    ccOtherObjectives: 0,
    ccStrategicEffect: STRATEGIC_EFFECT_SKILLED_SPACERS,
    skywalkerObjective: objectives.navigational_hazards,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "67%",
    mapY: "16%"
};

export const PLANET_TALFAGLIO = {
    name: "Talfaglio",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 6,
    ccVictoryBonusValue: 0,
    ccObjectives: [objectives.asteroids],
    ccOtherObjectives: 2,
    ccStrategicEffect: undefined,
    skywalkerObjective: objectives.minefields,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "80%",
    mapY: "5%"
};

export const PLANET_TALUS = {
    name: "Talus",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 8,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_SKILLED_SPACERS,
    skywalkerObjective: objectives.superior_positions,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "13%",
    mapY: "55%"
};

export const PLANET_TRALUS = {
    name: "Tralus",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 8,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_SKILLED_SPACERS,
    skywalkerObjective: objectives.intel_sweep,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "21%",
    mapY: "62%"
};

export const PLANET_TRUUZDANN = {
    name: "Truuzdann",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 8,
    ccVictoryBonusValue: 0,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: undefined,
    skywalkerObjective: objectives.capture_the_vip,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "63%",
    mapY: "30%"
};

export const PLANET_VAGRAN = {
    name: "Vagran",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 8,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_REPAIR_YARDS,
    skywalkerObjective: objectives.targeting_beacons,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "51%",
    mapY: "83%"
};

export const PLANET_XYQUINE_II = {
    name: "Xyquine II",
    imageSmall: "",
    imageLarge: "",
    imageAlt: "",
    ccResourceBonusValue: 11,
    ccVictoryBonusValue: 1,
    ccObjectives: [],
    ccOtherObjectives: 3,
    ccStrategicEffect: STRATEGIC_EFFECT_REPAIR_YARDS,
    skywalkerObjective: objectives.advanced_gunnery,
    skywalkerImperialEffect: "",
    skywalkerRebelEffect: "",
    mapX: "68%",
    mapY: "88%"
};


export const planets = [PLANET_AUREA, PLANET_CENTERPOINT, PLANET_CORELLIA, PLANET_CORFAI, PLANET_CRASHS_DRIFT, PLANET_DRALL, PLANET_DURO, PLANET_FORVAND, PLANET_FROZ, PLANET_NEW_PLYMPTO, PLANET_NUBIA, PLANET_PHEMIS, PLANET_PLYMPTO, PLANET_POLANIS, PLANET_RAIDERS_POINT, PLANET_SABERHING_ASTEROID_BELT, PLANET_SACORRIA, PLANET_SELONIA, PLANET_SILERIA, PLANET_TALFAGLIO, PLANET_TALUS, PLANET_TRALUS, PLANET_TRUUZDANN, PLANET_VAGRAN, PLANET_XYQUINE_II];