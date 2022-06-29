import Image from "next/image"
import classes from "./hero.module.css"
import { motion } from "framer-motion"

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/JacobJessie.jpg' alt='Cute Photo' width={300} height={300} />
            </div>
            <motion.div
                initial={{ x: -350 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 0.7 }}>
                <h1>Jacob and Jessie</h1>
            </motion.div>
            <p>We are cute little dogs writing a blog :D</p>
        </section>
    )
}

export default Hero