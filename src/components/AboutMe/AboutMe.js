import styles from './AboutMe.module.scss'
export default function AboutMe(){
    
    return(
        <div className={styles.AboutMe}>
            <p className={styles.title}>A Full Stack Developer</p>
           <p className={styles.subtitle}> I'm passionate about growth and collaboration. </p>
           <img className={styles.profilePic}/>
           {/* <img className={styles.pics}src='https://i.imgur.com/P4g8Rp4.png'/> */}
        </div>
    )
}