import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { Textarea2 } from '../../Common/Load/textarea';
import { loginThunk } from '../../Redux/auth-reducer';
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
            <Field placeholder={'login'} name={'email'} component={Textarea2}
            validate={[required, maxLogin]}/>
        </div>
        <div>
            <Field placeholder={'password'} name={'password'} component={Textarea2}
            validate={[required, maxLogin]}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={Textarea2} 
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
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isauth) {
        return <Redirect to = {'/profile/'}/>
    }

    return <div className={s.item}>
    <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => {
    return {
    isauth: state.auth.isauth
}
}

export default connect(mapStateToProps, {loginThunk}) (Login);