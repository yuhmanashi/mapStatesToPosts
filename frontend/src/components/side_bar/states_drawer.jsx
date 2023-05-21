import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {states, ids} from './states_object'
import { Link } from 'react-router-dom';

export default function StatesDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const statesArr = Object.keys(states);

  const list = () => (
    <Box
      sx={{ width: 100 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
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
  );

  return (
    <div>
        <React.Fragment>
            <Button onClick={toggleDrawer(true)}>All States</Button>
            <Drawer
                anchor='left'
                open={state}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
            <Button onClick={toggleDrawer(true)}>Trending</Button>
            <Drawer
                anchor='top'
                open={state}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
            <Button>Create Post</Button>
        </React.Fragment>
    </div>
  );
}