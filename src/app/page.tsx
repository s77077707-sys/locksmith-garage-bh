import Link from "next/link";
import { locations, getLocationsByState } from "@/data/locations";

export default function Home() {
  const ncIndividual = getLocationsByState("NC").filter(l => !l.isGroup).slice(0, 24);
  const scIndividual = getLocationsByState("SC").filter(l => !l.isGroup).slice(0, 20);
  const ncGroups = getLocationsByState("NC").filter(l => l.isGroup);
  const scGroups = getLocationsByState("SC").filter(l => l.isGroup);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-1 text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Available 24/7 Across NC & SC
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Locksmith & Garage Door
            <span className="block text-blue-400">BH</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-8">
            Licensed, insured, and trusted technicians. Emergency service in every city and town across North and South Carolina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9804806294" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-blue-600/25 transition">
              Call (980) 480-6294
            </a>
            <a href="#services" className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-medium transition">
              View Services
            </a>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-slate-900">24/7</div>
            <div className="text-sm text-slate-500">Emergency Service</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">Licensed</div>
            <div className="text-sm text-slate-500">& Fully Insured</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">Same Day</div>
            <div className="text-sm text-slate-500">In Most Areas</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">All NC & SC</div>
            <div className="text-sm text-slate-500">Cities & Towns</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-slate-600 mb-12 max-w-xl mx-auto">Professional residential and commercial solutions. Upfront pricing, no surprises.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-5">🔑</div>
            <h3 className="text-2xl font-semibold mb-3">Locksmith Services</h3>
            <p className="text-slate-600 mb-6">Lockouts, rekeying, car key programming, commercial & residential locks, high-security systems, and emergency response.</p>
            <Link href="/locksmith/charlotte-nc" className="text-blue-600 font-semibold hover:underline">View Locksmith Areas →</Link>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-5">🚗</div>
            <h3 className="text-2xl font-semibold mb-3">Garage Door Services</h3>
            <p className="text-slate-600 mb-6">Broken springs, openers, cables, rollers, off-track repair, new door installation, and same-day emergency service.</p>
            <Link href="/garage-door/charlotte-nc" className="text-blue-600 font-semibold hover:underline">View Garage Door Areas →</Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Homeowners & Businesses Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-semibold text-lg mb-2">Licensed & Insured</h3>
              <p className="text-slate-600 text-sm">Properly licensed technicians. Your property is protected.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold text-lg mb-2">Fast Response</h3>
              <p className="text-slate-600 text-sm">Same-day service in most cities. Emergency available 24/7.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-semibold text-lg mb-2">Upfront Pricing</h3>
              <p className="text-slate-600 text-sm">Clear quotes before any work begins. No hidden fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Serving Every City & Town</h2>
        <p className="text-center text-slate-600 mb-12">Individual pages for major cities + grouped pages for smaller towns across NC & SC.</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-800">North Carolina</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {ncIndividual.map((loc) => (
                <div key={loc.slug} className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="font-medium">{loc.name}</span>
                  <span className="space-x-2 text-xs">
                    <Link href={`/locksmith/${loc.slug}`} className="text-blue-600 hover:underline">Lock</Link>
                    <Link href={`/garage-door/${loc.slug}`} className="text-blue-600 hover:underline">Door</Link>
                  </span>
                </div>
              ))}
            </div>
            {ncGroups.length > 0 && (
              <div className="mt-6">
                <h4 className="font-medium text-slate-700 mb-2 text-sm">Small Town Groups</h4>
                <div className="space-y-1 text-sm">
                  {ncGroups.map((loc) => (
                    <Link key={loc.slug} href={`/locksmith/${loc.slug}`} className="block text-blue-600 hover:underline">{loc.name}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-800">South Carolina</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {scIndividual.map((loc) => (
                <div key={loc.slug} className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="font-medium">{loc.name}</span>
                  <span className="space-x-2 text-xs">
                    <Link href={`/locksmith/${loc.slug}`} className="text-blue-600 hover:underline">Lock</Link>
                    <Link href={`/garage-door/${loc.slug}`} className="text-blue-600 hover:underline">Door</Link>
                  </span>
                </div>
              ))}
            </div>
            {scGroups.length > 0 && (
              <div className="mt-6">
                <h4 className="font-medium text-slate-700 mb-2 text-sm">Small Town Groups</h4>
                <div className="space-y-1 text-sm">
                  {scGroups.map((loc) => (
                    <Link key={loc.slug} href={`/locksmith/${loc.slug}`} className="block text-blue-600 hover:underline">{loc.name}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="text-center mt-12 text-sm text-slate-500">
          {locations.length} location pages × 2 services = full coverage across both states.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Locksmith or Garage Door Tech Now?</h2>
          <p className="text-slate-300 mb-8">Call for same-day service in most areas. Licensed technicians, upfront pricing.</p>
          <a href="tel:9804806294" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-xl text-xl font-bold shadow-lg">
            (980) 480-6294
          </a>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-10 text-center text-sm">
        <p className="text-white font-medium mb-2">Locksmith And Garage Door BH</p>
        <p><a href="tel:9804806294" className="hover:text-white">(980) 480-6294</a></p>
        <p className="mt-4">Serving all of North Carolina & South Carolina</p>
      </footer>
    </main>
  );
}
