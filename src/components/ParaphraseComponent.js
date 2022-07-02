import React from "react";
import PropTypes from "prop-types";

export default function ParaphraseComponent(props) {
  return (
    <p>
      {props.msg}
    </p>
  );
}

ParaphraseComponent.propTypes = {
    msg: PropTypes.string.isRequired
}
    