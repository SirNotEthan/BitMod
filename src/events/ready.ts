import { Events, ActivityType } from "discord.js"

export default {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Logged in as ${client.user.tag}!`);
        client.user.setPresence({ activities: [{ name: 'SirNotEthan', type: ActivityType.Listening}], status: 'idle' })
    }
}