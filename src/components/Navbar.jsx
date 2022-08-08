import { InputBase,AppBar, Box, styled, Toolbar, Typography, Badge, Avatar } from "@mui/material"
import {Hive, Mail, Notifications} from '@mui/icons-material'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
}) 

const Search = styled('div')(({theme})=>({
    backgroundColor: "white",
    padding:"0px 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
}))

const Icons = styled(Box)(({theme})=>({
    display:"none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}))

const UserBox = styled(Box)(({theme})=>({
    display:"flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))

export const Navbar = ()=>{
    return(
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>
                    MIRANDA
                </Typography>
                {/* //an icon here */}
                <Hive sx={{display:{xs:"block",sm:"none"}}}/>
                <Search><InputBase placeholder="search..."/> </Search> 
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications/>
                    </Badge>
                    <Avatar sx={{width:30,height:30}} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </Icons>
                <UserBox>
                    <Avatar sx={{width:30,height:30}} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Typography variant="span">Jhon</Typography>
                </UserBox>
            </StyledToolbar>
        </AppBar>
    )
}
