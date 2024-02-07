import React from 'react';
import lupaSvg from '../lupa.svg'; 

const Search = () => {
  return (
    <div id="divBusca">
      <input type="text" id="txtBusca" placeholder="Buscar..." />
      <img src={lupaSvg} id="btnBusca" alt="Buscar" />
    </div>
  );
};

export default Search;
