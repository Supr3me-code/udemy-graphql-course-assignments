import React, { Fragment } from "react";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";
import { Link, hashHistory } from "react-router";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

const SongDetail = (props) => {
  const { song, loading } = props.data;

  return (
    <div>
      <Link to="/">Back</Link>
      {!loading ? (
        <div>
          <h3>{song.title}</h3>
          <LyricList lyrics={song.lyrics} />
          <LyricCreate songId={props.params.id} />
        </div>
      ) : (
        <h4>loading...</h4>
      )}
    </div>
  );
};

export default graphql(fetchSong, {
  options: (ssprops) => {
    return { variables: { id: ssprops.params.id } };
  },
})(SongDetail);
