import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNextjs} from "react-icons/tb"
import {SiMongodb} from "react-icons/si"
import {FaNodeJs} from "react-icons/fa"
import {FaJava} from "react-icons/fa"
import {BiLogoSpringBoot} from "react-icons/bi"
import {FaHtml5} from "react-icons/fa"
import {RiTailwindCssFill} from "react-icons/ri"
export default  function Technologies (){
    return (
        <div className="border-b border-neutral-900 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p_4">
                 <RiReactjsLine className=" text-7xl text-cyan-400 "/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p_4">
                    <TbBrandNextjs className=" text-7xl "/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p_4">
                    <SiMongodb className=" text-7xl text-green-500 "/>
                </div>
                <div className="rounded-2xl border-4 text-base border-neutral-800 p_4">
                    <RiTailwindCssFill className=" text-7xl  "/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p_4">
                    <FaNodeJs className=" text-7xl text-green-400 "/>
                </div>

                <div className="rounded-2xl border-4  border-neutral-800 p_4">
                    <FaJava className=" text-7xl text-blue-500   "/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p_4">
                    <BiLogoSpringBoot className=" text-7xl text-green-400  "/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p_4">
                    <FaHtml5 className=" text-7xl text-orange-500  "/>
                </div>

            </div>
        </div>
    )
}