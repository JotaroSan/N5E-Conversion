// Core N5E Modification File - Init & Ready
// Init - Add missing Types
// Ready - Remove DND5E Items not longer needed
Hooks.on("init", function() {

    // Define the new damage and resistance types
    CONFIG.DND5E.damageTypes["chakra"] = "Chakra";
    CONFIG.DND5E.damageResistanceTypes["chakra"] = "Chakra";
    CONFIG.DND5E.damageTypes["wind"] = "Wind";
    CONFIG.DND5E.damageResistanceTypes["wind"] = "Wind";
    CONFIG.DND5E.damageTypes["earth"] = "Earth";
    CONFIG.DND5E.damageResistanceTypes["earth"] = "Earth";

    // Add missing Spell Components
    CONFIG.DND5E.spellComponents["handseals"] = {label: "Hand Seals",abbr: "HS"};
    CONFIG.DND5E.spellComponents["molding"] = {label: "Chakra Molding",abbr: "CM"};
    CONFIG.DND5E.spellComponents["chakraseals"] = {label: "Chakra Seals",abbr: "CS"};
    CONFIG.DND5E.spellComponents["mobility"] = {label: "Mobility",abbr: "M"};
    CONFIG.DND5E.spellComponents["ninjatools"] = {label: "Ninja Tools",abbr: "NT"};
    CONFIG.DND5E.spellComponents["weapons"] = {label: "Weapons",abbr: "W"};
    CONFIG.DND5E.spellComponents["fuinjutsu"] = {label: "Fuinjutsu",abbr: "F"};
    CONFIG.DND5E.spellComponents["medical"] = {label: "Medical",abbr: "Med"};
    CONFIG.DND5E.spellComponents["clash"] = {label: "Clash",abbr: "CL"};

    // Add missing sense, chakra sight
    CONFIG.DND5E.senses["chakra sight"] = "Chakra sight";

    // Weapon Proficiency
    // Remove All Existing DND5E Items
    CONFIG.DND5E.weaponIds = {};
    // Add missing weaponIds
    CONFIG.DND5E.weaponIds["battlewire"] = "N5EConversion.n5e-items.81zHkZgJJUswAl8C";
    CONFIG.DND5E.weaponIds["blowgun"] = "N5EConversion.n5e-items.ZdkI4f6cAvCaSDc1";
    CONFIG.DND5E.weaponIds["handaxe"] = "N5EConversion.n5e-items.GUsi2ly8gxYK0TH2";
    CONFIG.DND5E.weaponIds["chainedhandscythe"] = "N5EConversion.n5e-items.M8tl0zQAH18FxBLo";
    CONFIG.DND5E.weaponIds["handscythe"] = "N5EConversion.n5e-items.X1dlx00oTkwMp6ei";
    CONFIG.DND5E.weaponIds["kunai"] = "N5EConversion.n5e-items.RbcM59vdQ9ZgYBKV";
    CONFIG.DND5E.weaponIds["quarterstaff"] = "N5EConversion.n5e-items.XAVJqdQWLqV8jffm";
    CONFIG.DND5E.weaponIds["spear"] = "N5EConversion.n5e-items.Qrxp2ypJNrdBfnxF";
    CONFIG.DND5E.weaponIds["tanto"] = "N5EConversion.n5e-items.HbrlOL6HWNiuNaiU";
    CONFIG.DND5E.weaponIds["weightedchain"] = "N5EConversion.n5e-items.MVeoq1E1DCwCZTwc";
    CONFIG.DND5E.weaponIds["senbon"] = "N5EConversion.n5e-items.AqeyHEGdWCFAqWP0";
    CONFIG.DND5E.weaponIds["shortbow"] = "N5EConversion.n5e-items.1vdllonFUUQnkUvJ";
    CONFIG.DND5E.weaponIds["shuriken"] = "N5EConversion.n5e-items.YReiEBmBtKhLaoxF";
    CONFIG.DND5E.weaponIds["sling"] = "N5EConversion.n5e-items.yNkLtAbQTIZY7ZCC";
    CONFIG.DND5E.weaponIds["broadsword"] = "N5EConversion.n5e-items.xe110rLxmQETPJyq";
    CONFIG.DND5E.weaponIds["chainedspear"] = "N5EConversion.n5e-items.PTHvIz6IH9HpbHg7";
    CONFIG.DND5E.weaponIds["combatbracers"] = "N5EConversion.n5e-items.7JdFwOiRWfq35OWT";
    CONFIG.DND5E.weaponIds["greataxe"] = "N5EConversion.n5e-items.5xpZcxYjWmAjXo1j";
    CONFIG.DND5E.weaponIds["hookedlance"] = "N5EConversion.n5e-items.bEtYwzE76RhPISms";
    CONFIG.DND5E.weaponIds["ironclaw"] = "N5EConversion.n5e-items.00uRBzVYYgEZFy4Q";
    CONFIG.DND5E.weaponIds["jitte"] = "N5EConversion.n5e-items.M5abrR0syMtZh0Xx";
    CONFIG.DND5E.weaponIds["katana"] = "N5EConversion.n5e-items.h9iLNkcRhCnDZGAO";
    CONFIG.DND5E.weaponIds["naginata"] = "N5EConversion.n5e-items.5Ay4NnbFHXHmFTi0";
    CONFIG.DND5E.weaponIds["nunchaku"] = "N5EConversion.n5e-items.14f6YrXLHRNXJXzA";
    CONFIG.DND5E.weaponIds["odachi"] = "N5EConversion.n5e-items.SMFAFXkdTIvipYqB";
    CONFIG.DND5E.weaponIds["sasumata"] = "N5EConversion.n5e-items.pc6Z8vmwn4TKyXya";
    CONFIG.DND5E.weaponIds["scythe"] = "N5EConversion.n5e-items.AEHqJwlyfAPCGPgX";
    CONFIG.DND5E.weaponIds["tetsubo"] = "N5EConversion.n5e-items.mlxyNFZW5tPGsb0R";
    CONFIG.DND5E.weaponIds["tonfa"] = "N5EConversion.n5e-items.AxFRDY4CRyUOEoLo";
    CONFIG.DND5E.weaponIds["warclub"] = "N5EConversion.n5e-items.lN8v13BroQh5YgI5";
    CONFIG.DND5E.weaponIds["whip"] = "N5EConversion.n5e-items.W5ZfgVCgxsGpLzR4";
    CONFIG.DND5E.weaponIds["knuckleblade"] = "N5EConversion.n5e-items.VSbOUoRmdTYpBPaS";
    CONFIG.DND5E.weaponIds["chakram"] = "N5EConversion.n5e-items.L1AT9ekTDUJQHB9T";
    CONFIG.DND5E.weaponIds["monsterchakram"] = "N5EConversion.n5e-items.nMbckfVmQyomfZY3";
    CONFIG.DND5E.weaponIds["longbow"] = "N5EConversion.n5e-items.ZTgwdJyugEGiMJqu";
    CONFIG.DND5E.weaponIds["crossbowhand"] = "N5EConversion.n5e-items.7efcoLqgvay98RUV";
    CONFIG.DND5E.weaponIds["crossbowheavy"] = "N5EConversion.n5e-items.OU67WU4IBvI5Uszm";
    CONFIG.DND5E.weaponIds["net"] = "N5EConversion.n5e-items.0gs6UCdBaKZ5AIMl";
    CONFIG.DND5E.weaponIds["fumashuriken"] = "N5EConversion.n5e-items.TXvRdUiQQuxwTgyF";
    CONFIG.DND5E.weaponIds["monstershuriken"] = "N5EConversion.n5e-items.sxBvPLkkop5jkScv";

    // Armor Proficiency
    // Remove All Existing DND5E Items
    CONFIG.DND5E.armorIds = {};
    // Add missing Armor Proficincies
    CONFIG.DND5E.armorIds["padded"] = "N5EConversion.n5e-items.PXA5xkWhB5D1y2ZL";
    CONFIG.DND5E.armorIds["leather"] = "N5EConversion.n5e-items.wr07gpjgWZQw2NgC";
    CONFIG.DND5E.armorIds["studded"] = "N5EConversion.n5e-items.zHootXIbZBSCHawn";
    CONFIG.DND5E.armorIds["combat"] = "N5EConversion.n5e-items.II33J57LVqZSqnW2";
    CONFIG.DND5E.armorIds["armored"] = "N5EConversion.n5e-items.LfNh1vvFhiIFlKdg";
    CONFIG.DND5E.armorIds["chunin"] = "N5EConversion.n5e-items.ycaJ6PMpeLn8Ymw7";
    CONFIG.DND5E.armorIds["reinforced"] = "N5EConversion.n5e-items.oUeGPcPifVZsUVrv";
    CONFIG.DND5E.armorIds["flak"] = "N5EConversion.n5e-items.lY4pmzqaXsy7c0Vy";
    CONFIG.DND5E.armorIds["armorflak"] = "N5EConversion.n5e-items.I7yXden0O9KSv7tk";
    CONFIG.DND5E.armorIds["battle"] = "N5EConversion.n5e-items.Rc8XgYyUD3Vd9XU1";
    CONFIG.DND5E.armorIds["shinobi"] = "N5EConversion.n5e-items.90v6et8pq48v72O5";
    CONFIG.DND5E.armorIds["jonin"] = "N5EConversion.n5e-items.A6gXO1rI6UWUQnJ9";
    CONFIG.DND5E.armorIds["armoredjonin"] = "N5EConversion.n5e-items.WFkedOjW63ZeVCDo";
    CONFIG.DND5E.armorIds["ronin"] = "N5EConversion.n5e-items.0g3HQc6zT0GmYoYj";
    CONFIG.DND5E.armorIds["samurai"] = "N5EConversion.n5e-items.1ylLZzKoatc5kybx";

    // Add Missing ArmorClasses
    CONFIG.DND5E.armorClasses = {};
    CONFIG.DND5E.armorClasses["default"] = {label:"Skin", formula: "10 + floor(@prof/2) + @abilities.dex.mod"};
    CONFIG.DND5E.armorClasses["shark"] = {label:"Shark Skin", formula: "10 + floor(@prof/2) + @abilities.con.mod"};
    CONFIG.DND5E.armorClasses["psycha"] = {label:"Psy Cha", formula: "10 + floor(@prof/2) + @abilities.cha.mod"};
    CONFIG.DND5E.armorClasses["psywis"] = {label:"Psy Wis", formula: "10 + floor(@prof/2) + @abilities.wis.mod"};
    CONFIG.DND5E.armorClasses["evasive"] = {label:"Evasive", formula: "10 + @prof + @abilities.dex.mod"};
    CONFIG.DND5E.armorClasses["geo"] = {label:"Geo", formula: "13 + floor(@prof/2) + @abilities.con.mod"};
    CONFIG.DND5E.armorClasses["sharingan"] = {label:"Sharingan", formula: "10 + floor(@prof/2) + @abilities.dex.mod + @abilities.int.mod"};
    CONFIG.DND5E.armorClasses["bone"] = {label:"Bone", formula: "10 + floor(@prof/2) + @abilities.dex.mod + @abilities.con.mod"};
    CONFIG.DND5E.armorClasses["unarmored"] = {label:"Martial Defense", formula: "10 + @prof + @abilities.dex.mod + @abilities.wis.mod"};
    CONFIG.DND5E.armorClasses["custom"] = {label:"Custom"};

	// Add Status Effects
	CONFIG.statusEffects.push({ id: "burned1", label: "Burned [1]", icon: "modules/N5E-Conversion/icons/conditions/Burned-1.png" })

    // Add Missing Weapon Properties
    CONFIG.DND5E.weaponProperties = {};
    CONFIG.DND5E.weaponProperties['amm'] = "Ammunition";
    CONFIG.DND5E.weaponProperties['blk'] = "Blocking";
    CONFIG.DND5E.weaponProperties['crit'] = "Critical";
    CONFIG.DND5E.weaponProperties['dly'] = "Deadly";
    CONFIG.DND5E.weaponProperties['dis'] = "Disarm";
    CONFIG.DND5E.weaponProperties['fin'] = "Finesse";
    CONFIG.DND5E.weaponProperties['grp'] = "Grapple";
    CONFIG.DND5E.weaponProperties['hvy'] = "Heavy";
    CONFIG.DND5E.weaponProperties['hid'] = "Hidden";
    CONFIG.DND5E.weaponProperties['lgt'] = "Light";
    CONFIG.DND5E.weaponProperties['ldg'] = "Loading";
    CONFIG.DND5E.weaponProperties['ma'] = "Multiattack";
    CONFIG.DND5E.weaponProperties['rng'] = "Range";
    CONFIG.DND5E.weaponProperties['rch'] = "Reach";
    CONFIG.DND5E.weaponProperties['ret'] = "Returning";
    CONFIG.DND5E.weaponProperties['thn'] = "Thrown";
    CONFIG.DND5E.weaponProperties['tri'] = "Trip";
    CONFIG.DND5E.weaponProperties['th'] = "Two-handed";
    CONFIG.DND5E.weaponProperties['ua'] = "Unarmed";
    CONFIG.DND5E.weaponProperties['ver'] = "Versatile";

    // Add New Spell Schools
    CONFIG.DND5E.spellSchools['nin'] = "Ninjutsu";
    CONFIG.DND5E.spellSchools['tai'] = "Taijutsu";
    CONFIG.DND5E.spellSchools['buki'] = "Bukijutsu";
    CONFIG.DND5E.spellSchools['gen'] = "Genjutsu";
    CONFIG.DND5E.spellSchools['hij'] = "Hijutsu";

    // Add Healing Types directed at Chakra and Temp Chakra
    CONFIG.DND5E.healingTypes["chakra"] = "Chakra";
    CONFIG.DND5E.healingTypes["tempchakra"] = "Temp Chakra";

    // Register new skills
    CONFIG.DND5E.skills["nin"] = {label: "Ninshou",ability: "int"};
    CONFIG.DND5E.skills["cft"] = {label: "Crafting",ability: "int"};
    CONFIG.DND5E.skills["mar"] = {label: "Martial Arts",ability: "str"};
    CONFIG.DND5E.skills["ill"] = {label: "Illusion",ability: "wis"};
    CONFIG.DND5E.skills["ccon"] = {label: "Chakra Control",ability: "con"};

    // Add Missing Ability Activation Types
    CONFIG.DND5E.abilityActivationTypes["fta"] = "Full Turn Action";

    // Add Missing Languages
    CONFIG.DND5E.languages["low"] = "Land of Water Dialect";
    CONFIG.DND5E.languages["lof"] = "Land of Fire Dialect";
    CONFIG.DND5E.languages["loe"] = "Land of Earth Dialect";
    CONFIG.DND5E.languages["loc"] = "Land of Cloud Dialect";
    CONFIG.DND5E.languages["los"] = "Land of Sand Dialect";
    CONFIG.DND5E.languages["snk"] = "Snake";
    CONFIG.DND5E.languages["dog"] = "Dog";
    CONFIG.DND5E.languages["Ins"] = "Insect";

});

