import React, { useState } from 'react';
import Load from '../../../Common/Load/Load';
import s from './ProfileInfo.module.css';


const ProfileStatuswithHook = (props) => {

    let [editMode, SeteditMode] = useState(false)
    let [status, Setstatus] = useState(props.status)

    const activatEditMode = () => {
        SeteditMode(true)
    }

    const DeactivatEditMode = () => {
            SeteditMode(false)
        props.updatestatusThunk(status);
    }

    const onStatusChange = (e) => {
        Setstatus(e.currentTarget.value)
    }


        return (
                <div>
                    {!editMode &&
                        <div>
                            <span onDoubleClick={activatEditMode}> {status || '------'}
                            </span>
                        </div>
                    }
                    {editMode &&
                        <div>
                            <input onChange={onStatusChange} autoFocus={true} onBlur={DeactivatEditMode} value={status} />
                        </div>
                    }
                </div>
            
        )
    }



export default ProfileStatuswithHook;