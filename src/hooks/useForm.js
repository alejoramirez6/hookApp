import { useState } from "react";

export const useForm = (initialForm = {} ) => {
  
    const [formState, setFormState] = useState( initialForm );

     const onInputChange = ({target}) => {
        const { name, value }= target;
        setFormState({
            ...formState,
            [ name ]: value
        });

    }

    const onResetForm = () => {
        setFormState(initialForm);
    }


    return {
        ...formState, //acá desestructuro el formstate y de esta forma expongo las propiedades del formstate
        formState,
        onInputChange,
        onResetForm,

    }

}
