import React from 'react';
import naturephoto from './images/nature.jpg';
import Textchanger from './components/text_changer';
import SearchIcon from "@material-ui/icons/Search";
import './App.css';
import { IconButton, InputAdornment, TextField } from '@material-ui/core';



function App(){
    return(
        <div>
      <div className='container'>
        <div className='background'>
            <img src={naturephoto} width='100%' alt='' />
            <h1 className='text-wrapper'>It's Time For New</h1>
        </div>
        
        <p>
        
        <Textchanger />
        </p>
    
     <div className="btn-group">
        <button className="button">ALL</button>
        <button className="button">Activities</button>
        <button className="button">Tours</button>
        <button className="button">Rentals</button>
      </div>        
        <TextField
            className='search-box'
            type="text"
            id="header-search"
            placeholder="Search destination,Tours, Activities"
            name="s" 
            variant="outlined"
            InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                 )
                }}
        />
        
        
        
     </div>
     </div>
        
        

    )
}

export default App;