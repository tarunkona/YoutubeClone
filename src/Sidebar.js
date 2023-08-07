import React from 'react'
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import './Sidebar.css'
function Sidebar(){
    return(
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Shorts"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
            <hr/>
            <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow Icon={HistoryIcon} title="History"/>
            <SidebarRow Icon={SlideshowIcon} title="Your videos"/>
            <SidebarRow Icon={WatchLaterIcon} title="Watch later"/>
            <SidebarRow Icon={ThumbUpOffAltOutlinedIcon} title="Liked videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
            <hr/>

        </div>
    );
}

export default Sidebar;