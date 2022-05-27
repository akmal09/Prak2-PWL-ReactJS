import React from 'react';
import { Link } from 'react-router-dom';

function Project(props){
    return(
        <>
            <li className='projectItem'>
                <img
                    className='projectItemImg'
                    alt='Project Row'
                    src={props.src}
                ></img>
                <br></br>
                <a href={props.path}>Link To Project</a>
                <p className='decription'>{props.text}</p>
                
            </li>
        </>
    );
}

export default Project;