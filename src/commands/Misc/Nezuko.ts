/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "nezuko",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}nezuko`,
			baseXp: 2000,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			'https://c.tenor.com/rk7Z0QmO0S8AAAPo/nezuko-chan-nezuko.mp4';
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `❤️ *NEZUKO* ❤️\n\n🙈 *Description: repo is private better luck next time.*\n\n💖 *insta id: https://www.instagram.com/akuma__24/?hl=en* \n\n 💖\n`,
			}
		);
	};
}
