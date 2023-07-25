module.exports = {
    name: 'resumeMusic',
    displayName: 'Resume Music',
    section: 'Music Control',
    meta: {
        version: '2.1.7',
        preciseCheck: true,
        author: 'Caio Sclavi',
        authorUrl: 'https://ko-fi.com/caiozin',
    },
    fields: [],
    subtitle(data) {
        return ``;
    },
    variableStorage(data, varType) {
        return ``
    },
    html() {
        return ``
    },
    init() {},
    async action(cache) {
        try{
            interaction = cache.interaction;
            const client = this.getDBM().Bot.bot;
            const player = client.manager.get(interaction.guild.id);
            player.pause(false);
        }catch{ 
            this.callNextAction(cache);
            return;
        }
        this.callNextAction(cache);
    },
    mod() {},
};
