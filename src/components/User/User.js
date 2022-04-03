import React from 'react';
import './User.scss';
import close from '../../assets/icons/cancel-small.svg';
import Button from '../Button/Button';
import api from '../../utils/api';

const User = ({ userToggle, components, profileData }) => {
    console.log(profileData)
    return (
        <div className='user'>
            <div className='user__content'>
                <div className='user__close'>
                    <img src={close} alt="close user" onClick={userToggle} />
                </div>
                <div className='user__body'>
                    <div className='user__components'>
                        <h2 className='user__heading'>Components</h2>
                        {components.map(comp => {
                            return <a key={comp.id} className='user__component' href={comp.file}>{comp.name}</a>
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

