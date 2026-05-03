import './index.css'
import profile from './assets/profile.jpeg'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'

function App() {

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/yaswanth-muniswar-perugu-36489a304", "_blank");
  }

  const openGitHub = () => {
    window.open("https://github.com/PeruguYaswanth", "_blank");
  }

  return (
    <div className="bg-gradient-to-br from-violet-200 to-purple-100 min-h-screen">

      {/* 🔹 Navbar */}
      <nav className="flex justify-center gap-10 py-6 font-medium text-gray-800">
        {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
          <a key={item} href={`#${item}`} className="hover:text-purple-600 transition">
            {item}
          </a>
        ))}
      </nav>

      {/* 🔹 Hero Section */}
      <section id="Home" className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-10">

        {/* Left */}
        <div className="bg-black text-white rounded-2xl p-8 max-w-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-3">Yaswanth Muniswar Perugu</h1>
          <p className="text-lg mb-3 text-gray-300">Full Stack Developer</p>
          <p className="text-sm leading-relaxed text-gray-400">
            Aspiring Full Stack Developer passionate about building scalable and user-friendly applications.
            Actively seeking opportunities to apply and enhance my skills.
          </p>
        </div>

        {/* Right */}
        <div className="text-center">
          <img
            src={profile}
            alt="profile"
            className="w-52 h-52 rounded-full object-cover mx-auto shadow-lg hover:scale-105 transition cursor-pointer"
          />
          <p className="mt-3 font-medium">@Yaswanth Muniswar Perugu</p>
        </div>

      </section>

      {/* 🔹 About */}
      <section id="About" className="px-6 max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul className="space-y-2 text-gray-800">
          <li>B.Tech – Siddharth Institute of Engineering & Technology (2022–2026) | CGPA: 8.65</li>
          <li>Intermediate – Sri Chaitanya Jr College (2020–2022) | CGPA: 9.1</li>
          <li>SSC – Balavikas EM School (2019–2020) | CGPA: 9.7</li>
        </ul>
      </section>

      {/* 🔹 Skills */}
      <section id="Skills" className="px-6 max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-4 text-gray-800">
          <li>Python, SQL</li>
          <li>Javascript, React.js, TypeScript</li>
          <li>FastAPI, REST APIs</li>
          <li>MongoDB, MySQL</li>
        </ul>
      </section>

      {/* 🔹 Projects */}
      <section id="Projects" className="px-6 max-w-5xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Card */}
          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="font-semibold text-lg">HR Employee Login System</h3>
            <p className="text-sm text-gray-500 mb-2">React · FastAPI · JWT</p>
            <p className="text-sm text-gray-700">
              Built secure login with role-based access and JWT authentication.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="font-semibold text-lg">Todo List App</h3>
            <p className="text-sm text-gray-500 mb-2">React · FastAPI</p>
            <p className="text-sm text-gray-700">
              Full-stack CRUD app with REST API and real-time updates.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="font-semibold text-lg">Tic Tac Toe</h3>
            <p className="text-sm text-gray-500 mb-2">Python</p>
            <p className="text-sm text-gray-700">
              Console-based game focusing on logic and problem-solving.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="font-semibold text-lg">Slickbot Clone</h3>
            <p className="text-sm text-gray-500 mb-2">React · UI/UX</p>
            <p className="text-sm text-gray-700">
              Pixel-perfect UI clone with responsive design.
            </p>
          </div>

        </div>
      </section>

      {/* 🔹 Experience */}
      <section id="Experience" className="px-6 max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <p className="text-gray-800">
          <strong>Nava Software Solutions</strong> – Full Stack Intern (4 Months)
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Worked on React, FastAPI, TypeScript, MongoDB. Built APIs, UI, and handled full lifecycle development.
        </p>
      </section>

      {/* 🔹 Contact */}
      <section id="Contact" className="text-center mt-12 pb-10">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>

        <div className="flex justify-center gap-6">
          <img src={linkedin} alt="linkedin" onClick={openLinkedIn}
            className="w-10 h-10 cursor-pointer hover:scale-110 transition" />
          <img src={github} alt="github" onClick={openGitHub}
            className="w-10 h-10 cursor-pointer hover:scale-110 transition" />
        </div>

        <p className="mt-4 text-gray-700">+91 7893139826</p>
      </section>

    </div>
  )
}

export default App