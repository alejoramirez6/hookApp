import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en el componente Main App', () => { 
   
    test('Debe de mostrar el homepage', () => { 
        render(
            <MemoryRouter>
                render(<MainApp/>);

            </MemoryRouter>
        );
        expect( screen.getByText('HomePage')).toBeTruthy();
       // screen.debug();
     });


     test('Debe de mostrar el login Page', () => { 
        render(
            <MemoryRouter initialEntries={['/login']}>
                render(<MainApp/>);

            </MemoryRouter>
        );
        expect( screen.getByText('LoginPage')).toBeTruthy();
        screen.debug();
     });

 });