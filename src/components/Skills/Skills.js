import { BookA ,SquareTerminal} from 'lucide-react';
import styles from './Skills.module.scss'


export default function Skills(){
    
    return(
        <div className={styles.Skills}>
            <div className={styles.SkillContainer}>
                <div className={styles.IconContainer}><BookA size='5vmin'/></div>
                <ol>
                    <li>html</li>
                    <li>CSS</li>
                    <li>javascript</li>
                </ol>
           </div>
           <div className={styles.SkillContainer}>
                <div className={styles.IconContainer}> <SquareTerminal  size='5vmin' /></div>
                <ol>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>webpack</li>
                    <li>Deployment</li>
                </ol>
           </div>
        </div>
    )
}

