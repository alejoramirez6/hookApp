import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";


describe('Pruebas en el useForm', () => { 

    test('Debe de regresar los valores por defecto', () => { 
        const initialForm = {
            name: 'Fernando',
            email: 'fernando@google.com'
        }
        const {result} = renderHook( () => useForm(initialForm));
        console.log(result.current);
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
          })

     });


     test('Debe de cambiar el nombre del formulario', () => { 
        const newValue = 'Juan';
        const initialForm = {
            name: 'Fernando',
            email: 'fernando@google.com'
        }
        const {result} = renderHook( () => useForm(initialForm));
        const {formState, onInputChange} = result.current;
        console.log(result.current);
      
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });

        });
        expect(result.current.name).toEqual('Juan');
        expect(result.current.formState.name).toEqual(newValue);

     });

     test('Debe de hacer el reset del formulario', () => { 
        const newValue = 'Juan';
        const initialForm = {
            name: 'Fernando',
            email: 'fernando@google.com'
        }
        const {result} = renderHook( () => useForm(initialForm));
        const {formState, onInputChange, onResetForm} = result.current;
        console.log(result.current);
      
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });
        expect(result.current.name).toEqual(initialForm.name);
        expect(result.current.formState.name).toEqual(initialForm.name);

     });

 });