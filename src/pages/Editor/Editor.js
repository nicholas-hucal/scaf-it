import './Editor.scss';
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import LoginButton from '../../components/LoginButton/LoginButton';
import Modal from '../../components/Modal/Modal';
import EditorBlock from '../../components/EditorBlock/EditorBlock';
import Button from '../../components/Button/Button';
import SiteLink from '../../components/SiteLink/SiteLink';

const Editor = () => {
  const basicRow = { name: '', type: '', modifiers: [], elements: [] }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [authStatus, setAuthStatus] = useState(true);
  // const [profileData, setProfileData] = useState(null);
  const [rows, setRows] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(basicRow);
  const [block, setBlock] = useState(basicRow);
  const [modal, setModal] = useState(false);
  const [parent, setParent] = useState(basicRow);

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

  const modalToggle = (e) => {
    e.preventDefault();
    if (modal) {
      setRowToEdit(basicRow);
      setParent(basicRow);
    }
    setModal(!modal);
  }

  const editRowToggle = (e, id, block) => {
    if (!block) {
      let found = rows.find(row => row.id === id);
      if (typeof found === 'undefined') {
        rows.forEach(row => {
          const foundChild = row.elements.find(row => row.id === id);
          if (typeof foundChild !== 'undefined') {
            found = foundChild
          }
        })
      }
      setRowToEdit(found);
    } else {
      block.parent = true;
      setRowToEdit(block);
    }
    modalToggle(e);
  }

  const addRow = (row) => {
    if (block.name === '') {
      row.kind = 'block';
      setBlock(row)
    } else {
      row.kind = 'element';
      setRows(rows => [...rows, row])
    }
  }

  const addChildRowToggle = (e, rowId) => {
    setParent(rows.find(row => row.id === rowId))
    modalToggle(e);
  }

  const editRow = (rowEdited, block) => {
    if (!block) {
      const currentRows = [...rows];
      let foundIndex = rows.findIndex(row => row.id === rowEdited.id);
      if (foundIndex !== -1) {
        currentRows[foundIndex] = rowEdited;
      } else {
        currentRows.forEach((row, index) => {
          const foundChildIndex = row.elements.findIndex(row => row.id === rowEdited.id);
          if (foundChildIndex !== -1) {
            row.elements[foundChildIndex] = rowEdited;
            console.log(row);
            currentRows[index] = row;
          }
        })
      }
      // api call to set element
      setRows(currentRows);
    } else {
      // api call to set block
      setBlock(rowEdited);
    }
  }

  const deleteRow = (e, id, block) => {
    if (!block) {
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
    <>
      <section className='editor'>
        <h1 className='editor__heading'>Editor Page</h1>
        <div className='editor__area'>
          <Button text='add content +' onClick={modalToggle} mod='hollow' />
          <EditorBlock key={`block-${block.id}`} block={block} rows={rows} actions={{ deleteRow: deleteRow, editRowToggle: editRowToggle, addChildRowToggle: addChildRowToggle }} />
        </div>
        {modal && <Modal modalToggle={modalToggle} block={block} addRow={addRow} editRow={editRow} rowToEdit={rowToEdit} parent={parent} />}
        <div className='editor__logout'>
          <SiteLink to={api.logOut} text='logout' type='anchor'/>
        </div>
      </section>
    </>
  );
}

export default Editor;