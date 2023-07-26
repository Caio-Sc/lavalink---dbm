module.exports = {
  name: "LavaLinkConnect",
  displayName: "Connect to lavalink server",
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
    const { MessageEmbed } = require("discord.js");
    const { Manager } = require("magmastream");
    const client = this.getDBM().Bot.bot;
    client.manager = new Manager({
      // The nodes to connect to.
      nodes: [
        {
          host: "",
          password: "",
          port: 2333,
          secure: false, // default: false
        },
      ],
      // Method to send voice data to Discord
      send: (id, payload) => {
        const guild = client.guilds.cache.get(id);
        // NOTE: FOR ERIS YOU NEED JSON.stringify() THE PAYLOAD
        if (guild) guild.shard.send(payload);
      },
    });

    // Emitted whenever a node connects
    client.manager.on("nodeConnect", (node) => {
      console.log(`Node "${node.options.identifier}" connected.`);
    });

    // Emitted whenever a node encountered an error
    client.manager.on("nodeError", (node, error) => {
      console.log(
        `Node "${node.options.identifier}" encountered an error: ${error.message}.`
      );
    });

    client.on("raw", (d) => client.manager.updateVoiceState(d));
    client.manager.init(client.user.id);

    client.manager.on("trackStart", (player, track) => {
      const channel = client.channels.cache.get(player.textChannel);
      channel.send({
        embeds: [
          new MessageEmbed()
            .setTitle(`Playing:`)
            .setDescription(`[${track.title}](${track.uri})`),
        ],
      });
    });

    // Emitted the player queue ends
    client.manager.on("queueEnd", (player) => {
      player.destroy();
    });

    client.manager.on("socketClosed", (player, payload) => {
      player.destroy();
    });

    // client.manager.on("trackEnd", (player, track, payload) => {
    //   console.log("------------------------------");
    //   console.log("Type: " + payload.type)
    //   console.log("Reason: " + payload.reason)
    //   console.log("------------------------------");
    // });

    // client.manager.on("trackError", (player, track, payload) => {
    //   console.log("------------------------------");
    //   console.log("Type: " + payload.type)
    //   console.log("cause: " + payload.exception.cause)
    //   console.log("message: " + payload.exception.message)
    //   console.log("severity: " + payload.exception.severity)
    //   console.log("full: " + payload.exception)
    //   console.log("------------------------------");
    // });

    // client.manager.on("trackStuck", (player, track, payload) => {
    //   console.log("------------------------------");
    //   console.log("Type: " + payload.type)
    //   console.log("ThresholdMs: " + payload.thresholdMs)
    //   console.log("------------------------------");
    // });

    // THIS IS REQUIRED. Send raw events to Magmastream

    this.callNextAction(cache);
  },
  mod() {},
};
