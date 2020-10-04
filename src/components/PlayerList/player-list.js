import React from 'react';
import db from "../Firebase/firebase";
import PlayerItem from "../PlayerItem/player-item"
import './player-list.css'

class PlayerList extends React.Component {
    state = {
        players: []
    }

    sortPlayers = () => {
        const gameMode = this.props.gameMode;
        let sortedPlayers = this.state.players.sort(function(a, b) {
            let a_mmr = 0;
            let b_mmr = 0;
            switch (gameMode) {
                case "duel":
                    a_mmr = a.duel_mmr;
                    b_mmr = b.duel_mmr;
                    break;
                case "doubles":
                    a_mmr = a.doubles_mmr;
                    b_mmr = b.doubles_mmr;
                    break;
                case "standard":
                    a_mmr = a.standard_mmr;
                    b_mmr = b.standard_mmr;
                    break;
                case "solo_standard":
                    a_mmr = a.solo_standard_mmr;
                    b_mmr = b.solo_standard_mmr;
                    break;
            }
            return b_mmr - a_mmr;
        });
        this.setState({ players: sortedPlayers });
    }


    componentDidMount() {
        db.collection("Players").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.setState({ players: this.state.players.concat(doc.data()) });
            });
            this.sortPlayers();
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.gameMode === this.props.gameMode) {
            return;
        }
        this.sortPlayers();
    }

    render() {
        return (
            <ul>
                {this.state.players.map((player, index) => (
                    <PlayerItem key={player.steam_id} player={player} rank={index + 1} gameMode={this.props.gameMode} />
                ))}
            </ul>
        );
    }
}
export default PlayerList;
