import { InputBase,AppBar, Box, styled, Toolbar, Typography, Badge } from "@mui/material"
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
                </Icons>
            </StyledToolbar>
        </AppBar>
    )
}
