import React from 'react';
import Load from '../../../Common/Load/Load';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

    statusInputRef = React.createRef();

    state = {
        editMode: false,
        status: this.props.status
    }

    activatEditMode = () => {
        this.setState ( {
            editMode: true
        })
    }

    DeactivatEditMode = () => {
        this.setState ( {
            editMode: false
        })
        this.props.updatestatusThunk(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
           status: e.currentTarget.value
        })
    }

    componentDidUpdate (prevprops, prevstate) {
        if (prevprops.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>

                <div>
                    {!this.state.editMode &&
                        <div>
                            <span onDoubleClick={this.activatEditMode}> {this.props.status || '------'}
                            </span>
                        </div>
                    }
                    {this.state.editMode &&
                        <div>
                            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.DeactivatEditMode} value={this.state.status} />
                        </div>
                    }
                </div>
            </>
        )
    }
}


export default ProfileStatus;