import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Wind, 
  Droplets, 
  Thermometer,
  Eye,
  Gauge,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  CloudSun,
  CloudLightning
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Weather = () => {
  const weekForecast = [
    { day: "Mon", icon: Sun, temp: 28, condition: "Sunny" },
    { day: "Tue", icon: CloudSun, temp: 27, condition: "Partly Cloudy" },
    { day: "Wed", icon: Cloud, temp: 25, condition: "Cloudy" },
    { day: "Thu", icon: CloudRain, temp: 23, condition: "Light Rain" },
    { day: "Fri", icon: CloudRain, temp: 22, condition: "Rain" },
    { day: "Sat", icon: CloudSun, temp: 26, condition: "Clearing" },
    { day: "Sun", icon: Sun, temp: 29, condition: "Sunny" },
  ];

  const hourlyForecast = [
    { time: "Now", temp: 28, icon: Sun },
    { time: "2PM", temp: 30, icon: Sun },
    { time: "4PM", temp: 29, icon: CloudSun },
    { time: "6PM", temp: 27, icon: Cloud },
    { time: "8PM", temp: 24, icon: Cloud },
    { time: "10PM", temp: 22, icon: CloudSun },
  ];

  return (
    <div className="space-y-6">
      {/* Current Weather Hero */}
      <div className="weather-card">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex items-center gap-6">
            <Sun className="w-24 h-24 text-accent animate-pulse-soft" />
            <div>
              <p className="text-6xl font-bold">28°C</p>
              <p className="text-xl text-primary-foreground/80">Partly Cloudy</p>
              <p className="text-sm text-primary-foreground/60 mt-1">Feels like 31°C</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="flex items-center gap-3">
              <Droplets className="w-6 h-6 text-accent" />
              <div>
                <p className="text-sm text-primary-foreground/70">Humidity</p>
                <p className="text-lg font-semibold">65%</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Wind className="w-6 h-6 text-accent" />
              <div>
                <p className="text-sm text-primary-foreground/70">Wind Speed</p>
                <p className="text-lg font-semibold">12 km/h NE</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Eye className="w-6 h-6 text-accent" />
              <div>
                <p className="text-sm text-primary-foreground/70">Visibility</p>
                <p className="text-lg font-semibold">10 km</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Gauge className="w-6 h-6 text-accent" />
              <div>
                <p className="text-sm text-primary-foreground/70">Pressure</p>
                <p className="text-lg font-semibold">1013 hPa</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Alerts */}
      <Card className="border-warning/50 bg-warning/10">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Extreme Heat Advisory</p>
              <p className="text-sm text-muted-foreground mt-1">
                Temperature expected to exceed 35°C on Thursday. Irrigate crops early morning or late evening. 
                Provide shade for livestock and ensure adequate water supply.
              </p>
              <div className="flex gap-2 mt-3">
                <Badge variant="outline" className="bg-warning/20 border-warning text-warning">
                  High Priority
                </Badge>
                <Badge variant="outline">Valid: Feb 6-8</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hourly Forecast */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Hourly Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {hourlyForecast.map((hour, idx) => {
              const Icon = hour.icon;
              return (
                <div 
                  key={idx} 
                  className={`flex-shrink-0 flex flex-col items-center gap-2 p-4 rounded-xl ${
                    idx === 0 ? "bg-primary text-primary-foreground" : "bg-muted/50"
                  }`}
                >
                  <p className="text-sm font-medium">{hour.time}</p>
                  <Icon className={`w-8 h-8 ${idx === 0 ? "text-accent" : "text-accent"}`} />
                  <p className="text-lg font-bold">{hour.temp}°</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* 7-Day Forecast */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">7-Day Forecast</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {weekForecast.map((day, idx) => {
            const Icon = day.icon;
            return (
              <div 
                key={idx} 
                className={`flex items-center justify-between p-3 rounded-xl ${
                  idx === 0 ? "bg-primary/10 border border-primary/20" : "bg-muted/30"
                }`}
              >
                <div className="flex items-center gap-4 w-24">
                  <p className={`font-medium ${idx === 0 ? "text-primary" : ""}`}>
                    {idx === 0 ? "Today" : day.day}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon className="w-6 h-6 text-accent" />
                  <span className="text-sm text-muted-foreground w-24">{day.condition}</span>
                </div>
                <p className="text-lg font-bold w-16 text-right">{day.temp}°C</p>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Air Quality & Rainfall */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between">
              Air Quality Index
              <Badge className="bg-success text-primary-foreground">Good</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-4">
              <p className="text-5xl font-bold text-success">52</p>
              <p className="text-muted-foreground mt-2">Safe for outdoor work</p>
            </div>
            <div className="space-y-3">
              {[
                { label: "PM2.5", value: 15, max: 50, color: "bg-success" },
                { label: "PM10", value: 28, max: 100, color: "bg-success" },
                { label: "Ozone", value: 35, max: 100, color: "bg-warning" },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                  <Progress value={(item.value / item.max) * 100} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Rainfall Prediction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-info/10 border border-info/20">
              <div className="flex items-center gap-3">
                <CloudRain className="w-10 h-10 text-info" />
                <div>
                  <p className="font-semibold">Expected Rainfall</p>
                  <p className="text-sm text-muted-foreground">Next 7 days</p>
                </div>
              </div>
              <p className="text-3xl font-bold text-info">45mm</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Monthly Average</span>
                <span className="font-medium flex items-center gap-1">
                  68mm <TrendingDown className="w-4 h-4 text-destructive" />
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Seasonal Forecast</span>
                <span className="font-medium flex items-center gap-1">
                  Normal <TrendingUp className="w-4 h-4 text-success" />
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Next Rain Expected</span>
                <span className="font-medium">Thursday</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Weather;
