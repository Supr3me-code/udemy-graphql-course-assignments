import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = (props) => {
  const songs = props.data.songs;
  let loading = props.data.loading;
  return (
    <ul>
      {!loading ? (
        songs.map((song, key) => <li>{`${key + 1}. ${song.title}`}</li>)
      ) : (
        <div>loading...</div>
      )}
    </ul>
  );
};

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);
