const integrations = [
  { name: "Figma", logo: "/placeholder.svg" },
  { name: "Python", logo: "/placeholder.svg" },
  { name: "CircleCI", logo: "/placeholder.svg" },
  { name: "Apple", logo: "/placeholder.svg" },
  { name: "Azure", logo: "/placeholder.svg" },
];

export const Integrations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools & Integrations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Seamlessly connect with your favorite tools and platforms
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center p-4 hover:bg-muted/80 transition-colors"
            >
              <img src={integration.logo} alt={integration.name} className="w-12 h-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};