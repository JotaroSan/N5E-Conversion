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
    CONFIG.DND5E.weaponIds["battlewire"] = "n5econversion.n5e-items.81zHkZgJJUswAl8C";
    CONFIG.DND5E.weaponIds["blowgun"] = "n5econversion.n5e-items.ZdkI4f6cAvCaSDc1";
    CONFIG.DND5E.weaponIds["handaxe"] = "n5econversion.n5e-items.GUsi2ly8gxYK0TH2";
    CONFIG.DND5E.weaponIds["chainedhandscythe"] = "n5econversion.n5e-items.M8tl0zQAH18FxBLo";
    CONFIG.DND5E.weaponIds["handscythe"] = "n5econversion.n5e-items.X1dlx00oTkwMp6ei";
    CONFIG.DND5E.weaponIds["kunai"] = "n5econversion.n5e-items.RbcM59vdQ9ZgYBKV";
    CONFIG.DND5E.weaponIds["quarterstaff"] = "n5econversion.n5e-items.XAVJqdQWLqV8jffm";
    CONFIG.DND5E.weaponIds["spear"] = "n5econversion.n5e-items.Qrxp2ypJNrdBfnxF";
    CONFIG.DND5E.weaponIds["tanto"] = "n5econversion.n5e-items.HbrlOL6HWNiuNaiU";
    CONFIG.DND5E.weaponIds["weightedchain"] = "n5econversion.n5e-items.MVeoq1E1DCwCZTwc";
    CONFIG.DND5E.weaponIds["senbon"] = "n5econversion.n5e-items.AqeyHEGdWCFAqWP0";
    CONFIG.DND5E.weaponIds["shortbow"] = "n5econversion.n5e-items.1vdllonFUUQnkUvJ";
    CONFIG.DND5E.weaponIds["shuriken"] = "n5econversion.n5e-items.YReiEBmBtKhLaoxF";
    CONFIG.DND5E.weaponIds["sling"] = "n5econversion.n5e-items.yNkLtAbQTIZY7ZCC";
    CONFIG.DND5E.weaponIds["broadsword"] = "n5econversion.n5e-items.xe110rLxmQETPJyq";
    CONFIG.DND5E.weaponIds["chainedspear"] = "n5econversion.n5e-items.PTHvIz6IH9HpbHg7";
    CONFIG.DND5E.weaponIds["combatbracers"] = "n5econversion.n5e-items.7JdFwOiRWfq35OWT";
    CONFIG.DND5E.weaponIds["greataxe"] = "n5econversion.n5e-items.5xpZcxYjWmAjXo1j";
    CONFIG.DND5E.weaponIds["hookedlance"] = "n5econversion.n5e-items.bEtYwzE76RhPISms";
    CONFIG.DND5E.weaponIds["ironclaw"] = "n5econversion.n5e-items.00uRBzVYYgEZFy4Q";
    CONFIG.DND5E.weaponIds["jitte"] = "n5econversion.n5e-items.M5abrR0syMtZh0Xx";
    CONFIG.DND5E.weaponIds["katana"] = "n5econversion.n5e-items.h9iLNkcRhCnDZGAO";
    CONFIG.DND5E.weaponIds["naginata"] = "n5econversion.n5e-items.5Ay4NnbFHXHmFTi0";
    CONFIG.DND5E.weaponIds["nunchaku"] = "n5econversion.n5e-items.14f6YrXLHRNXJXzA";
    CONFIG.DND5E.weaponIds["odachi"] = "n5econversion.n5e-items.SMFAFXkdTIvipYqB";
    CONFIG.DND5E.weaponIds["sasumata"] = "n5econversion.n5e-items.pc6Z8vmwn4TKyXya";
    CONFIG.DND5E.weaponIds["scythe"] = "n5econversion.n5e-items.AEHqJwlyfAPCGPgX";
    CONFIG.DND5E.weaponIds["tetsubo"] = "n5econversion.n5e-items.mlxyNFZW5tPGsb0R";
    CONFIG.DND5E.weaponIds["tonfa"] = "n5econversion.n5e-items.AxFRDY4CRyUOEoLo";
    CONFIG.DND5E.weaponIds["warclub"] = "n5econversion.n5e-items.lN8v13BroQh5YgI5";
    CONFIG.DND5E.weaponIds["whip"] = "n5econversion.n5e-items.W5ZfgVCgxsGpLzR4";
    CONFIG.DND5E.weaponIds["knuckleblade"] = "n5econversion.n5e-items.VSbOUoRmdTYpBPaS";
    CONFIG.DND5E.weaponIds["chakram"] = "n5econversion.n5e-items.L1AT9ekTDUJQHB9T";
    CONFIG.DND5E.weaponIds["monsterchakram"] = "n5econversion.n5e-items.nMbckfVmQyomfZY3";
    CONFIG.DND5E.weaponIds["longbow"] = "n5econversion.n5e-items.ZTgwdJyugEGiMJqu";
    CONFIG.DND5E.weaponIds["crossbowhand"] = "n5econversion.n5e-items.7efcoLqgvay98RUV";
    CONFIG.DND5E.weaponIds["crossbowheavy"] = "n5econversion.n5e-items.OU67WU4IBvI5Uszm";
    CONFIG.DND5E.weaponIds["net"] = "n5econversion.n5e-items.0gs6UCdBaKZ5AIMl";
    CONFIG.DND5E.weaponIds["fumashuriken"] = "n5econversion.n5e-items.TXvRdUiQQuxwTgyF";
    CONFIG.DND5E.weaponIds["monstershuriken"] = "n5econversion.n5e-items.sxBvPLkkop5jkScv";

    // Armor Proficiency
    // Remove All Existing DND5E Items
    CONFIG.DND5E.armorIds = {};
    // Add missing Armor Proficincies
    CONFIG.DND5E.armorIds["padded"] = "n5econversion.n5e-items.PXA5xkWhB5D1y2ZL";
    CONFIG.DND5E.armorIds["leather"] = "n5econversion.n5e-items.wr07gpjgWZQw2NgC";
    CONFIG.DND5E.armorIds["studded"] = "n5econversion.n5e-items.zHootXIbZBSCHawn";
    CONFIG.DND5E.armorIds["combat"] = "n5econversion.n5e-items.II33J57LVqZSqnW2";
    CONFIG.DND5E.armorIds["armored"] = "n5econversion.n5e-items.LfNh1vvFhiIFlKdg";
    CONFIG.DND5E.armorIds["chunin"] = "n5econversion.n5e-items.ycaJ6PMpeLn8Ymw7";
    CONFIG.DND5E.armorIds["reinforced"] = "n5econversion.n5e-items.oUeGPcPifVZsUVrv";
    CONFIG.DND5E.armorIds["flak"] = "n5econversion.n5e-items.lY4pmzqaXsy7c0Vy";
    CONFIG.DND5E.armorIds["armorflak"] = "n5econversion.n5e-items.I7yXden0O9KSv7tk";
    CONFIG.DND5E.armorIds["battle"] = "n5econversion.n5e-items.Rc8XgYyUD3Vd9XU1";
    CONFIG.DND5E.armorIds["shinobi"] = "n5econversion.n5e-items.90v6et8pq48v72O5";
    CONFIG.DND5E.armorIds["jonin"] = "n5econversion.n5e-items.A6gXO1rI6UWUQnJ9";
    CONFIG.DND5E.armorIds["armoredjonin"] = "n5econversion.n5e-items.WFkedOjW63ZeVCDo";
    CONFIG.DND5E.armorIds["ronin"] = "n5econversion.n5e-items.0g3HQc6zT0GmYoYj";
    CONFIG.DND5E.armorIds["samurai"] = "n5econversion.n5e-items.1ylLZzKoatc5kybx";

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
	// Elemental
	CONFIG.statusEffects.push({ id: "burned1", label: "Burned [1]", icon: "modules/n5econversion/icons/conditions/Burned-1.png" })
	CONFIG.statusEffects.push({ id: "burned2", label: "Burned [2]", icon: "modules/n5econversion/icons/conditions/Burned-2.png" })
	CONFIG.statusEffects.push({ id: "burned3", label: "Burned [3]", icon: "modules/n5econversion/icons/conditions/Burned-3.png" })
	CONFIG.statusEffects.push({ id: "burned4", label: "Burned [4]", icon: "modules/n5econversion/icons/conditions/Burned-4.png" })
	CONFIG.statusEffects.push({ id: "burned5", label: "Burned [5]", icon: "modules/n5econversion/icons/conditions/Burned-5.png" })
    // Mental
    // Sensory
    // Physical


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
  libWrapper.register('n5econversion', 'dnd5e.documents.Proficiency.calculateMod', function (wrapped, lvl) {
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

Hooks.once("setup", function() {
  CONFIG.DND5E.abilityConsumptionTypes["flags.n5econversion.resource.chakra"] = 'Chakra';
  CONFIG.DND5E.abilityConsumptionTypes["flags.n5econversion.resource.chakraDice"] = 'Chakra Dice';
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

// Inject resources onto sheet.
Hooks.on("renderActorSheet", async function(sheet, html) {
  sheet.document.setFlag("n5econversion", "resource.chakra", { label: 'Chakra', temp: 0, tempmax: 0 });
  sheet.document.setFlag("n5econversion", "resource.chakraDice", { label: 'Chakra Dice', temp: 0, tempmax: 0  });
  if (sheet.document.type !== "character") return;
  const box = html[0].querySelector(".dnd5e.sheet.actor .header-details ul.attributes");
  const div = document.createElement("DIV");
  const resources = Object.entries(sheet.document.flags.n5econversion.resource ?? {}).reduce((acc, [id, data]) => {
    if (!id) return acc;
    acc.push({
      label: (data.label || "").trim(),
      name: `flags.n5econversion.resource.${id}`,
      id,
      temp: data.temp,
      tempmax: data.tempmax,
      value: data.value || null,
      max: data.max || null
    });
    return acc;
  }, []);
  const template = "modules/n5econversion/templates/resource.hbs";
  div.innerHTML = await renderTemplate(template, {resources});

   div.querySelectorAll("input[type='text'][data-dtype='Number']").forEach(input => {
     input.addEventListener("change", sheet._onChangeInputDelta.bind(sheet));
   });

   const foc = div.querySelector(`[name="${sheet._addarFocus}"]`);
   box.append(...div.children);
   if (foc && sheet._addarFocus.includes("addar")) foc.focus();

   html[0].querySelectorAll("input").forEach(input => input.addEventListener("focus", (event) => {
     sheet._addarFocus = event.currentTarget.name;
     if (event.currentTarget.closest(".attributes")) event.currentTarget.select();
   }));

});

/* Inject custom resource consumption option onto item sheet. */
Hooks.on("renderItemSheet", function(sheet, html) {
  if (sheet.item.system.consume?.type !== "flags.n5econversion.resource") return;
  const actor = sheet.item.actor;
  const ids = Object.keys(actor?.flags.n5econversion?.resource ?? {});
  if (!ids.length) return;
  const selected = sheet.item.system.consume.target;
  const options = ids.reduce((acc, id) => {
    const label = actor.flags.n5econversion.resource[id].label || game.i18n.localize("n5econversion.Resource");
    const value = `flags.n5econversion.resource.${id}.value`;
    const s = (value === selected) ? "selected" : "";
    return acc + `<option value="${value}" ${s}>${label}</option>`;
  }, "<option value=''></option>");
  const tar = html[0].querySelector("[name='system.consume.target']");
  if (tar) tar.innerHTML = options;
});

/* Adjust consumed target during item usage. */
Hooks.on("dnd5e.preItemUsageConsumption", function(item, options, config) {
  if (options.consumeResource && item.system.consume.target.startsWith("flags.n5econversion.resource")) {
    options.consumeResource = false;
    options.consumeCustomResource = item.system.consume.target;
  }
});

/* Adjust consumed target during item usage. */
Hooks.on("dnd5e.itemUsageConsumption", function(item, options, config, updates) {
  const name = options.consumeCustomResource;
  if (!name) return;
  const newValue = foundry.utils.getProperty(item.actor, name) - (item.system.consume.amount || 1);
  if (newValue < 0) {
    ui.notifications.warn(game.i18n.format("DND5E.ConsumeWarningNoQuantity", {
      name: item.name,
      type: CONFIG.DND5E.abilityConsumptionTypes[item.system.consume.type]
    }));
    return false;
  }
  updates.actorUpdates[name] = newValue;
});

