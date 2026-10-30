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

  const areaText = loc.isGroup
    ? `small towns in ${loc.county}`
    : `${loc.name}, ${loc.state}`;

  return {
    title: `${svc.title} in ${loc.name}, ${loc.state} | Locksmith And Garage Door BH`,
    description: `Professional ${svc.title.toLowerCase()} services in ${areaText}. ${loc.localNote || `Serving ${loc.county} County.`} Call (980) 480-6294 for same-day service.`,
  };
}

export default async function ServiceLocationPage({ params }: Props) {
  const { service, slug } = await params;
  const loc = getLocationBySlug(slug);
  const svc = services[service as keyof typeof services];

  if (!loc || !svc) notFound();

  const isSmall = loc.population < 8000 || loc.isGroup;
  const responseNote = isSmall
    ? `We regularly travel to smaller communities and rural areas. Response times may be a bit longer than in major cities, but we proudly serve this area.`
    : `Fast local response available throughout ${loc.name} and the surrounding area.`;

  const nearbyText = loc.nearby && loc.nearby.length > 0
    ? `We also serve nearby areas including ${loc.nearby.join(", ")}.`
    : "";

  const groupText = loc.isGroup && loc.includedTowns
    ? `This page covers smaller communities in the area including ${loc.includedTowns.slice(0, 6).join(", ")}${loc.includedTowns.length > 6 ? " and more" : ""}.`
    : "";

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-3 py-1 text-sm mb-4">
            Licensed & Insured
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{svc.title} in {loc.name}, {loc.state}</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Professional {svc.title.toLowerCase()} services for {loc.isGroup ? "communities in" : ""} {loc.name} and {loc.county} County.
          </p>
          <a href="tel:9804806294" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg">
            Call Now: (980) 480-6294
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-10 bg-white rounded-2xl p-8 border border-slate-200">
          <h2 className="text-2xl font-semibold mb-4">Serving {loc.name}, {loc.state}</h2>
          <p className="mb-4 text-slate-700">
            Locksmith And Garage Door BH provides reliable {svc.title.toLowerCase()} services in {loc.name}, {loc.state}. 
            {loc.localNote ? loc.localNote : `Located in ${loc.county} County with a population of approximately ${loc.population.toLocaleString()}, we cover both residential and commercial needs.`}
          </p>
          {groupText && <p className="mb-4 text-slate-700">{groupText}</p>}
          <p className="mb-4 text-slate-700">{responseNote}</p>
          {nearbyText && <p className="mb-4 text-slate-700">{nearbyText}</p>}
          <p className="text-slate-700">Whether you need emergency service or scheduled work, our technicians are equipped to handle all common issues in this area.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">{svc.title} Services in {loc.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {svc.servicesList.map((item) => (
              <div key={item} className="flex items-center bg-white border border-slate-200 rounded-lg px-4 py-3">
                <span className="text-green-600 mr-3 text-lg">✓</span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 bg-white border border-slate-200 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Us in {loc.name}?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <span className="text-blue-600 text-xl">🛡️</span>
              <div>
                <div className="font-medium">Licensed & Insured</div>
                <div className="text-sm text-slate-600">Fully licensed technicians</div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 text-xl">⚡</span>
              <div>
                <div className="font-medium">Same-Day Available</div>
                <div className="text-sm text-slate-600">In most service areas</div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 text-xl">💰</span>
              <div>
                <div className="font-medium">Upfront Pricing</div>
                <div className="text-sm text-slate-600">No hidden fees</div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 text-xl">🌍</span>
              <div>
                <div className="font-medium">Full NC & SC Coverage</div>
                <div className="text-sm text-slate-600">Including small towns</div>
              </div>
            </div>
          </div>
          {loc.nearby && loc.nearby.length > 0 && (
            <p className="mt-6 text-sm text-slate-600">Also covering nearby: {loc.nearby.slice(0, 4).join(", ")}</p>
          )}
        </section>

        <section className="text-center bg-slate-900 text-white rounded-2xl p-10">
          <h2 className="text-2xl font-semibold mb-3">Need {svc.title} Service in {loc.name}?</h2>
          <p className="text-slate-300 mb-6">Call now for fast, professional service.</p>
          <a href="tel:9804806294" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-xl text-xl font-bold">
            (980) 480-6294
          </a>
          <p className="mt-6 text-sm text-slate-400">
            Locksmith And Garage Door BH • Serving {loc.name}, {loc.state}
          </p>
        </section>
      </div>
    </main>
  );
}
