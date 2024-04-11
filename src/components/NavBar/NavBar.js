import styles from './NavBar.module.scss'
import AnchorLink from "react-anchor-link-smooth-scroll"; 
export default function NavBar(){
    
    return(
        <div className={styles.NavBar}>
            <div className={styles.imgContainer}><img src='https://i.imgur.com/ZC2tFrz.png'/></div>
            <div className={styles.tabs}>
               <AnchorLink href="#ProjectSection">
                <h1 className={styles.tab}>projects</h1> </AnchorLink>

                <AnchorLink href="#AboutMe">
                <h1 className={styles.tab}>About Me</h1></AnchorLink>

                <AnchorLink href="#ContactMe">
                <h1 className={styles.tab}>Contact Me</h1></AnchorLink>
            </div>
           
        </div>
    )
}