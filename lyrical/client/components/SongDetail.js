import React from "react";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";
import { Link, hashHistory } from "react-router";
import LyricCreate from "./LyricCreate";

const SongDetail = (props) => {
  const { song, loading } = props.data;

  return (
    <div>
      <Link to="/">Back</Link>
      {!loading ? <h3>{song.title}</h3> : <h4>loading...</h4>}
      <LyricCreate />
    </div>
  );
};

export default graphql(fetchSong, {
  options: (ssprops) => {
    return { variables: { id: ssprops.params.id } };
  },
})(SongDetail);
