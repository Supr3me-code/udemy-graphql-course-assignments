import React from "react";
import { graphql } from "react-apollo";
import likeLyric from "../queries/likeLyric";

const LyricList = (props) => {
  const likeHandler = (id, likes) => {
    props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          likes: likes + 1,
        },
      },
    });
  };
  return (
    <ul className="collection">
      {props.lyrics.map(({ id, content, likes }) => (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i
              className="material-icons"
              onClick={() => likeHandler(id, likes)}
            >
              thumb_up
            </i>
            <span>{likes}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default graphql(likeLyric)(LyricList);
