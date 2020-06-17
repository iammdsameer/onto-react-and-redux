import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongsList extends React.Component {
  render() {
    const songs = this.props.songs.map(song => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button
            onClick={() => this.props.selectSong(song)}
            className="ui button primary"
          >
            Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    ));
    return <div className="ui divided list">{songs}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongsList);
