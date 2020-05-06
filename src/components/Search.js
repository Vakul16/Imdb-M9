import React, { Component } from 'react'
//import Layouts from './Layouts'

function Search ({handleInput, search }) {
        return(
            <section className = "searchbox-wrap">
                <input
                type = "text" 
                placeholder = "Search Movie" 
                className = "searchbox" 
                onChange = {handleInput}
                onKeyPress = {search} 
            />
        </section>
    )
}
export default Search;
