import React from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players';

export default class Player extends React.Component {
  render() {
    let itemClassName = `item item--position-${this.props.player.rank}`;
    let playerPoints = this.props.player.score;
    return (
        <div key={this.props.player._id} className={itemClassName}>
          <div className="player">
            <div>
              <h3 className="player__name">{this.props.player.name}</h3>
              <p className="player__stats">
                  {this.props.player.position} place - {playerPoints} { playerPoints===1 ? `point.` : `points.` }
              </p>
            </div>
            <div className="player__actions">
              <button className="button button--round" onClick={() => {
                Players.update(this.props.player._id, {$inc: {score: 1}});
            }}>+1</button>
            <button className="button button--round" onClick={() => {
              Players.update(this.props.player._id, {$inc: {score: -1}});
            }}>-1</button>
              <button className="button button--round" onClick={() => Players.remove(this.props.player._id)}>X</button>
            </div>
          </div>
      </div>
    );

  }
};

Player.propTypes = {
  player: PropTypes.object.isRequired
};
