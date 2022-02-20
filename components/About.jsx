
export default function About() {
  return (
  <div className="my-4 py-4 items-center text-center space-y-4">
    <div class="flex flex-col justify-center items-center">
      <img src="/images/pic-1.jpeg" className="h-80 w-80 my-4 py-2" alt="profile-pic"/>
    </div>
    <p className="text-6xl text-gray-500">Hello, I'm
      Ayush <span className="text-blue-500">Pattanayak</span>
    </p>
    <div>
      <p className="text-2xl text-gray-500 italic hover:text-gray-700 mt-8 md:mt-6">CSE'23 | MERN Developer | ML enthusiast</p>
      <p className="text-xl text-gray-500 mt-6 md:mt-4">I want to create platforms that can solve real time problems with the help of AI & Data Science.</p>
    </div>
  </div>
  );
}
