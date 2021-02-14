const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
const mysql = require("mysql");

var jsonParser = bodyParser.json()

const {USER,PASSWORD,DATABASE,SOCKET_PATH } = process.env;
const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';
const connection = mysql.createConnection({
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    socketPath: `${dbSocketPath}/${SOCKET_PATH}`,
});

router.post("/songs", jsonParser, (req, res) => {
	const id = '"' + req.body.id + '"';
	const title = '"' + req.body.title + '"';
	const artist = '"' + req.body.artist + '"';
	const album = '"' + req.body.album + '"';
	const email = '"' + req.body.email + '"';

    var addToSongs = `INSERT INTO Songs (Id, title, artist, album) VALUES (${id},${title},${artist},${album})`;
    connection.query(addToSongs, function (err, result) {
      console.log(addToSongs);
        if (err) throw err;
      });
    
      var addToDiscoveredSong = `INSERT INTO discoveredSongs (songId, userEmail, timestamp) VALUES (${id},${email},CURDATE())`;
      connection.query(addToDiscoveredSong, function (err, result) {
        console.log(addToDiscoveredSong);
        if (err) throw err;
      });
});

router.post("/groups",jsonParser, (req, res) => {
    const groupName = '"' + req.body.groupName + '"';
    const userEmail = '"' + req.body.userEmail + '"';
    let emails = []
    emails = req.body.emails;
    var addToGroups = `INSERT INTO socialshazam.Groups (groupName, userEmail) VALUES (${groupName},${userEmail})`;
    connection.query(addToGroups, function (err, result) {
        if (err) throw err;
      });
      emails.push(req.body.userEmail);
      emails.forEach(element => {
          const ele = '"' + element + '"';
        var addToUserInGroup = `INSERT INTO usersInGroup (groupId, userEmail) VALUES (LAST_INSERT_ID(),${ele})`;
        console.log(addToUserInGroup);
        connection.query(addToUserInGroup, function (err, result) {
            if (err) throw err;
          });
      });
});

router.get("/userGroupPlaylists/:email", jsonParser, (req, res) => {
	const userEmail = '"' + req.params.email + '"';
	var getSongId = `
select distinct(title), artist, album, socialshazam.discoveredSongs.timestamp from socialshazam.Groups 
left join  socialshazam.usersInGroup ON socialshazam.Groups.id = socialshazam.usersInGroup.groupId and socialshazam.Groups.userEmail = ${userEmail}
left join socialshazam.discoveredSongs on socialshazam.discoveredSongs.userEmail = socialshazam.usersInGroup.userEmail
left join socialshazam.Songs on socialshazam.Songs.Id = socialshazam.discoveredSongs.songId
order by socialshazam.discoveredSongs.timestamp desc;
  `;
	connection.query(getSongId, function (err, result) {
		result = JSON.stringify(result);
		if (err) throw err;
		else return res.status(200).send(result);
	});
});

router.get("/getUserSongs/:email", jsonParser, (req, res) => {
	const userEmail = '"' + req.params.email + '"';
	var getUserSongs = `SELECT title, artist, album FROM socialshazam.discoveredSongs
  left join socialshazam.Songs ON socialshazam.Songs.Id  =  socialshazam.discoveredSongs.songId
  and socialshazam.discoveredSongs.userEmail = ${userEmail} where Id IS NOT NULL
  `;
	connection.query(getUserSongs, function (err, result) {
		if (err) throw err;
		return res.status(200).send(result);
	});
});

router.get("/getUserGroups/:email",jsonParser, (req, res) => {
	const userEmail = '"' + req.params.email + '"';
    var getUserGroups = `SELECT groupName FROM  socialshazam.Groups WHERE userEmail = ${userEmail}`;
    connection.query(getUserGroups, function (err, result) {
        if (err) throw err;
        return res.status(200).send(result);
      });
});

router.get("/getUserSongs/:email", jsonParser, (req,res) => {
	const userEmail = '"' + req.params.email + '"';
  var getUserSongs = `SELECT title, artist, album, timestamp FROM socialshazam.discoveredSongs
  left join socialshazam.Songs ON socialshazam.Songs.Id  =  socialshazam.discoveredSongs.songId
  and socialshazam.discoveredSongs.userEmail = ${userEmail} where Id IS NOT NULL
  `;
  connection.query(getUserSongs, function (err, result) {
    if (err) throw err;
    return res.status(200).send(result);
  });
})

router.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

module.exports = router;
