import React from "react";
import { graphql } from "react-apollo";
import likeLyric from "../queries/likeLyric";

const LyricList = (props) => {
  const likeHandler = (id) => {
    props.mutate({
      variables: { id },
    });
  };
  return (
    <ul className="collection">
      {props.lyrics.map(({ id, content, likes }) => (
        <li key={id} className="collection-item">
          {content}
          <div>
            <i className="material-icons" onClick={() => likeHandler(id)}>
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default graphql(likeLyric)(LyricList);
