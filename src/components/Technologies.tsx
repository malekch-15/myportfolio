import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNextjs} from "react-icons/tb"
import {SiMongodb} from "react-icons/si"
import {FaNodeJs} from "react-icons/fa"
import {FaJava} from "react-icons/fa"
import {BiLogoSpringBoot} from "react-icons/bi"
import {FaHtml5} from "react-icons/fa"
import {RiTailwindCssFill} from "react-icons/ri"
import { motion } from "motion/react"
export default  function Technologies (){
    const inconVariants=(duration:number)=>({
        initial:{y:-10},
        animate:{
            y:[10,-10],
            transition:{
                duration:duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse" as const,
            }

        }
    })
    return (
        <div className="border-b border-neutral-900 pb-24">
            <motion.h1
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1.5}}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={inconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p_4">
                 <RiReactjsLine className=" text-7xl text-cyan-400 "/>
                </motion.div>
                <motion.div
                    variants={inconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p_4">
                    <TbBrandNextjs className=" text-7xl "/>
                </motion.div>
                <motion.div
                    variants={inconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p_4">
                    <SiMongodb className=" text-7xl text-green-500 "/>
                </motion.div>
                <motion.div
                    variants={inconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 text-base border-neutral-800 p_4">
                    <RiTailwindCssFill className=" text-7xl  "/>
                </motion.div>
                <motion.div
                    variants={inconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p_4">
                    <FaNodeJs className=" text-7xl text-green-400 "/>
                </motion.div>

                <motion.div
                    variants={inconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4  border-neutral-800 p_4">
                    <FaJava className=" text-7xl text-blue-500   "/>
                </motion.div>
                <motion.div
                    variants={inconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p_4">
                    <BiLogoSpringBoot className=" text-7xl text-green-400  "/>
                </motion.div>

                <motion.div
                    initial="initial"
                    variants={inconVariants(2.5)}
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p_4">
                    <FaHtml5 className=" text-7xl text-orange-500  "/>
                </motion.div>

            </motion.div>
        </div>
    )
}