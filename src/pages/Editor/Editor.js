import React, { Component } from 'react';
import LoginButton from '../../components/LoginButton/LoginButton';
import './Editor.scss';

const Editor = ({isLoggedIn}) => {
    if(!isLoggedIn) {
        return <LoginButton />
    }

    return (
        <div className='editor'>
            <h1>Editor Page</h1>
        </div>
    );
}

export default Editor;
