import React from 'react';
import db from "../Firebase/firebase";
import PlayerItem from "../PlayerItem/player-item"
import './player-list.css'

class PlayerList extends React.Component {
    state = {
        players: [
            // {
            //     doubles_mmr: 1292,
            //     doubles_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     duel_mmr: 936,
            //     duel_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-15.png",
            //     name: "Raven",
            //     solo_standard_mmr: 1151,
            //     solo_standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     standard_mmr: 1421,
            //     standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-18.png",
            //     steam_id: "76561198233380840",
            //     steam_picture_url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6d/6df6aea7bf494ca016d97ce6ed18dbbb9eb32024_full.jpg",
            //     team_name: "Hydroponics",
            // },
            // {
            //     doubles_mmr: 1292,
            //     doubles_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     duel_mmr: 936,
            //     duel_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-15.png",
            //     name: "Raven",
            //     solo_standard_mmr: 1151,
            //     solo_standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     standard_mmr: 1421,
            //     standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-18.png",
            //     steam_id: "76561198233380840",
            //     steam_picture_url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6d/6df6aea7bf494ca016d97ce6ed18dbbb9eb32024_full.jpg",
            //     team_name: "Hydroponics",
            // },
            // {
            //     doubles_mmr: 1292,
            //     doubles_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     duel_mmr: 936,
            //     duel_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-15.png",
            //     name: "Raven",
            //     solo_standard_mmr: 1151,
            //     solo_standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     standard_mmr: 1421,
            //     standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-18.png",
            //     steam_id: "76561198233380840",
            //     steam_picture_url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6d/6df6aea7bf494ca016d97ce6ed18dbbb9eb32024_full.jpg",
            //     team_name: "Hydroponics",
            // },
            // {
            //     doubles_mmr: 1292,
            //     doubles_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     duel_mmr: 936,
            //     duel_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-15.png",
            //     name: "Raven",
            //     solo_standard_mmr: 1151,
            //     solo_standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     standard_mmr: 1421,
            //     standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-18.png",
            //     steam_id: "76561198233380840",
            //     steam_picture_url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6d/6df6aea7bf494ca016d97ce6ed18dbbb9eb32024_full.jpg",
            //     team_name: "Hydroponics",
            // },
            // {
            //     doubles_mmr: 1292,
            //     doubles_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     duel_mmr: 936,
            //     duel_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-15.png",
            //     name: "Raven",
            //     solo_standard_mmr: 1151,
            //     solo_standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     standard_mmr: 1421,
            //     standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-18.png",
            //     steam_id: "76561198233380840",
            //     steam_picture_url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6d/6df6aea7bf494ca016d97ce6ed18dbbb9eb32024_full.jpg",
            //     team_name: "Hydroponics",
            // },
            // {
            //     doubles_mmr: 1292,
            //     doubles_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     duel_mmr: 936,
            //     duel_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-15.png",
            //     name: "Raven",
            //     solo_standard_mmr: 1151,
            //     solo_standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     standard_mmr: 1421,
            //     standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-18.png",
            //     steam_id: "76561198233380840",
            //     steam_picture_url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6d/6df6aea7bf494ca016d97ce6ed18dbbb9eb32024_full.jpg",
            //     team_name: "Hydroponics",
            // },
            // {
            //     doubles_mmr: 1292,
            //     doubles_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     duel_mmr: 936,
            //     duel_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-15.png",
            //     name: "Raven",
            //     solo_standard_mmr: 1151,
            //     solo_standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     standard_mmr: 1421,
            //     standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-18.png",
            //     steam_id: "76561198233380840",
            //     steam_picture_url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6d/6df6aea7bf494ca016d97ce6ed18dbbb9eb32024_full.jpg",
            //     team_name: "Hydroponics",
            // }, {
            //     doubles_mmr: 1292,
            //     doubles_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     duel_mmr: 936,
            //     duel_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-15.png",
            //     name: "Raven",
            //     solo_standard_mmr: 1151,
            //     solo_standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     standard_mmr: 1421,
            //     standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-18.png",
            //     steam_id: "76561198233380840",
            //     steam_picture_url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6d/6df6aea7bf494ca016d97ce6ed18dbbb9eb32024_full.jpg",
            //     team_name: "Hydroponics",
            // },
            // {
            //     doubles_mmr: 1292,
            //     doubles_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     duel_mmr: 936,
            //     duel_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-15.png",
            //     name: "Raven",
            //     solo_standard_mmr: 1151,
            //     solo_standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     standard_mmr: 1421,
            //     standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-18.png",
            //     steam_id: "76561198233380840",
            //     steam_picture_url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6d/6df6aea7bf494ca016d97ce6ed18dbbb9eb32024_full.jpg",
            //     team_name: "Hydroponics",
            // },
            // {
            //     doubles_mmr: 1292,
            //     doubles_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     duel_mmr: 936,
            //     duel_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-15.png",
            //     name: "Raven",
            //     solo_standard_mmr: 1151,
            //     solo_standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     standard_mmr: 1421,
            //     standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-18.png",
            //     steam_id: "76561198233380840",
            //     steam_picture_url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6d/6df6aea7bf494ca016d97ce6ed18dbbb9eb32024_full.jpg",
            //     team_name: "Hydroponics",
            // },
            // {
            //     doubles_mmr: 1292,
            //     doubles_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     duel_mmr: 936,
            //     duel_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-15.png",
            //     name: "Raven",
            //     solo_standard_mmr: 1151,
            //     solo_standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     standard_mmr: 1421,
            //     standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-18.png",
            //     steam_id: "76561198233380840",
            //     steam_picture_url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6d/6df6aea7bf494ca016d97ce6ed18dbbb9eb32024_full.jpg",
            //     team_name: "Hydroponics",
            // },
            // {
            //     doubles_mmr: 1292,
            //     doubles_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     duel_mmr: 936,
            //     duel_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-15.png",
            //     name: "Raven",
            //     solo_standard_mmr: 1151,
            //     solo_standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-17.png",
            //     standard_mmr: 1421,
            //     standard_rank: "https://rocketleague.tracker.network//Images/RL/ranked/s4-18.png",
            //     steam_id: "76561198233380840",
            //     steam_picture_url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6d/6df6aea7bf494ca016d97ce6ed18dbbb9eb32024_full.jpg",
            //     team_name: "Hydroponics",
            // },
        ],
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
