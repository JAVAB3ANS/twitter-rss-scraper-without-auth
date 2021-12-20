const fetch = require("node-fetch");
const fs = require("fs");
const format = require("xml-formatter");
const feeds = require("./feeds.js");
const feedsList = feeds.array;

if (feedsList.length === 0) {
	console.log("Please enter any amount of Twitter handles you want to follow!"); // [Go to 'feeds.js' and specify any amount of Twitter handles you want]
} else {
	setInterval(async function() {
		for (let i = 0; i < feedsList.length; i++) {
			const userProfile = feedsList[i];
			const response = await fetch(`https://nitter.net/${userProfile}/rss`);

			if (response.status === 200) {
				const body = await response.text();
				format(body); // neatly formats xml files from the urls of each twitter handle 

				if (!fs.existsSync("feeds")) {
					fs.mkdirSync("feeds"); //creates 'feeds' directory in your system ; largely depends on where you put these files
				}

				const stream = fs.createWriteStream(`./feeds/${userProfile}.xml`, {
					"flags": "w",
					"encoding": "utf-8"
				});
                
				stream.write(body.replace(/<!\[CDATA\[|\]\]>/gi, '').replace(/<br>/gi, '<br/>').replace(/<\/source>/gi, '></source>').replace(/autoplay muted loop/gi, 'autoplay="muted loop"').replace(/&/gi, '&amp;'));
				// removes <![CDATA[]]> tags from XML, fixes autoplay attribute of <video> tag, <source>, ampersands, and <br> tags 
			} else {
				console.log("Unable to find the mentioned user. Please make sure you have entered the correct user!");
			}

			console.log(`${userProfile}.xml has been created/updated!`);
		}
	}, 1 * 10000); // put any amount of time in minutes (here is 1 minute e.g. 1 minute is 60000 ms etc...)
}