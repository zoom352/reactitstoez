import React, { useEffect, useState } from 'react';
import Load from '../../../Common/Load/Load';
import s from './ProfileInfo.module.css';


const ProfileStatuswithHook = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)


    const activatEditMode = () => {
        setEditMode (true)
    }

    const DeactivatEditMode = () => {
        setEditMode (false)
        props.updatestatusThunk(status);
    }


    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value
        )
    }


    return (
        <>

            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activatEditMode}> {props.status || '------'}
                        </span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={DeactivatEditMode} value={status} />
                    </div>
                }
            </div>
        </>
    )
}

export default ProfileStatuswithHook;





























// const ProfileStatuswithHook = (props) => {

//     let [editMode, SeteditMode] = useState(false)
//     let [status, Setstatus] = useState(props.status)

//     useEffect(() => {
//         debugger;
//         Setstatus(props.status)
//     }, [props.status])

//     const activatEditMode = () => {
//         SeteditMode(true)
//     }

//     const DeactivatEditMode = () => {
//             SeteditMode(false)
//         props.updatestatusThunk(status);
//     }

//     const onStatusChange = (e) => {
//         Setstatus(e.currentTarget.value)
//     }


//         return (
//                 <div>
//                     {!editMode &&
//                         <div>
//                             <span onDoubleClick={activatEditMode}> {props.status || '------'}
//                             </span>
//                         </div>
//                     }
//                     {editMode &&
//                         <div>
//                             <input onChange={onStatusChange} autoFocus={true} onBlur={DeactivatEditMode} value={status} />
//                         </div>
//                     }
//                 </div>
            
//         )
//     }



// export default ProfileStatuswithHook;