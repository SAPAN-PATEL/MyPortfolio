import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.jpg';

const About = () => {
    return(
        <section id="about" className=""> // Add your desired className here
            <div className=" flex flex-col-reverse md:flex-row justify-between items-center">
                {}
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                {}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white md-2 leanding-tight"> Hi, I am</h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leanding-tight">Sapan Patel</h2>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold md-4 text-[#824ec] leading-tight">
                    <span className="text-white">I am a </span>
                    <ReactTypingEffect
                    text={["Full Stack Developer", "Java Developer", "React Developer", "Node.js Developer", "Coder"]}
                    speed={100}
                    eraseSpeed={50}
                    typingDelay={500}
                    eraseDelay={2000}
                    cursorRenderer={(cursor) => (<span className="text-[#824ec]">{cursor}</span>)}
                    />
                </h3>
                
                <p className='text-base sm:text-lg md:text-lg text-gray-400 md-10 mt-8 leading-relaxed'> 
                    I am a passionate Full Stack Developer with over 8 months of expertise in building scalable web applications. Skilled in both front-end and
                    back-end development, I specialize in the Java and other
                    modern technologies to create seamless user experiences and
                    efficient solutions. 
                </p>

                <a 
                href='https://drive.google.com/file/d/1UzDJYIHjj9EtRWFPwb_jfelGGOLrPbCQ/view?usp=sharing' 
                target="_blank "
                rel="noopener noreferrer"
                className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                style={{
                    background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                    boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',


                }}
                >
                    DOWNLOAD CV
                
                </a>


                </div>
                <div className='md:w1/2 flex justify-center md:justify-end'>
                 <Tilt
                  className=''></Tilt>
                 </div>


            </div>


        </section>
    )

};
