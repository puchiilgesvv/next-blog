import Animate from "../animations/animate"
import classes from "./contact-form.module.css"

export default function ContactForm() {
    return (
        <Animate>
            <section className={classes.contact}>
                <h1>How can I help you?</h1>
                <form className={classes.form}>
                    <div className={classes.controls}>
                        <div className={classes.control}>
                            <label htmlFor="email">Your Email</label>
                            <input type='email' id='email' required></input>
                        </div>
                        <div className={classes.control}>
                            <label htmlFor="name">Your Name</label>
                            <input type='text' id='name' autoComplete="off" required></input>
                        </div>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="message">Your Message</label>
                        <textarea rows='5'></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button>
                            Send Message
                        </button>
                    </div>
                </form>
            </section>
        </Animate>

    )
}