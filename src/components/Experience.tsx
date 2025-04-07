import {EXPERIENCES} from "../constants";

export default function Experience(){
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Experience</h1>
                <div>
                    {EXPERIENCES.map((experience, index) => (
                        <div key={index} className="mb_8 flex flex-wrap lg:justify-center">
                            <div className="w-full lg:w-1/4">
                                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                            </div>
                            <div className="w-full max-x-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold">{experience.role}-
                                <span className="text-sm text-purple-100">{experience.role}
                                    {experience.company}
                                </span>
                                </h6>
                                <p className="mb-4 text-neutral-400 "> {experience.description}</p>
                                {experience.technologies.map((technology, index) => (
                                    <span key={index} className="mr-2 mt-4 rounded bg-neutral-900
                                    px-2 py-1 text-sm font-medium text-pink-500">{technology}</span>
                                ))}
                            </div>
                        </div>
                    ))}
        </div>
        </div>
    )
}