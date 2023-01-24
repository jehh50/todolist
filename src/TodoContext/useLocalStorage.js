import React from 'react';

//Custom HOOK: regla, los hooks todos inician con "use"     // Creamos el estado inicial para nuestros errores y carga

function useLocalStorage(itemName,initialValue){
    const {error, setError} = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);  
  
    React.useEffect(() => {
      // Simulamos un segundo de delay de carga
      setTimeout(() => {
        // Manejamos la tarea dentro de un try/catch por si ocurre algún error
        try {
          // Traemos nuestros TODOs almacenados
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (!localStorageItem) {
            // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            // Si existen TODOs en el localStorage los regresamos como nuestros todos
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
        
        } catch(error){
          // En caso de un error lo guardamos en el estado
          setError();    
        } finally {
          // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
          setLoading(false);
        }
      }, 3000);
    });
  
    const saveItem = (newItem) => {
      // Manejamos la tarea dentro de un try/catch por si ocurre algún error
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } 
      catch(error) {
        setError(error);
      }
    };
  
    // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

export {useLocalStorage};