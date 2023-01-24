import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

function AppUI(){
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    return(
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
  
  {/* Podemos acceder a nuestro contexto con el consumer */}
        {/* <TodoContext.Consumer> */}
            <TodoList>
                {error && <TodosError error={error} />}
                {loading && <TodosLoading />}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                    // Los campos dentro del componente son propiedades "PROPS"
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete = {() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

    {/* </TodoContext.Consumer> */}

            <CreateTodoButton setOpenModal={setOpenModal} />   
        </React.Fragment>
    );
}

export { AppUI };