import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const ignacioContext = React.createContext("Ignacio");

  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  /*const [searchValue, setSearchValue] = React.useState('');  //acá se maneja el estado y se inicia con vacio, aunque puede tomar el valor que sea necesario*/
  
  const onSearchValueChange = (event) => {
    //console.log(event.target.value);
    setSearchValue(event.target.value);                       //acá al valor de lo que se va escribiendo en el campo "buscas" se va guardando en el estado
  };
  
  return [
    <input 
      className     = "TodoSearch" 
      placeholder   = "Buscar To Do"
      value         = { searchValue }
      onChange      = { onSearchValueChange }
    />,
    //<p>{searchValue}</p>                                      //a modo prueba se imprime el valor del nuevo estado, que inicialmente esta vacio
  ];
}

export { TodoSearch };
