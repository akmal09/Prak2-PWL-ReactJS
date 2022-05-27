import React from 'react'
import {render} from 'react-dom'
import {createUseStyles} from 'react-jss'

const styles= createUseStyles({
    bg:{
        objectFit: "cover",
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: "-1"
    },
    nameText:{
        width: "100%",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "borderBox",
        resize: "vertical",
    },
    emailText:{
        width: "100%",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "borderBox",
        resize: "vertical"
    },
    
    projectName:{
        width: "100%",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        resize: "vertical"
    },
    
    comment:{
        width: "100%",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        resize: "vertical",
    },
    
    labelDiv:{
        float: "left",
        width: "25%",
        marginTop: "6px",
    },
    
    inputDiv:{
        float: "left",
        width: "75%",
        marginTop: "6px",
    },
    
    komentarPage:{
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        padding: "20px",
        width: "60%",
        margin: "auto",
    },
    
    submitKomentar:{
        backgroundColor: "rgb(51, 28, 145)",
        color: "white",
        padding: "12px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
    },
     
    listKomentar:{
        backgroundColor: "white",
        margin: "auto",
        width: "80%",
        marginTop: "50px",
        backgroundColor: "white"
    },
    
    komentar:{
        backgroundColor: "rgb(170, 170, 251)",
        width: "100%",
        padding: "10px",
    },
    
    comment:{
        padding: "0"
    },
    
    textPersuasion:{
        textAlign: "center",
    },
    
    sosmed : {
        listStyleType: "none",
        margin: "auto",
        padding: "0",
        textAlign: "center",
        width: "fit-content",
        /* margin-top: 20px, */
        backgroundColor: "white"
    },
    
    listSosmed : {
        display: "inline-block",
    }

});

export default styles;




