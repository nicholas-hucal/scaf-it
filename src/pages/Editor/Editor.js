import './Editor.scss';
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import LoginButton from '../../components/LoginButton/LoginButton';
import Modal from '../../components/Modal/Modal';
import EditorBlock from '../../components/EditorBlock/EditorBlock';
import Button from '../../components/Button/Button';

const Editor = () => {
  const basicRow = { name: '', type: '', modifiers: [] }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [authStatus, setAuthStatus] = useState(true);
  // const [profileData, setProfileData] = useState(null);
  const [rows, setRows] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(basicRow);
  const [blockToEdit, setBlockToEdit] = useState(basicRow);
  const [block, setBlock] = useState(basicRow);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    document.title = "SCAFit | Editor";
    api
      .authorization()
      .then(res => {
        // setAuthStatus(false)
        setIsLoggedIn(true)
        // setProfileData(res.data)
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
    if (modal) {
      setRowToEdit(basicRow);
    }
    setModal(!modal);
  }

  const editRowToggle = (e, id, block) => {
    if (!block) {
      setRowToEdit(rows.find(row => row.id === id));
    } else {
      block.parent = true;
      setRowToEdit(block);
    }
    modalToggle(e);
  }

  const editRow = (rowEdited, block) => {
    if (!block) {
      const currentRow = rows.findIndex(row => row.id === rowEdited.id);
      const currentRows = [...rows];
      currentRows[currentRow] = rowEdited;
      // api call to set element
      setRows(currentRows);
    } else {
      // api call to set block
      setBlock(rowEdited);
    }
  }

  const deleteRow = (e, id, block) => {
    if (!block) {
      const currentRow = rows.findIndex(row => row.id === id);
      const currentRows = [...rows];
      currentRows.splice(currentRow, 1)
      // api call to delete element
      setRows(currentRows);
    } else {
      // api call to delete block
      setRows([])
      setBlock(basicRow);
    }
  }

  if (!isLoggedIn) {
    return <LoginButton title='Please Login' />
  }

  return (
    <section className='editor'>
      <h1 className='editor__heading'>Editor Page</h1>
      <div className='editor__area'>
        <Button text='add content +' onClick={modalToggle} mod='hollow'/>
        <EditorBlock key={`block-${block.id}`} block={block} rows={rows} actions={{deleteRow: deleteRow, editRow: editRowToggle}}/>
      </div>
      {modal && <Modal modalToggle={modalToggle} block={block} addRow={addRow} editRow={editRow} blockToEdit={blockToEdit} rowToEdit={rowToEdit}/>}
    </section>
  );
}

export default Editor;