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
import './side_bar.css'
import {states, ids} from './states_object'

//make drawer width responsive
let drawerWidth = 150;

//possibly make hamburger icons
export default function SideBar(props) {
  let statesArr = Object.keys(states)
  const currentWidth = props.windowSize.width;
  // drawerWidth = currentWidth >= 670 ? 150 : 0;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <Drawer
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
                            let text = ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase(); 
                            
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


