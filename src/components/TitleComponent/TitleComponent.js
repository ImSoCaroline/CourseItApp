import React from 'react';
import PropTypes from 'prop-types';

const TitleComponent = ({ title }) => (<h1>{title}</h1>);

export default TitleComponent;

TitleComponent.propTypes = {
  title: PropTypes.string.isRequired
}