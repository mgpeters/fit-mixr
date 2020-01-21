import React from 'react';
import PropTypes from 'prop-types';

const GameList = (props) => {
  const { gameList } = props;
  const listElements = gameList.map((game) => (
    <li key={game.createdAt}>
      {game.winner}
      {' '}
won at
      {' '}
      {game.createdAt}
    </li>
  ));
  return (
    <div id="gameList">
      <h3>Past matches</h3>
      <ul>
        {listElements}
      </ul>
    </div>
  );
};

GameList.propTypes = {
  gameList: PropTypes.array.isRequired,
};

export default GameList;
