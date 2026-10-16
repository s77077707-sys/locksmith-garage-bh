import { notFound } from "next/navigation";
import { getLocationBySlug, locations } from "@/data/locations";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ service: string; slug: string }>;
};

const services = {
  locksmith: {
    title: "Locksmith",
    description: "Professional locksmith services including lockouts, rekeying, car key programming, commercial locks, and emergency locksmith.",
    servicesList: [
      "Home Lockouts",
      "Car Lockouts",
      "Rekeying",
      "Car Key Programming",
      "Commercial Locks",
      "Residential Locks",
      "SFIC Cores",
      "High-Security Locks",
      "Emergency Locksmith Service",
    ],
  },
  "garage-door": {
    title: "Garage Door",
    description: "Expert garage door repair and installation including broken springs, openers, cables, rollers, and new door installation.",
    servicesList: [
      "Broken Spring Repair",
      "Garage Door Repair",
      "Opener Repair & Installation",
      "Cables & Rollers",
      "New Garage Door Installation",
      "Off-Track & Alignment",
      "Noisy Door Tune-Up",
      "Emergency Garage Door Service",
    ],
  },
};

export async function generateStaticParams() {
  const params = [];
  for (const service of Object.keys(services)) {
    for (const loc of locations) {
      params.push({ service, slug: loc.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service, slug } = await params;
  const loc = getLocationBySlug(slug);
  const svc = services[service as keyof typeof services];

  if (!loc || !svc) return { title: "Service Not Found" };

  return {
    title: `${svc.title} in ${loc.name}, ${loc.state} | Locksmith And Garage Door BH`,
    description: `Professional ${svc.title.toLowerCase()} services in ${loc.name}, ${loc.state} (${loc.county} County). Call (980) 480-6294 for same-day service.`,
  };
}

export default async function ServiceLocationPage({ params }: Props) {
  const { service, slug } = await params;
  const loc = getLocationBySlug(slug);
  const svc = services[service as keyof typeof services];

  if (!loc || !svc) notFound();

  const isSmallTown = loc.population < 5000;
  const nearbyNote = isSmallTown
    ? `We travel to small towns and rural areas across ${loc.county} County. Response times may be longer than in major cities, but we proudly serve communities like ${loc.name}.`
    : `Fast local service available throughout ${loc.name} and surrounding ${loc.county} County areas.`;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-4">{svc.title} in {loc.name}, {loc.state}</h1>
          <p className="text-xl text-gray-600 mb-4">Professional {svc.title.toLowerCase()} services for {loc.name} and {loc.county} County.</p>
          <a href="tel:9804806294" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700">Call Now: (980) 480-6294</a>
        </header>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Serving {loc.name}, {loc.state}</h2>
          <p className="mb-4">Locksmith And Garage Door BH provides reliable {svc.title.toLowerCase()} services in {loc.name}, {loc.state}. Located in {loc.county} County with a population of approximately {loc.population.toLocaleString()}, we cover both residential and commercial needs.</p>
          <p className="mb-4">{nearbyNote}</p>
          <p>Whether you need emergency service or scheduled work, our technicians are equipped to handle all common issues in the {loc.name} area.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{svc.title} Services in {loc.name}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {svc.servicesList.map((item) => (
              <li key={item} className="flex items-center"><span className="text-green-600 mr-2">✓</span>{item}</li>
            ))}
          </ul>
        </section>
        <section className="mb-10 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us in {loc.name}?</h2>
          <ul className="space-y-2">
            <li>• Licensed and experienced technicians</li>
            <li>• Serving all of North and South Carolina, including small towns</li>
            <li>• Upfront pricing — no surprises</li>
            <li>• Same-day service available in most areas</li>
            <li>• All services available in {loc.name} and nearby communities</li>
          </ul>
        </section>
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Need {svc.title} Service in {loc.name}?</h2>
          <p className="mb-6">Call us now for fast, professional service.</p>
          <a href="tel:9804806294" className="inline-block bg-blue-600 text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-blue-700">(980) 480-6294</a>
          <p className="mt-4 text-sm text-gray-500">Locksmith And Garage Door BH • Serving {loc.name}, {loc.state} and all of NC & SC</p>
        </section>
      </div>
    </main>
  );
}
