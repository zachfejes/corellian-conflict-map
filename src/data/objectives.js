export const OBJECTIVE_CATEGORY_CAMPAIGN = "Campaign";
export const OBJECTIVE_CATEGORY_ASSAULT = "Assault";
export const OBJECTIVE_CATEGORY_DEFENSE = "Defense";
export const OBJECTIVE_CATEGORY_NAVIGATION = "Navigation";

export const objectives = {
    asteroids: {
        name: "Asteroids",
        type: OBJECTIVE_CATEGORY_CAMPAIGN,
        setup: "Place obstacles as normal, replacing the station with 3 additional asteroid fields. There cannot be more than 2 copies of each asteroid field.",
        specialRule: "When one of the second player's ships overlaps an asteroid field, that obstacle has no effect.",
        endOfGame: "",
        clarifications: "",
        skywalkerRules: "As written, but after fleets are deployed (including the user of spynet tokens, but before the Grav Shift upgrade), the second player might move each asteroid field within distance 1 of its current location. If one of the first player's ships overlap an asteroid it gets two faceup damage cards (not merely 1).",
        victoryPoints: 0
    },
    independent_station: {
        name: "Independent Station",
        type: OBJECTIVE_CATEGORY_CAMPAIGN,
        setup: "Place obstacles as normal, excluding the station and replacing the 2 debris fields with 2 dust fields. Then, the second player places the station in the setup area beyond distance 1 of all obstacles and beyond distance 5 of both players' edges. The station is an armed station; place the Armed Station card near the second player's ship cards.",
        specialRule: "The armed station does not have the ability to discard damage cards or recover hull points for ships and squadrons that overlap it. \n\nAfter the Command Phase of each round, the armed station performs 1 attack against the first player's closest ship. If there are no ships in attack range, the station performs attacks against all of the first player's squadrons that are at attack range.",
        endOfGame: "",
        clarifications: "",
        skywalkerRules: "As written, but the two nebulas are set aside before placing obstacles. After all other obstacles are placed, the second player places both nebulas.",
        victoryPoints: 0
    },
    nebula_outskirts: {
        name: "Nebula Outskirts",
        type: OBJECTIVE_CATEGORY_CAMPAIGN,
        setup: "Place obstacles as normal, replacing the 3 asteroid fields with 2 dust fields.",
        specialRule: "The total number of command dials that must be assigned to each of the first player's ship's during each Command Phase is increased by 1. \n\nThe total number of command dials that must be assigned to each of the second player's ship's during each Command Phase is decreased by 1.",
        endOfGame: "",
        clarifications: "",
        skywalkerRules: "As written, but the two nebulas are set aside before placing obstacles. Affter the fleets are deployed (and spynet tokens are used), the second player places both nebulas. If a command 1 ship of the second player reveals its dial he might change it to any commmand.",
        victoryPoints: 0
    },
    base_defense_armed_station: {
        name: "Base Defense: Armed Station",
        type: OBJECTIVE_CATEGORY_CAMPAIGN,
        setup: "Place obstacles as normal, excluding the station. Then, the second player places the station in the setup area beyond distance 1 of all obstaclees and beyond distance 5 of the first player's edge. The station is an armed station; place the Armed Station card near the second player's ship cards.",
        specialRule: "The first player's ships and squadrons cannot resolve the armed station's effect to discard damage cards or recover hull points when they overlap it. \n\nOnce per round, instead of activating a ship, the second player can perform 1 attack with the armed station.",
        endOfGame: "",
        clarifications: "The second player can only resolve this card's Special Rule effect if the Armed Station could perform an attack against a ship or squadron that rolls at least 1 die.",
        skywalkerRules: "As written, but if the second player is from the imperial team he places all obstacles, the Armed Station has a hull of 15, and he gains 30 victory points, if the Armed Station is not destroyed.",
        victoryPoints: 0
    },
    base_defense_fighter_wing: {
        name: "Base Defense: Fighter Wing",
        type: OBJECTIVE_CATEGORY_CAMPAIGN,
        setup: "Before deploying fleets, the second player may choose up to 40 fleet points of additional non-unique squadrons and add them to his fleet (even if this exceeds the number of fleet points he could normally spend on squadrons). Assign squadron ID tokens of a different color to these squadrons.",
        specialRule: "",
        endOfGame: "The fleet point cost of the additional squadrons is added to the first player's score as normal if they are destroyed. After the winner is determined, the second player removes the additional squadrons from his fleet.",
        clarifications: "",
        skywalkerRules: "",
        victoryPoints: 0
    },
    base_defense_ion_cannon: {
        name: "Base Defense: Ion Cannon",
        type: OBJECTIVE_CATEGORY_CAMPAIGN,
        setup: "The second player must deploy all of his ships and squadrons before the first player. After deploying fleets, the second player places 3 objective tokens anywhere in the play area.",
        specialRule: "At the end of the Command Phase, the second player may select 1 enemy ship at distance 1-3 of an objective token and perform an attack against that ship. The attacker is treated as if it is a ship with a battery armament of 4 blue dice, but is not friendly to any ship or squadron. The attack is treated as being at medium range, cannot be obstructed, can target any of the defender's hull zones, and has the following critical effect: \n\Blue CRITICAL HIT: The defender must choose and exhaust 1 of his defense tokens.",
        endOfGame: "",
        clarifications: "This card's Special Rule effect can only be used to attack 1 enemy ship per round. \n\nWhile attacking with this card's Special Rule effect, if the defending hull zone has no shields, the attacker can choose to resolve the standard critical effect instead of the card's critical effect.",
        skywalkerRules: "",
        victoryPoints: 0
    },
    hyperlane_raid: {
        name: "Hyperlane Raid",
        type: OBJECTIVE_CATEGORY_CAMPAIGN,
        setup: "The 3' edges of the play area become the player edges. The second player placces all obstacles. Obstacles must be placed beyond 2 range ruler lengths of both player edges, and beyond distance 1 of other obstacles.",
        specialRule: "The second player assigns a total of 4 objective tokens to his ships or squadrons. He must assign them to ships, if able, and no ship or squadron can have more than 1. The first player gains 1 victory token for each objective token that cannot be assigned. \n\nWhen a ship or squadron with an objective token is destroyed, the first player gains 1 victory token.",
        endOfGame: "The second player gains 1 victory token for each ship (not squadron) with an objective token within 2 range ruler lengths of the first player's edge. The first player's team gains 20 resource points per victory token he gained. The winner's team also gains 40 resource points. \n\nIf scores are equal, the first player wins.",
        clarifications: "The first player gains 1 victory token for each enemy ship that retreats to hyperspace. \n\nThe second player does not gain 1 victory token for each ship within 2 range ruler lengths of the first player's edge that retreats to hyperspace at the end of the game.",
        skywalkerRules: "Setup is as written. All other rules are replaced as follows: \n\nSpecial Rule: After deploying fleets (including spynet tokens), the first player chooses 2 enemy ships. If he can choose only less, he instantly gets one victory token per ship less. The chosen ships are marked with an objective token. \n\nEnd of Game: The second player gains 1 victory token per objective ship completely within the deployment zone of the first player. The first player gains 1 victory token and his team in addition 40 resource points per objective ship destroyed or not completely inside his deployment zone. The winner's team also gets 40 resource points. \n\nVictory Points: 20",
        victoryPoints: 15
    },
    show_of_force: {
        name: "Show of Force",
        type: OBJECTIVE_CATEGORY_CAMPAIGN,
        setup: "Place obstacles as normal, excluding the station. Then, the second player places 2 stations in the setup area. Each station must be beyond distance 1 of all obstacles and beyond distance 3 of both players' edges. Both stations are unarmed stations; place both Unarmed Station cards near the second player's ship cards.",
        specialRule: "The first player's ships and squadrons cannot resolve an unarmed station's effect to discard damage cards or recover hull points when they overlap it.",
        endOfGame: "The second player gains 1 victory token for each unamed station that is not destroyed. The first player gains 1 victory token and his team gains 40 resource points for each station that is destroyed. The winner's team also gains 40 resource points if he wins the game.",
        clarifications: "If the second player retreats all of his remaining ships to hyperspace, treat any remaining station as destroyed when determining score at the end of the game.",
        skywalkerRules: "As written, but stations have only 6 hull each.",
        victoryPoints: 20
    },
    fighter_ambush: {
        name: "Fighter Ambush",
        type: OBJECTIVE_CATEGORY_DEFENSE,
        setup: "Before deploying fleets, the second player sets aside all of his squadrons. \n\nAfter deploying fleets, the second player deploys all of his squadrons. Each of his squadrons can be placed as normal or at distance 1 of an obstacle, but all his squadrons must be beyond distance 5 of the first player's edge.",
        specialRule: "After a squadron performs an attack against a ship, if the defender was dealt at least 1 damage card, the squadron's owner gains 1 victory token.",
        endOfGame: "",
        clarifications: "",
        skywalkerRules: "Both players set aside their squadrons. Ships are deployed normally. Then the first player deploys all his squadrons within range 2 of his ships. Then the second player deploys his squadrons as printed on the objective card. \n\nWhen activating a ship the second player can chose to execute his squadron command after executing a maneuver (even affter an Engine Techs/Quantum Storm maneuver).",
        victoryPoints: 15
    },
    contested_outpost: {
        name: "Contested Outpost",
        type: OBJECTIVE_CATEGORY_DEFENSE,
        setup: "Place obstacles as normal, excluded the station. Then the second player places the station in the setup area beyond distance 1 of all obstacles and beyond distance 5 of both players' edges.",
        specialRule: "The station does not obstruct attacks and does not have the ability to discard damage cards or recover hull points.",
        endOfGame: "Each player sums the command values of his ships at distance 1 of the station. The player with the highest total gains 1 victory token.",
        clarifications: "",
        skywalkerRules: "The second player can use the station to heal his ships and squadrons.",
        victoryPoints: 20
    },
    precision_strike: {
        name: "Precision Strike",
        type: OBJECTIVE_CATEGORY_ASSAULT,
        setup: "After deploying fleets, each of the second player's ships gains a CONCENTRATE FIRE token.",
        specialRule: "When a squadron with BOMBER or a ship is attacking, it may spend 1 die with a HIT icon to flip 1 random facedown damage card on the defender faceup. \n\nAfter a squadron with BOMBER or a ship performs an attack, its owner gains 1 victory token for each damage card that was dealt faceup or flipped faceup during that attack.",
        endOfGame: "",
        clarifications: "",
        skywalkerRules: "As written, but only the second player can spend dice in order to flip damage cards.",
        victoryPoints: 15
    },
    close_range_intel_scan: {
        name: "Close-Range Intel Scan",
        type: OBJECTIVE_CATEGORY_ASSAULT,
        setup: "Place obstacles, adding the 2 dust fields, as normal.",
        specialRule: "While one of the second player's ships is attacking a ship, the attacker may spend 1 die with an ACCURACY icon. If it does, the attacker's owner gains 1 victory token. \n\nWhile one of the first player's ships is attacking a ship, the attacker may spend 2 dice with ACCURACY icons. If it does, the attacker's owner gains 1 victory token.",
        endOfGame: "",
        clarifications: "",
        skywalkerRules: "Completely ignore the standard objective rules. Instead, use the following instructions: \n\nSetup: The second player marks on of his non-flotilla ships as his objective ship. \n\nSpecial Rule: When the second player attacks with his objective ship, he might decide to cancel all attack dice of one attack before rolling dice. Instead he can place a victory token on the ship card of the attacked ship, if it is in close range of the attacking hull zone. General Rieekan's ability cannot be used on the objective ship of the second player. \n\nEnd of Game: The second player adds half the ship value of each ship card (excluding upgrades) that has at least one victory marker on it to his total points. The fleet point cost of a destroyed objective ship is doubles. Do not double the cost of its upgrades.",
        victoryPoints: 10
    },
    hyperspace_assault: {
        name: "Hyperspace Assault",
        type: OBJECTIVE_CATEGORY_DEFENSE,
        setup: "Before deploying fleets, the second player sets aside 1 of his small or medium ships and up to 3 of his squadrons; he does not deploy them during setup. Then he places 3 objective tokens in the play area beyond distance 3 of both players' edges.",
        specialRule: "At the start of any round after the first round, the second player can deploy the ship and squadrons that he set aside at distance 1 of 1 objective token. Then remove all objecctive tokens. The ship can be deployed overlapping squadrons; the first player places those squadrons as though the ship had overlapped them while executing a maneuver. \n\nIf the second player does not deploy, he may move each objective token to within distance 1 of its current position.",
        endOfGame: "",
        clarifications: "Ships and squadrons set aside are not in play. Their abilities and upgrades are inactive and they cannot be affected by any abilities. When a squadron that was set aside is deployed, set its activation slider to display the same color as the initiative token. \n\nDuring setup, if the second player must deploy a squadron but cannot because they have no ships in the play area, their squadrons that are not set aside are destroyed. \n\nThe second player cannot move objective tokens at the start of the first round. \n\nIf a player has no ships in play, their ships and squadrons that are set aside are destroyed. If the game goes to time, or the end of the sixth round, their ships and squadrons that are set aside are destroyed.",
        skywalkerRules: "As written, but the hyperspace ship is not removed bbefore deployment. Instead, the second player may make on of his ship deployments into hyperspace by setting aside a small or medium ship during its deployment instead of placing it in the deployment zone. If he does so, he may subsequently depoy a number of squadrons equal to that ship's squadron value into hyperspace on their deployments as well.",
        victoryPoints: 0
    },
    opening_salvo: {
        name: "Opening Salvo",
        type: OBJECTIVE_CATEGORY_ASSAULT,
        setup: "After deploying fleets, assign 1 objective token to each ship.",
        specialRule: "The first time a ship performs an attack against another ship, discard the attacker's objective token. If the attacker belongs to the first player, he adds 2 red dice to the attack pool. If the attacker belongs to the second player, he adds 2 dice, each of any color, to the attack pool.",
        endOfGame: "Each player increases his final score by half the fleet point cost of each enemy ship in the play area that has at least 1 damage card, rounded up.",
        clarifications: "",
        skywalkerRules: "As written, but the first player can only mark as many ships with objective tokens as the second player has marked.",
        victoryPoints: 0
    },
    dangerous_territory: {
        name: "Dangerous Territory",
        type: OBJECTIVE_CATEGORY_NAVIGATION,
        setup: "Obstacles must be placed in the setup area beyond distance 5 of both players' edges. After placing obstacles, place 1 objective token on each obstacle.",
        specialRule: "When a ship overlaps an obstacle, the ship's owner may remove the objective token on that obstacle to gain 1 victory token. \n\nWhen one of the second player's ships overlaps an asteroid field or debris field, that obstacle has no effect.",
        endOfGame: "",
        clarifications: "A squadron with strategic can move objective tokens off of or onto obstacles. An objective token can only be removed to gain 1 victory token if it is overlaping an obstacle. If multiple objective tokens are overlapping an obstacle, only 1 can be removed when a ship overlaps that obstacle. \n\nThis card's Special Rule effect resolves during the Move Ship step while executing a maneuver.",
        skywalkerRules: "Follow these variations to the standard rules: \n\nSetup: The second player places all obstacles. Add 2 Nebulas and 3 additional asteroid fields. There cannot be more than 2 copies of each asteroid field. \n\nSpecial Rule: When one of the second player's ships overlap an asteroid field or debris field, that obstacle has no effect for that ship. Nebulas do not effect the second player. Obstacles do not block line of sight for the second player.",
        victoryPoints: 15
    },
    sensor_net: {
        name: "Sensor Net",
        type: OBJECTIVE_CATEGORY_NAVIGATION,
        setup: "After placing obstacles, the players alternate placing a total of 4 objective tokens in the setup area, starting with the first player. Each token must be placed in the setup area beyond distance 5 of both players' edges and beyond distance 3 of all other objective tokens.",
        specialRule: "When a ship reveals a command dial, if it is at distance 1 of at least 1 objective token, its owner gains 1 victory token. \n\nThen its owner chooses 1 of those objective tokens. The opposing player must move that token so it is at distance 1-2 of its current location. If he is the second player, he moves it so it is at distance 1-4 of its current location.",
        endOfGame: "",
        clarifications: "",
        skywalkerRules: "Standard rules for this objective.",
        victoryPoints: 15
    },
    most_wanted: {
        name: "Most Wanted",
        type: OBJECTIVE_CATEGORY_ASSAULT,
        setup: "After deploying fleets, the second player chooses 1 of his ships and 1 of the first player's ships to be the objective ships.",
        specialRule: "While a ship is attacking an objective ship, the attacker may add 1 die of any color that is already in its attack pool to its attack pool.",
        endOfGame: "The fleet point cost of a destroyed objective ship is doubled. Do not double the cost of its upgrade cards.",
        clarifications: "",
        skywalkerRules: "The second player does not choose an objective ships for his fleet. If the objective ship of the first player is not destroyed, the first playeer does get half of its ship points (excluding upgrades) as victory points.",
        victoryPoints: 0
    },
    salvage_run: {
        name: "Salvage Run",
        type: OBJECTIVE_CATEGORY_NAVIGATION,
        setup: "The second player places the station in the center of the play area. Then, starting with the second player, the players alternate placing the remaining obstacles, adding the 2 dust field obstacles, at distance 1-5 of the station. \n\nAfter placing obstacles, the second player places a total of 4 objective tokens in the setup area. Each token must be at distance 1 of the station and beyond distance 1 of all other objective tokens. \n\nAfter deploying fleets, each of the second player's ships gain a NAVIGATION token.",
        specialRule: "When a player's ship reveals a command dial, that player may chose 1 objective token at distance 1 of that ship and remove it from the play area to gain 1 victory token.",
        endOfGame: "",
        clarifications: "",
        skywalkerRules: "As written, but after placing the station the second player places two obstacles of his choice (according to the restrictions printed on the objective card). Then starting with the first player they alternate placing the remaining obstacles, starting with the first player, at distance 1-5 of the station.",
        victoryPoints: 20
    },
    jamming_barrier: {
        name: "Jamming Barrier",
        type: OBJECTIVE_CATEGORY_DEFENSE,
        setup: "Place obstacles as normal, excluding the station and replacing the 2 debris fields with the 2 dust fields. \n\nAfter deploying fleets, the second player places 2 objective tokens in the setup area at distance 1-5 of each other.",
        specialRule: "While attacking if neither the attacker or defender are overlapping an objective token and line of sight is traced across an objective token or the line between the two objective tokens, the attacker must choose and remove half of the dice from the attack pool, rounded down, before rolling.",
        endOfGame: "",
        clarifications: "",
        skywalkerRules: "As written. In addition: \n\nAt the start of any game round after the first one, the second player may move each token within distance 1 of its current position.",
        victoryPoints: 0
    },
    fleet_ambush: {
        name: "Fleet Ambush",
        type: OBJECTIVE_CATEGORY_DEFENSE,
        setup: "The portion of the setup area that is beyond distance 5 of any edge of the setup area is the AMBUSH ZONE. Players mark the corners of the ambush zone with objective tokens. \n\nPlayers take turns deploying fleets as normal but must deploy all ships before deploying any squadrons. The first player must deploy ships within the ambush zone on his odd-numbered deployment turn, starting with his first turn. He cannot deploy ships or squadrons overlapping obstacles in the ambush zone. After setup is complete, he removes all objective tokens from the play area.",
        specialRule: "",
        endOfGame: "",
        clarifications: "After a player has placed all of his ships he begins placing squadrons on his next deployment turn. The other player continues placing ships until all of his ships have been placed, then he begins placing squadrons. \n\nThe first player can deploy squadrons within distance 1-2 of a ship inside the ambush zone.",
        skywalkerRules: "As written, but with the following changes: \n\nOn the first player's odd deployments, starting with the first deployment, the second player chooses one of the first player's ships. The first player must deploy that ship within the ambush zone.",
        victoryPoints: 0
    },
    solar_corona: {
        name: "Solar Corona",
        type: OBJECTIVE_CATEGORY_NAVIGATION,
        setup: "The first player must deploy all of his ships and squadrons before the second player. After the second player deploys ships and squadrons, the second player must choose 1 of the 3' edges of the play area to be the CORONA.",
        specialRule: "While a ship is attacking, before resolving any attack effects, if any portion of the corona is inside the attacking hull zone's firing arc, the attacker must discard 1 die with an ACCURACY icon from the attack pool, if able.",
        endOfGame: "",
        clarifications: "",
        skywalkerRules: "Standard rules for this objective.",
        victoryPoints: 0
    },
    fire_lanes: {
        name: "Fire Lanes",
        type: OBJECTIVE_CATEGORY_DEFENSE,
        setup: "After placing obstacles, the second player places 3 objective tokens in the setup area beyond distance 4 of both players' edges. Then the first player may move each objective token to within distance 1-2 of its current position.",
        specialRule: "Each player gains 1 victory token for each objective he controls. To determine control of each token, players measure attack range and line of sight from each of their ships' hull zones as if performing attacks with battery armament targeting that objective token. The player with the highest total number of dice in his combined attack pool controls that token. If a player's ship or squadron overlaps an objective token, his opponent controls that token; if both players' ships or squadrons overlap the same token, neither player controls it.",
        endOfGame: "",
        clarifications: "",
        skywalkerRules: "Standard rules for this objective.",
        victoryPoints: 15
    },
    navigational_hazards: {
        name: "Navigational Hazards",
        type: OBJECTIVE_CATEGORY_NAVIGATION,
        setup: "Place obstacles as normal, excluding the station. Then the second player places the station in the setup area beyond distance 1 of all obstacles and beyond distance 5 of both players' edges of the play area.",
        specialRule: "When a ship overlaps an obstacle and suffers 1 or more damage or is dealt 1 or more damage cards, the opposing fleet's owner gains 1 victory token.",
        endOfGame: "Starting with the second player and alternating, each player chooses 1 asteroid or debris field that does not have an objective token on it, and moves it to within distance 1-2 of its current location. Then, he places an objective token on that obstacle. An obstacle cannot be moved so that it overlaps a ship, squadron, or other obstacle. At the start of the next round, remove all objective tokens from the play area.",
        clarifications: "",
        skywalkerRules: "As written, but after obstacles have been moved, the second player may in addition choose one obstacle and move it again within range 2 of its current position.",
        victoryPoints: 15
    },
    superior_positions: {
        name: "Superior Positions",
        type: OBJECTIVE_CATEGORY_NAVIGATION,
        setup: "The first player must deploy all of his ships and squadrons before the second player.",
        specialRule: "After a ship or squadron performs an attack against the rear hull zone of another ship, if the defender suffered at least 1 damage, the attacker's owner gains 1 victory token.",
        endOfGame: "",
        clarifications: "",
        skywalkerRules: "Standard rules for this objective.",
        victoryPoints: 15
    },
    intel_sweep: {
        name: "Intel Sweep",
        type: OBJECTIVE_CATEGORY_NAVIGATION,
        setup: "After placing obstacles the players alternate placing a total of 5 objective tokens in the setup area, starting with the second player. Each token must be placed in the play area beyond distance 5 of both players' edges and beyond distance 3 of all other objective tokens. Then each player chooses one of his ships to be an objective ship, starting with the first player.",
        specialRule: "When a player's objective ship reveals a command dial, that player may choose 1 objective token at a distance of 1 of that ship and remove it from the play area to gain 1 victory token.",
        endOfGame: "If a player has more victory tokens than his opponent, increase his final score by 75.",
        clarifications: "",
        skywalkerRules: "Standard rules for this objective.",
        victoryPoints: 0
    },
    capture_the_vip: {
        name: "Capture the VIP",
        type: OBJECTIVE_CATEGORY_DEFENSE,
        setup: "After placing obstacles, the second player places 1 objective token at distance 1 of any obstacle and beyond distance 5 of all edges of the setup area.",
        specialRule: "When a ship at distance 1 of the objectivve token reveals a command dial, the ship's owner mmay remove that objective token from the play area and place it on that ship's card. \n\nWhen a ship with the objective token on its ship card is destroyed, the opposing player places the objective token in the play area touching the destroyed ship's base.",
        endOfGame: "If a player's ship has the objective token, that player gains 1 victory token.",
        clarifications: "",
        skywalkerRules: "Standard rules for this objective, but Victory Points are increased to 75.",
        victoryPoints: 50
    },
    minefields: {
        name: "Minefields",
        type: OBJECTIVE_CATEGORY_NAVIGATION,
        setup: "The second player places all obstacles. He can place them anywhere in the setup area (even in deployment zones) and must place them beyond distance 5 of each other. Then he places 6 objective tokens. Each objective token must be placed at distance 1 of an obstacle and beyond distance 1 of all other objective tokens.",
        specialRule: "If a ship ends its movement at distance 1 of an objective token, remove that objective token from the play area and roll 2 blue dice. That ship is dealt 1 facedown damage card for each HIT or CRITICAL HIT icon rolled. If there is at least 1 CRITICAL HIT icon, deal the first damage card faceup.",
        endOfGame: "",
        clarifications: "This card's Special Rule effect resolves during the Move Ship step while executing a maneuver.",
        skywalkerRules: "As written, but the objective tokens do not need to be in a special distance of an obstacle. If the second player has at least one squadron at distance 1 of an objective token, his ships do not trigger it.",
        victoryPoints: 0
    },
    targeting_beacons: {
        name: "Targeting Beacons",
        type: OBJECTIVE_CATEGORY_ASSAULT,
        setup: "After placing obstacles, the players alternate placing a total of 4 objective tokens in the setup area, starting with the second player.",
        specialRule: "While one of the second player's ships is attacking a ship that is at distance 1-2 of an objective token, the attacker may reroll up to 2 attack dice in the attack pool.",
        endOfGame: "",
        clarifications: "This card's Special Rule cannot resolve more than once during each attack, even if there is more than one objective token at distance 1-2 of the defender.",
        skywalkerRules: "The following changes should be applied: \n\nSetup: There are five tokens placed in total. All are placed by the second player. \n\nSpecial Rule: Replace the original Special Rule with this one. When a ship of the first player ends its movement in distance 3 of at least one of the objective tokens, the second player might remove the token and choose and spend one of the defense tokens of that ship.",
        victoryPoints: 0
    },
    advanced_gunnery: {
        name: "Advanced Gunnery",
        type: OBJECTIVE_CATEGORY_ASSAULT,
        setup: "After deploying fleets, each player chooses 1 of his ships to be an objective ship, starting with the first player.",
        specialRule: "The first player's objective ship may perform each of its attacks from the same hull zone. It cannot target the same hull zone or squadron more than once each round with that hull zone. \n\nThe second player's objective ship may perform each of its attacks from the same hull zone, and it may do so against the same target.",
        endOfGame: "The fleet point cost of a destroyed objective ship is doubled. Do not double the cost of its upgrade cards.",
        clarifications: "If either player's objective ship is equipped with Gunnery Team and attacks from the same hull zone during its activation, that ship cannot target the same ship or squadron more than once during its activation. \n\nIf either player's objective ship is equipped with Slaved Turrets, that ship cannot attack more than once per round.",
        skywalkerRules: "As written, but the ability of the objective ship can be used, even if it has Gunnery Teams or Slaved Turrets equipped.",
        victoryPoints: 0
    },
    blockade_run: {
        name: "Blockade Run",
        type: OBJECTIVE_CATEGORY_ASSAULT,
        setup: "The 3' edges of the play area become the player edges. Each player's deployment zone is within 2 range rule lengths of his edge. The second player places all obstacles. Obstacles must be placed beyond 2 range ruler lengths of both player edges, and beyond distance 1 of other obstacles.",
        specialRule: "The second player assigns 1 objective token to each of his ships. \n\nWhen a ship with an objective token is destroyed, the first player gains 1 victory token.",
        endOfGame: "The second player gains 1 victory token for each ship with an objective token within the first player's deployment zone.",
        clarification: "The second player assigns 1 objective token to each of their ships after the objective is chosen, before any ships can be set aside by card effects (like Admiral Raddus and Profundity for example).",
        skywalkerRules: "Setup and Victory Points are as written. The Special Rule should be ignored, and the End of Game is replaced with: The first player gains 1 victory token per ship (including flotillas) completely within the deployment zone of the second player. The second player gains 1 victory token per enemy ship destroyed or not completely within his deployment zone.",
        victoryPoints: 20
    }
};