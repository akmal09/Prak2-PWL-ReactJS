import React from "react";
import Project from './Project'
// import '../../App.css';
import './projectstyle.css'

function Projects(){
    return(
        <div className="projects">
                <video className="bgProject" src="./videos/video-1.mp4" autoPlay loop muted />
                <ul className="project">
                    <Project
                        src='GitHub-Mark\PNG\GitHub-Mark-64px.png'
                        text='Healthymed (Laravel)'
                        label='healthymed'
                        path='https://github.com/akmal09/Tubes-PWL'
                    />
                    <Project
                        src='GitHub-Mark\PNG\GitHub-Mark-64px.png'
                        text='Github finder and saver'
                        label='github user'
                        path='https://github.com/akmal09/Starting-Android/tree/main/Submission3Project'
                    />
                    <Project
                        src='GitHub-Mark\PNG\GitHub-Mark-64px.png'
                        text='Story Uploader, tracking, viewer using google maps API and dicoding API'
                        label='github user'
                        path='https://github.com/akmal09/Starting-Android/tree/main/Submission3Project'
                    />
                </ul>
                
        </div>
    );
}

export default Projects();