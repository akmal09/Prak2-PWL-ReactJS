import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import styles from './komentarstyle.jsx'



const Komentar = () =>{
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [project_name, setProjectName] = useState("")
    const [comment, setComment] = useState("")

    const [komentars, setKomentars] = useState([])
    


    const komentarPost = async(e) => {
        e.preventDefault();

        const formKomentar = new FormData()



        formKomentar.append('name', name)
        formKomentar.append('email', email)
        formKomentar.append('project_name', project_name)
        formKomentar.append('comment', comment)

        console.log(formKomentar)
        await axios.post(`https://server-akmalfauzansuranta.herokuapp.com/api/komentars`,formKomentar).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            window.location.reload()
        }).catch(({response})=>{
            console.log(response)
            if(response.status === 422){
                // setValidationError(response.data.errors)
            }else{
                Swal.fire({
                    text:response.data.message,
                    icon:"error"
                })
            }
        })
    }

    const fetchKomentar = async () => {
        await axios.get(`https://server-akmalfauzansuranta.herokuapp.com/api/komentars`).then(({data})=>{
            console.log(data)
            setKomentars(data)
        })
    }

    useEffect(()=>{
        fetchKomentar()
    },[])

    const classes = styles();

    return(
        <>
        <video className={classes.bg} src={`${process.env.PUBLIC_URL}/videos/video-1.mp4`} autoPlay loop muted />
        <div className={classes.komentarPage}>
            <div className={classes.textPersuasion}>
                <h1>Want to collaborate ?</h1>
                <h2>Feel Free to comment this section</h2>
            </div>
            <div className={classes.formKomentar}>
                <form className={classes.postKomentar} onSubmit={komentarPost}>
                    <div className={classes.row}>
                        <div className={classes.labelDiv}>
                            <label >Name</label>
                         </div>
                        <div className={classes.inputDiv}>
                          <input type="text" className={classes.nameText} name="name" placeholder="Your name" value={name} onChange={(event)=>{
                                setName(event.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className={classes.row}>
                        <div className={classes.labelDiv}>
                            <label >Email</label>
                         </div>
                        <div className={classes.inputDiv}>
                          <input className={classes.emailText} type="text" name="email" placeholder="Your Email" value={email} onChange={(event)=>{
                                setEmail(event.target.value)
                            }}/>
                        </div>
                    </div>
                    
                    <div className={classes.row}>
                        <div className={classes.labelDiv}>
                            <label >Project Name</label>
                         </div>
                        <div className={classes.inputDiv}>
                          <select className={classes.projectName} value={project_name} onChange={(event)=>{
                                setProjectName(event.target.value)
                            }}>
                                <option value="Just Ask">Just Ask</option>
                              <option value="HealthyMed">HealthyMed</option>
                              <option value="Github finder and saver">Github finder and saver</option>
                              <option value="Story Uploader, tracking, viewer using google maps API and dicoding API">Story Uploader, tracking, viewer using google maps API and dicoding API</option>
                          </select>
                        </div>
                    </div>

                    <div className={classes.row}>
                      <div className={classes.labelDiv}>
                        <label for="subject">Comment</label>
                      </div>
                      <div className={classes.inputDiv}>
                        <textarea className={classes.comment} name="comment" placeholder="Your Comment" value={comment} onChange={(event)=>{
                                setComment(event.target.value)
                            }}></textarea>
                      </div>
                    </div>

                    <br/>
                    <button className={classes.submitKomentar} type="submit">Send</button>
                    
                </form>
            </div>
            <div className={classes.sosmed}>
            <p>Try to reach me in :</p>
            <ul>
                <li className={classes.listSosmed}>
                    <a href="https://www.instagram.com/ouuzannn/" target="_blank" >
                        <img src={`${process.env.PUBLIC_URL}/icons8-instagram.svg`}/>
                    </a>
                </li>
                <li className={classes.listSosmed}>
                    <a href="https://www.linkedin.com/in/akmal-fauzan-suranta-355595b3/" target="_blank">
                        <img
                        src={`${process.env.PUBLIC_URL}/icons8-linkedin-circled.svg`}/>
                    </a>
                </li>
            </ul>
        </div>
        </div>

       

        <div className={classes.listKomentar}>
            <label>List Comment</label>
            {
                komentars.length > 0 && (
                    komentars.map((komentar,index)=>(
                        <div key={index} className={classes.komentar}>
                            <h3> From : {komentar.name + " (" + komentar.email +")"}</h3>
                            <label>{komentar.project_name}</label>
                            <textarea readOnly className={comment}>{komentar.comment}</textarea>
                        </div>
                    )))
            }
        </div>
            
        </>
    );
}

export default Komentar;