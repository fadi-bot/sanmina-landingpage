import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-navy text-white">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center">About Us</h1>
          <div className="max-w-3xl mx-auto space-y-6 text-light-gray">
            <p className="text-lg leading-relaxed">
              Sanmina Business Solutions has been at the forefront of IT support and technology services 
              for over a decade. Founded with a vision to empower businesses through reliable technology, 
              we've grown from a small startup to a trusted partner for hundreds of U.S. businesses.
            </p>
            <p className="text-lg leading-relaxed">
              Our team of experienced professionals is dedicated to providing exceptional service and 
              innovative solutions. We believe in building long-term relationships with our clients, 
              understanding their unique needs, and delivering tailored solutions that drive growth.
            </p>
            <p className="text-lg leading-relaxed">
              With a focus on quality, reliability, and customer satisfaction, we've established 
              ourselves as a leader in the IT services industry. Our commitment to excellence has 
              earned us the trust of businesses across various sectors.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "500+", label: "Clients Served" },
              { number: "10+", label: "Years Experience" },
              { number: "99.9%", label: "Uptime Guarantee" }
            ].map((stat) => (
              <div key={stat.label} className="text-center p-8 rounded-xl bg-white/5">
                <div className="text-4xl font-bold text-cyan mb-2">{stat.number}</div>
                <div className="text-light-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
