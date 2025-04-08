import React from "react";
import Logo from "../assets/Logo.png";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";




const features = [
  {
    icon:  "🧠",
    title: "Personal Traits",
    description: "In-depth analysis of your personality and strengths",
  },
  {
    icon: "✅",
    title: "Skills Excellence",
    description: "Detailed evaluation of your technical and soft skills",
  },
  {
    icon: "📈",
    title: "Career Growth",
    description: "Long-term career progression and opportunities",
  },
  {
    icon: "📘",
    title: "Education Pathway",
    description: "Tailored educational recommendations",
  },
  {
    icon: "🌐",
    title: "Global Opportunities",
    description: "Insights into international career prospects",
  },
  {
    icon: "💲",
    title: "Financial Planning",
    description: "Career-specific financial guidance and planning",
  },
];

const Home = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50">
        <div className="text-blue-600 font-bold text-xl flex items-center select-none">
          <span className="mr-3"><img className="w-auto h-10 object-contain " src={Logo}/></span> Career Guide AI
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#Works" className="text-gray-600 hover:text-blue-600">How It Works</a>
          <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={() => loginWithRedirect()}>Get Started</button>
      </nav>



      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#f1f4ff] text-gray-800 py-20">
      <div className="container mx-auto pt-6 text-center ">
      <span className="relative inline-block px-4 py-1 text-sm font-semibold text-blue-600 uppercase tracking-widest border border-blue-200 rounded-full shadow-sm  bg-white/50 backdrop-blur-md z-10 overflow-hidden  before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-blue-400 before:via-blue-600 before:to-purple-500 before:blur-md before:opacity-0  hover:before:opacity-30 hover:before:scale-110 transition duration-500 ease-in-out select-none">
          AI-Powered Career Guidance
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight select-none">
          Discover Your <span className="text-blue-600">Perfect </span> <br />
          <span className="text-blue-600">Career </span>
          Path Today
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Unlock your potential with our AI-driven career analysis, providing
          personalized insights and a comprehensive roadmap to your dream career.
        </p>
        <div className="mt-8">
          <button
            onClick={() => loginWithRedirect()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
          >
            Get Started for Free
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center space-x-3">
          <div className="flex -space-x-2">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="User 1"
            />
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="User 2"
            />
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="User 3"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 text-sm text-center sm:text-left">
            <div>
              <strong>10,000+</strong> students guided
            </div>
            <div className="mt-1 sm:mt-0 sm:ml-4">
              ⭐⭐⭐⭐⭐ <strong>4.9/5</strong> rating
            </div>
          </div>
        </div>
      </div>
    </section>




      {/* Steps to Success Section */}
      
      
    <div id="Works">
      <section className="py-5 bg-gradient-to-b from-white to-indigo-50 text-center" >
      <div className="container mx-auto pt-5 pb-5  text-center">
        <span className="relative inline-block px-4 py-1 text-sm font-semibold text-blue-600 uppercase tracking-widest border border-blue-200 rounded-full shadow-sm bg-white/50 backdrop-blur-md z-10 overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-blue-400 before:via-blue-600 before:to-purple-500 before:blur-md before:opacity-0 hover:before:opacity-30 hover:before:scale-110 transition duration-500 ease-in-out select-none">
        Simple Process
        </span>
      </div>
        <h3 className="text-4xl font-bold mb-3 text-gray-900 select-none">Your Path to Success</h3>
        <p className="mb-12 text-base text-gray-600 max-w-2xl mx-auto">
              Three simple steps to unlock your perfect career path with our AI-powered guidance system.
            </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-indigo-100 hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-xl font-bold mb-2 text-indigo-700 select-none">Step 1: Share Your Journey</h4>
            <p className="text-gray-700">Enter your academic background, achievements, and personal details to help us understand your foundation.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-indigo-100 hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-xl font-bold mb-2 text-indigo-700 select-none">Step 2: AI Assessment</h4>
            <p className="text-gray-700">Complete our carefully crafted 50-question assessment designed to understand your aptitude and interests.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-indigo-100 hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-xl font-bold mb-2 text-indigo-700 md:text-lg md:text-indigo-700 select-none">Step 3: Comprehensive Analysis</h4>
            <p className="text-gray-700">Receive a detailed career roadmap with personalized insights and actionable recommendations.</p>
          </div>
        </div>
      </section>
      </div>

      
      {/* Features Section */}
      <section className="py-12 bg-gradient-to-br from-indigo-50 via-white to-indigo-100" id="features">
      <div className="container mx-auto pt-5 pb-5  text-center">
        <span className="relative inline-block px-4 py-1 text-sm font-semibold text-blue-600 uppercase tracking-widest border border-blue-200 rounded-full shadow-sm bg-white/50 backdrop-blur-md z-10 overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-blue-400 before:via-blue-600 before:to-purple-500 before:blur-md before:opacity-0 hover:before:opacity-30 hover:before:scale-110 transition duration-500 ease-in-out select-none">
        Features
        </span>
      </div>
        <div className="text-center mb-16">
          
          <h2 className="text-4xl font-bold text-gray-900 select-none">Comprehensive Career Analysis</h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Our AI-powered platform analyzes multiple aspects of your profile to provide detailed insights.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-indigo-100 shadow-xl rounded-2xl p-6 text-left transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4 text-indigo-600">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}

      <section id="testimonials" className="py-12 bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
            <div className="text-center mb-16">
            <div className="container mx-auto pt-5 pb-5  text-center">
                <span className="relative inline-block px-4 py-1 text-sm font-semibold text-blue-600 uppercase tracking-widest border border-blue-200 rounded-full shadow-sm bg-white/50 backdrop-blur-md z-10 overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-blue-400 before:via-blue-600 before:to-purple-500 before:blur-md before:opacity-0 hover:before:opacity-30 hover:before:scale-110 transition duration-500 ease-in-out select-none">
                Testimonials
                </span>
           </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 text-center select-none">Success Stories</h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Hear from students and parents who transformed their career journey with Career Guide AI.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {[
                {
                  name: "Priya Sharma",
                  role: "Engineering Student",
                  quote: "Career Guide AI's comprehensive analysis helped me discover my passion for robotics engineering. The detailed roadmap made my career path crystal clear!"
                },
                {
                  name: "Rahul Patel",
                  role: "Parent",
                  quote: "As a parent, I was impressed by the depth of analysis. The platform provided invaluable insights for my daughter's future in biotechnology."
                },
                {
                  name: "Anjali Desai",
                  role: "Medical Student",
                  quote: "The AI's personalized recommendations aligned perfectly with my interests. Now I'm confidently pursuing my dream of becoming a neurosurgeon!"
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white border border-indigo-100 shadow-xl rounded-2xl p-6 text-left transform transition-transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="mb-5">
                    <h4 className="text-lg font-semibold text-gray-900 text-center">{testimonial.name}</h4>
                    <p className="text-blue-600 text-center">{testimonial.role}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-center ">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
  </section>


  {/* CTA */}
  <section className="py-20 bg-gradient-to-tr from-indigo-100 via-blue-200 to-indigo-300 ">
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 select-none">
            Ready to Discover Your Perfect Career Path?
          </h2>
          <p className="text-xl text-slate-800 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found their dream careers through our AI-powered guidance.
          </p>
          <button className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 group flex items-center mx-auto"
          onClick={() => loginWithRedirect()} // Redirect to login page
          >
          
            Start Your Career Journey <FaArrowCircleRight className="ml-2"/>
            
          </button>
          <div className="mt-12 flex justify-center space-x-8 text-slate-800">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-sm">Students Guided</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm">Career Paths</div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
          <footer className="bg-gradient-to-tr from-slate-800 to-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-12">
                <div>
                  <div className="flex items-center space-x-2 mb-6 group">
                    <div className="relative w-10 h-10 flex items-center justify-center  ">
                    <img className="w-auto h-10 object-contain " src={Logo}/>
                      <div className="absolute inset-0 bg-white opacity-20 rounded-xl "></div>
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text transform transition-all duration-300 ">Career Guide AI</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Empowering the next generation with AI-powered career guidance and comprehensive analysis.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-6">Contact</h3>
                  <div className="space-y-4 text-gray-400">
                    <p className="flex items-center hover:text-blue-400 transition cursor-pointer">
                    <IoMailOutline className="w-5 h-5" />
                    <span className="ml-2">infoenhc@gmail.com </span> 
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
                  <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/company/105442715/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-6 h-6 cursor-pointer" />
                      
                    </a>
                    <a href="https://www.instagram.com/enhancemodel.ai/" target="_blank" rel="noopener noreferrer">
                    <FaSquareInstagram  className="w-6 h-6 cursor-pointer"/>
                      
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>© 2024 Career Guide AI. All rights reserved.</p>
              </div>
            </div>
          </footer>

    </div>
  );
};

export default Home;