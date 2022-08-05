import { AppBar, styled, Toolbar, Typography } from "@mui/material"
import {Hive} from '@mui/icons-material'
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
}) 

export const Navbar = ()=>{
    return(
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>
                    MIRANDA
                </Typography>
                <Hive/>
            </StyledToolbar>
        </AppBar>
    )
}
