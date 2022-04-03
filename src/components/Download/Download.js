import React from 'react';
import './Download.scss';
import downloadImage from '../../assets/icons/download.svg';
import user from '../../assets/icons/user.svg';
import Button from '../Button/Button';

const Download = ({ download, userToggle }) => {
    return (
        <section className='download'>
            <div className='download__header'>
                <h1 className='download__heading'>Download</h1>
                <div className='download__user-toggle'>
                    <img className='download__user' src={user} alt="user account area" onClick={userToggle} />
                    profile
                </div>
            </div>
            <div className='download__container'>
                <div className='download__details'>
                    <p>Congratulations you have completed scaffolding a component. Click to download.</p>
                    <p>You can also access previously created components by accessing your account by clicking the user icon</p>
                    <div className='download__actions'>
                        <Button to={download.file} text={`download ${download.component.componentName} component`} color="green" type='anchor' />
                        <Button to="/editor" text='scaffold another' type='anchor' />
                    </div>

                </div>
                <div className='download__area'>
                    <a className='download__link' href={download.file}><img className='download__image' src={downloadImage} alt="download file here" /></a>
                </div>
            </div>

        </section>
    )
}

export default Download