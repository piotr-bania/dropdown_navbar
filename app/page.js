'use client'

import { motion as m, AnimatePresence } from 'framer-motion'

export default function Home() {

    return (
        <AnimatePresence>
            <m.div
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: 1, duration: 2}}}
                exit={{opacity: 0, transition: {duration: 1}}}
                >
                <h1>Misty Pines</h1>
            </m.div>
        </AnimatePresence>
    )
}
