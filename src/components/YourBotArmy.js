import React from 'react';
import BotCard from './BotCard';
import './YourBotArmy.css';

function YourBotArmy({ bots, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {bots.map(bot => (
        <BotCard
          key={bot.id}
          bot={bot}
          releaseBot={releaseBot}
          dischargeBot={dischargeBot}
          isArmy={true}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
