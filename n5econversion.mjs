/* N5E Conversion Module */
/* Import Files */
import N5ECONFIG from "./module/config.mjs";

/* Set Constants */
const moduleID = "n5econversion";

/* Debug Section --- TURN OFF WHEN DONE --- */
Hooks.once("init", function() {
    CONFIG.debug.hooks = true;
});

/* Hook & Merge N5E Config */
Hooks.once("init", () => {
    /* System does not use core Dnd5e items/armor, so while active this module will remove them */
    CONFIG.DND5E.weaponProperties = {};
    CONFIG.DND5E.armorClasses = {};
    CONFIG.DND5E.armorIds = {};
    CONFIG.DND5E.weaponIds = {};
    /* Quick signifier */
    console.log('N5E Module Object Merge');
    foundry.utils.mergeObject(CONFIG, N5ECONFIG);
});

/*Proficiency Wrapper Modifies Level being ingest to produce correct proficiency mod for N5E system */
Hooks.once('init', async function() {
  libWrapper.register(moduleID, 'dnd5e.documents.Proficiency.calculateMod', function (wrapped, lvl) {
    const level = lvl;
	var newMod = 3;
	if (level >= 0 && level < 4) {
		newMod =  3;
	  } else if (level >= 4 && level <= 6) {
		newMod =  4;
	  } else if (level >= 7 && level <= 9) {
		newMod =  5;
	  } else if (level >= 10 && level <= 12) {
		newMod =  6;
	  } else if (level >= 16 && level <= 18) {
		newMod =  7;
	  } else if (level >= 19 && level <= 20) {
		newMod =  8;
	  }
    return wrapped(newMod);
  }, 'WRAPPER');
});


/* Add Half proficiency to untrained ability score saves for N5E System */
Hooks.once('init', async function() {
libWrapper.register(moduleID, 'dnd5e.documents.Actor5e.prototype._prepareAbilities', function(wrapped, ...args) {
    // Call the original _prepareData function
    const result = wrapped.apply(this, args);

    // Assuming _prepareAbilities is called within _prepareData
    // and modifies this.data in some way:
    if (this.data.type === 'character' || this.data.type === 'npc') { // Adjust according to when you need to apply changes
      for (const [id, abl] of Object.entries(this.data.data.abilities)) {
        if (!Number.isNumeric(abl.saveProf.term)) {
          // Modify the abilities as needed
          abl.save += Math.floor(abl.saveProf.flat / 2);
        }
      }
    }

    return result;
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
  // Remove Unnecessary Currencies
  CONFIG.DND5E.currencies = Object.fromEntries(
    Object.entries(CONFIG.DND5E.currencies).filter(([key, value]) => !['pp', 'ep', 'cp','sp'].includes(key))
  );
});

// Inject resources onto sheet.
Hooks.on("renderActorSheet5e", async function(sheet, html) {
  sheet.document.setFlag("n5econversion", "resource.chakra", { label: 'Chakra',value: 10, max:10, temp: 10, tempmax: 0 });
  sheet.document.setFlag("n5econversion", "resource.chakraDice", { label: 'Chakra Dice',value: 10, max:10, temp: 10, tempmax: 0  });
  sheet.document.setFlag("n5econversion", "resource.ninjutsuSave", { label: 'Ninjutsu Save',value: 10,formula: ''});
  sheet.document.setFlag("n5econversion", "resource.genjutsuSave", { label: 'Genjutsu Save',value: 10,formula: ''});
  sheet.document.setFlag("n5econversion", "resource.taijutsuSave", { label: 'Taijutsu Save',value: 10,formula: ''});
  if (sheet.document.type !== "character") return;
  const box = html[0].querySelector(".dnd5e.sheet.actor .header-details");
  const div = document.createElement("DIV");
  const resources = Object.entries(document.flags.n5econversion.resource ?? {}).reduce((acc, [id, data]) => {
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

/* Restore Resource on LR */
Hooks.on("dnd5e.preRestCompleted", (actor, result) => {
  if (!result.longRest) return true;
  const chakra = actor.getFlag(moduleID, "chakra");
  const chakraDice = actor.getFlag(moduleID, "chakraDice");
  if (!chakra) return;
  result.updateData["flags.prime-psionics.pp.value"] = pp.max;
  result.updateData["flags.prime-psionics.pp.value"] = pp.max;
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

