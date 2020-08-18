import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const players = [
    {
      Id: 1,
      Name: "Cam Newton",
      Number: 1,
      Position: "QB",
      Team: "Carolina Panthers"
    },
    {
      Id: 2,
      Name: "Luke Kuechly",
      Number: 59,
      Position: "MLB",
      Team: "Carolina Panthers"
    },
    {
      Id: 3,
      Name: "Aaron Rodgers",
      Number: 12,
      Position: "QB",
      Team: "Green Bay Packers"
    },
    {
      Id: 4,
      Name: "JJ Watt",
      Number: 99,
      Position: "DE",
      Team: "Houston Texans"
    },
    {
      Id: 5,
      Name: "Josh Norman",
      Number: 24,
      Position: "CB",
      Team: "Washington Redskins"
    },
    {
      Id: 6,
      Name: "Jordy Nelson",
      Number: 87,
      Position: "WR",
      Team: "Green Bay Packers"
    },
    {
      Id: 7,
      Name: "Matt Ryan",
      Number: 2,
      Position: "QB",
      Team: "Atlanta Falcons"
    },
    {
      Id: 8,
      Name: "Julio Jones",
      Number: 11,
      Position: "WR",
      Team: "Atlanta Falcons"
    },
    {
      Id: 9,
      Name: "Devonta Freeman",
      Number: 24,
      Position: "RB",
      Team: "Atlanta Falcons"
    },
    {
      Id: 10,
      Name: "Kelvin Benjamin",
      Number: 13,
      Position: "WR",
      Team: "Carolina Panthers"
    },
    {
      Id: 11,
      Name: "Von Miller",
      Number: 58,
      Position: "OLB",
      Team: "Denver Broncos"
    },
    {
      Id: 12,
      Name: "Thomas Davis",
      Number: 58,
      Position: "OLB",
      Team: "Carolina Panthers"
    },
    {
      Id: 13,
      Name: "Drew Brees",
      Number: 9,
      Position: "QB",
      Team: "New Orleans Saints"
    },
    {
      Id: 14,
      Name: "Tom Brady",
      Number: 12,
      Position: "QB",
      Team: "New England Patriots"
    },
    {
      Id: 15,
      Name: "Rob Gronkowski",
      Number: 87,
      Position: "TE",
      Team: "New England Patriots"
    },
    {
      Id: 16,
      Name: "Greg Olsen",
      Number: 88,
      Position: "TE",
      Team: "Carolina Panthers"
    },
    {
      Id: 17,
      Name: "Leveon Bell",
      Number: 26,
      Position: "RB",
      Team: "Pittsburgh Steelers"
    },
    {
      Id: 18,
      Name: "Antonio Brown",
      Number: 84,
      Position: "WR",
      Team: "Pittsburgh Steelers"
    },
    {
      Id: 19,
      Name: "Dak Prescott",
      Number: 4,
      Position: "QB",
      Team: "Dallas Cowboys"
    },
    {
      Id: 20,
      Name: "Ezekiel Elliot",
      Number: 21,
      Position: "RB",
      Team: "Dallas Cowboys"
    }
  ];
  
  class PlayerItem extends React.Component {
    render() {
      return (
        <li className="list-group-item">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="font-weight-bold">{this.props.player.Name}</span> - {this.props.player.Number}<br />{this.props.player.Team}
            </div>
            <h4 className="m-0">
              {this.props.player.Position}
            </h4>
          </div>
        </li>
      );
    }
  }
  
  class PlayerListCard extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        sortMode: "Team",
        sortDesc: false,
        minNumber: 0,
        maxNumber: 100,
      };

      // bind handlers
      this.handleMinChange = this.handleMinChange.bind(this);
      this.handleMaxChange = this.handleMaxChange.bind(this);
    }
  
    handleMinChange(event) {
      var value = Number(event.target.value);
      if (value >= this.state.maxNumber){
        value = this.state.maxNumber - 1;
      }
      else if (value > 99){
        value = 99;
      }
      else if (value < 0){
        value = 0;
      }
  
      if (value !== this.state.minNumber){
        this.setState({minNumber: value});
      }
    }
  
    handleMaxChange(event) {
      var value = Number(event.target.value);
      if (value <= this.state.minNumber){
        value = this.state.minNumber + 1;
      }
      else if (value < 1){
        value = 1;
      }
      else if (value > 100){
        value = 100;
      }
  
      if (value !== this.state.maxNumber){
        this.setState({maxNumber: value});
      }
    }
  
    render() {
      const filterPlayers = (player) => {
        return player.Number >= this.state.minNumber && player.Number <= this.state.maxNumber;
      };
  
      const sortPlayers = (a, b) => {
        var sortProp = this.state.sortMode;
        if (a[sortProp] < b[sortProp])
          return -1;
        if (a[sortProp] > b[sortProp])
          return 1;
        return 0;
      };
  
      var results = players.filter(filterPlayers).sort(sortPlayers);
      if (this.state.sortDesc) {
        results = results.reverse();
      }
  
      const playerItems = results.map((player) =>
        <PlayerItem key={player.Id} player={player} />
      );
  
      return (
        <div className="card border-dark box-shadow">
          <div className="card-body">
            <h5 className="card-title text-center">NFL Players</h5>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="dropdown d-inline-block">
                  <button id="sortMode" type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort By: <span className="font-weight-bold">{this.state.sortMode}</span>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="sortMode">
                    <button type="button" className="dropdown-item" onClick={() => this.setState({sortMode: "Position"})}>Position</button>
                    <button type="button" className="dropdown-item" onClick={() => this.setState({sortMode: "Team"})}>Team</button>
                  </div>
                </div>
                <button type="button" className={"btn btn-sm btn-light font-weight-bold " + (this.state.sortDesc ? "flip-text" : "")} onClick={() => this.setState({sortDesc: !this.state.sortDesc})}>&#94;</button>
              </div>
              <div>
                <input type="number" className="num-filter form-control d-inline-block" value={this.state.minNumber} onChange={this.handleMinChange} />
                <span className="font-weight-bold px-2">-</span>
                <input type="number" className="num-filter form-control d-inline-block" value={this.state.maxNumber} onChange={this.handleMaxChange} />
              </div>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            {playerItems}
          </ul>
        </div>
      );
    }
  }
  
// ========================================
  
ReactDOM.render(
    <PlayerListCard />,
    document.getElementById('app')
);
  