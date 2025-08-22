import { CheckCircle } from "lucide-react";

const features = [
  "HTML5 semantic structure with proper accessibility",
  "CSS custom properties and modern features",
  "Vanilla JavaScript with DOM manipulation",
  "Mobile-first responsive design approach"
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">About This Template</h2>
            <p className="text-lg text-gray-600 mb-6">
              This template demonstrates modern web development practices using semantic HTML5, responsive CSS with Grid and Flexbox, and interactive JavaScript functionality.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center" data-testid={`feature-item-${index}`}>
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            {/* Modern geometric pattern with CSS */}
            <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
              <div className="absolute inset-0 bg-white opacity-10 rounded-2xl transform rotate-3"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Ready to Use</h3>
                <p className="text-blue-100 mb-6">Start building your project with this solid foundation that follows web standards and best practices.</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3" data-testid="tech-html">
                    <div className="font-semibold">HTML5</div>
                    <div className="text-blue-100">Semantic</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3" data-testid="tech-css">
                    <div className="font-semibold">CSS3</div>
                    <div className="text-blue-100">Modern</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3" data-testid="tech-js">
                    <div className="font-semibold">JavaScript</div>
                    <div className="text-blue-100">Vanilla</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3" data-testid="tech-responsive">
                    <div className="font-semibold">Responsive</div>
                    <div className="text-blue-100">Mobile-first</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
