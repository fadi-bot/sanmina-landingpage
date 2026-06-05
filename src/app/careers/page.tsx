import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Careers() {
  const jobOpenings = [
    {
      title: "Senior IT Support Specialist",
      department: "Support",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Austin, TX",
      type: "Full-time"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Technical Account Manager",
      department: "Sales",
      location: "Chicago, IL",
      type: "Full-time"
    },
    {
      title: "Junior Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Security Analyst",
      department: "Security",
      location: "Austin, TX",
      type: "Full-time"
    }
  ];

  return (
    <main className="min-h-screen bg-navy text-white">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center">Careers</h1>
          <p className="text-center text-light-gray text-lg mb-16 max-w-2xl mx-auto">
            Join our team and help businesses succeed with innovative IT solutions
          </p>
          
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                "Remote-First Culture",
                "Competitive Benefits",
                "Professional Growth",
                "Latest Technology",
                "Collaborative Environment",
                "Work-Life Balance"
              ].map((benefit) => (
                <div key={benefit} className="p-6 rounded-xl bg-white/5">
                  <div className="text-lg font-semibold text-cyan">{benefit}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div key={job.title} className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-light-gray">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <button className="px-6 py-2 rounded-lg bg-electric-blue hover:bg-cyan text-white font-semibold transition-all">
                    Apply Now
                  </button>
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
