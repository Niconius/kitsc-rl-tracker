import React from 'react'
import './player-item.css';

class PlayerItem extends React.Component {

    render() {
        let rank = "";
        let mmr = "";
        switch (this.props.gameMode) {
            case "duel":
                rank = this.props.player.duel_rank;
                mmr = this.props.player.duel_mmr;
                break;
            case "doubles":
                rank = this.props.player.doubles_rank;
                mmr = this.props.player.doubles_mmr;
                break;
            case "standard":
                rank = this.props.player.standard_rank;
                mmr = this.props.player.standard_mmr;
                break;
            case "solo_standard":
                rank = this.props.player.solo_standard_rank;
                mmr = this.props.player.solo_standard_mmr;
                break;
        }

        return (
            <div className="playerItem">
                <div className="baseInfoContainer">
                    <p className="listRank">{this.props.rank}</p>
                    <img src={this.props.player.steam_picture_url}></img>
                    <div className="nameContainer">
                        <p className="playerName">{this.props.player.name}</p>
                        <p className="teamName">{this.props.player.team_name}</p>
                    </div>
                </div>
                <div className="rankAndMMRContainer">
                    <img src={rank}/>
                    <p className="mmr">{mmr}</p>
                </div>
            </div>
        );
    }
}
export default PlayerItem;
