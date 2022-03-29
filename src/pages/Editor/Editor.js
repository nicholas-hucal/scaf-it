import './Editor.scss';
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import LoginButton from '../../components/LoginButton/LoginButton';
import Element from '../../components/Element/Element';
import Modal from '../../components/Modal/Modal';
import Row from '../../components/Row/Row';
import SiteLink from '../../components/SiteLink/SiteLink';
import { v4 as uuidv4 } from 'uuid';

const Editor = () => {
  const [authStatus, setAuthStatus] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [rows, setRows] = useState([]);
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
    rows.length === 0 ? row.kind = 'block' : row.kind = 'element';
    setRows(rows => [...rows, row])
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
        <button className='editor__add' onClick={modalToggle}>+</button>
        {rows.map(row => {
          return <Row key={`row-${row.id}`} block={rows[0] ? rows[0] : null} row={row} />
        })}
      </div>
      <div className='editor__sidebar'></div>
      {/* <SiteLink text="logout" type="anchor" to={api.logOut} /> */}
      {modal && <Modal modalToggle={modalToggle} addRow={addRow} />}
    </section>
  );
}

export default Editor;