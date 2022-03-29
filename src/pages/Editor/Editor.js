import './Editor.scss';
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import LoginButton from '../../components/LoginButton/LoginButton';
import SiteLink from '../../components/SiteLink/SiteLink';
import Element from '../../components/Element/Element';
import Modal from '../../components/Modal/Modal';
import { v4 as uuidv4 } from 'uuid';

const Editor = () => {
  const [authStatus, setAuthStatus] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [rows, setRows] = useState([]);
  const [block, setBlock] = useState({ name: '', type: 'div', modifiers: ['hello', 'here-we-are'] });
  const [element, setElement] = useState({ name: '', type: '', modifiers: [] });
  const [modal, setModal] = useState(false);

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

  const addElement = () => {
    if (block !== '') {
      const current = [...rows];
      current.push({
        block: block,
        id: uuidv4(),
        type: 'div',
        name: '',
        modifiers: [],
        sort: current.length + 1
      })
      setRows(current);
    }
  }

  const changeBlockName = (e) => {
    const value = e.target.value.replace(/[^A-Z0-9]+/ig, "-").toLowerCase();
    let newBlock = { ...block };
    newBlock.name = value;
    setBlock(newBlock)
  }

  const changeBlockType = (value) => {
    value = value.replace(/[^A-Z0-9]+/ig, "").toLowerCase();
    let newBlock = { ...block };
    newBlock.type = value;
    setBlock(newBlock)
  }

  const changeBlockMods = (e) => {
    const mods = e.target.value.split(',');
    console.log(mods)
    const formatted = mods.map(mod => {
      mod.replace(",", ",");
      return mod.replace(/[^A-Z0-9]+/ig, "-").toLowerCase();
    });
    console.log(formatted)

    let newBlock = { ...block };
    newBlock.modifiers = formatted;
    setBlock(newBlock)
  }

  const changeType = (e, id) => {
    setRows([...rows].map(row => {
      if (row.id === id) {
        row.type = e.target.value;
      }
      return row;
    }))
  }

  const changeModifier = (e, id) => {
    setRows([...rows].map(row => {
      if (row.id === id) {
        row.modifiers = e.target.value.split(' ')
      }
      return row;
    }))
  }

  const changeName = (e, id) => {
    setRows([...rows].map(row => {
      if (row.id === id) {
        row.name = e.target.value;
      }
      return row;
    }))
  }

  const submitElements = () => {
    const component = {
      user: profileData,
      name: block,
      type: 'main',
      file_type: 'rafce',
      modifiers: [],
      elements: rows
    }
    api
      .submitComponent(component)
      .then(res => {
        console.log(res.data);
      })
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
        <div className='editor__block-row'>
          <input className='editor__block' placeholder='block' onChange={changeBlockName} />
          <p>--</p>
          <input className='editor__modifier' placeholder='modifiers' />
          <button className='editor__add' onClick={modalToggle}>+</button>
        </div>
        {rows.map(row => {
          return <Element
            key={`row-${row.id}`}
            block={row.block}
            id={row.id}
            type={row.type}
            name={row.name}
            modifiers={row.modifiers}
            changeType={changeType}
            changeName={changeName}
            changeModifier={changeModifier}
          />
        })}
        <button className='editor__submit' onClick={submitElements}>Submit</button>
      </div>
      <div className='editor__sidebar'>


      </div>
      {/* <SiteLink text="logout" type="anchor" to={api.logOut} /> */}
      {modal && <Modal modalToggle={modalToggle} block={block} changeBlockName={changeBlockName} changeBlockType={changeBlockType} changeBlockMods={changeBlockMods} />}
    </section>
  );
}

export default Editor;