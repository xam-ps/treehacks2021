const express = require("express");
const router = express.Router();
var bodyParser = require('body-parser')
const mysql = require('mysql');



var jsonParser = bodyParser.json()
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'socialshazam',
  });

router.post("/songs",jsonParser,(req, res) => {

    const id = '"' + req.body.id+ '"';
    const title = '"' + req.body.title + '"';
    const artist = '"'+req.body.artist + '"';
    const album = '"' + req.body.album + '"';
    const email = '"' + req.body.email + '"';

    var addToSongs = `INSERT INTO SONGS (Id, title, artist, album) VALUES (${id},${title},${artist},${album})`;
    connection.query(addToSongs, function (err, result) {
        if (err) throw err;
      });
    
      var addToDiscoveredSong = `INSERT INTO discoveredSongs (songId, userEmail, timestamp) VALUES (${id},${email},now())`;
      connection.query(addToDiscoveredSong, function (err, result) {
        if (err) throw err;
      });
});

let groupId ;
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

router.get("/userGroupPlaylists",jsonParser, (req,res) => {
  const userEmail = '"' + req.body.userEmail + '"';
var getSongId =`
select distinct(title), artist, album, socialshazam.discoveredSongs.timestamp from socialshazam.Groups 
left join  socialshazam.usersInGroup ON socialshazam.Groups.id = socialshazam.usersInGroup.groupId and socialshazam.Groups.userEmail = ${userEmail}
left join socialshazam.discoveredSongs on socialshazam.discoveredSongs.userEmail = socialshazam.usersInGroup.userEmail
left join socialshazam.Songs on socialshazam.Songs.Id = socialshazam.discoveredSongs.songId
order by socialshazam.discoveredSongs.timestamp desc;
  `
  connection.query(getSongId, function (err, result) {
    result = JSON.stringify(result);
    if (err) throw err;
    else return res.status(200).send(result);
  });
});


router.get("/getUserGroups",jsonParser, (req, res) => {
    const userEmail = '"' + req.body.userEmail + '"';
    var getUserGroups = `SELECT groupName FROM  socialshazam.Groups WHERE userEmail = ${userEmail}`;

    connection.query(getUserGroups, function (err, result) {
        if (err) throw err;
        return res.status(200).send(result);
      });
});


module.exports = router;