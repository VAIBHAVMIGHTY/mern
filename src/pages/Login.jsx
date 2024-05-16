import React,{useState} from 'react'
import {Container,Paper, TextField, Typography,Button, Stack, Avatar,IconButton} from "@mui/material"
import {CameraAlt as CameraAltIcon} from '@mui/icons-material'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import {useFileHandler, useInputValidation,useStrongPassword} from "6pp";
import { usernameValidator } from '../utils/validators';
const Login = () => {
    const [isLogin,setIsLogin]=useState(true);
    const toggleLogin =()=> setIsLogin((prev)=>!prev)
    const name= useInputValidation("");
    const  password= useStrongPassword("");
    const bio =useInputValidation("");
    const username=useInputValidation("",usernameValidator);
    const avatar = useFileHandler("single");
    const handleLogin=(e)=>{
      e.preventDefault();
    }
    const handleSignUp=(e)=>{
      e.preventDefault();
    }
  return( 
    <div style={{ backgroundImage:"linear-gradient(rgb(255 225 209),rgb(249 159 159))",}}>
  <Container component={"main"} maxWidth="xs" sx={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Paper
     elevation={3}
     sx={{
        padding:4,
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
     }}>
   {isLogin?(
   <>
   <Typography variant="h5">Login</Typography>
   <form style={{width:"100%",marginTop:"1rem"}}onSubmit={handleLogin}>
    <TextField required sx={{ width: '100%' }} label="username" margin="normal" variant="outlined" value={username.value} onChange={username.changeHandler}/>
    <TextField required sx={{ width: '100%' }} label="Password" type="password" margin="normal" variant="outlined" value={password.value} onChange={password.changeHandler}/>
    <Button sx={{ marginTop:"1rem", width: '100%'}} variant="contained" color="primary" type="submit">Login</Button>
    <Typography textAlign="center" m={"1rem"}>Or</Typography>
    <Button sx={{width: '100%'}} variant="text" color="secondary" onClick={toggleLogin}>Sign Up Instead</Button>
   </form>
   </>
   ) 
   :<>
   <Typography variant="h5">Sign Up</Typography>
   <form style={{width:"100%",marginTop:"1rem"}} onSubmit={handleSignUp}>
    <Stack position={"relative"} width={"10rem"} margin={"auto"}>
      <Avatar sx={{width:"10rem", height:"10rem",objectFit:"contain"}} src={avatar.preview}/>
      {avatar.error && (<Typography color="error" variant="caption">{avatar.error}</Typography>) }
      <IconButton sx={{position:"absolute",bottom:"0",right:"0",color:"white",bgcolor:"rgba(0,0,0,0.5)",":hover":{bgcolor:"rgba(0,0,0,0.7)",},}}component="label"><><CameraAltIcon/><VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/></></IconButton>
    </Stack>
    <TextField required sx={{ width: '100%' }} label="Name" margin="normal" variant="outlined" value={name.value} onChange={name.changeHandler}/>
    <TextField required sx={{ width: '100%' }} label="UserName" margin="normal" variant="outlined" value={username.value} onChange={username.changeHandler}/>
    {username.error && (<Typography color="error" variant="caption">{username.error}</Typography>) }
    <TextField required sx={{ width: '100%' }} label="Bio" type="password" margin="normal" variant="outlined" value={bio.value} onChange={bio.changeHandler}/>
    <TextField required sx={{ width: '100%' }} label="Password" type="password" margin="normal" variant="outlined" value={password.value} onChange={password.changeHandler}/>
    {password.error && (<Typography color="error" variant="caption">{password.error}</Typography>) }
    <Button sx={{ marginTop:"1rem", width: '100%'}} variant="contained" color="primary" type="submit">Sign Up</Button>
    <Typography textAlign="center" m={"1rem"}>Or</Typography>
    <Button sx={{width: '100%'}} variant="text" color="secondary" onClick={toggleLogin}>Login Instead</Button>
   </form>
   </>}
    </Paper>
  </Container>
  </div>
)}

export default Login
