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
// import {useLocation} from "react-router-dom";


const drawerWidth = 240;

export default function SideBar() {
  const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
  // const location = useLocation();

  // const handleClick = (event) => {
  //   const stateName = event.target.dataset.name
  //   this.props.USAStates.forEach(USAState => {

  //     if (stateName === USAState.name) {
  //       this.props.history.push(`/USAStates/${USAState._id}`);
  //     }
  //   })
  // };
  const id=[
    {
        "_id": "62448ba91849f485446611bc",
        "posts": [
            ""
        ],
        "name": "WY",
        "date": "2022-03-30T16:56:09.249Z",
        "__v": 0
    },
    {
        "_id": "62448ba51849f485446611ba",
        "posts": [
            ""
        ],
        "name": "WV",
        "date": "2022-03-30T16:56:05.056Z",
        "__v": 0
    },
    {
        "_id": "62448ba01849f485446611b8",
        "posts": [
            ""
        ],
        "name": "WI",
        "date": "2022-03-30T16:56:00.535Z",
        "__v": 0
    },
    {
        "_id": "62448b9a1849f485446611b6",
        "posts": [
            ""
        ],
        "name": "WA",
        "date": "2022-03-30T16:55:54.964Z",
        "__v": 0
    },
    {
        "_id": "62448b951849f485446611b4",
        "posts": [
            ""
        ],
        "name": "VT",
        "date": "2022-03-30T16:55:49.845Z",
        "__v": 0
    },
    {
        "_id": "62448b911849f485446611b2",
        "posts": [
            ""
        ],
        "name": "VA",
        "date": "2022-03-30T16:55:45.756Z",
        "__v": 0
    },
    {
        "_id": "62448b8b1849f485446611b0",
        "posts": [
            ""
        ],
        "name": "UT",
        "date": "2022-03-30T16:55:39.783Z",
        "__v": 0
    },
    {
        "_id": "62448b871849f485446611ae",
        "posts": [
            ""
        ],
        "name": "TX",
        "date": "2022-03-30T16:55:35.319Z",
        "__v": 0
    },
    {
        "_id": "62448b821849f485446611ac",
        "posts": [
            ""
        ],
        "name": "TN",
        "date": "2022-03-30T16:55:30.875Z",
        "__v": 0
    },
    {
        "_id": "62448b7c1849f485446611aa",
        "posts": [
            ""
        ],
        "name": "SD",
        "date": "2022-03-30T16:55:24.512Z",
        "__v": 0
    },
    {
        "_id": "62448b781849f485446611a8",
        "posts": [
            ""
        ],
        "name": "SC",
        "date": "2022-03-30T16:55:20.096Z",
        "__v": 0
    },
    {
        "_id": "62448b711849f485446611a6",
        "posts": [
            ""
        ],
        "name": "RI",
        "date": "2022-03-30T16:55:13.855Z",
        "__v": 0
    },
    {
        "_id": "62448b6c1849f485446611a4",
        "posts": [
            ""
        ],
        "name": "PA",
        "date": "2022-03-30T16:55:08.990Z",
        "__v": 0
    },
    {
        "_id": "62448b671849f485446611a2",
        "posts": [
            ""
        ],
        "name": "OR",
        "date": "2022-03-30T16:55:03.813Z",
        "__v": 0
    },
    {
        "_id": "62448b621849f485446611a0",
        "posts": [
            ""
        ],
        "name": "OK",
        "date": "2022-03-30T16:54:58.150Z",
        "__v": 0
    },
    {
        "_id": "62448b5a1849f4854466119e",
        "posts": [
            ""
        ],
        "name": "OH",
        "date": "2022-03-30T16:54:50.987Z",
        "__v": 0
    },
    {
        "_id": "62448b561849f4854466119c",
        "posts": [
            ""
        ],
        "name": "NY",
        "date": "2022-03-30T16:54:46.350Z",
        "__v": 0
    },
    {
        "_id": "62448b511849f4854466119a",
        "posts": [
            ""
        ],
        "name": "NV",
        "date": "2022-03-30T16:54:41.022Z",
        "__v": 0
    },
    {
        "_id": "62448b4c1849f48544661198",
        "posts": [
            ""
        ],
        "name": "NM",
        "date": "2022-03-30T16:54:36.363Z",
        "__v": 0
    },
    {
        "_id": "62448b471849f48544661196",
        "posts": [
            ""
        ],
        "name": "NJ",
        "date": "2022-03-30T16:54:31.895Z",
        "__v": 0
    },
    {
        "_id": "62448b401849f48544661194",
        "posts": [
            ""
        ],
        "name": "NH",
        "date": "2022-03-30T16:54:24.607Z",
        "__v": 0
    },
    {
        "_id": "62448b3c1849f48544661192",
        "posts": [
            ""
        ],
        "name": "NE",
        "date": "2022-03-30T16:54:20.387Z",
        "__v": 0
    },
    {
        "_id": "62448b381849f48544661190",
        "posts": [
            ""
        ],
        "name": "ND",
        "date": "2022-03-30T16:54:16.132Z",
        "__v": 0
    },
    {
        "_id": "62448b321849f4854466118e",
        "posts": [
            ""
        ],
        "name": "NC",
        "date": "2022-03-30T16:54:10.858Z",
        "__v": 0
    },
    {
        "_id": "62448b2d1849f4854466118c",
        "posts": [
            ""
        ],
        "name": "MT",
        "date": "2022-03-30T16:54:05.938Z",
        "__v": 0
    },
    {
        "_id": "62448b271849f4854466118a",
        "posts": [
            ""
        ],
        "name": "MS",
        "date": "2022-03-30T16:53:59.566Z",
        "__v": 0
    },
    {
        "_id": "62448b1f1849f48544661188",
        "posts": [
            ""
        ],
        "name": "MO",
        "date": "2022-03-30T16:53:51.382Z",
        "__v": 0
    },
    {
        "_id": "62448b191849f48544661186",
        "posts": [
            ""
        ],
        "name": "MN",
        "date": "2022-03-30T16:53:45.520Z",
        "__v": 0
    },
    {
        "_id": "62448b151849f48544661184",
        "posts": [
            ""
        ],
        "name": "MI",
        "date": "2022-03-30T16:53:41.165Z",
        "__v": 0
    },
    {
        "_id": "62448b0e1849f48544661182",
        "posts": [
            ""
        ],
        "name": "ME",
        "date": "2022-03-30T16:53:34.564Z",
        "__v": 0
    },
    {
        "_id": "62448b0a1849f48544661180",
        "posts": [
            ""
        ],
        "name": "MD",
        "date": "2022-03-30T16:53:30.745Z",
        "__v": 0
    },
    {
        "_id": "62448b051849f4854466117e",
        "posts": [
            ""
        ],
        "name": "MA",
        "date": "2022-03-30T16:53:25.706Z",
        "__v": 0
    },
    {
        "_id": "62448b001849f4854466117c",
        "posts": [
            ""
        ],
        "name": "LA",
        "date": "2022-03-30T16:53:20.068Z",
        "__v": 0
    },
    {
        "_id": "62448af91849f4854466117a",
        "posts": [
            ""
        ],
        "name": "KY",
        "date": "2022-03-30T16:53:13.889Z",
        "__v": 0
    },
    {
        "_id": "62448af41849f48544661178",
        "posts": [
            ""
        ],
        "name": "KS",
        "date": "2022-03-30T16:53:08.696Z",
        "__v": 0
    },
    {
        "_id": "62448aed1849f48544661176",
        "posts": [
            ""
        ],
        "name": "IN",
        "date": "2022-03-30T16:53:01.981Z",
        "__v": 0
    },
    {
        "_id": "62448ae81849f48544661174",
        "posts": [
            ""
        ],
        "name": "IL",
        "date": "2022-03-30T16:52:56.481Z",
        "__v": 0
    },
    {
        "_id": "62448ae31849f48544661172",
        "posts": [
            ""
        ],
        "name": "ID",
        "date": "2022-03-30T16:52:51.593Z",
        "__v": 0
    },
    {
        "_id": "62448ade1849f48544661170",
        "posts": [
            ""
        ],
        "name": "IA",
        "date": "2022-03-30T16:52:46.285Z",
        "__v": 0
    },
    {
        "_id": "62448ad61849f4854466116e",
        "posts": [
            ""
        ],
        "name": "GA",
        "date": "2022-03-30T16:52:38.189Z",
        "__v": 0
    },
    {
        "_id": "62448ad01849f4854466116c",
        "posts": [
            ""
        ],
        "name": "FL",
        "date": "2022-03-30T16:52:32.964Z",
        "__v": 0
    },
    {
        "_id": "62448acc1849f4854466116a",
        "posts": [
            ""
        ],
        "name": "DE",
        "date": "2022-03-30T16:52:28.236Z",
        "__v": 0
    },
    {
        "_id": "62448ac11849f48544661168",
        "posts": [
            ""
        ],
        "name": "CT",
        "date": "2022-03-30T16:52:17.084Z",
        "__v": 0
    },
    {
        "_id": "62448abb1849f48544661166",
        "posts": [
            ""
        ],
        "name": "CO",
        "date": "2022-03-30T16:52:11.912Z",
        "__v": 0
    },
    {
        "_id": "62448ab71849f48544661164",
        "posts": [
            ""
        ],
        "name": "CA",
        "date": "2022-03-30T16:52:07.023Z",
        "__v": 0
    },
    {
        "_id": "62448ab01849f48544661162",
        "posts": [
            ""
        ],
        "name": "AZ",
        "date": "2022-03-30T16:52:00.392Z",
        "__v": 0
    },
    {
        "_id": "62448aac1849f48544661160",
        "posts": [
            ""
        ],
        "name": "AR",
        "date": "2022-03-30T16:51:56.083Z",
        "__v": 0
    },
    {
        "_id": "62448aa51849f4854466115e",
        "posts": [
            ""
        ],
        "name": "AL",
        "date": "2022-03-30T16:51:49.281Z",
        "__v": 0
    },
    {
        "_id": "62448a8f1849f4854466115b",
        "posts": [
            ""
        ],
        "name": "AK",
        "date": "2022-03-30T16:51:27.165Z",
        "__v": 0
    },
    {
        "_id": "624257ef8630731b3af4cdcd",
        "posts": [
            ""
        ],
        "name": "HI",
        "date": "2022-03-29T00:50:55.886Z",
        "__v": 0
    },
    {
        "_id": "624257c78630731b3af4cdc8",
        "posts": [
            ""
        ],
        "name": "WI",
        "date": "2022-03-29T00:50:15.799Z",
        "__v": 0
    }
  ]
  
  let names = [
    { name: 'ALABAMA', abbreviation: 'AL'},
    { name: 'ALASKA', abbreviation: 'AK'},
    { name: 'ARIZONA', abbreviation: 'AZ'},
    { name: 'ARKANSAS', abbreviation: 'AR'},
    { name: 'CALIFORNIA', abbreviation: 'CA'},
    { name: 'COLORADO', abbreviation: 'CO'},
    { name: 'CONNECTICUT', abbreviation: 'CT'},
    { name: 'DELAWARE', abbreviation: 'DE'},
    { name: 'FLORIDA', abbreviation: 'FL'},
    { name: 'GEORGIA', abbreviation: 'GA'},
    { name: 'HAWAII', abbreviation: 'HI'},
    { name: 'IDAHO', abbreviation: 'ID'},
    { name: 'ILLINOIS', abbreviation: 'IL'},
    { name: 'INDIANA', abbreviation: 'IN'},
    { name: 'IOWA', abbreviation: 'IA'},
    { name: 'KANSAS', abbreviation: 'KS'},
    { name: 'KENTUCKY', abbreviation: 'KY'},
    { name: 'LOUISIANA', abbreviation: 'LA'},
    { name: 'MAINE', abbreviation: 'ME'},
    { name: 'MARYLAND', abbreviation: 'MD'},
    { name: 'MASSACHUSETTS', abbreviation: 'MA'},
    { name: 'MICHIGAN', abbreviation: 'MI'},
    { name: 'MINNESOTA', abbreviation: 'MN'},
    { name: 'MISSISSIPPI', abbreviation: 'MS'},
    { name: 'MISSOURI', abbreviation: 'MO'},
    { name: 'MONTANA', abbreviation: 'MT'},
    { name: 'NEBRASKA', abbreviation: 'NE'},
    { name: 'NEVADA', abbreviation: 'NV'},
    { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
    { name: 'NEW JERSEY', abbreviation: 'NJ'},
    { name: 'NEW MEXICO', abbreviation: 'NM'},
    { name: 'NEW YORK', abbreviation: 'NY'},
    { name: 'NORTH CAROLINA', abbreviation: 'NC'},
    { name: 'NORTH DAKOTA', abbreviation: 'ND'},
    { name: 'OHIO', abbreviation: 'OH'},
    { name: 'OKLAHOMA', abbreviation: 'OK'},
    { name: 'OREGON', abbreviation: 'OR'},
    { name: 'PENNSYLVANIA', abbreviation: 'PA'},
    { name: 'PUERTO RICO', abbreviation: 'PR'},
    { name: 'RHODE ISLAND', abbreviation: 'RI'},
    { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
    { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
    { name: 'TENNESSEE', abbreviation: 'TN'},
    { name: 'TEXAS', abbreviation: 'TX'},
    { name: 'UTAH', abbreviation: 'UT'},
    { name: 'VERMONT', abbreviation: 'VT'},
    { name: 'VIRGINIA', abbreviation: 'VA'},
    { name: 'WASHINGTON', abbreviation: 'WA'},
    { name: 'WEST VIRGINIA', abbreviation: 'WV'},
    { name: 'WISCONSIN', abbreviation: 'WI'},
    { name: 'WYOMING', abbreviation: 'WY' }
  ]
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
                //ID Object have abbreviation and ID
                //States Object have Name and Abbre
                
                //1. make States Object into Key=>Value  Name=>Abbreviation
                //2. get the Names(key of the object) into an array.
                //3. Use map on that array.
                //4. For each States name, access the Abbreivation via  Name Object
                //5. With the Abbreviation use that to access ID and map to the <Link>
            states.map((text, index) => (
              <Link to="/USAStates/62448b561849f4854466119c">{/* ID there */}
                <ListItem key={text} disablePadding > {/* Abbreviation there */}
                  <ListItemButton>
                    <ListItemIcon/>
                    <ListItemText primary={text} />{/* Name there */}
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}


