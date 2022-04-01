import './Editor.scss';
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import LoginButton from '../../components/LoginButton/LoginButton';
import Modal from '../../components/Modal/Modal';
import EditorBlock from '../../components/EditorBlock/EditorBlock';
import SiteLink from '../../components/SiteLink/SiteLink';
import { v4 as uuidv4 } from 'uuid';

const Editor = () => {
  const basicRow = { name: '', type: '', modifiers: [], elements: [] }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [authStatus, setAuthStatus] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [rows, setRows] = useState([]);
  const [children, setChildren] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(basicRow);
  const [block, setBlock] = useState(basicRow);
  const [modal, setModal] = useState(true);
  const [parent, setParent] = useState(basicRow);

  useEffect(() => {
    document.title = "SCAFit | Editor";
    api
      .authorization()
      .then(res => {
        // setAuthStatus(false)
        setIsLoggedIn(true)
        setProfileData(res.data)
      })
      .catch((err) => {
        if (err.response.status === 401) {
          // setAuthStatus(false);
          setIsLoggedIn(false);
        } else {
          console.log('Error authenticating', err);
        }
      });
  }, []);

  const addUserId = (row) => {
    const final = { ...row };
    final.user_id = profileData.id;
    return final;
  }

  const blockToggle = (action) => {
    if (action === 'edit') {
      setRowToEdit({...block})
    }
    modalToggle();
  }

  const rowToggle = (action, id) => {
    if (action === 'edit') {
      setRowToEdit({...rows.find(row => row.id === id)});
    }
    setParent({...block})
  }

  const modalToggle = () => {
    if (modal) {
      setRowToEdit(basicRow);
    }
    setModal(!modal);
  }

  useEffect(() => {
      setModal(prev => !prev);
  }, [parent]);

  const childToggle = (action, parent_id, id) => {
    if (action === 'edit') {
      setRowToEdit({...children.find(row => row.id === id)});
    }
    setParent({...rows.find(row => row.id === parent_id)})
  }

  const addBlock = (row) => {
    api.createBlock(addUserId(row))
      .then(res => {
        setBlock(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const addRow = (row) => {
    row.id = uuidv4();
    row.kind = 'element';
    setRows(prev => [...prev, row])

    // api.createElement(row)
    //   .then(res => {
    //     setRows(prev => [...prev, res.data])
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }

  const addChild = (row) => {
    row.id = uuidv4();
    row.kind = 'child';
    row.parent_id = parent.id;
    setChildren(prev => [...prev, row])
  }

  const editBlock = (row) => {
    api.editBlock(addUserId(row))
    .then(res => {
      setBlock(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const editRow = (rowa) => {
    const currentRows = [...rows];
    let foundIndex = rows.findIndex(row => row.id === rowa.id);
    if (foundIndex !== -1) {
      currentRows[foundIndex] = rowa;
      setRows(currentRows);
    }
  }

  const editChild = (row) => {
    
  }

  const deleteBlock = () => {
    api.deleteBlock(block)
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
          const currentRows = [...rows];
          const foundIndex = rows.findIndex(row => row.id === id);
          if (foundIndex !== -1) {
            currentRows.splice(foundIndex, 1)
          } else {
            currentRows.forEach((row, index) => {
              const foundChildIndex = row.elements.findIndex(row => row.id === id);
              if (foundChildIndex !== -1) {
                row.elements.splice(foundChildIndex, 1)
                currentRows[index] = row;
              }
            })
          }
          setRows(currentRows);
        })
  }

  const deleteChild = (id) => {

  }

  if (!isLoggedIn) {
    return <LoginButton title='Please Login' />
  }

  return (
    <>
      <section className='editor'>
        <h1 className='editor__heading'>Editor Page</h1>
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
          />
        }
        <div className='editor__logout'>
          <SiteLink to={api.logOut} text='logout' type='anchor' />
        </div>
      </section>
    </>
  );
}

export default Editor;