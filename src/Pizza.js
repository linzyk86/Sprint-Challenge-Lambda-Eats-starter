import React, {useState} from 'react';
import * as yup from 'yup';
import axios from 'axios';


const formSchema = yup.object().shape({
     name: yup.string().required("Name is required")

    });


const Pizza =()=>{
    
    const[formState, setFormState]= useState({
        name:"",
        size:"",
        cheese:"",
        pepperoni:"",
        veggie:"",
        instructions:"",    
    })


const [errorState, setErrorState]= useState({
         name:"",
        size:"",
        cheese:"",
        pepperoni:"",
        veggie:"",
        instructions:"",    
});
const validate =e=>{
    let value=e.target.type==='checkbox'? e.target.checked:e.target.value;
    yup
        .reach(formSchema, e.target.name)
        .validate(value)
        .then(valid=>{
            setErrorState({
                ...errorState,[e.target.name]:""
            });
        });
};

const changeHandler = e =>{
    e.persist();
    validate(e);
    let value =e.target.type ==="checkbox"? e.target.checked:e.target.value;
    setFormState({...formState,[e.target.name]:value});
};

const formSubmit =e =>{
    e.preventDefault();
    console.log("form submitted");
    axios.post('https://reqres.in/api/users', formState)
        .then(response=>console.log(response))
        .catch(err=>console.log(err));
};

return(
    <form onSubmit = {formSubmit}>
        <label htmlFor = 'name'>
            Name 
            <input 
                type='text' 
                name='name' 
                id='name' 
                value={formState.name} 
                onChange={changeHandler}/>
        </label>

        <label htmlFor='size'>
            Pizza size
            <select value={formState.size}
            name='size'
            id='size'
            onChange={changeHandler}>
            <option value = 'small'>Small</option>
            <option value = 'medium'>Medium</option>
            <option value = 'large'>Large</option>
            <option value = 'XL'>XL</option>
            </select>
        </label>

        <label htmlFor='pepperoni'>Pepperoni
            <input type='checkbox'
            id='pepperoni'
            name='pepperoni'
            checked={formState.pepperoni}
            onChange={changeHandler}/>
        </label>
         <label htmlFor='cheese'>Cheese
            <input type='checkbox'
            id='cheese'
            name='cheese'
            checked={formState.cheese}
            onChange={changeHandler}/>
        </label>
         <label htmlFor='veggie'>Veggie
            <input type='checkbox'
            id='veggie'
            name='veggie'
            checked={formState.veggie}
            onChange={changeHandler}/>
        </label>
        <button>Add to Order</button>
    </form>
)
}
export default Pizza;