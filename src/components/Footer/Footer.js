import styles from './Footer.module.scss'
import SocialMedia from '../SocialMedia/SocialMedia'

export default function Footer(){
    
    return(
        <div className={styles.Footer}>
            <div><img src='https://i.imgur.com/ZC2tFrz.png'/></div>
            <SocialMedia className={styles.icons}/>
            <p> Thank you for visiting! </p>
           
        </div>
    )
}