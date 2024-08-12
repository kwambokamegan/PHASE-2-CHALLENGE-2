import React from 'react';
import './BotCard.css';

function BotCard({ bot, enlistBot, releaseBot, dischargeBot, isArmy }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <div className="catchphrase-box">
        <p>Catchphrase: {bot.catchphrase}</p>
      </div>
      {isArmy ? (
        <>
          <button onClick={() => releaseBot(bot.id)}>Release</button>
          <button onClick={() => dischargeBot(bot.id)} style={{ backgroundColor: 'red' }}>Discharge</button>
        </>
      ) : (
        <button className="enlist-button" onClick={() => enlistBot(bot)}>Enlist</button>
      )}
    </div>
  );
}

export default BotCard;
