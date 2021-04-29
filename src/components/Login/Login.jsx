import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';

const LoginForm = (props) => {
    return <div className={s.item}>
        <h1>
            Login
    </h1>
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'login'} name={'login'} component={'input'}/>
        </div>
        <div>
            <Field placeholder={'password'} name={'password'} component={'input'}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'Remember me'} component={'input'}/> Remember me
        </div>
        <div>
            <button>enter</button>
        </div>
    </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div className={s.item}>
    <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default Login;