import React, { Suspense, lazy } from 'react';
import { useState } from 'react';
import { orange } from '../../constants/color'
import { Toolbar,Typography,Box,AppBar,IconButton, Tooltip, Backdrop } from '@mui/material'
import {Menu as MenuIcon,Search as SearchIcon,Add as AddIcon,Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationsIcon} from "@mui/icons-material"
import {useNavigate} from  "react-router-dom";
const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog =  lazy(()=>import('../specific/Notifications'));
const NewGroupDialog = lazy( ()=>import("../specific/NewGroup"))
const Header = () => {
const [isMobile, setIsMobile] = useState(false);
const [isSearch,setIsSearch] = useState(false);
const [isNewGroup, setIsNewGroup] = useState(false) ;
const [isNotification,setIsNotification] = useState(false);
    const navigate=useNavigate();
    const handleMobile=()=>{
        setIsMobile((prev)=>!prev);
    }
    const openSearch=()=>{
        setIsSearch((prev)=>!prev);
    }
    const openNewGroup=()=>{
        setIsNewGroup((prev)=>!prev);
    }
    const logoutHandler=()=>{
        console.log("logout");
    }
    const openNotification=()=>{
        setIsNotification((prev)=>!prev);
    }
    const navigateToGroup=()=>navigate("/groups")
  return (
    <>
      <Box sx={{flexGrow:1}} height={"4rem"}>
        <AppBar position="static" sx={{bgcolor:orange}}>
            <Toolbar><Typography variant="h6" sx={{display:{xs:"none",sm:"block"},}}>Chattu</Typography>
            <Box sx={{display:{xs:"block",sm:"none"},}}><IconButton color="inherit" onClick={handleMobile}><MenuIcon/></IconButton></Box>
            <Box sx={{flexGrow:1}}/>
            <Box>
                <IconBtn title={"Search"} icon={<SearchIcon/>}  onClick={openSearch} />
                <IconBtn title={"Groups"} icon={<GroupIcon/>}   onClick={navigateToGroup} />
                <IconBtn title={"Add new group"} icon={<AddIcon/>}  onClick={openNewGroup} />
                <IconBtn title={"Notifications"} icon={<NotificationsIcon/>}  onClick={openNotification} />
                <IconBtn title={"log out"} icon={<LogoutIcon/>}  onClick={logoutHandler} />
                {/* <Tooltip title="Search"><IconButton color="inherit" size="large" onClick={openSearchDialog}><SearchIcon/></IconButton></Tooltip>
                <Tooltip title="New Group"><IconButton color="inherit" size="large" onClick={addNewGroup}><AddIcon/></IconButton></Tooltip>
                <Tooltip title="Manage Groups"><IconButton color="inherit" size="large" onClick={navigateToGroup}><GroupIcon/></IconButton></Tooltip> */}
                </Box>
                </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (<Suspense fallback={<Backdrop open/>}><SearchDialog/></Suspense>)}
      {isNotification && (<Suspense fallback={<Backdrop open/>}><NotificationDialog/></Suspense>)}
      {isNewGroup && (<Suspense fallback={<Backdrop open/>}><NewGroupDialog/></Suspense>)}
    </>
  )
}
const IconBtn=({title,icon,onClick})=>{
    return(
        <Tooltip title={title}>
            <IconButton color="inherit" size="large" onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    )
}
export default Header
