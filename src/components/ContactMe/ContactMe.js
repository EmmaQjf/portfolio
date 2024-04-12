import styles from './ContactMe.module.scss'
import SocialMedia from '../SocialMedia/SocialMedia'
import {useState} from 'react'
import {SendMessage} from '../../utilities.js/contact-api'
export default function ContactMe(){
     const [comment, setComment] = useState({
        name: '',
        email:'',
        message:''
     })

    function handleChange(e) {
        setComment({ ...comment, [e.target.name]: e.target.value });
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await SendMessage(comment);
            console.log('Comment successfully uploaded');
            // Reset the comment state after successful upload
            setComment({ name: '',email:'',message:'' });
        } catch (error) {
            console.error('Error uploading comment:', error);
        }
    }
    return(
        <>
        <form className={styles.ContactMe} onSubmit={handleSubmit}>
            <h2>ContactMe</h2>
            <SocialMedia/>
            <div className={styles.container}>
            <label >Name</label>
            <input className={styles.alignLeft} type="text" name="name" value={comment.name} onChange={handleChange} required />
            </div>
            
            <div className={styles.container}>
            <label>Email</label>
            <input type="email" name="email" value={comment.email}  onChange={handleChange} required />
            </div>

            <div className={styles.container}>
            <label >Message</label>
            <input type="text" name="message" value={comment.message} onChange={handleChange}  required />
            </div>
            <button type='submit' style={{ fontSize: '15px', textAlign: 'center' }}>Send</button>
            </form>
        </>
    )
}