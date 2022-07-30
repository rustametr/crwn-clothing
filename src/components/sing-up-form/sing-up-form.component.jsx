import { useState } from "react";
import { createAuthUserWithEnailAndPassword, create_user_document_from_auth } from "../../utils/firebase/firebase.utils";
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import './sing-up-form.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SingUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword} = formFields;
    console.log(formFields)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({...formFields, [name]: value});
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password == confirmPassword){
            try{
                const { user } = await createAuthUserWithEnailAndPassword(email, password);
                console.log(user);
                await create_user_document_from_auth(user, {displayName})
                resetFormFields();
            }catch(error){
                console.log(error.message)
            }
            
        }else{
            alert('password doesn`t match');
            return;
        }
    }

    return (
        <div className='sing-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sing up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName}/>
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email}/>
                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password}/>
                <FormInput label='Confirm password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <Button type='submit' buttonType='default'>Sign up</Button>
            </form>
        </div>
    )
}

export default SingUpForm;