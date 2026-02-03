import { 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  IndianRupee,
  Calendar,
  Users,
  ChevronRight,
  Search,
  Filter
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Schemes = () => {
  const schemes = [
    {
      name: "PM-KISAN",
      nameHi: "प्रधानमंत्री किसान सम्मान निधि",
      benefit: "₹6,000/year",
      description: "Direct income support of ₹6,000 per year to farmer families in three equal installments.",
      eligibility: "All land-holding farmers",
      deadline: "Ongoing",
      status: "active",
      applied: true,
    },
    {
      name: "PM Fasal Bima Yojana",
      nameHi: "प्रधानमंत्री फसल बीमा योजना",
      benefit: "Crop Insurance",
      description: "Comprehensive crop insurance against natural calamities, pests and diseases.",
      eligibility: "All farmers growing notified crops",
      deadline: "Before sowing",
      status: "active",
      applied: false,
    },
    {
      name: "Kisan Credit Card",
      nameHi: "किसान क्रेडिट कार्ड",
      benefit: "₹3L Loan @ 4%",
      description: "Credit facility for farmers to meet agricultural and other needs at low interest rates.",
      eligibility: "All farmers, tenant farmers",
      deadline: "Ongoing",
      status: "active",
      applied: false,
    },
    {
      name: "Soil Health Card Scheme",
      nameHi: "मृदा स्वास्थ्य कार्ड योजना",
      benefit: "Free Soil Testing",
      description: "Free soil testing and nutrient-based recommendations for farmers.",
      eligibility: "All farmers",
      deadline: "Ongoing",
      status: "active",
      applied: true,
    },
    {
      name: "PM Krishi Sinchai Yojana",
      nameHi: "प्रधानमंत्री कृषि सिंचाई योजना",
      benefit: "55-90% Subsidy",
      description: "Subsidy on micro-irrigation systems like drip and sprinkler irrigation.",
      eligibility: "All farmers",
      deadline: "Mar 31, 2025",
      status: "closing",
      applied: false,
    },
    {
      name: "National Mission on Oilseeds",
      nameHi: "राष्ट्रीय तिलहन मिशन",
      benefit: "₹4,000/ha Subsidy",
      description: "Support for oilseed cultivation including certified seeds and equipment.",
      eligibility: "Farmers growing oilseeds",
      deadline: "Feb 28, 2025",
      status: "closing",
      applied: false,
    },
  ];

  const myApplications = [
    {
      scheme: "PM-KISAN",
      status: "approved",
      amount: "₹6,000/year",
      lastPayment: "Dec 2024",
      nextPayment: "Mar 2025",
    },
    {
      scheme: "Soil Health Card",
      status: "completed",
      details: "Card issued",
      testDate: "Jan 2025",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search schemes..." 
            className="pl-10 input-field"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filter by Category
        </Button>
      </div>

      {/* My Applications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-success" />
            My Applications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {myApplications.map((app, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-success/10 border border-success/20">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-success flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{app.scheme}</p>
                  <p className="text-sm text-muted-foreground">
                    {app.status === "approved" 
                      ? `Last: ${app.lastPayment} • Next: ${app.nextPayment}`
                      : `${app.details} • ${app.testDate}`
                    }
                  </p>
                </div>
              </div>
              <div className="text-right">
                {app.amount && (
                  <p className="font-bold text-success">{app.amount}</p>
                )}
                <Badge className="bg-success text-primary-foreground">
                  {app.status === "approved" ? "Active" : "Completed"}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Available Schemes */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Available Government Schemes</h2>
        <div className="grid gap-4">
          {schemes.map((scheme, idx) => (
            <Card key={idx} className={scheme.status === "closing" ? "border-warning/50" : ""}>
              <CardContent className="p-5">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-foreground">{scheme.name}</h3>
                          {scheme.applied && (
                            <Badge className="bg-success text-primary-foreground text-xs">Applied</Badge>
                          )}
                          {scheme.status === "closing" && (
                            <Badge variant="outline" className="bg-warning/10 text-warning border-warning text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              Closing Soon
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{scheme.nameHi}</p>
                      </div>
                      <div className="text-right hidden sm:block">
                        <p className="text-xl font-bold text-primary">{scheme.benefit}</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">{scheme.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{scheme.eligibility}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Deadline: {scheme.deadline}</span>
                      </div>
                    </div>

                    <p className="text-xl font-bold text-primary mt-3 sm:hidden">{scheme.benefit}</p>
                  </div>

                  <div className="flex gap-2 lg:flex-col">
                    <Button 
                      variant={scheme.applied ? "outline" : "default"}
                      className={scheme.applied ? "" : "btn-primary-gradient"}
                      disabled={scheme.applied}
                    >
                      {scheme.applied ? "Applied" : "Apply Now"}
                    </Button>
                    <Button variant="outline" size="icon">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
              <FileText className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">Need Help with Applications?</h3>
              <p className="text-sm text-muted-foreground">
                Visit your nearest Common Service Centre (CSC) or call the Kisan Call Center at 1800-180-1551 for assistance.
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              Find CSC <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Schemes;
