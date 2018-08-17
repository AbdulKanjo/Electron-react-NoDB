import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class ListOfGames extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      filterString: ""
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/games").then(res => {
      console.log(res.data);
      this.setState({ games: res.data });
    });
  }
  handleChange(filter) {
    this.setState({ filterString: filter });
  }
  render() {
    let filteredGames = this.state.games
      .filter((e, i) => {
        return e.name
          .toUpperCase()
          .includes(this.state.filterString.toUpperCase());
      })
      .map((e, i) => {
        return (
          <div key={i}>
            <div>{e.name}</div>
            <div>
              <Link to={`/game/${e.id}`}> More info! </Link>
            </div>
          </div>
        );
      });
    return (
      <div>
        <input
          className="search"
          placeholder="Search"
          onChange={e => this.handleChange(e.target.value)}
        />
        {filteredGames}
      </div>
    );
  }
}

export default ListOfGames;
