import React, { Usetate } from "react";

export function AuthorCard() {
    return (
        <>
            <div id="intro" className="bg-[#
            3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
                <div id="avatar" className="flex justify-center py-2">
                    <img className="w-40" src="https://api.multiavatar.com/JB.svg " alt="JB image" />
                </div>
                <div id="content" className="prose lg:prose-xl px-2">
                    <h1 className="text-center text-gray-800 text-4xl capitalize font-medium">Chris Deabeh</h1>
                    <small className="text-center block text-md text-gray-800">Writer, Teacher &amp; Software Engineer</small>
                    <p className="text-justify text-lg text-gray-800">I'm a rapper, a writer,
                        and a programmer. I Love writing and
                        coding in javascript. most of my works are done offline and i love</p>
                </div>
            </div>
        </>
    );
}


// const [isActive, setIsActive] = useState({
//     active: true,
//     name: 'education'
// })

// function handleActive(e) {
//     e.preventDefault();

//     setIsActive({
//         active: true,
//         name: e.target.id
//     })
// }