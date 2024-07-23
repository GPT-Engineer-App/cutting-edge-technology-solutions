import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Target } from "lucide-react";

const values = [
  {
    icon: <Award className="h-12 w-12 mb-4 text-blue-600" />,
    title: "Excellence",
    description: "We strive for excellence in every project we undertake, ensuring the highest quality of work for our clients.",
  },
  {
    icon: <Users className="h-12 w-12 mb-4 text-green-600" />,
    title: "Collaboration",
    description: "We believe in the power of teamwork and foster a collaborative environment with our clients and partners.",
  },
  {
    icon: <Target className="h-12 w-12 mb-4 text-purple-600" />,
    title: "Innovation",
    description: "We continuously push the boundaries of technology to deliver innovative solutions that drive success.",
  },
];

const teamMembers = [
  { name: "John Doe", role: "CEO & Founder" },
  { name: "Jane Smith", role: "CTO" },
  { name: "Mike Johnson", role: "Lead Developer" },
  { name: "Sarah Brown", role: "Head of Research" },
];

const AboutUs = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">About Innovix Solutions</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Our Mission</h2>
        <p className="text-lg mb-4">
          At Innovix Solutions, our mission is to empower academic and business success through cutting-edge technology solutions. We are committed to delivering high-quality services that drive innovation and growth for our clients.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  {value.icon}
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">MSME Registration</h2>
        <Card className="text-center p-8 hover:shadow-lg transition-shadow">
          <CardContent>
            <h3 className="text-2xl font-semibold mb-4">Registered MSME Company</h3>
            <p className="text-lg">
              We are proud to be a registered Micro, Small, and Medium Enterprise (MSME). This registration demonstrates our commitment to quality, compliance with industry standards, and our dedication to supporting the growth of small businesses.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;