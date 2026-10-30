import Link from "next/link";
import { locations, getLocationsByState } from "@/data/locations";

export default function Home() {
  const ncCities = getLocationsByState("NC").filter(l => !l.isGroup).slice(0, 40);
  const scCities = getLocationsByState("SC").filter(l => !l.isGroup).slice(0, 30);
  const ncGroups = getLocationsByState("NC").filter(l => l.isGroup);
  const scGroups = getLocationsByState("SC").filter(l => l.isGroup);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <header className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2 text-sm mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            Licensed • Insured • Available 24/7
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none">
            Locksmith &
            <br />
            <span className="text-sky-300">Garage Door</span>
            <span className="block text-4xl md:text-5xl font-bold mt-2 text-white/90">BH</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Professional emergency locksmith and garage door service across every city and town in North Carolina and South Carolina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:9804806294" className="bg-white text-blue-900 hover:bg-blue-50 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl transition transform hover:scale-105">
              Call (980) 480-6294
            </a>
            <a href="#locations" className="border-2 border-white/30 hover:bg-white/10 px-8 py-5 rounded-2xl text-lg font-semibold transition">
              Find Your City
            </a>
          </div>
        </div>
      </header>

      {/* Trust Stats */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-blue-700">24/7</div>
            <div className="text-sm text-slate-600 mt-1">Emergency Service</div>
          </div>
          <div>
            <div className="text-4xl font-black text-blue-700">100+</div>
            <div className="text-sm text-slate-600 mt-1">Cities Covered</div>
          </div>
          <div>
            <div className="text-4xl font-black text-blue-700">Same Day</div>
            <div className="text-sm text-slate-600 mt-1">In Most Areas</div>
          </div>
          <div>
            <div className="text-4xl font-black text-blue-700">Upfront</div>
            <div className="text-sm text-slate-600 mt-1">Pricing Always</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Residential and commercial. Emergency and scheduled. Clear pricing before any work starts.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group bg-white border-2 border-slate-200 hover:border-blue-500 rounded-3xl p-10 transition-all hover:shadow-xl">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">🔑</div>
            <h3 className="text-3xl font-bold mb-4">Locksmith</h3>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">Home and car lockouts, rekeying, key programming, commercial locks, high-security systems, and 24/7 emergency response.</p>
            <Link href="/locksmith/charlotte-nc" className="inline-flex items-center text-blue-600 font-bold text-lg hover:gap-3 gap-2 transition-all">
              View Areas <span>→</span>
            </Link>
          </div>
          <div className="group bg-white border-2 border-slate-200 hover:border-blue-500 rounded-3xl p-10 transition-all hover:shadow-xl">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">🚗</div>
            <h3 className="text-3xl font-bold mb-4">Garage Door</h3>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">Broken springs, openers, cables, rollers, off-track repair, new installations, and same-day emergency service.</p>
            <Link href="/garage-door/charlotte-nc" className="inline-flex items-center text-blue-600 font-bold text-lg hover:gap-3 gap-2 transition-all">
              View Areas <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14">Why People Call Us</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-3">Licensed & Insured</h3>
              <p className="text-slate-300">Properly licensed technicians. Your home and vehicle are protected.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Fast Response</h3>
              <p className="text-slate-300">Same-day service in most cities. Emergency available around the clock.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">No Surprises</h3>
              <p className="text-slate-300">Upfront pricing before any work begins. You approve the cost first.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Every City & Town</h2>
          <p className="text-slate-600 text-lg">Individual pages for cities. Grouped pages for smaller communities.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-900">North Carolina</h3>
            <div className="space-y-1">
              {ncCities.map((loc) => (
                <div key={loc.slug} className="flex justify-between items-center py-2 border-b border-slate-100 hover:bg-slate-50 px-2 rounded">
                  <span className="font-medium">{loc.name}</span>
                  <div className="space-x-3 text-sm">
                    <Link href={`/locksmith/${loc.slug}`} className="text-blue-600 hover:underline font-medium">Locksmith</Link>
                    <Link href={`/garage-door/${loc.slug}`} className="text-blue-600 hover:underline font-medium">Garage</Link>
                  </div>
                </div>
              ))}
            </div>
            {ncGroups.length > 0 && (
              <div className="mt-8">
                <h4 className="font-semibold text-slate-700 mb-3">Small Town Groups</h4>
                {ncGroups.map((loc) => (
                  <Link key={loc.slug} href={`/locksmith/${loc.slug}`} className="block text-blue-600 hover:underline py-1">{loc.name}</Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-900">South Carolina</h3>
            <div className="space-y-1">
              {scCities.map((loc) => (
                <div key={loc.slug} className="flex justify-between items-center py-2 border-b border-slate-100 hover:bg-slate-50 px-2 rounded">
                  <span className="font-medium">{loc.name}</span>
                  <div className="space-x-3 text-sm">
                    <Link href={`/locksmith/${loc.slug}`} className="text-blue-600 hover:underline font-medium">Locksmith</Link>
                    <Link href={`/garage-door/${loc.slug}`} className="text-blue-600 hover:underline font-medium">Garage</Link>
                  </div>
                </div>
              ))}
            </div>
            {scGroups.length > 0 && (
              <div className="mt-8">
                <h4 className="font-semibold text-slate-700 mb-3">Small Town Groups</h4>
                {scGroups.map((loc) => (
                  <Link key={loc.slug} href={`/locksmith/${loc.slug}`} className="block text-blue-600 hover:underline py-1">{loc.name}</Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Need Help Now?</h2>
          <p className="text-xl text-blue-100 mb-10">Call for same-day service in most areas. Licensed technicians. Clear pricing.</p>
          <a href="tel:9804806294" className="inline-block bg-white text-blue-700 hover:bg-blue-50 px-12 py-6 rounded-2xl text-2xl font-black shadow-2xl transition transform hover:scale-105">
            (980) 480-6294
          </a>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-12 text-center">
        <p className="text-white text-lg font-semibold mb-2">Locksmith And Garage Door BH</p>
        <p className="mb-4"><a href="tel:9804806294" className="hover:text-white text-lg">(980) 480-6294</a></p>
        <p>Serving all of North Carolina & South Carolina</p>
      </footer>
    </div>
  );
}
