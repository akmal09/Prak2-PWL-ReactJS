import React from "react";
import './homestyle.jsx';
import '../../App.css'
import {Button} from '../Button/Button';
import styles from "./homestyle.jsx";

const Home = ()=>{
    const classes = styles()
    return (
        <div className={classes.container}>
            <video className={classes.bgHome} src="./videos/video-1.mp4" autoPlay loop muted />
            <h1 className={classes.header}>Hi I'm Akmal Fauzan Suranta</h1>
            <h2 className={classes.bio}>Student from Teknik Informatika, Intstitut Teknologi Sumatera</h2>
            <h2 className={classes.bio}>Developper Palugada</h2>

            <img className={classes.img} src="./WhatsApp Image 2022-05-22 at 14.05.38.jpeg"/>
            <p className={classes.listSkill}>Python | Kotlin | HTML | CSS | Javascript | PHP | Laravel</p>

            <Button
                className={classes.btn}
                to="/komentar"
            >
                Contact Me
            </Button>
        </div>
        
    );
}

export default Home;