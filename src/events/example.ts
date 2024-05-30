import { createEvent } from 'zenith'

export default createEvent('messageCreate', {
	name: 'Example Event',
	async execute(client, message) {
		if (message.author.bot) return
		console.log(message.author.username)
	}
})
