import React, { Component } from 'react'
import styles from './NavBar.module.css';

export default class NavBar extends Component {
    render() {
        return (
            <div className={`${styles.component} ${styles.NavBar}`}>
                <header>NavBar: I am a NavBar component!</header>
            </div>
        )
    }
}