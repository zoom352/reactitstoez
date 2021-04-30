import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea2 } from '../../Common/Load/textarea';
import { maxLengthCreatorLogin, required} from '../../utils/validate/validates';
import s from './Login.module.css';

let maxLogin = maxLengthCreatorLogin(50)

const LoginForm = (props) => {
    return <div className={s.item}>
        <h1>
            Login
    </h1>
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'login'} name={'login'} component={Textarea2}
            validate={[required, maxLogin]}/>
        </div>
        <div>
            <Field placeholder={'password'} name={'password'} component={Textarea2}
            validate={[required, maxLogin]}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'Remember me'} component={Textarea2} 
            validate={[required, maxLogin]}/> Remember me
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