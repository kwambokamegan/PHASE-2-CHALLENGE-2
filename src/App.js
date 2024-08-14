import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './styles/index.css';

function App() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await axios.get('https://botsbattlr-backend.vercel.app/bots');
        setBots(response.data);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };
    fetchBots();
  }, []);

  const enlistBot = (bot) => {
    console.log('Enlisting bot:', bot); 
    if (!botArmy.some(b => b.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const releaseBot = (botId) => {
    setBotArmy(botArmy.filter(b => b.id !== botId));
  };

  const dischargeBot = async (botId) => {
    console.log('Attempting to discharge bot with ID:', botId); 
    try {
      
      const response = await axios.delete(`https://botsbattlr-backend.vercel.app/bots/${botId}`);
      console.log('Bot discharged successfully:', response); 
      releaseBot(botId);
    } catch (error) {
      console.error('Error discharging bot:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <BotCollection
        bots={bots}
        enlistBot={enlistBot}
      />
      <YourBotArmy
        bots={botArmy}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
    </div>
  );
}

export default App;
