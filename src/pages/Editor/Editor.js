import './Editor.scss';
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import LoginButton from '../../components/LoginButton/LoginButton';
import SiteLink from '../../components/SiteLink/SiteLink';

const Editor = () => {
    const [authStatus, setAuthStatus] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profileData, setProfileData] = useState(null);
  
    useEffect(() => {
      api
        .authorization()
        .then(res => {
          setAuthStatus(false)
          setIsLoggedIn(true)
          setProfileData(res.data)
        })
        .catch((err) => {
          if (err.response.status === 401) {
            setAuthStatus(false);
            setIsLoggedIn(false);
          } else {
            console.log('Error authenticating', err);
          }
        });
    }, []);

    const createZip = () => {
        api
            .createZip()
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    if (!isLoggedIn) {
        return <LoginButton title='Please Login' />
    }

    return (
        <section className='editor'>
            <h1 className='editor__heading'>Editor Page</h1>
            <SiteLink text="logout" type="anchor" to={api.logOut} />
        </section>
    );
}

export default Editor;