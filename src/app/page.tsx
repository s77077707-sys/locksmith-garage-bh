import Link from "next/link";
import { locations, getLocationsByState, getIndividualLocations, getGroupedLocations } from "@/data/locations";

export default function Home() {
  const ncIndividual = getLocationsByState("NC").filter(l => !l.isGroup).slice(0, 30);
  const scIndividual = getLocationsByState("SC").filter(l => !l.isGroup).slice(0, 25);
  const ncGroups = getLocationsByState("NC").filter(l => l.isGroup);
  const scGroups = getLocationsByState("SC").filter(l => l.isGroup);

  return (
    <main className="min-h-screen bg-white">
      <header className="bg-gray-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Locksmith And Garage Door BH</h1>
          <p className="text-xl mb-6">Professional Locksmith & Garage Door Services Across North & South Carolina</p>
          <a href="tel:9804806294" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold">Call (980) 480-6294</a>
        </div>
      </header>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Locksmith Services</h3>
            <p className="mb-4">Lockouts, rekeying, car key programming, commercial & residential locks, emergency service.</p>
            <Link href="/locksmith/charlotte-nc" className="text-blue-600 font-medium">View Locksmith Pages →</Link>
          </div>
          <div className="border p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Garage Door Services</h3>
            <p className="mb-4">Broken springs, repair, openers, cables, new door installation, emergency service.</p>
            <Link href="/garage-door/charlotte-nc" className="text-blue-600 font-medium">View Garage Door Pages →</Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Serving Every City & Town</h2>
          <p className="text-center mb-10 text-gray-600">Individual pages for major and medium cities + grouped pages for smaller towns.</p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">North Carolina</h3>
              <ul className="space-y-2 mb-8">
                {ncIndividual.map((loc) => (
                  <li key={loc.slug} className="flex justify-between text-sm">
                    <span>{loc.name}</span>
                    <span className="space-x-3">
                      <Link href={`/locksmith/${loc.slug}`} className="text-blue-600">Locksmith</Link>
                      <Link href={`/garage-door/${loc.slug}`} className="text-blue-600">Garage Door</Link>
                    </span>
                  </li>
                ))}
              </ul>
              {ncGroups.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2 text-gray-700">Small Town Groups</h4>
                  <ul className="space-y-1 text-sm">
                    {ncGroups.map((loc) => (
                      <li key={loc.slug}>
                        <Link href={`/locksmith/${loc.slug}`} className="text-blue-600">{loc.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">South Carolina</h3>
              <ul className="space-y-2 mb-8">
                {scIndividual.map((loc) => (
                  <li key={loc.slug} className="flex justify-between text-sm">
                    <span>{loc.name}</span>
                    <span className="space-x-3">
                      <Link href={`/locksmith/${loc.slug}`} className="text-blue-600">Locksmith</Link>
                      <Link href={`/garage-door/${loc.slug}`} className="text-blue-600">Garage Door</Link>
                    </span>
                  </li>
                ))}
              </ul>
              {scGroups.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2 text-gray-700">Small Town Groups</h4>
                  <ul className="space-y-1 text-sm">
                    {scGroups.map((loc) => (
                      <li key={loc.slug}>
                        <Link href={`/locksmith/${loc.slug}`} className="text-blue-600">{loc.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <p className="text-center mt-10 text-sm text-gray-500">
            Total pages: {locations.length} locations × 2 services. Includes individual cities and grouped small-town pages.
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>Locksmith And Garage Door BH</p>
        <p className="mt-2"><a href="tel:9804806294" className="underline">(980) 480-6294</a></p>
        <p className="mt-4 text-sm text-gray-400">Serving all of North & South Carolina</p>
      </footer>
    </main>
  );
}
