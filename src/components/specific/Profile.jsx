import React from 'react'
import {Stack,Avatar,Typography} from '@mui/material'
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon
} from '@mui/icons-material';
const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar sx={{
        width:200,
        height:200,
        objectfit:"contain",
        marginBottom:"1rem",
        border:"5px solid white"
      }}/>
      <ProfileCard heading={"Bio"} text={"ujhybgtvfr ju7hy6gt5fr"}/>
      <ProfileCard heading={"UserName"} text={"@VShah"} Icon={<UserNameIcon/>}/>
      <ProfileCard heading={"Name"} text={"@vaibhavShah"} Icon={<FaceIcon/>}/>
      <ProfileCard heading={"Joined"} text={"3 months ago"} Icon={<CalendarIcon/>}/>
    </Stack>
  )
}
const ProfileCard =({text,Icon,heading})=>(
  <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} color={"white"} textAlign={"center"}>
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">{heading}</Typography>
    </Stack>
  </Stack>
)
export default Profile;
