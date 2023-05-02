import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";


describe('Pruebas en el componente todoItem', () => { 

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('debe de mortar el Todo pendiente de completar', () => { 

        render( 
                <TodoItem t
                    todo={todo} 
                    onToggleTodo={onToggleTodoMock} 
                    onDeleteTodo={onDeleteTodoMock}
                /> 
            );

            const liElement = screen.getByRole('listitem');
            expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
            
            const spanElement = screen.getByLabelText('span');
            console.log(spanElement.className);
            expect(spanElement.className).toContain('align-self-center ');
            
            
     });

     test('debe de mortar el Todo completado', () => { 

        todo.done = true; 
        render( 
                <TodoItem 
                    todo={todo} 
                    onToggleTodo={onToggleTodoMock} 
                    onDeleteTodo={onDeleteTodoMock}
                /> 
            );
      
            const spanElement = screen.getByLabelText('span');
            expect(spanElement.className).toContain('text-decoration-line-through');
                    
     });

     test('Debe de llamar el toggleTodo cuando se hace click', () => { 

        render( 
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith(todo.id);

      });


      test('boton debe de llamar el deleteTodo', () => { 

        render( 
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            /> 
        );

        //const deleteElement = screen.getByRole('button');
        //fireEvent.click( deleteElement );
        const deleteElement2 = screen.getByLabelText('borrar');
        fireEvent.click( deleteElement2 );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith(todo.id);

      });



 });