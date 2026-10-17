import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ThreeStepProcess() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            OUR EASY 3-STEP PROCESS
          </h2>
          <p className="text-lg text-orange-600">
            Quick, hassle-free boat removal
          </p>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Give us a call or fill out the online form with details about your boat and where it is.
                Photos help us quote you faster.
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <CardTitle>Get Your Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get a free quote with no obligation — usually within an hour.
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
         <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <CardTitle>We Haul It Away</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We pick a time that works for you and take care of hauling, disposal and paperwork.
                Your property is clear in no time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
