import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";


describe('Pruebas en el LoginPage', () => {

    const user = {
        id: 1, 
        name: 'Fernando'
    };

    test('Debe de mostrar el componente sin el usuario', () => { 
        render( 
        
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
            );

            const preTag = screen.getByLabelText('pre');
            console.log( preTag.innerHTML);
            expect( preTag.innerHTML ).toBe( 'null');


     });

     test('Debe dellamar el setUser cuando se hace click en el boton', () => { 
      
        const setUserMock = jest.fn();

        render( 
            <UserContext.Provider value={{user: null, setuser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
            
            ); 

            const button = screen.getByRole('button');
            fireEvent.click(button);
            expect(setUserMock).toHaveBeenCalled();
            expect(setUserMock).toHaveBeenCalledWith({"email": "juan@google.com", "id": 123, "name": "Juan"});

     });



 });