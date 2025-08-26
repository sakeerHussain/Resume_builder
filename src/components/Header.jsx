import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Tooltip from '@mui/material/Tooltip';

const Header = () => {
  return (
    <>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
           
          >
            <WorkOutlineIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Resume Builder
          </Typography>
          <Tooltip title="Our Resume Builder is designed to simplify the process of creating professional, polished, and impactful resumes. With a focus on modern design, easy customization, and user-friendly tools, we empower individuals to showcase their skills, experiences, and achievements effectively. Whether you’re a student starting your career, a fresher entering the job market, or a seasoned professional aiming for the next step, our platform provides an effortless way to craft resumes that stand out and leave a lasting impression." placement="bottom-start">
          <Button sx={{color: 'white'}}>About Us</Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Header