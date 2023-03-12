import React from "react";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongsQuery from "../queries/fetchSongs";
import deleteSongQuery from "../queries/deleteSong";

const SongList = (props) => {
  const songs = props.data.songs;
  let loading = props.data.loading;
  const deleteSongHandler = (id) => {
    // console.log(id, "DELETED");
    props
      .mutate({
        variables: {
          id,
        },
      })
      .then(() => props.data.refetch());
  };

  return (
    <div>
      <ul className="collection">
        {!loading ? (
          songs.map(({ id, title }) => (
            <li key={id} className="collection-item">
              <Link to={`/songs/${id}`}>{title}</Link>
              <i
                style={{ cursor: "pointer" }}
                className="material-icons"
                onClick={() => deleteSongHandler(id)}
              >
                delete
              </i>
            </li>
          ))
        ) : (
          <div>loading...</div>
        )}
      </ul>
      <Link to="/songs/new" className="btn-floating btn-large green right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default graphql(deleteSongQuery)(graphql(fetchSongsQuery)(SongList));

// export default compose(
//   graphql(fetchSongsQuery),
//   graphql(deleteSongQuery)
// )(SongList);
