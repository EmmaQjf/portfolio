import styles from './AboutMe.module.scss'
import { Link } from 'react-router-dom'
export default function AboutMe(){
    
    return(
        <div className={styles.AboutMe}>
            <p className={styles.title}>A Full Stack Developer</p>
           <p className={styles.subtitle}> I'm passionate about growth and collaboration. </p>
           <img className={styles.profilePic}/>
           <a href="../../public/files/JunfengQiaoResume.pdf" target="_blank" download><button>Resume</button></a>
           {/* <img className={styles.pics}src='https://i.imgur.com/P4g8Rp4.png'/> */}
        </div>
    )
}