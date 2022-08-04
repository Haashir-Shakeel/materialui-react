import {Button, styled, Typography} from '@mui/material'

import {Add, Delete, Settings} from '@mui/icons-material'



function App() {
  const UniqueButton = styled(Button)(({theme})=>({
    backgroundColor: theme.palette.otherColor,
        color:"#888",
        "&:hover":{
          backgroundColor: "red",
        },
        "&:disabled":{
          backgroundColor: "gray",
          color: "red",
        }
  }))

  return (
    <div>
      <Button variant="contained" endIcon={<Add/>} color="success">Add New Post</Button>
      <Button variant="contained" color='otherColor' startIcon={<Settings/>}>Settings</Button>
      <Button variant="outlined" endIcon={<Delete/>}>Delete</Button>

      <Typography variant="h3" component="div" gutterBottom>
        h1. Heading
      </Typography>

      <Button variant='contained' disabled sx={{
        backgroundColor: "darkgreen",
        color:"#888",
        "&:hover":{
          backgroundColor: "red",
        },
        "&:disabled":{
          backgroundColor: "gray",
          color: "red"
        }
      }} >Unique Button</Button>
            
            <UniqueButton>My Button</UniqueButton>


    </div>
  );
}

export default App;
