import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-navy text-white">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center">Who We Are</h1>
          <div className="max-w-3xl mx-auto space-y-6 text-light-gray">
            <p className="text-lg leading-relaxed">
              We are a Pakistan-based offshore services company on a mission to help US businesses and non-profit organizations operate smarter — without sacrificing quality. We deliver high-caliber IT help desk support, customer care, telemarketing, application management, and medical billing — all staffed by English-proficient, professionally trained teams available across US business hours.
            </p>
            <p className="text-lg leading-relaxed">
              Think of us as your in-house operations team, just without the overhead. We partner with small businesses, growing startups, and mission-driven non-profits that need dependable, scalable support — the kind that keeps things running smoothly without the complexity and cost of local hiring. Our clients don't just save money; they gain a reliable extension of their team that shows up every day, ready to deliver.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you need a single dedicated agent or a full support team, we scale with you.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "60%", label: "Average cost savings vs. US-based hiring" },
              { number: "24/7", label: "Coverage across all US time zones" },
              { number: "No", label: "Long-term contracts required to start" }
            ].map((stat) => (
              <div key={stat.label} className="text-center p-8 rounded-xl bg-white/5">
                <div className="text-4xl font-bold text-cyan mb-2">{stat.number}</div>
                <div className="text-light-gray">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "IT Help Desk Support",
                  description: "Tier-1 & Tier-2 technical support, remote troubleshooting, ticketing management, and user onboarding."
                },
                {
                  title: "Customer Support",
                  description: "Inbound voice and chat support, complaint resolution, CRM updates, and customer satisfaction follow-ups."
                },
                {
                  title: "Medical Billing",
                  description: "Claims submission, denial management, insurance follow-ups, and AR management for clinics and practices."
                },
                {
                  title: "Telemarketing & Lead Gen",
                  description: "Outbound calling, appointment setting, lead qualification, and pipeline building for your sales team."
                }
              ].map((service) => (
                <div key={service.title} className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-light-gray mb-4 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-white">Application Management & Technical Support</h3>
              <p className="text-light-gray mb-4 leading-relaxed">Ongoing support, monitoring, updates, and user management for SaaS tools, internal apps, and business software platforms.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
