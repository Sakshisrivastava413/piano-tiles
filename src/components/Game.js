import React, { Component } from 'react';
import './Game.css';

const Tile = ({index}) => {
  return (
    <div style={{ width: `${index * 25}%` }} className="tile">
    </div>
)}

export default class Game extends Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <div className="lives-container">
            <img src="./lives.png" alt="lives" className="lives" />
            <img src="./lives.png" alt="lives" className="lives" />
            <img src="./lives.png" alt="lives" className="lives" />
          </div>
          <div className="score">10</div>
        </div>
        <div className="game">
          <div className="col">
          </div>
          <div className="col">
          </div>
          <div className="col">
          </div>
          <div className="col" style={{ borderRight: 'none'}}>
          </div>
        </div>
        <div className="footer">
          <div className="card">
            <div className="card-info">
              <img src="./compact-disc.png" alt="compact-disc" className="footer-icon" />
              <span className="card-title">Music:</span> Jingle Bells
            </div>
            <div>
            <img src="./trophy.png" alt="trophy" className="footer-icon" />
            <span className="card-title">Best Score:</span> 0
            </div>
          </div>
        </div>

      </div>
    )
  }
}
