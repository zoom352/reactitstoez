import React from "react";
import { Field, reduxForm } from "redux-form";
import { createField, Input, Textarea3,  } from "../../../Common/Load/textarea";
import s from './ProfileInfo.module.css';
import st from '../../../Common/Load/textarea.module.css'

const ProfileDataform = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        
        <button>save</button>
        { error && <div className={st.formaerror}>
            {error}
            </div>
        }
        <div>
            <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>:  { createField("", "lookingForAJob", [], Input, {type: "checkbox"} )}
        </div>
        <div>
            <b>My professional skills</b>:{ createField("My professional skills", "lookingForAJobDescription", [], Textarea3  )}
        </div>
        <div>
            <b>About me</b>: { createField("About me", "aboutMe", [], Textarea3  )}
        </div>
        <div>
            <b>contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
        </div>
    </form>

}

const ProfileFormRedux = reduxForm({
    form: 'MyAddPostForm'
})(ProfileDataform)

export default ProfileFormRedux;