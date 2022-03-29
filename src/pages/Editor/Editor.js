import './Editor.scss';
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import LoginButton from '../../components/LoginButton/LoginButton';
import Modal from '../../components/Modal/Modal';
import EditorBlock from '../../components/EditorBlock/EditorBlock';
import SiteLink from '../../components/SiteLink/SiteLink';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../components/Button/Button';

const Editor = () => {
  const [authStatus, setAuthStatus] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [rows, setRows] = useState([]);
  const [block, setBlock] = useState({ name: '', type: 'div', modifiers: [] });
  const [modal, setModal] = useState(false);

  useEffect(() => {
    document.title = "SCAFit | Editor";
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

  const addRow = (row) => {
    if (block.name === '') {
      row.kind = 'block';
      setBlock(row)
    } else {
      row.kind = 'element';
      setRows(rows => [...rows, row])
    }
  }

  const modalToggle = (e) => {
    e.preventDefault();
    setModal(!modal)
  }

  if (!isLoggedIn) {
    return <LoginButton title='Please Login' />
  }

  return (
    <section className='editor'>
      <h1 className='editor__heading'>Editor Page</h1>
      <div className='editor__area'>
        <Button text='add content +' onClick={modalToggle} mod='hollow'/>
        <EditorBlock key={`block-${block.id}`} block={block} rows={rows} />
      </div>
      {/* <SiteLink text="logout" type="anchor" to={api.logOut} /> */}
      {modal && <Modal modalToggle={modalToggle} addRow={addRow} block={block}/>}
    </section>
  );
}

export default Editor;