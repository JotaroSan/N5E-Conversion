
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

});

// Remove Skills that are no longer needed
Hooks.on("setup", function () {
  // Remove Nature, Religion and Arcana skills
  CONFIG.DND5E.skills = Object.fromEntries(
    Object.entries(CONFIG.DND5E.skills).filter(([key, value]) => !['arc', 'nat', 'rel'].includes(key))
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

});
