module.exports = {
  name: "playerMusic",
  displayName: "Store Player",
  section: "Music Control",
  meta: {
    version: "2.1.7",
    preciseCheck: true,
    author: "Caio Sclavi",
    authorUrl: "https://ko-fi.com/caiozin",
  },

  subtitle(data) {
    return `Return the player queue in ${data.varName2}`;
  },

  variableStorage(data, varName2) {
    const type = parseInt(data.storage, 10);
    if (type !== varName2) return;
    const dataType = "Player";
    return [data.varName2, dataType];
  },

  fields: ["storage", "varName2", "info"],

  html(isEvent, data) {
    return `
        <div style="float: left; width: 60%;">
            player.(write which value of the player you need) (blank for player):<br>
            <input id="info" class="round" type="text">
        </div><br><br><br><br><br>

        <store-in-variable dropdownLabel="Store In" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>`;
  },

  action(cache) {
    function getValue(obj, expr) {
      const parts = expr.split(".");

      let result = obj;
      for (let part of parts) {
        result = result[part];
      }

      return result;
    }
    const data = cache.actions[cache.index];
    const client = this.getDBM().Bot.bot;
    interaction = cache.interaction;
    const player = client.manager.get(interaction.guild.id);
    if (player) {
      const info = this.evalMessage(data.info, cache);
      const storage = parseInt(data.storage, 10);
      const varName2 = this.evalMessage(data.varName2, cache);
      if (info) {
        this.storeValue(getValue(player, info), storage, varName2, cache);
      } else {
        this.storeValue(player, storage, varName2, cache);
      }
    }
    this.callNextAction(cache);
  },
};
