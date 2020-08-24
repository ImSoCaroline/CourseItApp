import React from 'react';
import PropTypes from 'prop-types';

const SubtitleComponent = ({ subtitle }) => (<h2>{subtitle}</h2>);

export default SubtitleComponent;

SubtitleComponent.propTypes = {
  subtitle: PropTypes.string.isRequired
}