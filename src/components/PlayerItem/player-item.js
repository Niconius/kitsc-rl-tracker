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
                    <a href={`http://steamcommunity.com/profiles/${this.props.player.steam_id}`} target="_blank">
                        <img src={this.props.player.steam_picture_url}></img>
                    </a>
                    <div className="nameContainer">
                        <p className="playerName">{this.props.player.name}</p>
                        <p className="teamName">{this.props.player.team_name}</p>
                    </div>
                </div>
                <div className="rankAndMMRContainer">
                    <p className="mmr">{mmr}</p>
                    <div className="rankContainer">
                        <div className="rankImgBackground" />
                        <a href={`https://rocketleague.tracker.network/rocket-league/profile/steam/${this.props.player.steam_id}/overview`} target="_blank">
                            <img src={rank}/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default PlayerItem;
