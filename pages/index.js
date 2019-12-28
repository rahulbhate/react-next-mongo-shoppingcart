// This is the Link API
import React, { Component, useContext } from 'react';
import UserContext from '../src/components/UserContext';
import ImageSlider from '../src/components/ImageSlider/ImageSlider';

function Index ()  {
  const { user } = useContext(UserContext);
    return (
      <div>
        This is {user}
       <ImageSlider />
      </div>
    );
}

export default Index;
