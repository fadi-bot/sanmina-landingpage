import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-navy text-white">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center">Case Studies</h1>
          <p className="text-center text-light-gray text-lg mb-16 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their operations with our IT solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare Provider Success",
                industry: "Healthcare",
                description: "Implemented 24/7 help desk support reducing response time by 60%",
                result: "Improved patient satisfaction scores"
              },
              {
                title: "Manufacturing Optimization",
                industry: "Manufacturing",
                description: "Deployed team extension for legacy system modernization",
                result: "Increased production efficiency by 40%"
              },
              {
                title: "Financial Services Security",
                industry: "Finance",
                description: "Enhanced cybersecurity measures and compliance monitoring",
                result: "Zero security incidents in 12 months"
              },
              {
                title: "Retail Digital Transformation",
                industry: "Retail",
                description: "Cloud migration and Microsoft 365 implementation",
                result: "Reduced IT costs by 35%"
              },
              {
                title: "Education Platform Scaling",
                industry: "Education",
                description: "Built scalable infrastructure for online learning platform",
                result: "Supported 10x user growth"
              },
              {
                title: "Legal Firm Efficiency",
                industry: "Legal",
                description: "Document management system and remote access setup",
                result: "Improved productivity by 50%"
              }
            ].map((study) => (
              <div key={study.title} className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                <div className="text-cyan text-sm font-semibold mb-2">{study.industry}</div>
                <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                <p className="text-light-gray mb-4">{study.description}</p>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-sm text-cyan font-semibold">{study.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
