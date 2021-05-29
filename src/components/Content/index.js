import React from 'react'
import './index.css'
import {Switch, Route} from 'react-router-dom'

import Home from '../../views/Home'
import About from '../../views/About'

const Content = props => {
    return(
        <div className="Content">
            <Switch>
                <Route path="/Home">
                    <Home/>
                </Route>

                <Route path="/About">
                    <About/>
                </Route>
            </Switch>
        </div>
    )
    
 }

export default Content;