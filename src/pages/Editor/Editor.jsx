import "./Editor.scss";
import React, { useState, useEffect } from "react";
import api from "../../utils/api.js";
import LoginButton from "../../components/LoginButton/LoginButton";
import Modal from "../../components/Modal/Modal";
import EditorBlock from "../../components/EditorBlock/EditorBlock";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import Download from "../../components/Download/Download";
import User from "../../components/User/User";
import ProfileButton from "../../components/ProfileButton/ProfileButton";
import EditorContent from "../../components/EditorContent/EditorContent";
import notifications from "../../data/notifications";
import Notification from "../../components/Notification/Notification";
import { v4 as uuidv4 } from "uuid";

const Editor = () => {
  const basicRow = { name: "", type: "", modifiers: [] };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authStatus, setAuthStatus] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [rows, setRows] = useState([]);
  const [children, setChildren] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(basicRow);
  const [block, setBlock] = useState(basicRow);
  const [modal, setModal] = useState(true);
  const [parent, setParent] = useState(basicRow);
  const [fileToDownload, setFileToDownload] = useState(null);
  const [userModal, setUserModal] = useState(false);
  const [userComponents, setUserComponents] = useState([]);
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    document.title = "SCAFit | Editor";
    api
      .authorization()
      .then((res) => {
        setIsLoggedIn(true);
        setAuthStatus(false);
        setProfileData(res.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setAuthStatus(false);
          setIsLoggedIn(false);
        } else {
          setNotification((prev) => [notifications.auth]);
        }
      });
  }, []);

  useEffect(() => {
    setModal((prev) => !prev);
  }, [parent]);

  const modalToggle = () => {
    if (modal) {
      setRowToEdit(basicRow);
    }
    setModal(!modal);
  };

  const blockToggle = (action) => {
    if (action === "edit") {
      setRowToEdit({ ...block });
    }
    setParent(basicRow);
  };

  const rowToggle = (action, id) => {
    if (action === "edit") {
      setRowToEdit({ ...rows.find((row) => row.id === id) });
    }
    setParent({ ...block });
  };

  const childToggle = (action, parent_id, id) => {
    if (action === "edit") {
      setRowToEdit({ ...children.find((row) => row.id === id) });
    }
    setParent({ ...rows.find((row) => row.id === parent_id) });
  };

  const userToggle = () => {
    setUserModal((prev) => !prev);
    if (userComponents.length > 1) {
      setUserComponents([]);
    } else {
      api
        .getComponentByUserId()
        .then((res) => {
          setUserComponents(res.data);
        })
        .catch((err) => {
          setNotification((prev) => [notifications.server]);
        });
    }
  };

  const addBlock = (row) => {
    row.user_id = profileData.id;
    api
      .createBlock(row)
      .then((res) => {
        setBlock(res.data);
      })
      .catch((err) => {
        setNotification((prev) => [notifications.server]);
      });
  };

  const addRow = (row) => {
    api
      .createElement(row)
      .then((res) => {
        setRows((prev) => [...prev, res.data]);
      })
      .catch((err) => {
        setNotification((prev) => [notifications.server]);
      });
  };

  const addChild = (row) => {
    api
      .createElement(row)
      .then((res) => {
        setChildren((prev) => [...prev, res.data]);
      })
      .catch((err) => {
        setNotification((prev) => [notifications.server]);
      });
  };

  const editBlock = (row) => {
    row.user_id = profileData.id;
    api
      .editBlock(row)
      .then((res) => {
        setBlock(res.data);
      })
      .catch((err) => {
        setNotification((prev) => [notifications.server]);
      });
  };

  const editRow = (row) => {
    api
      .editElement(row)
      .then((res) => {
        setRows((prev) =>
          [...prev].map((existing) =>
            existing.id === row.id ? res.data : existing
          )
        );
      })
      .catch((err) => {
        setNotification((prev) => [notifications.server]);
      });
  };

  const editChild = (row) => {
    api
      .editElement(row)
      .then((res) => {
        setChildren((prev) =>
          [...prev].map((existing) =>
            existing.id === row.id ? res.data : existing
          )
        );
      })
      .catch((err) => {
        setNotification((prev) => [notifications.server]);
      });
  };

  const deleteBlock = () => {
    api
      .deleteBlock(block.id)
      .then((response) => {
        setRows([]);
        setBlock(basicRow);
      })
      .catch((err) => {
        setNotification((prev) => [notifications.server]);
      });
  };

  const deleteRow = (id) => {
    api
      .deleteElement(id)
      .then((res) => {
        setRows((prev) => [...prev].filter((existing) => existing.id !== id));
      })
      .catch((err) => {
        setNotification((prev) => [notifications.server]);
      });
  };

  const deleteChild = (id) => {
    api
      .deleteElement(id)
      .then((res) => {
        setChildren((prev) =>
          [...prev].filter((existing) => existing.id !== id)
        );
      })
      .catch((err) => {
        setNotification((prev) => [notifications.server]);
      });
  };

  const submitComponent = (block) => {
    api
      .createComponent(block)
      .then((res) => {
        setFileToDownload(res.data);
      })
      .catch((err) => {
        setNotification((prev) => [notifications.server]);
      });
  };

  const getComponent = (block) => {
    api
      .getComponent(block)
      .then((response) => {
        setBlock(response.data.block);
        setRows(response.data.elements);
        setChildren(response.data.children);
        setFileToDownload(null);
        userToggle();
      })
      .catch((err) => {
        setNotification((prev) => [notifications.server]);
      });
  };

  const createComponent = (component) => {
    api
      .createComponent(component)
      .then((res) => {
        return setFileToDownload(res.data);
      })
      .then(() => {
        userToggle();
      })
      .catch((err) => {
        setNotification((prev) => [notifications.server]);
      });
  };

  const deleteComponent = (component) => {
    api
      .deleteComponent(component)
      .then((res) => {
        setFileToDownload(null);
        setUserComponents((prev) =>
          prev.filter((component) => component.id !== Number(res.data.id))
        );
        if (Number(block.id) === Number(res.data.id)) {
          setBlock(basicRow);
        }
      })
      .catch((err) => {
        setNotification((prev) => [notifications.server]);
      });
  };

  const userComponent = (
    <User
      getComponent={getComponent}
      createComponent={createComponent}
      deleteComponent={deleteComponent}
      components={userComponents}
      profileData={profileData}
      userToggle={userToggle}
    />
  );

  if (!isLoggedIn) {
    if (authStatus) {
      return <Loading />;
    } else {
      return <LoginButton title="Please Login" />;
    }
  } else if (fileToDownload) {
    return (
      <>
        <Download download={fileToDownload} userToggle={userToggle} />
        {userModal && !modal && userComponent}
      </>
    );
  } else {
    return (
      <>
        <section className="editor">
          <div className="editor__heading-container">
            <h1 className="editor__heading">Editor</h1>
            <ProfileButton userToggle={userToggle} />
          </div>
          <div className="editor__area">
            {block.name === "" && <EditorContent blockToggle={blockToggle} />}
            {block.name !== "" && (
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
            )}
          </div>
          {modal && (
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
          )}
          <div className="editor__actions">
            {block.id && (
              <Button
                onClick={() => submitComponent(block)}
                text="generate files"
              />
            )}
          </div>
        </section>
        {userModal && !modal && userComponent}
        {notification &&
          notification.map((notif) => (
            <Notification
              key={uuidv4()}
              title={notif.title}
              body={notif.body}
            />
          ))}
      </>
    );
  }
};

export default Editor;
