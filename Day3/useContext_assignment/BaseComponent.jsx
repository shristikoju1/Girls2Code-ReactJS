// BaseComponent.js
import React, { createContext, useContext } from 'react';


const FruitContext = createContext('Apple');

const BaseComponent = () => {
  return (
    <FruitContext.Provider value="Banana">
      <ChildA />
    </FruitContext.Provider>
  );
};


export default BaseComponent;
