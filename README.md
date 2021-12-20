# Twitter RSS Feed Scraper Without Authentication

<p align="center">
    <img src="https://images.ctfassets.net/lzny33ho1g45/twitter-rss-feed-p-img/97dea4e82514634361d9cc86a2fdfc2b/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760" width="600">
</p> 

- Command-line application using Node.js that scrapes XML feeds from Nitter, the free and open source alternative Twitter front-end focused on privacy.

    - No advertisements.

    - All requests go through the backend, client never talks to Twitter.

    - Prevents Twitter from tracking your IP or JavaScript fingerprint.

    - No rate limits or developer account with credentials required.

    - Can customize which Twitter handles you can track in `feeds.js` and the time intervals in `index.js` for monitoring accounts respectively.

# How to Install and Run on Your Local Machine

```
1) Install `node.js` and `npm` using `sudo apt install` and check if install successful using `node -v` and/or `npm -v` (just to confirm).

2) Unzip the file into any directory you can easily access on your system.

3) Run `npm init` and keep hitting enter until it tells you to enter `yes` 

4) Install the following dependencies: `cheerio`, `fs`, `node-fetch`, `pm2`, `xml-formatter` using `npm install [dependency]`

5) Specify as many Twitter handles you want to follow in `feeds.js` and the time interval at the bottom of `index.js` and save these files. 

6) Do `npm start` which will start the process and show you some messages that would be logged once an XML file has been created/updated.

7) The XML feed files will be saved into `/feeds/` directory within the same location as this folder `/twitter-rss-scraper-without-auth/`.
```

# Why?

This is due to Twitter's removal of their RSS feed function from their public user interface. Unlike many other popular applications such as Reddit and Facebook, Twitter no longer hosts an RSS feed. Instead of manually checking each page to see if there are any tweets/retweets at any given time, online users can now simply check their `/feeds/` directory to sporadically monitor for automatic news updates.
