import { useState } from "react";
import { 
  Leaf, 
  MapPin, 
  Thermometer, 
  Droplets,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Camera,
  Upload,
  Sparkles,
  ChevronRight,
  Wheat,
  Apple,
  Carrot
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CropAdvisor = () => {
  const [selectedSoil, setSelectedSoil] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");

  const recommendedCrops = [
    {
      name: "Tomato (टमाटर)",
      matchScore: 95,
      yield: "25-30 tonnes/ha",
      duration: "90-120 days",
      profit: "₹1.5-2L/acre",
      risk: "low",
      image: "🍅",
    },
    {
      name: "Wheat (गेहूं)",
      matchScore: 88,
      yield: "35-45 quintals/ha",
      duration: "120-150 days",
      profit: "₹45-60K/acre",
      risk: "low",
      image: "🌾",
    },
    {
      name: "Chilli (मिर्च)",
      matchScore: 82,
      yield: "15-20 tonnes/ha",
      duration: "150-180 days",
      profit: "₹1-1.5L/acre",
      risk: "medium",
      image: "🌶️",
    },
    {
      name: "Onion (प्याज)",
      matchScore: 78,
      yield: "20-30 tonnes/ha",
      duration: "100-120 days",
      profit: "₹80K-1.2L/acre",
      risk: "medium",
      image: "🧅",
    },
  ];

  const cropProtection = [
    {
      pest: "Aphids",
      pestHi: "माहू",
      solution: "Neem oil spray (5ml/L)",
      organic: true,
      timing: "Early morning",
    },
    {
      pest: "Fruit Borer",
      pestHi: "फल छेदक",
      solution: "Spinosad 45SC @ 0.3ml/L",
      organic: false,
      timing: "Evening",
    },
    {
      pest: "Powdery Mildew",
      pestHi: "चूर्णी फफूंद",
      solution: "Sulfur WDG @ 2g/L",
      organic: true,
      timing: "Morning",
    },
  ];

  return (
    <div className="space-y-6">
      {/* AI Recommendation Header */}
      <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">AI Crop Advisor</h2>
              <p className="text-sm text-muted-foreground">Smart recommendations based on your conditions</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Select value={selectedSoil} onValueChange={setSelectedSoil}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select Soil Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="black">Black Soil (काली मिट्टी)</SelectItem>
                <SelectItem value="red">Red Soil (लाल मिट्टी)</SelectItem>
                <SelectItem value="alluvial">Alluvial (जलोढ़)</SelectItem>
                <SelectItem value="sandy">Sandy (रेतीली)</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedSeason} onValueChange={setSelectedSeason}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select Season" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kharif">Kharif (खरीफ)</SelectItem>
                <SelectItem value="rabi">Rabi (रबी)</SelectItem>
                <SelectItem value="zaid">Zaid (जायद)</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2 p-3 rounded-lg bg-background border text-sm">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span>Pune, Maharashtra</span>
            </div>

            <Button className="btn-primary-gradient">
              <Sparkles className="w-4 h-4 mr-2" />
              Get Recommendations
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for different sections */}
      <Tabs defaultValue="recommendations" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
          <TabsTrigger value="recommendations" className="gap-2">
            <Leaf className="w-4 h-4" />
            <span className="hidden sm:inline">Recommendations</span>
          </TabsTrigger>
          <TabsTrigger value="protection" className="gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span className="hidden sm:inline">Crop Protection</span>
          </TabsTrigger>
          <TabsTrigger value="detection" className="gap-2">
            <Camera className="w-4 h-4" />
            <span className="hidden sm:inline">Pest Detection</span>
          </TabsTrigger>
        </TabsList>

        {/* Recommendations Tab */}
        <TabsContent value="recommendations" className="space-y-6">
          {/* Current Conditions */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Temperature", value: "28°C", icon: Thermometer, status: "Optimal" },
              { label: "Humidity", value: "65%", icon: Droplets, status: "Good" },
              { label: "Rainfall", value: "Normal", icon: Calendar, status: "Seasonal" },
              { label: "Soil pH", value: "6.5", icon: Leaf, status: "Balanced" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-bold text-foreground">{item.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Recommended Crops */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                AI Recommended Crops
              </CardTitle>
              <CardDescription>Based on your location, soil, and current climate conditions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendedCrops.map((crop, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{crop.image}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-foreground">{crop.name}</p>
                          <Badge 
                            variant={crop.risk === "low" ? "default" : "secondary"}
                            className={crop.risk === "low" ? "bg-success" : "bg-warning"}
                          >
                            {crop.risk === "low" ? "Low Risk" : "Medium Risk"}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                          <span>⏱ {crop.duration}</span>
                          <span>📦 {crop.yield}</span>
                          <span>💰 {crop.profit}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right hidden sm:block">
                        <p className="text-2xl font-bold text-primary">{crop.matchScore}%</p>
                        <p className="text-xs text-muted-foreground">Match Score</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <div className="mt-3 sm:hidden">
                    <div className="flex items-center gap-2">
                      <Progress value={crop.matchScore} className="h-2 flex-1" />
                      <span className="text-sm font-medium text-primary">{crop.matchScore}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Protection Tab */}
        <TabsContent value="protection" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Crop Protection Advisory</CardTitle>
              <CardDescription>Pest, disease management and fertilizer recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {cropProtection.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border bg-card">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-foreground">{item.pest}</p>
                        <span className="text-sm text-muted-foreground">({item.pestHi})</span>
                        {item.organic && (
                          <Badge className="bg-success text-primary-foreground">Organic</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        <span className="font-medium text-foreground">Solution:</span> {item.solution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Best Time:</span> {item.timing}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">Details</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Fertilizer Schedule */}
          <Card>
            <CardHeader>
              <CardTitle>Fertilizer Schedule - Tomato</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { stage: "Basal", timing: "Before planting", fertilizer: "DAP 50kg + MOP 25kg", done: true },
                  { stage: "First Top Dress", timing: "25-30 days", fertilizer: "Urea 25kg", done: true },
                  { stage: "Second Top Dress", timing: "45-50 days", fertilizer: "Urea 25kg + MOP 25kg", done: false },
                  { stage: "Foliar Spray", timing: "Weekly", fertilizer: "Micronutrient mix", done: false },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                    {item.done ? (
                      <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0" />
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-muted-foreground flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{item.stage}</p>
                      <p className="text-sm text-muted-foreground">{item.fertilizer}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.timing}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Detection Tab */}
        <TabsContent value="detection" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-primary" />
                AI Pest & Disease Detection
              </CardTitle>
              <CardDescription>Upload a photo of your crop to identify issues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <p className="font-medium text-foreground mb-2">Drop your image here or click to upload</p>
                <p className="text-sm text-muted-foreground mb-4">Supports JPG, PNG up to 10MB</p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                  <Button variant="outline">
                    <Camera className="w-4 h-4 mr-2" />
                    Take Photo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Detections */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Detections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Camera className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No recent detections</p>
                <p className="text-sm">Upload a crop image to get started</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CropAdvisor;
