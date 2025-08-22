import { Smartphone, Code, Paintbrush, Zap, Globe, Layers } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
    title: "Responsive Design",
    description: "Mobile-first approach ensuring perfect display across all devices and screen sizes."
  },
  {
    icon: Code,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
    title: "Semantic HTML5",
    description: "Clean, accessible markup using semantic elements for better SEO and screen readers."
  },
  {
    icon: Paintbrush,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100",
    title: "Modern CSS",
    description: "CSS Grid, Flexbox, custom properties, and modern styling techniques for beautiful layouts."
  },
  {
    icon: Zap,
    iconColor: "text-yellow-600",
    bgColor: "bg-yellow-100",
    title: "Interactive JS",
    description: "Vanilla JavaScript for smooth interactions, form handling, and dynamic content updates."
  },
  {
    icon: Globe,
    iconColor: "text-red-600",
    bgColor: "bg-red-100",
    title: "Cross-Browser",
    description: "Tested and optimized for compatibility across all major browsers and devices."
  },
  {
    icon: Layers,
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-100",
    title: "Component Based",
    description: "Modular design with reusable components for easy maintenance and scalability."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built with modern web standards and best practices for optimal performance and user experience.
          </p>
        </div>

        <div className="feature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="feature-card bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-200 transition-all"
                data-testid={`card-feature-${index}`}
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className={`${feature.iconColor} h-6 w-6`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
