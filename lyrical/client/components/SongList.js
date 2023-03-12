import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongsQuery from "../queries/fetchSongs";

const SongList = (props) => {
  const songs = props.data.songs;
  let loading = props.data.loading;
  return (
    <div>
      <ul className="collection">
        {!loading ? (
          songs.map((song, key) => (
            <li key={song.id} className="collection-item">
              {song.title}
            </li>
          ))
        ) : (
          <div>loading...</div>
        )}
      </ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default graphql(fetchSongsQuery)(SongList);
