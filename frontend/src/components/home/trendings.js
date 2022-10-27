
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';

export default function Trendings() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Link to="USAStates/62448b561849f4854466119c">
                      <Button color="inherit" sx={{
                        fontSize: 'min(max(10px, 1vw), 14px)',
                        backgroundColor: 'rgba(15,45,48,255)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor:'rgb(68,180,204)',
                          color: 'rgba(15,45,48,255)'
                        }
                      }}> 
                      New York
                      </Button>
                    </Link>

                    <Link to="USAStates/62448ab71849f48544661164">
                      <Button color="inherit" sx={{
                        fontSize: 'min(max(10px, 1vw), 14px)',
                        backgroundColor: 'rgba(15,45,48,255)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor:'rgb(68,180,204)',
                          color: 'rgba(15,45,48,255)'
                        }
                      }}> 
                      California
                      </Button>
                    </Link>

                    <Link to="USAStates/62448ad01849f4854466116c">
                      <Button color="inherit" sx={{
                        fontSize: 'min(max(10px, 1vw), 14px)',
                        backgroundColor: 'rgba(15,45,48,255)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor:'rgb(68,180,204)',
                          color: 'rgba(15,45,48,255)'
                        }
                      }}> 
                      Florida
                      </Button>
                    </Link>

                    <Link to="USAStates/62448a8f1849f4854466115b">
                      <Button color="inherit" sx={{
                        fontSize: 'min(max(10px, 1vw), 14px)',
                        backgroundColor: 'rgba(15,45,48,255)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor:'rgb(68,180,204)',
                          color: 'rgba(15,45,48,255)'
                        }
                      }}> 
                      Alaska
                      </Button>
                    </Link>

                    <Link to="USAStates/62448b871849f485446611ae">
                      <Button color="inherit" sx={{
                        fontSize: 'min(max(10px, 1vw), 14px)',
                        backgroundColor: 'rgba(15,45,48,255)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor:'rgb(68,180,204)',
                          color: 'rgba(15,45,48,255)'
                        }
                      }}> 
                      Texas
                      </Button>
                    </Link>
                    </ButtonGroup>         
  );
}