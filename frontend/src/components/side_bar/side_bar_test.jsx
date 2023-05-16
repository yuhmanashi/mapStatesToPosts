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
  const currentHeight = props.windowSize.height;
  console.log(currentWidth, currentHeight);
  // drawerWidth = currentWidth >= 670 ? 150 : 0;

  return (
    <Box/>
  )

  // return (
  //   <Box sx={{ height: currentHeight, display: 'flex' }}>
  //     {/* <CssBaseline /> */}
  //     <Drawer
  //     variant='permanent'
  //       sx={{
          
  //         width: drawerWidth,
  //         flexShrink: 0,
  //         [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
  //       }}
  //     >
  //       <Box className='sidebar' sx={{ overflow: 'auto'}}>
  //         <List>
  //           {
  //               statesArr.map((state) => {
  //                   let abb = states[state]

  //                   for (let i = 0; i < ids.length; i++){
  //                       let idObject = ids[i]

  //                       if(idObject["name"] === abb){
  //                           let stateId = idObject["_id"]
  //                           let url = "/USAStates/" + stateId
  //                           let words = state.split(' ');

  //                           for (let i = 0; i < words.length; i++){
  //                             words[i] = words[i].toLowerCase();
  //                             words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  //                           }

  //                           let text = words.join(' ');
                            
  //                           return (
  //                             <Link to={url}>
  //                               <ListItem key={abb} disablePadding > 
  //                                 <ListItemButton>
  //                                   <ListItemText primary={text} />
  //                                 </ListItemButton>
  //                               </ListItem>
  //                             </Link>
  //                           )
  //                       }
  //                   }
  //             })
  //           }
  //         </List>
  //       </Box>
  //     </Drawer>
  //   </Box>
  // );
}


