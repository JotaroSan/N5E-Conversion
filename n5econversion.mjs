
// Add Missing Damage Types
Hooks.on("init", () => {

  // Define the new damage and resistance types
  CONFIG.DND5E.damageTypes["chakra"] = "Chakra";
  CONFIG.DND5E.damageResistanceTypes["chakra"] = "Chakra";
  CONFIG.DND5E.damageTypes["wind"] = "Wind";
  CONFIG.DND5E.damageResistanceTypes["wind"] = "Wind";
  CONFIG.DND5E.damageTypes["earth"] = "Earth";
  CONFIG.DND5E.damageResistanceTypes["earth"] = "Earth";
  // Add missing Spell Components
  CONFIG.DND5E.spellComponents["handseals"] = {
    label: "Hand Seals",
    abbr: "HS"
  };
  CONFIG.DND5E.spellComponents["molding"] = {
    label: "Chakra Molding",
    abbr: "CM"
  };
  CONFIG.DND5E.spellComponents["chakraseals"] = {
    label: "Chakra Seals",
    abbr: "CS"
  };
  CONFIG.DND5E.spellComponents["mobility"] = {
    label: "Mobility",
    abbr: "M"
  };
  CONFIG.DND5E.spellComponents["ninjatools"] = {
    label: "Ninja Tools",
    abbr: "NT"
  };
  CONFIG.DND5E.spellComponents["weapons"] = {
    label: "Weapons",
    abbr: "W"
  };
  CONFIG.DND5E.spellComponents["fuinjutsu"] = {
    label: "Fuinjutsu",
    abbr: "F"
  };
  CONFIG.DND5E.spellComponents["medical"] = {
    label: "Medical",
    abbr: "Med"
  };
  CONFIG.DND5E.spellComponents["clash"] = {
    label: "Clash",
    abbr: "CL"
  };

  // Add missing sense, chakra sight
  CONFIG.DND5E.senses["chakra sight"] = "Chakra sight";

  // Add new weapon proficiencies
  CONFIG.DND5E.weaponIds["battlewire"] = "N5EConversion.n5e-items.81zHkZgJJUswAl8C";
  CONFIG.DND5E.weaponIds["blowgun"] = "N5EConversion.n5e-items.ZdkI4f6cAvCaSDc1";
  CONFIG.DND5E.weaponIds["battleaxe"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["handaxe"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["chainedhandscythe"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["handscythe"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["kunai"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["quarterstaff"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["spear"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["tanto"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["weightedchain"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["senbon"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["shortbow"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["shuriken"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["sling"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["broadsword"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["chainedspear"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["combatbracers"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["greataxe"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["hookedlance"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["ironclaw"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["jitte"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["katana"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["naginata"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["nunchaku"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["odachi"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["sasumata"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["scythe"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["tetsubo"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["tonfa"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["warclub"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["whip"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["knuckleblade"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["chakram"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["monsterchakram"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["longbow"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["crossbowhand"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["crossbowheavy"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["net"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["fumashuriken"] = "N5EConversion.n5e-items.";
  CONFIG.DND5E.weaponIds["monstershuriken"] = "N5EConversion.n5e-items.";

  CONFIG.DND5E.cp = {
    label: "Chakra Points",
    abbreviation: "CP",
  };

});

// Add Missing Skills
Hooks.on("init", function() {
  // Register new skills
  CONFIG.DND5E.skills["nin"] = {
    label: "Ninshou",
    ability: "int"
  };

    CONFIG.DND5E.skills["cft"] = {
      label: "Crafting",
      ability: "int"
    };

  CONFIG.DND5E.skills["mar"] = {
    label: "Martial Arts",
    ability: "str"
  };

  CONFIG.DND5E.skills["ill"] = {
    label: "Illusion",
    ability: "wis"
  };

  CONFIG.DND5E.skills["ccon"] = {
    label: "Chakra Control",
    ability: "con"
  };

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


// Remove Skills that are no longer needed
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
  // Remove Spell Schools Divinitation, Transmutaiton and Enchantment
  CONFIG.DND5E.spellSchools = Object.fromEntries(
    Object.entries(CONFIG.DND5E.spellSchools).filter(([key, value]) => !['div', 'trs', 'enc'].includes(key))
  );
  // Remove Unnecessary Languages from list
  CONFIG.DND5E.languages = Object.fromEntries(
    Object.entries(CONFIG.DND5E.languages).filter(([key, value]) => key === 'common')
  );


});
