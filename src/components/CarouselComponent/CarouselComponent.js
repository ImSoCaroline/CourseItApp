import React from 'react';
import CarouselCard from '../CarouselCard/CarouselCard';
import PropTypes from 'prop-types';

const CarouselComponent = ({ data }) => {
  return (
    <div className='carousel'>
      {data &&
        data.map((info) => <CarouselCard info={info} />)
      }
    </div>
  )
}

export default CarouselComponent;

CarouselComponent.propTypes = {
  data: PropTypes.object.isRequired
}