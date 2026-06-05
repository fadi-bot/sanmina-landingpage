import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Managed IT Services",
      date: "December 15, 2024",
      excerpt: "Exploring how AI and automation are transforming the IT support landscape for small and medium businesses.",
      category: "Technology"
    },
    {
      title: "5 Ways to Improve Your Help Desk Response Times",
      date: "December 10, 2024",
      excerpt: "Practical strategies to enhance customer satisfaction and operational efficiency in IT support.",
      category: "Best Practices"
    },
    {
      title: "Why Remote IT Support is Here to Stay",
      date: "December 5, 2024",
      excerpt: "The benefits of remote support models and how they're reshaping the IT industry.",
      category: "Remote Work"
    },
    {
      title: "Microsoft 365 Migration Guide",
      date: "November 28, 2024",
      excerpt: "A comprehensive guide for businesses transitioning to Microsoft 365 cloud services.",
      category: "Cloud"
    },
    {
      title: "Cybersecurity Best Practices for 2025",
      date: "November 20, 2024",
      excerpt: "Essential security measures every business should implement to protect their digital assets.",
      category: "Security"
    },
    {
      title: "Building Scalable Tech Teams",
      date: "November 15, 2024",
      excerpt: "Strategies for growing your IT team efficiently and effectively as your business expands.",
      category: "Management"
    }
  ];

  return (
    <main className="min-h-screen bg-navy text-white">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center">Blog</h1>
          <p className="text-center text-light-gray text-lg mb-16 max-w-2xl mx-auto">
            Insights, tips, and trends in IT support and technology services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.title} className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                <div className="text-cyan text-sm font-semibold mb-2">{post.category}</div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <div className="text-sm text-light-gray mb-4">{post.date}</div>
                <p className="text-light-gray leading-relaxed">{post.excerpt}</p>
                <button className="mt-4 text-cyan font-semibold hover:underline">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
