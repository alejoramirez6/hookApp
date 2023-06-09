import { HomePage } from "../../src/09-useContext/HomePage";

import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en el homepage', () => {

    const user = {
        id: 1, 
        name: 'Fernando'
    };



    test('Debe de mostrar el componente sin el usuario', () => { 

        render( 
        
        <UserContext.Provider value={{user: null}}>
            <HomePage />
        </UserContext.Provider>
        
        );
       // screen.debug();
       const preTag = screen.getByLabelText('pre');
      // console.log( preTag.innerHTML);
      expect( preTag.innerHTML ).toBe( 'null');

    });


    test('Debe de mostrar el componente con el usuario', () => { 

        render( 
        
        <UserContext.Provider value={{user}}>
            <HomePage />
        </UserContext.Provider>
        
        );
       // screen.debug();
       const preTag = screen.getByLabelText('pre');
      console.log( preTag.innerHTML);
      expect( preTag.innerHTML ).toContain( user.name );
      expect( preTag.innerHTML ).toContain( `${user.id}` );

    });

});
