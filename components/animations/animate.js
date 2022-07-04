import { AnimatePresence, motion } from "framer-motion"

export default function Animate(props) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {props.children}
            </motion.div>
        </AnimatePresence>
    )
}


