import React from 'react'
import './index.css'
import {Switch, Route} from 'react-router-dom'

import Home from '../../views/Home'
import About from '../../views/About'
import Imagem from '../../views/Imagem'

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

                <Route path="/Imagem">
                    <Imagem/>
                </Route>

            </Switch>
        </div>
    )
    
 }

export default Content