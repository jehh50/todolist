import React from 'react';
import { TodoContext } from '../TodoContext';
import './Todoform.css';

function TodoForm(){
    // Creamos un estado para nuestro nuevo TODO
    const [newTodoValue, setNewTodoValue] = React.useState('');

    // Desestructuramos las funciones que necesitamos para añadir un TODO y cerrar nuestro modal
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    // Creamos una función para actualizar el estado de nuestro nuevo TODO, lo que se escribe se guarda en LocalStorage
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    
    // Función para cancelar un nuevo TODO
    const onCancel = () => {
        setOpenModal(false);
    };

    // Función para agregar nuestro nuevo TODO
    const onSubmit = (event) => {
        event.preventDefault();     //Previene que la página recargue por defecto por el SUBMIT
        if(newTodoValue === '' || !newTodoValue){
            alert('No completaste el ToDo, intenta de nuevo')
        }else{
            addTodo(newTodoValue);      //Agrega el nuevo Todo
            setOpenModal(false);        //Cierra el modal
            setNewTodoValue('');        //Reinicia el estado de la variable
        }

    };

    return(
        <form onSubmit={onSubmit} >
            <label>Crear un nuevo To Do</label>
            <textarea placeholder="De que se trata tu ToDo..." value={newTodoValue} onChange={onChange} autoFocus>
            </textarea>
            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>        
    );
}

export { TodoForm };