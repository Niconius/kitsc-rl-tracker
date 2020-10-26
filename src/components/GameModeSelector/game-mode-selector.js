import React from 'react';
import './game-mode-selector.css';

class GameModeSelector extends React.Component {
    render() {
        return (
            <div className="gameModeList">
                <p className={this.props.gameMode === "standard" ? "active" : "inactive"} onClick={() => this.props.updateMode("standard")}>Standard</p>
                <p className={this.props.gameMode === "doubles" ? "active" : "inactive"} onClick={() => this.props.updateMode("doubles")}>Doubles</p>
                <p className={this.props.gameMode === "duel" ? "active" : "inactive"} onClick={() => this.props.updateMode("duel")}>Duel</p>
            </div>
        );
    }
}
export default GameModeSelector;
