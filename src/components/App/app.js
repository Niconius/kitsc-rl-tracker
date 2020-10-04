import React, {Fragment} from 'react';
import DarkModeSelector from '../DarkModeSwitch/dark-mode-switch';
import GameModeSelector from '../GameModeSelector/game-mode-selector'
import PlayerList from '../PlayerList/player-list'
import './app.css'

class App extends React.Component {
    state = {
        gameMode: "standard",
        darkMode: this.props.darkMode
    };

    componentDidMount() {
        if (this.state.darkMode) {
            document.body.classList.add('dark');
        }
        else {
            document.body.classList.add('light');
        }
    }

    changeGameMode = (newMode) => {
        this.setState({ gameMode: newMode });
    };

    toggleDarkMode = () => {
        const newDarkModeState = !this.state.darkMode;
        if (newDarkModeState) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        }
        else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
        this.setState({ darkMode: newDarkModeState });
    };
    
    render() {
        return (
            <Fragment>
                <GameModeSelector gameMode={this.state.gameMode} updateMode={this.changeGameMode}/>
                <PlayerList gameMode={this.state.gameMode}/>
                <DarkModeSelector darkMode={this.state.darkMode} toggleDarkMode={this.toggleDarkMode}/>
            </Fragment>
        );
    }
}
export default App;
