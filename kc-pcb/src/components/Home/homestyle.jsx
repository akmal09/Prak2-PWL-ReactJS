import React from 'react'
import {render} from 'react-dom'
import {createUseStyles} from 'react-jss'

const styles = createUseStyles({
    bgHome : {
        objectFit: "cover",
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: "-1",
    },
    
    container :{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)",
        objectFit: "contain",
    },
    
    header:{
        marginTop: "8px",
        color: "#fff",
        fontSize: "32px",
        // fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        //   'Lucida Sans', Arial, sans-serif"
    },
    
    header2:{
        marginTop: "10px",
        color: "#fff"
    },
    
    listSkill:{
        marginTop: "10%",
        color: "white"
    },
    
    img:{
        borderRadius: "25%",
        width: "100px",
        height: "100px"
    },
    
    bio:{
        color: "#fff",
    }
})

export default styles;

