## Inspiration
A couple of weeks ago I was with a friend and he showed me this "new" band he discovered (it was Jungle btw. 😉). I told him, that I really like that band but that I also know them for more than 4 years already.
I also like Shazam – a lot! But the total time I spend using the app is probably around 5 min per WEEK. So, I came into thinking: Why not extend the functionality of Shazam, so that you can share your latest discoveries directly with your friends. As this alone is quite boring though, I put some thoughts into a gamified Version.

## What it does
You can search for songs by using the microphone of your phone (basic Shazam functionality). But if you create a group and add your friends, the challenge starts: For each song, that is recognized for the first time in a group, a discovery period starts. If at least one other person of the group looks up that song within that discovery period as well, the person who looked it up first gets points. The more friends of the group discover the song, the more points the first person gets. After that discovery period, songs will also be added to a shared playlist. Of course, we have a leaderboard as well 😁
## How we built it
For the frontend, we’re using React. For the music recognition, we integrated [ACRCloud](https://acrcloud.com/) (thanks for the free trial). For the login, we integrated firebase authentication. The backend is written in JavaScript (node.js, express.js) and the data gets stored into a MySQL-Database.

## Challenges we ran into
-	Integrating the ACRCloud-API, unfortunately, cost us tons of time, that’s also the reason why we were not able to finish the whole app.
-	The ACRCloud doesn’t provide album art and we did have enough time to integrate the Spotify API

## Accomplishments that we're proud of
Using the HTML5 audio API to record audio and obviously integrating ACRCloud 😅 Also getting to work the firebase login to work and get back the user’s profile pic is quite nice.

## What we learned
Soo much! Our backend devs were using node for the first time. The frontend devs got into React (which is just so amazing, always wanted to learn that). And also working 100% remotely over three timezones (California, India, Germany) what just an incredible experience (even though we barely slept within the last 36 hours 🙈😴 to be able to collaborate).

## What's next for Somudi
-	User management
-	Going native - React was more an emergency decision
-	Integrating Spotify API for album art – ACRCloud already provides us the song id, that we need to fetch album art from Spotify
-	Streaming audio to ACPCloud so we get back a response as soon as the song was recognized successfully (right now you have to stop recording manually after a couple of seconds)
-	Finding partners, we could team up with, so that the users can exchange points for ticket discounts for example (Ticketmaster, Eventbright would be amazing partners)
