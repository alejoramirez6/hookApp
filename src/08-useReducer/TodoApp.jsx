
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount } = useTodos();
  
  
  return (
    <>
        <h1>TodosApp: {todosCount}, <small>Pendientes: {pendingTodosCount}</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={ todos } 
                    onDeleteTodo={ id => handleDeleteTodo(id) } 
                    onToggleTodo={ handleToggleTodo }
                    />
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                {/* TodoAdd */}
                <TodoAdd  onNewTodo={handleNewTodo} />
            </div>
        </div>




    
    
    
    
    </>
  )
}
