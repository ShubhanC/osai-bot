import { BaseCommandInteraction } from "discord.js";
import { SlashCommandBuilder } from '@discordjs/builders';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roles')
        .setDescription('Replies with the roles that you have!'),
    async execute(interaction: BaseCommandInteraction) {
        await interaction.reply('Testing!');
    },
};