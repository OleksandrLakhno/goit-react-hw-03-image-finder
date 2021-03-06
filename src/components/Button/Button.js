import React from "react";
import PropTypes from 'prop-types';

function Button({ onClick}) {
    return (
            <button className="Button" type="button" onClick={onClick }>Load More</button>
  )  
};

Button.propTypes = {
  onClick:PropTypes.func.isRequired,
};

export default Button;