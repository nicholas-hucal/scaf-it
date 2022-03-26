import './Editor.scss';
import LoginButton from '../../components/LoginButton/LoginButton';
import SiteLink from '../../components/SiteLink/SiteLink';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Editor = ({isLoggedIn}) => {
    if(!isLoggedIn) {
        return <LoginButton title='Please Login' />
    }

    return (
        <div className='editor'>
            <h1 className='editor__heading'>Editor Page</h1>
            <SiteLink text="logout" type="anchor" to={`${SERVER_URL}/auth/logout`} />
        </div>
    );
}

export default Editor;