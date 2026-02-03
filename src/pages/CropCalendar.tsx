import { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Droplets, 
  Leaf, 
  Scissors,
  Sun,
  CloudRain,
  Sprout,
  Plus,
  Calendar as CalendarIcon
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CropCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const monthsHi = [
    "जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून",
    "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"
  ];

  const activities = [
    {
      date: "Feb 5",
      crop: "Tomato",
      cropHi: "टमाटर",
      activity: "Irrigation",
      activityHi: "सिंचाई",
      icon: Droplets,
      color: "bg-info",
      time: "6:00 AM",
    },
    {
      date: "Feb 7",
      crop: "Wheat",
      cropHi: "गेहूं",
      activity: "Fertilizer Application",
      activityHi: "खाद देना",
      icon: Leaf,
      color: "bg-success",
      time: "Morning",
    },
    {
      date: "Feb 10",
      crop: "Onion",
      cropHi: "प्याज",
      activity: "Weeding",
      activityHi: "निराई",
      icon: Scissors,
      color: "bg-warning",
      time: "All Day",
    },
    {
      date: "Feb 15",
      crop: "Tomato",
      cropHi: "टमाटर",
      activity: "Pesticide Spray",
      activityHi: "कीटनाशक छिड़काव",
      icon: CloudRain,
      color: "bg-secondary",
      time: "Evening",
    },
    {
      date: "Feb 20",
      crop: "Chilli",
      cropHi: "मिर्च",
      activity: "Transplanting",
      activityHi: "रोपाई",
      icon: Sprout,
      color: "bg-primary",
      time: "Morning",
    },
  ];

  const seasonalCrops = [
    {
      season: "Rabi (रबी)",
      period: "Oct - Mar",
      crops: [
        { name: "Wheat", nameHi: "गेहूं", status: "active" },
        { name: "Chickpea", nameHi: "चना", status: "sowing" },
        { name: "Mustard", nameHi: "सरसों", status: "active" },
      ],
    },
    {
      season: "Kharif (खरीफ)",
      period: "Jun - Oct",
      crops: [
        { name: "Rice", nameHi: "धान", status: "upcoming" },
        { name: "Cotton", nameHi: "कपास", status: "upcoming" },
        { name: "Soybean", nameHi: "सोयाबीन", status: "upcoming" },
      ],
    },
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  // Sample activity dates for calendar highlighting
  const activityDates = [5, 7, 10, 15, 20];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h2>
          <p className="text-sm text-muted-foreground">
            {monthsHi[currentMonth.getMonth()]}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="w-4 h-4" />
          </Button>
          <Button className="btn-primary-gradient gap-2">
            <Plus className="w-4 h-4" />
            Add Activity
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Calendar Grid */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-4">
              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {emptyDays.map((_, idx) => (
                  <div key={`empty-${idx}`} className="aspect-square" />
                ))}
                {days.map((day) => {
                  const hasActivity = activityDates.includes(day);
                  const isToday = day === 3 && currentMonth.getMonth() === 1;
                  
                  return (
                    <div
                      key={day}
                      className={`aspect-square flex flex-col items-center justify-center rounded-lg cursor-pointer transition-colors ${
                        isToday 
                          ? "bg-primary text-primary-foreground font-bold" 
                          : hasActivity
                          ? "bg-primary/10 hover:bg-primary/20"
                          : "hover:bg-muted"
                      }`}
                    >
                      <span className="text-sm">{day}</span>
                      {hasActivity && !isToday && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-0.5" />
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Seasonal Crops */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-accent" />
                Seasonal Crop Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {seasonalCrops.map((season, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-muted/30">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold text-foreground">{season.season}</p>
                      <p className="text-sm text-muted-foreground">{season.period}</p>
                    </div>
                    <Badge variant="outline">{season.crops.length} crops</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {season.crops.map((crop, cropIdx) => (
                      <Badge 
                        key={cropIdx}
                        variant="outline"
                        className={
                          crop.status === "active" 
                            ? "bg-success/10 text-success border-success"
                            : crop.status === "sowing"
                            ? "bg-warning/10 text-warning border-warning"
                            : "bg-muted"
                        }
                      >
                        {crop.name} ({crop.nameHi})
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Activities */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-primary" />
                Upcoming Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {activities.map((activity, idx) => {
                const Icon = activity.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg ${activity.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-foreground truncate">{activity.activity}</p>
                          <span className="text-xs text-muted-foreground ml-2">{activity.date}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{activity.activityHi}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {activity.crop}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Weather Impact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Climate Advisory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 rounded-xl bg-warning/10 border border-warning/20">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="w-5 h-5 text-warning" />
                  <span className="font-medium text-foreground">Heat Wave Alert</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Delay irrigation to early morning hours. Consider shade nets for young transplants.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CropCalendar;
