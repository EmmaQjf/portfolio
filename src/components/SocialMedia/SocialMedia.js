import styles from './SocialMedia.module.scss'
export default function SocialMedia(){
    
    return(
        <div className={styles.SocialMedia}>
           <a href='https://www.linkedin.com/in/junfeng-qiao-654b60296/'><img src='https://i.imgur.com/QKZnZx2.png' /></a>
           <a href="mailto:jfqemma@gmail.com"><img src='https://i.imgur.com/M3KV9e9.png' /></a>
           <a href='https://github.com/EmmaQjf'><img src='https://i.imgur.com/ClGcbcZ.jpg' /></a>

        </div>
    )
}