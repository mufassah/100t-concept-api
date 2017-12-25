var axios = require('axios')
var Twitter = require('twitter')
module.exports = function(app) {
  app.get('/twitter', async (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
      res.setHeader('Access-Control-Allow-Credentials', true);
      var client = new Twitter({
        consumer_key: 'uyR81RFWn2zVjf1mKyg5AhQGC',
        consumer_secret: 'BscbPybQIEhgUC9GFFWe0nHpgRxHD11TUk7qcLNDhfA4TtfWzz',
        bearer_token: 'AAAAAAAAAAAAAAAAAAAAAJWu3gAAAAAARxdW5nqaAH7xwXI3nXjno1y0eTY%3Dnf8IqWsiegiw465OPQcwNfkQDzZUuYptLawh2jm8AHcGECzpFA'
      })
      let hundredTweets = []
      await client.get('statuses/user_timeline', {screen_name: '100thieves', count: 1})
      .then((tweets) => {
        let twitterObj = {}

        console.log(tweets[0])

        twitterObj.created = tweets[0].created_at
        twitterObj.msg = tweets[0].text
        twitterObj.avi = tweets[0].user.profile_image_url_https
        twitterObj.name = tweets[0].user.name
        twitterObj.id = tweets[0].id_str

        hundredTweets.push(twitterObj)
        
      })
      .catch((error) => {
        console.log(error)
      })

      await client.get('statuses/user_timeline', {screen_name: 'Nadeshot', count: 1})
      .then((tweets) => {
        let twitterObj = {}

        twitterObj.created = tweets[0].created_at
        twitterObj.msg = tweets[0].text
        twitterObj.avi = tweets[0].user.profile_image_url_https
        twitterObj.name = tweets[0].user.name
        twitterObj.id = tweets[0].id_str
        hundredTweets.push(twitterObj)
        
      })
      .catch((error) => {
        console.log(error)
      })

      await client.get('statuses/user_timeline', {screen_name: 'cavsdan', count: 1})
      .then((tweets) => {
        let twitterObj = {}

        twitterObj.created = tweets[0].created_at
        twitterObj.msg = tweets[0].text
        twitterObj.avi = tweets[0].user.profile_image_url_https
        twitterObj.name = tweets[0].user.name
        twitterObj.id = tweets[0].id_str
        hundredTweets.push(twitterObj)
        
      })
      .catch((error) => {
        console.log(error)
      })

      await client.get('statuses/user_timeline', {screen_name: 'pr0llyLOL', count: 1})
      .then((tweets) => {
        let twitterObj = {}

        twitterObj.created = tweets[0].created_at
        twitterObj.msg = tweets[0].text
        twitterObj.avi = tweets[0].user.profile_image_url_https
        twitterObj.name = tweets[0].user.name
        twitterObj.id = tweets[0].id_str
        hundredTweets.push(twitterObj)
        
      })
      .catch((error) => {
        console.log(error)
      })

      await client.get('statuses/user_timeline', {screen_name: 'aphromoo', count: 1})
      .then((tweets) => {
        let twitterObj = {}

        twitterObj.created = tweets[0].created_at
        twitterObj.msg = tweets[0].text
        twitterObj.avi = tweets[0].user.profile_image_url_https
        twitterObj.name = tweets[0].user.name
        twitterObj.id = tweets[0].id_str
        hundredTweets.push(twitterObj)
        
      })
      .catch((error) => {
        console.log(error)
      })

      await client.get('statuses/user_timeline', {screen_name: 'c9_meteos', count: 1})
      .then((tweets) => {
        let twitterObj = {}

        twitterObj.created = tweets[0].created_at
        twitterObj.msg = tweets[0].text
        twitterObj.avi = tweets[0].user.profile_image_url_https
        twitterObj.name = tweets[0].user.name
        twitterObj.id = tweets[0].id_str
        hundredTweets.push(twitterObj)
        
      })
      .catch((error) => {
        console.log(error)
      })

      await client.get('statuses/user_timeline', {screen_name: 'NICKMERCS', count: 1})
      .then((tweets) => {
        let twitterObj = {}

        twitterObj.created = tweets[0].created_at
        twitterObj.msg = tweets[0].text
        twitterObj.avi = tweets[0].user.profile_image_url_https
        twitterObj.name = tweets[0].user.name
        twitterObj.id = tweets[0].id_str
        hundredTweets.push(twitterObj)
        
      })
      .catch((error) => {
        console.log(error)
      })

      res.send(hundredTweets)
    })
}
