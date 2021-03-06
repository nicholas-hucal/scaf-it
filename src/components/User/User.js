import React from 'react';
import './User.scss';
import close from '../../assets/icons/cancel-dark.svg';
import Button from '../Button/Button';
import api from '../../utils/api';
import editImage from '../../assets/icons/edit-dark.svg';
import downloadImage from '../../assets/icons/download-dark.svg';
import deleteImage from '../../assets/icons/trash-dark.svg';

const User = ({getComponent, createComponent, deleteComponent, components, profileData, userToggle}) => {

    const createComponentName = (name) => {
        return name.split('-').map(piece => capitalize(piece)).join('');
    }

    const capitalize = string => {
        return string[0].toUpperCase() + string.slice(1);
    }

    return (
        <div className='user'>
            <div className='user__content'>
                <div className='user__close'>
                    <img className='user__icon' src={close} alt="close user" onClick={userToggle} />
                </div>
                <div className='user__body'>
                    <div className='user__components'>
                        <h2 className='user__heading'>Components</h2>
                        {components.length === 0 && <p>no saved components</p>}
                        {components.map(comp => {
                            return <div key={comp.id} className='user__component'>
                                {createComponentName(comp.name)}
                                <div className='user__component-actions'>
                                    <img className='user__icons' src={editImage} alt="edit this component" onClick={() => getComponent(comp)} />
                                    <img className='user__icons' src={downloadImage} alt="download this component" onClick={() => createComponent(comp)} />
                                    <img className='user__icons' src={deleteImage} alt="delete this component" onClick={() => deleteComponent(comp.id)} />
                                </div>
                            </div>
                        })}
                    </div>
                    <div className='user__account'>
                        <h2 className='user__heading'>Account</h2>
                        <p className='user__name'>{profileData.username}</p>
                        <img className='user__avatar' src={profileData.avatar_url} alt={profileData.username} />
                        <div className='user__actions'>
                            <Button to={api.logOut} text='logout' type='anchor' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default User

