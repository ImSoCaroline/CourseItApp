import React from 'react';
import PropTypes from 'prop-types';

const CarouselCard = ({ info }) => (<div>{info.item}</div>);

export default CarouselCard;

CarouselCard.propTypes = {
  info: PropTypes.string.isRequired
}