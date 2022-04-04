import React from 'react';
import './ProfileButton.scss';
import user from '../../assets/icons/user-dark.svg';

const ProfileButton = ({userToggle}) => {
    return (
        <div className='profile-button__user-toggle'>
            <img className='profile-button__user' src={user} alt="user account area" onClick={userToggle} />
            profile
        </div>
    )
}

export default ProfileButton