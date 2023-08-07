import React, {useState} from 'react'
import './Header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
function Header(){
    const [inputSearch, setInputSearch] = useState("");


    return (
        <div className="header">
            <div className="header__left">
                <MenuSharpIcon/>
                <Link to="/">
                    <img 
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt=""
                    />
                </Link>
            </div>

            <div className="header__input">
                <input onChange={e=>setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__searchbutton"/>
                </Link>
            </div>

            <div className="header__icons">
                <VideoCallOutlinedIcon className="header_icon"/>
                <NotificationsNoneIcon className="header_icon"/>
                <Avatar className="header_icon" alt="Tarun Kona"
                src="https://lh3.googleusercontent.com/a/AAcHTtc8QZIdhg_Rcdyhp9MTs04PuATJTBxMUa1Xdl0WSNLe1YUs=s260-c-no"/>
            </div>
            
        </div>
    );
}
export default Header;