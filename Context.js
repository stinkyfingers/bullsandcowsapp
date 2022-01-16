import React, { createContext } from 'react';

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [game, setGame] = React.useState();
  return (
    <GameContext.Provider value={[game, setGame]}>
    {props.children}
    </GameContext.Provider>);
};

// status can be: active, won, lost
export const StatusContext = createContext();

export const StatusProvider = (props) => {
  const [status, setStatus] = React.useState();
  return (
    <StatusContext.Provider value={[status, setStatus]}>
    {props.children}
    </StatusContext.Provider>);
};
