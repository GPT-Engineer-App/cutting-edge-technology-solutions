import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package2, FileText, Globe, Smartphone, Database, BarChart2, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: <FileText className="h-8 w-8 mb-2" />, title: "Thesis Writing" },
  { icon: <FileText className="h-8 w-8 mb-2" />, title: "Research Paper Development" },
  { icon: <Globe className="h-8 w-8 mb-2" />, title: "Web Development" },
  { icon: <Smartphone className="h-8 w-8 mb-2" />, title: "Custom App Development" },
  { icon: <Database className="h-8 w-8 mb-2" />, title: "Software Solutions" },
  { icon: <BarChart2 className="h-8 w-8 mb-2" />, title: "Business Analysis" },
  { icon: <Brain className="h-8 w-8 mb-2" />, title: "AI/ML-Powered Applications" },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Empowering Academic and Business Success with Cutting-Edge Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
              Innovix Solutions provides comprehensive technology solutions tailored to the unique needs of academia and businesses.
            </p>
            <Button asChild size="lg" className="animate-bounce">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Value Proposition</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              At Innovix Solutions, we believe that technology should be a catalyst for innovation and success. We empower our clients with advanced tools and expertise to excel in their academic pursuits and business ventures. Our focus on quality and customer satisfaction ensures that every project we undertake meets the highest standards.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex flex-col items-center">
                      {service.icon}
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline">
                      <Link to="/services">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-blue-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">MSME Registered Company</h2>
            <p className="text-lg mb-8">
              We are proud to be a registered Micro, Small, and Medium Enterprise (MSME), demonstrating our commitment to quality and compliance with industry standards.
            </p>
            <Button asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;