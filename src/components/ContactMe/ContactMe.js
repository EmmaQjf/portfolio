import styles from './ContactMe.module.scss'
import SocialMedia from '../SocialMedia/SocialMedia'
export default function ContactMe(){
    // function handleChange(e) {
    //     setComment({ ...comment, [e.target.name]: e.target.value });
    // }

    // async function handleSubmit(evt) {
    //     evt.preventDefault();
    //     try {
    //         // Call the createComment function to upload the comment
    //         await createComment(postId, comment);
    //         console.log('Comment successfully uploaded');
    //         // Reset the comment state after successful upload
    //         setComment({ body: '' });
    //     } catch (error) {
    //         console.error('Error uploading comment:', error);
    //     }
    // }
    return(
        <>
        <form className={styles.ContactMe}>
            <h2>ContactMe</h2>
            <SocialMedia/>
            <div className={styles.container}>
            <label >Name</label>
            <input className={styles.alignLeft} type="text" name="name" required />
            </div>
            
            <div className={styles.container}>
            <label>Email</label>
            <input type="email" name="email" required />
            </div>

            <div className={styles.container}>
            <label >Message</label>
            <input type="text" name="comment"  required />
            </div>
            <button type='submit' style={{ fontSize: '15px', textAlign: 'center' }}>Send</button>
            </form>
        </>
    )
}