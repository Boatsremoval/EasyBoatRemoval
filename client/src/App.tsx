import ScrollToTop from "@/components/ScrollToTop";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Vessel from "@/pages/Vessel";
import JunkBoatRemoval from "@/pages/JunkBoatRemoval";
import SalvageBoatRemoval from "@/pages/SalvageBoatRemoval";
import SunkenBoatRemoval from "@/pages/SunkenBoatRemoval";
import Quote from "@/pages/Quote";
import PompanoBeach from "@/pages/PompanoBeach";
import TampaBoatRemoval from "@/pages/TampaBay";
import NotFound from "@/pages/not-found";

import PompanoBeachFL from "@/pages/SEO/PompanoBeach"

import Tampa from "@/pages/SEO/westcoast/Tampa"


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/quote" component={Quote} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/vessel" component={Vessel} />
      <Route path="/junk-boat-removal" component={JunkBoatRemoval} />
      <Route path="/salvage-boat-removal" component={SalvageBoatRemoval} />
      <Route path="/sunken-boat-removal" component={SunkenBoatRemoval} />
      <Route path="/pompano-beach-boat-removal" component={PompanoBeach} />
      <Route path="/tampa-boat-removal" component={TampaBoatRemoval} />
      <Route path="/boat-removal-fl-pompano-beach" component={PompanoBeachFL} />
      <Route path="/boat-removal-fl-tampa" component={Tampa} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      {/* Add your own Google Ads / Analytics tag here if needed */}
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
