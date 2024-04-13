import styles from './ProjectSection.module.scss'
export default function ProjectSection(){
    
    return(
        <div className={styles.ProjectSection}>
            <h1 >My Recent Work</h1>
            <div className={styles.CardsContainer}>
                <div className={styles.CardContainer}>
                    <img src='https://i.imgur.com/i09QIRM.png' />
                    <div className={styles.description}>
                        <div>Vanilla javascript for functionality</div>
                        <div>Canvas for  smooth visuals and movements</div>
                    
                        <div className={styles.inlineButtons}>
                        <a href='https://seahorse-app-xdvn5.ondigitalocean.app/'><button>website</button></a>
                        <a href='https://github.com/EmmaQjf/bowlingGame'><button>github</button></a>
                        </div>
                    </div>
                </div>
                    {/* <p> interactive gameplay mechanics allowing users to throw the ball from different locations</p>
                    <a href='https://github.com/EmmaQjf/bowlingGame'><img src='https://i.imgur.com/EO8eJCP.jpg' width='50%'/></a> */}
            
                
                <div className={styles.CardContainer}>
                    <img src='https://i.imgur.com/QBVGRa2.png' />
                    <div className={styles.description}>
                    <div>MERN stack</div>
                    <div>user authentication</div>
                        <div className={styles.inlineButtons}>
                        <a href='https://victorianclothes.junfengqiao.me/home'><button>website</button></a>
                        <a href='https://github.com/EmmaQjf/victorian-clothes-mern-app'><button>github</button></a>
                        </div>
                    </div>

                </div>

                <div className={styles.CardContainer}>
                    <img src='https://i.imgur.com/DQdqQnJ.png'/>
                    <div className={styles.description}>
                    <div>MERN stack</div>
                    <div> MongoDB and Firebase databases</div>
                    <div>user authentication</div>
                        <div className={styles.inlineButtons}>
                        <a href='https://shareabite.junfengqiao.me/home'><button>website</button></a>
                        <a href='https://github.com/EmmaQjf/share-a-bite/tree/main'><button>github</button></a>
                        </div>
                    </div>
                    </div>  
                </div>
           
        </div>
    )
}