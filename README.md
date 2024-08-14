# BOT BATTLE

Bot Battlr is a  web application that allows users to browse, enlist, and manage a collection of robots. This app IS a bot management system where users can view bot profiles, add bots to their army, and release or discharge bots as needed.

## Setting up

1. Clone the repository

Git hub repository : `https://github.com/kwambokamegan/PHASE-2-CHALLENGE-2`

2. Go to the project repository

3. Install dependancies by running npm install 

4. Set up a db.json file that will contain your mock backend data  then run json-server --watch db.json --port 8001 to start the server

5. Start the react server by running npm start.

## Features 

* Bot Collection: View a list of available bots with their profiles.

* Add to Army:  Enlist a bot into your army by clicking on it. The bot will be added to the YourBotArmy component and can be enlisted only once.

* Release from Army:  Remove a bot from your army by clicking on it.

* Discharge Forever: Permanently delete a bot from both the frontend and the backend by clicking the red "discharge" button.


## Components

* BotCard: Displays individual bot details.
* BotCollection: Displays a list of all available bots.
* YourBotArmy: Displays bots that have been added to the user's army.

## Endpoints 

1. GET /bots: Retrieve a list of all bots.
2. DELETE /bots/: Delete a bot by its ID.

## Brief note

1. Use React components, state, and props to manage the interactions.
2. Fetch data from the local server using fetch 

## Author 

Megan Kwamboka Nyakina

## Date

13 August 2024

## Vercel link

[link] {`https://phase-2-challenge-2-hv5j.vercel.app/`}