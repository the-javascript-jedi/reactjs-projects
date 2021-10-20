import React, { useState, useEffect } from "react";
import Player from "./Player";
import playersJSON from "../data/players.json";
import { useDrop } from "react-dnd";
const TeamSelection = () => {
  const [players, setPlayers] = useState(() => playersJSON);
  const [team, setTeam] = useState([]);
  useEffect(() => {
    console.log("players", players);
  }, [players]);
  useEffect(() => {
    console.log("team", team);
  }, [team]);
  //isOver - when dragged item isOver the component we can execute this function
  const [{ isOver }, addToTeamRef] = useDrop({
    accept: "player",
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const [{ isOver: isPlayerOver }, removeFromTeamRef] = useDrop({
    accept: "team",
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  //whenever drag and drop happens we need to take the id and take array element from players and move to teams
  const movePlayer = (item) => {
    console.log(item);
    if (item && item.type === "player") {
      //Accepting player into the team
      setTeam((_team) => [..._team, players[item.index]]);
      setPlayers((_players) => _players.filter((_, idx) => idx !== item.index));
    } else {
      //Removing a player from team
      setPlayers((_players) => [..._players, team[item.index]]);
      setTeam((_team) => _team.filter((_, idx) => idx !== item.index));
    }
  };

  const dragHoverTeamBG = isOver ? "bg-warning" : "bg-light";
  const dragHoverPlayerBG = isPlayerOver ? "bg-warning" : "bg-light";

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2>Team Selection Component</h2>
          <p>Demonstrating react-dnd by implementing team selection UI</p>
          <div className="row justify-content-md-center">
            <div className={`col-5 border m-2 ${dragHoverPlayerBG}`}>
              <div className="bg-info row text-white">
                <div className="col font-weight-bold">Available Players</div>
              </div>
              <ul className="list-group py-2 h-100" ref={removeFromTeamRef}>
                {players.map((player, idx) => (
                  <Player
                    {...player}
                    key={player.id}
                    index={idx}
                    playerType="player"
                    //call the movePlayer function to update the ids
                    onDropPlayer={movePlayer}
                  />
                ))}
              </ul>
            </div>
            <div className={`col-5 border m-2 ${dragHoverTeamBG}`}>
              <div className="bg-success row text-white">
                <div className="col font-weight-bold">THE A-TEAM</div>
              </div>
              <ul className="list-group py-2 h-100" ref={addToTeamRef}>
                {team.map((player, idx) => (
                  <Player
                    {...player}
                    key={player.id}
                    index={idx}
                    playerType="team"
                    //call the movePlayer function to update the ids
                    onDropPlayer={movePlayer}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TeamSelection;
