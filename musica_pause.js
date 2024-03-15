module.exports = {
  name: "pauseMusic",
  displayName: "Pause Music",
  section: "Music Control",
  meta: {
    version: "2.1.7",
    preciseCheck: true,
    author: "Caio Sclavi",
    authorUrl: "https://ko-fi.com/caiozin",
  },
  fields: [],
  subtitle(data) {
    return ``;
  },
  variableStorage(data, varType) {
    return ``;
  },
  html() {
    return ``;
  },
  init() {},
  async action(cache) {
    const client = this.getDBM().Bot.bot;
    let interaction;
    try {
      interaction = cache.interaction;
      const player = client.manager.get(interaction.guild.id);
      player.pause(true);
    } catch (error) {
      console.error("Error pausing music:", error);
    }
    this.callNextAction(cache);
  },
  mod() {},
};
