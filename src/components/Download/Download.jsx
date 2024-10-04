import React from 'react';
import './Download.scss';
import downloadMessage from '../../data/download';
import downloadImage from '../../assets/icons/download-dark.svg';
import Button from '../Button/Button';
import ProfileButton from '../ProfileButton/ProfileButton';

const Download = ({ download, userToggle }) => {
    return (
        <section className='download'>
            <div className='download__header'>
                <h1 className='download__heading'>Download</h1>
                <ProfileButton userToggle={userToggle}/>
            </div>
            <div className='download__container'>
                <div className='download__details'>
                    <p>{downloadMessage.message}</p>
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