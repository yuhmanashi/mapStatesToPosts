import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './sidebar.css'
import {states, ids} from './states_object'

const drawerWidth = 160;

export default function SideBar() {
    let statesArr = Object.keys(states)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Box className='sidebar' sx={{ overflow: 'auto' }}>
          <List>
            {
                statesArr.map((ele) => {
                    let abb = states[ele]

                    for (let i = 0; i < ids.length; i++){
                        let idObject = ids[i]

                        if(idObject["name"] === abb){
                            let stateId = idObject["_id"]
                            let url = "/USAStates/" + stateId
                            let words = ele.split(' ');
                            let newWords = [];
                            for (let word of words){
                              let newWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                              newWords.push(newWord)
                            }
                            let text = newWords.join(' '); 
                            
                            return (<Link to={url}>
                                <ListItem key={abb} disablePadding > 
                                <ListItemButton>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                                </ListItem>
                            </Link>)
                        }
                    }
              })
            }
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}


