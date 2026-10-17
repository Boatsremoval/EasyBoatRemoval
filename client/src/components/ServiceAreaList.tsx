import React from "react";
import { City } from "@/data/cities";
import { LIVE_CITY_PAGES } from "@/utils/liveCityPages";

interface Props {
  cities: (City & { distance?: number })[];
}
function slugifyCity(name: string) {
  return name
    .normalize("NFD")                      // split accents
    .replace(/[\u0300-\u036f]/g, "")      // remove accents
    .replace(/[^a-zA-Z0-9]/g, "-")        // any non-alphanumeric → "-"
    .replace(/-+/g, "-")                  // collapse multiple ---- to single -
    .replace(/^-|-$/g, "")                // trim "-" at start/end
    .toLowerCase();
}
export default function ServiceAreaList({ cities }: Props) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Easy Boat Removal Service Areas",
    "itemListElement": cities.filter((c) => LIVE_CITY_PAGES.has(slugifyCity(c.name))).map((city, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": `${city.name}, Fl Boat Removal`,
      "url": `https://easyboatremoval.com/boat-removal-fl-${slugifyCity(city.name)}`
    }))
  };

  return (
    <section className="py-16 bg-background border-t">
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">
          MORE NEARBY TOWNS WE SERVE
        </h2>
        <p className="text-muted-foreground mb-10">
          <span className="text-primary font-semibold">Easy Boat Removal</span> proudly works with customers all over Florida. 
          Here are nearby cities where we offer junk boat removal, dismantling, towing and disposal.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-left text-sm md:text-base">
          {cities.map((city) =>
            LIVE_CITY_PAGES.has(slugifyCity(city.name)) ? (
              <a
                key={city.name}
                href={`/boat-removal-fl-${slugifyCity(city.name)}`}
                className="hover:text-primary transition-colors"
              >
                {city.name}
              </a>
            ) : (
              <span key={city.name}>{city.name}</span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
