import { Rocket, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient">
      {/* Modern abstract background with CSS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="hero-text text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Modern Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Template</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A clean, responsive, and modern HTML template with semantic structure, CSS Grid, Flexbox, and interactive JavaScript components.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="btn-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center"
              data-testid="button-get-started-hero"
            >
              <Rocket className="h-5 w-5 mr-2" />
              Get Started
            </button>
            <button 
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
              data-testid="button-watch-demo"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
