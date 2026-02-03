import { 
  Cloud, 
  Droplets, 
  Wind, 
  Thermometer,
  TrendingUp,
  Leaf,
  ShoppingBasket,
  AlertTriangle,
  ArrowRight,
  Sun,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Weather Hero Card */}
      <div className="weather-card">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-primary-foreground/70 mb-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Pune, Maharashtra</span>
            </div>
            <div className="flex items-center gap-4">
              <Sun className="w-16 h-16 text-accent animate-pulse-soft" />
              <div>
                <p className="text-5xl font-bold">28°C</p>
                <p className="text-primary-foreground/80">Partly Cloudy</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-primary-foreground/70">Today</p>
            <p className="font-medium">Mon, 3 Feb</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-primary-foreground/20">
          <div className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-accent" />
            <div>
              <p className="text-xs text-primary-foreground/70">Humidity</p>
              <p className="font-semibold">65%</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-5 h-5 text-accent" />
            <div>
              <p className="text-xs text-primary-foreground/70">Wind</p>
              <p className="font-semibold">12 km/h</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Cloud className="w-5 h-5 text-accent" />
            <div>
              <p className="text-xs text-primary-foreground/70">Rain</p>
              <p className="font-semibold">20%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <Card className="border-warning/50 bg-warning/10">
        <CardContent className="flex items-center gap-3 p-4">
          <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0" />
          <div className="flex-1">
            <p className="font-medium text-foreground">Heat Wave Warning</p>
            <p className="text-sm text-muted-foreground">Expected in next 3 days. Protect your crops.</p>
          </div>
          <Button variant="outline" size="sm">View</Button>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/crop-advisor" className="block">
          <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-primary/20 hover:border-primary/50">
            <CardContent className="p-4 flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Get Crop Advice</p>
                <p className="text-xs text-muted-foreground">AI recommendations</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/marketplace" className="block">
          <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-secondary/20 hover:border-secondary/50">
            <CardContent className="p-4 flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <ShoppingBasket className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Sell Products</p>
                <p className="text-xs text-muted-foreground">Direct to consumers</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/weather" className="block">
          <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-info/20 hover:border-info/50">
            <CardContent className="p-4 flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-info/10 flex items-center justify-center group-hover:bg-info/20 transition-colors">
                <Cloud className="w-7 h-7 text-info" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Weather Forecast</p>
                <p className="text-xs text-muted-foreground">7-day prediction</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/calendar" className="block">
          <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-accent/20 hover:border-accent/50">
            <CardContent className="p-4 flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <TrendingUp className="w-7 h-7 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Profit Estimate</p>
                <p className="text-xs text-muted-foreground">Track earnings</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* My Crops Section */}
      <Card>
        <CardHeader className="flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg">My Active Crops</CardTitle>
          <Button variant="link" size="sm" className="text-primary">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: "Tomato (टमाटर)", stage: "Flowering", progress: 60, daysLeft: 25 },
            { name: "Wheat (गेहूं)", stage: "Grain Filling", progress: 75, daysLeft: 18 },
            { name: "Onion (प्याज)", stage: "Bulbing", progress: 45, daysLeft: 35 },
          ].map((crop, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-muted/50 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{crop.name}</p>
                  <p className="text-sm text-muted-foreground">{crop.stage}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-primary">{crop.daysLeft} days left</p>
                  <p className="text-xs text-muted-foreground">to harvest</p>
                </div>
              </div>
              <Progress value={crop.progress} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Market Prices */}
      <Card>
        <CardHeader className="flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg">Today's Market Prices</CardTitle>
          <Button variant="link" size="sm" className="text-primary">
            All Prices <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { name: "Tomato", price: "₹45/kg", trend: "+5%", up: true },
              { name: "Onion", price: "₹32/kg", trend: "-3%", up: false },
              { name: "Potato", price: "₹28/kg", trend: "+2%", up: true },
              { name: "Wheat", price: "₹2,400/q", trend: "+1%", up: true },
            ].map((item, idx) => (
              <div key={idx} className="stat-card">
                <p className="text-sm text-muted-foreground">{item.name}</p>
                <p className="text-lg font-bold text-foreground">{item.price}</p>
                <p className={`text-xs font-medium ${item.up ? "text-success" : "text-destructive"}`}>
                  {item.trend}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
