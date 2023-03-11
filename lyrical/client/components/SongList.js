import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = (props) => {
  const songs = props.data.songs;
  let loading = props.data.loading;
  return (
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
  );
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
