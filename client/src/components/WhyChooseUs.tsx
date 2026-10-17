import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <br /><span className="text-primary">Easy Boat Removal</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted boat removal professionals serving all of Florida since 1997
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Local Specialists</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We are based in Florida and know the coastal environment and local rules
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Same-Day Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Quick response, with same-day removal available when it is urgent
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Eco-Friendly Disposal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Responsible recycling and disposal that follows all Florida environmental guidelines
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Free Estimates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Clear pricing and no hidden fees. Get a free quote within an hour
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Full Insurance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Fully licensed and insured, so you have peace of mind during the removal
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-2" />
              <CardTitle>All Boat Types</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We remove sailboats, powerboats, yachts, catamarans, pontoons and derelict vessels up to 60 FT
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
