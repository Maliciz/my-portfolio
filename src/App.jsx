import React, { useState, useEffect } from 'react';
import "./App.css"
const InstagramIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>;
const MailIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const GithubIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>;

const MatrixText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  const triggerAnimation = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev.split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 40);
  };

  useEffect(() => {
    triggerAnimation();
  }, [text]);

  return <span onMouseOver={triggerAnimation} className="inline-block cursor-crosshair">{displayText}</span>;
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-8 py-6 flex justify-between items-center ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
          }`}
      >

        <div className="hidden md:flex space-x-8 text-xs font-semibold tracking-widest text-gray-300">
          <a href="#home" className="hover:text-neon-red transition-colors duration-300 uppercase">Home</a>
          <a href="#bio" className="hover:text-neon-red transition-colors duration-300 uppercase">About</a>
          <a href="#skills" className="hover:text-neon-red transition-colors duration-300 uppercase">Skills</a>

        </div>


        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-xl md:text-2xl font-display font-bold tracking-[0.2em] text-neon-green uppercase whitespace-nowrap text-3d">
            <MatrixText text="Maliciz" />
          </h1>
        </div>


        <div className="hidden md:flex space-x-6">
          <a href="https://www.instagram.com/maliciz_/" className="text-gray-300 hover:text-neon-red transition-colors duration-300">
            <InstagramIcon />
          </a>
          <a href="https://github.com/maliciz" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-red transition-colors duration-300">
            <GithubIcon />
          </a>
          <a href="mailto:[mksmballa@gmail.com]" className="text-gray-300 hover:text-neon-red transition-colors duration-300">
            <MailIcon />
          </a>
        </div>


        <div className="md:hidden flex ml-auto">
          <button className="text-gray-300 hover:text-neon-red">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </nav>


      <section id="home" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">

        <div className="absolute inset-0 z-0">

          <img
            src="https://i.pinimg.com/736x/ae/d4/2c/aed42c4db1c78eb4ee57829482f6a2ca.jpg"
            alt=""
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90"></div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-red/20 rounded-full blur-[150px] pointer-events-none"></div>
        </div>


        <div className="relative z-10 flex flex-col items-end mt-10">
          <h2 className="text-[8vw] md:text-[6vw] font-cyber font-black leading-none tracking-tighter text-white uppercase opacity-90 text-3d">
            <MatrixText text="MAKSYM" />
          </h2>
          <h2 className="text-[8vw] md:text-[4vw] font-cyber font-black leading-none tracking-tighter text-neon-red uppercase xl:mt-[-5%] mt-[-2%] text-3d drop-shadow-[0_0_30px_rgba(255,0,51,0.5)]">
            BALLA
          </h2>
          <h3 className="text-[1vw] md:text-[1vw] font-cyber font-black leading-none tracking-tighter text-white  xl:mt-[5%] mt-[5%]  drop-shadow-[0_0_30px_rgba(255,0,51,0.5)]">
            <a className="uppercase">Portfolio </a>
          </h3>
        </div>


        <div className="absolute bottom-12 flex flex-col items-center z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 opacity-70">Learn More</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-neon-red to-transparent animate-pulse origin-top"></div>
        </div>
      </section>

      {/* Mock Section: Bio */}
      <section id="bio" className="min-h-screen relative flex items-center justify-center border-t border-white/5 bg-black">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-red/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="text-center max-w-3xl px-6 relative z-10">

          <h3 className="font-cyber text-4xl md:text-6xl mb-12 tracking-[0.2em] text-neon-red uppercase text-3d">Bio</h3>
          <p className="text-gray-100 leading-relaxed text-xl md:text-xl font-cyber tracking-widest uppercase text-3d-white">
            Hi, I'm Maksym. A Full Stack developer and multimedia creator. I build digital products where strict backend logic meets modern frontend aesthetics. I work with React, Node.js, and databases. My environment is Arch Linux; my approach is architectural precision combined with creative freedom.
          </p>

        </div>
      </section>


      <section id="skills" className="min-h-screen py-24 flex items-center justify-center border-t border-white/5 bg-[#050505] relative overflow-hidden">

        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          <h3 className="font-cyber text-4xl md:text-6xl mb-6 tracking-[0.2em] text-neon-red uppercase text-3d text-center">Skills</h3>
          <p className="text-gray-400 leading-relaxed text-lg md:text-xl font-sans tracking-wide text-center max-w-3xl mb-16">
            My tech stack is a blend of robust engineering and creative exploration. I build scalable architectures and craft interactive digital experiences.
          </p>


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">


            <div className="group bg-black/60 border border-white/10 hover:border-neon-red/60 rounded-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(255,0,51,0.15)] relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h4 className="font-cyber text-2xl mb-4 tracking-[0.1em] text-white uppercase group-hover:text-neon-red transition-colors duration-300">Frontend & UI</h4>
              <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6 h-10">Crafting interactive, high-performance interfaces.</p>
              <ul className="text-gray-300 font-sans text-sm space-y-4">
                <li className="flex items-start"><span className="text-neon-red mr-3 mt-1 text-xs">▹</span> <div><strong className="text-white block mb-1 uppercase tracking-wider text-xs">Core</strong> JavaScript (ES6+), TypeScript</div></li>
                <li className="flex items-start"><span className="text-neon-red mr-3 mt-1 text-xs">▹</span> <div><strong className="text-white block mb-1 uppercase tracking-wider text-xs">Frameworks</strong> React.js, React Bootstrap</div></li>
                <li className="flex items-start"><span className="text-neon-red mr-3 mt-1 text-xs">▹</span> <div><strong className="text-white block mb-1 uppercase tracking-wider text-xs">Styling</strong> Modern HTML5, CSS3, Responsive Design</div></li>
              </ul>
            </div>


            <div className="group bg-black/60 border border-white/10 hover:border-neon-red/60 rounded-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(255,0,51,0.15)] relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h4 className="font-cyber text-2xl mb-4 tracking-[0.1em] text-white uppercase group-hover:text-neon-red transition-colors duration-300">Backend & Arch</h4>
              <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6 h-10">Building scalable servers and complex data structures.</p>
              <ul className="text-gray-300 font-sans text-sm space-y-4">
                <li className="flex items-start"><span className="text-neon-red mr-3 mt-1 text-xs">▹</span> <div><strong className="text-white block mb-1 uppercase tracking-wider text-xs">Server-side</strong> Node.js, Express.js</div></li>
                <li className="flex items-start"><span className="text-neon-red mr-3 mt-1 text-xs">▹</span> <div><strong className="text-white block mb-1 uppercase tracking-wider text-xs">Enterprise</strong> C#, Java</div></li>
                <li className="flex items-start"><span className="text-neon-red mr-3 mt-1 text-xs">▹</span> <div><strong className="text-white block mb-1 uppercase tracking-wider text-xs">Databases</strong> SQL (Oracle, PostgreSQL)</div></li>
                <li className="flex items-start"><span className="text-neon-red mr-3 mt-1 text-xs">▹</span> <div><strong className="text-white block mb-1 uppercase tracking-wider text-xs">APIs</strong> RESTful API Design</div></li>
              </ul>
            </div>


            <div className="group bg-black/60 border border-white/10 hover:border-neon-red/60 rounded-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(255,0,51,0.15)] relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h4 className="font-cyber text-2xl mb-4 tracking-[0.1em] text-white uppercase group-hover:text-neon-red transition-colors duration-300">Env & DevOps</h4>
              <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6 h-10">My daily drivers for clean code and reliable deployment.</p>
              <ul className="text-gray-300 font-sans text-sm space-y-4">
                <li className="flex items-start"><span className="text-neon-red mr-3 mt-1 text-xs">▹</span> <div><strong className="text-white block mb-1 uppercase tracking-wider text-xs">OS</strong> Arch Linux (Primary ecosystem)</div></li>
                <li className="flex items-start"><span className="text-neon-red mr-3 mt-1 text-xs">▹</span> <div><strong className="text-white block mb-1 uppercase tracking-wider text-xs">Version Control</strong> Git, GitHub</div></li>
                <li className="flex items-start"><span className="text-neon-red mr-3 mt-1 text-xs">▹</span> <div><strong className="text-white block mb-1 uppercase tracking-wider text-xs">Deployment / Tools</strong> Docker, Mathcad</div></li>
              </ul>
            </div>

          </div>
        </div>

      </section>
      <p className="text-center text-gray-400 font-sans text-sm leading-relaxed mb-6 h-10">  <MatrixText className="ml-4 font-cyber text-white " text="© maliciz" /></p>
    </div>
  );
}

export default App;