const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h',"yardım","y"],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('GREEN');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('LORİS SUNUCUM İÇİN: [SSA EKİP Müzik Botu](https://discord.gg/ejRDj9UWCE)');
        embed.addField(`Kullanıla Bilir - ${commands.size} Komut Var`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('Müzik Botu Komutları ', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};
