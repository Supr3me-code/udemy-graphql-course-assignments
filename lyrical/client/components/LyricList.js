import React from "react";

const LyricList = (props) => {
  return (
    <ul className="collection">
      {props.lyrics.map(({ id, content }) => (
        <li key={id} className="collection-item">
          {content}
        </li>
      ))}
    </ul>
  );
};

export default LyricList;
