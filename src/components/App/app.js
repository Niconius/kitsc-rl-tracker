import React, {Fragment} from 'react';
import GameModeSelector from '../GameModeSelector/game-mode-selector'
import PlayerList from '../PlayerList/player-list'
import './app.css'

class App extends React.Component {
    state = { gameMode: "standard"};

    changeGameMode = (newMode) => {
        this.setState({ gameMode: newMode });
    };
    
    render() {
        return (
            <Fragment>
                <GameModeSelector gameMode={this.state.gameMode} updateMode={this.changeGameMode}/>
                <PlayerList gameMode={this.state.gameMode}/>
            </Fragment>
        );
    }
}
export default App;