// Proficiency Wrapper
// Modifies Level being ingest to produce correct proficiency mod for N5E system
Hooks.once('init', async function() {
  libWrapper.register('N5E-Conversion', 'dnd5e.documents.Proficiency.calculateMod', function (wrapped, lvl) {
    const level = lvl;
	var newMod = 3;
	if (level >= 0 && level < 4) {
		newMod =  5;
	  } else if (level >= 4 && level <= 6) {
		newMod =  9;
	  } else if (level >= 7 && level <= 9) {
		newMod =  13;
	  } else if (level >= 10 && level <= 12) {
		newMod =  17;
	  } else if (level >= 13 && level <= 15) {
		newMod =  21;
	  } else if (level >= 16 && level <= 18) {
		newMod =  25;
	  } else if (level >= 19 && level <= 20) {
		newMod =  29;
	  }

    return wrapped(newMod);
  }, 'WRAPPER');
});


// Remove Things that are no longer needed
Hooks.on("setup", function () {
  // Remove Nature, Religion and Arcana skills
  CONFIG.DND5E.skills = Object.fromEntries(
    Object.entries(CONFIG.DND5E.skills).filter(([key, value]) => !['arc', 'rel'].includes(key))
  );
  // Remove Verbal and Ritual spell components
  CONFIG.DND5E.spellComponents = Object.fromEntries(
    Object.entries(CONFIG.DND5E.spellComponents).filter(([key, value]) => !['vocal', 'somatic','material','ritual'].includes(key))
  );
  // Remove spell level options 6, 7, 8, and 9
  CONFIG.DND5E.spellLevels = Object.fromEntries(
    Object.entries(CONFIG.DND5E.spellLevels).filter(([key, value]) => !['6', '7', '8', '9'].includes(key))
  );
  // Remove Spell Schools
  CONFIG.DND5E.spellSchools = Object.fromEntries(
    Object.entries(CONFIG.DND5E.spellSchools).filter(([key, value]) => !['div', 'trs', 'enc','abj','evo','ill','nec','con'].includes(key))
  );
  // Remove Unnecessary Languages from list
  CONFIG.DND5E.languages = Object.fromEntries(
    Object.entries(CONFIG.DND5E.languages).filter(([key, value]) => key === 'common')
  );
  // Remove Unnecessary Currencies
  CONFIG.DND5E.currencies = Object.fromEntries(
    Object.entries(CONFIG.DND5E.currencies).filter(([key, value]) => !['pp', 'ep', 'cp','sp'].includes(key))
  );
});