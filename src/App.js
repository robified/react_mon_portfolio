import React, { Component } from 'react'
import styles from './App.module.css';
import NavBar from './components/NavBar/NavBar'

export default class App extends Component {
    render() {
        return (
            
            <div className={`${styles.App} ${styles.component}`}>
                <NavBar />
                <p>App: I am an App component!</p>
            </div>
        )
    }
}