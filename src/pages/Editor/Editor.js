import './Editor.scss';
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import LoginButton from '../../components/LoginButton/LoginButton';
import Modal from '../../components/Modal/Modal';
import EditorBlock from '../../components/EditorBlock/EditorBlock';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import user from '../../assets/icons/user.svg';
import Download from '../../components/Download/Download';
import User from '../../components/User/User';

const Editor = () => {
  const basicRow = { name: '', type: '', modifiers: [] }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authStatus, setAuthStatus] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [rows, setRows] = useState([]);
  const [children, setChildren] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(basicRow);
  const [block, setBlock] = useState(basicRow);
  const [modal, setModal] = useState(true);
  const [parent, setParent] = useState(basicRow);
  const [fileToDownload, setFileToDownload] = useState(null)
  const [userModal, setUserModal] = useState([]);

  useEffect(() => {
    document.title = "SCAFit | Editor";
    api
      .authorization()
      .then(res => {
        setIsLoggedIn(true)
        setAuthStatus(false)
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

  useEffect(() => {
    setModal(prev => !prev);
  }, [parent]);

  const modalToggle = () => {
    if (modal) {
      setRowToEdit(basicRow);
    }
    setModal(!modal);
  }

  const blockToggle = (action) => {
    if (action === 'edit') {
      setRowToEdit({ ...block })
    }
    modalToggle();
  }

  const rowToggle = (action, id) => {
    if (action === 'edit') {
      setRowToEdit({ ...rows.find(row => row.id === id) });
    }
    setParent({ ...block })
  }

  const childToggle = (action, parent_id, id) => {
    if (action === 'edit') {
      setRowToEdit({ ...children.find(row => row.id === id) });
    }
    setParent({ ...rows.find(row => row.id === parent_id) })
  }

  const userToggle = () => {
    // api call to get user components
    // set state of userModal array
    // erase on second toggle

    if (userModal.length < 1) {
      setUserModal([1,2])
    } else {
      setUserModal([])
    }
  }

  const addBlock = (row) => {
    row.user_id = profileData.id;
    api.createBlock(row)
      .then(res => {
        setBlock(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const addRow = (row) => {
    api.createElement(row)
      .then(res => {
        setRows(prev => [...prev, res.data])
      })
      .catch(err => {
        console.log(err)
      })
  }

  const addChild = (row) => {
    api.createElement(row)
      .then(res => {
        setChildren(prev => [...prev, res.data])
      })
      .catch(err => {
        console.log(err)
      })
  }

  const editBlock = (row) => {
    row.user_id = profileData.id;
    api.editBlock(row)
      .then(res => {
        setBlock(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const editRow = (row) => {
    api.editElement(row)
      .then(res => {
        setRows(prev => [...prev].map(existing => existing.id === row.id ? res.data : existing))
      })
      .catch(err => {
        console.log(err)
      })
  }

  const editChild = (row) => {
    api.editElement(row)
      .then(res => {
        setChildren(prev => [...prev].map(existing => existing.id === row.id ? res.data : existing))
      })
      .catch(err => {
        console.log(err)
      })
  }

  const deleteBlock = () => {
    api.deleteBlock(block.id)
      .then(response => {
        setRows([])
        setBlock(basicRow);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const deleteRow = (id) => {
    api.deleteElement(id)
      .then((res) => {
        setRows(prev => [...prev].filter(existing => existing.id !== id));
      })
      .catch(err => {
        console.log(err);
      })
  }

  const deleteChild = (id) => {
    api.deleteElement(id)
      .then((res) => {
        setChildren(prev => [...prev].filter(existing => existing.id !== id));
      })
      .catch(err => {
        console.log(err);
      })
  }

  const submitComponent = (block) => {
    api.createComponent(block)
      .then(res => {
        setFileToDownload(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  if (!isLoggedIn) {
    if (authStatus) {
      return <Loading />
    } else {
      return <LoginButton title='Please Login' />
    }
  } else if (fileToDownload) {
    return <Download download={fileToDownload}/>
  } else {
    return (
      <>
        <section className='editor'>
          <div className='editor__heading-container'>
            <h1 className='editor__heading'>Editor</h1>
            <img className='editor__user' src={user} alt="user account area" onClick={userToggle}/>
          </div>
          <div className='editor__area'>
            <EditorBlock
              block={block}
              rows={rows}
              children={children}
              deleteBlock={deleteBlock}
              deleteRow={deleteRow}
              deleteChild={deleteChild}
              blockToggle={blockToggle}
              rowToggle={rowToggle}
              childToggle={childToggle}
            />
          </div>
          {modal &&
            <Modal
              modalToggle={modalToggle}
              block={block}
              parent={parent}
              rowToEdit={rowToEdit}
              addBlock={addBlock}
              addRow={addRow}
              addChild={addChild}
              editBlock={editBlock}
              editRow={editRow}
              editChild={editChild}
              setParent={setParent}
              basicRow={basicRow}
            />
          }
          <div className='editor__actions'>
            {block.id && <Button onClick={() => submitComponent(block)} text='generate files' />}
          </div>
        </section>
        {(userModal.length > 1 && !modal) && <User components={userModal} profileData={profileData} userToggle={userToggle}/>}
      </>
    );
  }
}

export default Editor;