module.exports = {
  name: "skipMusic",
  displayName: "Skip Music",
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
    try {
      const client = this.getDBM().Bot.bot;
      const interaction = cache.interaction;
      const player = client.manager.get(interaction.guild.id);
      if (player) {
        player.stop();
      }
    } catch (error) {
      console.error("Error skipping music:", error);
    }
    this.callNextAction(cache);
  },
  mod() {},
};
