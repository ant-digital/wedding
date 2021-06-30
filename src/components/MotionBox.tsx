import React from "react";
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
const MotionBox = ({ children, variants, className }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true })
    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        else {
            controls.start('hidden')
        }
    }, [controls, inView])

    return (
        <motion.div
            className={className}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 3, delay: 0.2,type:'tween' }}
        >
            {children}
        </motion.div>
    )
}
export default MotionBox