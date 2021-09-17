import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { createField, Input, Textarea2 } from '../../Common/Load/textarea';
import { loginThunk, captchaThunk } from '../../Redux/auth-reducer';
import { maxLengthCreatorLogin, required} from '../../utils/validate/validates';
import s from './Login.module.css';
import st from '../../Common/Load/textarea.module.css'

// let maxLogin = maxLengthCreatorLogin(50)

const LoginForm = ({handleSubmit, error, captchaURL}) => {
    return <div className={s.item}>
        <h1>
            Login
        </h1>
    <form onSubmit={handleSubmit}>
        <div>
        {createField("email", "email", [required], Input)}
        </div>
        <div>
        {createField("password", "password", [required], Input, {type: "password"})}
        </div>
        <div>
        {createField(null, "checkbox", [], Input, {type: 'checkbox'})}
        </div>
        <div>
            {captchaURL && <img src={captchaURL}/>}
            {captchaURL && createField("captcha", "captcha", [required], Input)}
        </div>
        {console.log(error) && <div className={st.formaerror}>
            {error}
        </div>
        }
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
        props.loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isauth) {
        return <Redirect to = {'/profile/'}/>
    }

    return <div className={s.item}>
    <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
    </div>
}

let mapStateToProps = (state) => {
    return {
    isauth: state.auth.isauth,
    captchaURL: state.auth.captchaURL
  }
}

export default connect(mapStateToProps, {loginThunk, captchaThunk}) (Login);