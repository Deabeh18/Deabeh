import logo from './logo.svg';
import './App.css';

import { Navbar } from './components/Navbar';
import { AuthorCard } from './components/AuthorCard';
import { EducationCard } from './components/EducationCard';
import { Hobbie } from './components/Hobbie';
import { WorkCard } from './components/WorkCard';

export default function App() {
  return (
    <>
      <Navbar />
      <div className='py-6'>
        <main>
          <div class="mx-auto max-w-7x1 px-2 sm:px-6 1g:px-8">
            <AuthorCard />
            <WorkCard /> 
            <EducationCard />
            <Hobbies />
          </div>
        </main>
      </div>
    </>
  );
}

// {...{isActive, setIsActive}}
// :isActive.name === "education" ?
// export default App;

{/* <div id="intro" class="bg-[#
  3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
    <div id="avatar" class="flex justify-center py-2">
      <img class="w-40" src="https://api.multiavatar.com/JB.svg " alt="JB image" />
    </div>
    <div id="content" class="prose lg:prose-xl px-2">
      <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">Carlos S. Nah</h1>
      <small class="text-center block text-md text-gray-800">Writer, Teacher &amp; Software Engineer</small>
      <p class="text-justify text-lg text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis vero voluptates vitae rerum eos non laboriosam deleniti voluptatibus ipsum blanditiis
        expedita architecto tempore necessitatibus quisquam vel ipsam corporis, nemo repudiandae. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Modi asperiores, amet omnis inventore aliquid nam. Autem
        obcaecati ut ipsa rem temporibus nostrum, quibusdam optio, itaque culpa ad impedit aperiam quasi.</p>
    </div>
  </div> */}

