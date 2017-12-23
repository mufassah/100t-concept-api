var axios = require('axios')
var Twitter = require('twitter')
module.exports = function(app) {
	app.get('/twitter', (req,res) => {
		var client = new Twitter({
			consumer_key: 'uyR81RFWn2zVjf1mKyg5AhQGC',
			consumer_secret: 'BscbPybQIEhgUC9GFFWe0nHpgRxHD11TUk7qcLNDhfA4TtfWzz',
			bearer_token: 'AAAAAAAAAAAAAAAAAAAAAJWu3gAAAAAARxdW5nqaAH7xwXI3nXjno1y0eTY%3Dnf8IqWsiegiw465OPQcwNfkQDzZUuYptLawh2jm8AHcGECzpFA'
		})
		client.get('statuses/user_timeline', {screen_name: '100thieves', count: 1}, $
			if(!error) {
				console.log(tweets)
				res.send(tweets)
			}
			else {
				console.log(error)
			}
		})
	})
}
