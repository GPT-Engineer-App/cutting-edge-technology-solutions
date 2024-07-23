import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Globe, Smartphone, Database, BarChart2, Brain } from "lucide-react";

const services = [
  {
    icon: <FileText className="h-12 w-12 mb-4 text-blue-600" />,
    title: "Thesis Writing",
    description: "Expert guidance and support for students at all levels, from undergraduate to doctoral.",
  },
  {
    icon: <FileText className="h-12 w-12 mb-4 text-green-600" />,
    title: "Research Paper Development",
    description: "Comprehensive research and writing services to produce high-quality papers for academic journals and conferences.",
  },
  {
    icon: <Globe className="h-12 w-12 mb-4 text-purple-600" />,
    title: "Web Development",
    description: "Custom website design and development to enhance online presence and drive business growth.",
  },
  {
    icon: <Smartphone className="h-12 w-12 mb-4 text-red-600" />,
    title: "Custom App Development",
    description: "Innovative mobile and web applications tailored to specific business needs and user requirements.",
  },
  {
    icon: <Database className="h-12 w-12 mb-4 text-yellow-600" />,
    title: "Software Solutions",
    description: "Enterprise-level software solutions to streamline operations and improve efficiency.",
  },
  {
    icon: <BarChart2 className="h-12 w-12 mb-4 text-indigo-600" />,
    title: "Business Analysis",
    description: "In-depth analysis of business processes and data to drive informed decision-making and strategic planning.",
  },
  {
    icon: <Brain className="h-12 w-12 mb-4 text-pink-600" />,
    title: "AI/ML-Powered Applications",
    description: "Cutting-edge artificial intelligence and machine learning solutions to solve complex problems and drive innovation.",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex flex-col items-center">
                {service.icon}
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;