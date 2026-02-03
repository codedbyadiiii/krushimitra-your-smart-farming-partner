import { useState } from "react";
import { 
  Search, 
  Filter, 
  Plus, 
  MapPin, 
  Star, 
  Clock,
  ShoppingCart,
  Package,
  Truck,
  ChevronRight,
  Heart,
  Phone
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All", labelHi: "सभी" },
    { id: "vegetables", label: "Vegetables", labelHi: "सब्जियां" },
    { id: "fruits", label: "Fruits", labelHi: "फल" },
    { id: "grains", label: "Grains", labelHi: "अनाज" },
    { id: "pulses", label: "Pulses", labelHi: "दालें" },
  ];

  const products = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      nameHi: "ताज़े टमाटर",
      price: "₹45/kg",
      originalPrice: "₹55/kg",
      farmer: "Ramesh Patil",
      location: "Nashik, MH",
      rating: 4.8,
      reviews: 124,
      image: "🍅",
      organic: true,
      available: "500 kg",
      category: "vegetables",
    },
    {
      id: 2,
      name: "Premium Wheat",
      nameHi: "प्रीमियम गेहूं",
      price: "₹2,400/quintal",
      originalPrice: null,
      farmer: "Suresh Kumar",
      location: "Indore, MP",
      rating: 4.9,
      reviews: 89,
      image: "🌾",
      organic: false,
      available: "50 quintals",
      category: "grains",
    },
    {
      id: 3,
      name: "Alphonso Mangoes",
      nameHi: "अल्फांसो आम",
      price: "₹600/dozen",
      originalPrice: "₹750/dozen",
      farmer: "Prakash Deshmukh",
      location: "Ratnagiri, MH",
      rating: 4.9,
      reviews: 234,
      image: "🥭",
      organic: true,
      available: "200 dozen",
      category: "fruits",
    },
    {
      id: 4,
      name: "Red Onions",
      nameHi: "लाल प्याज",
      price: "₹32/kg",
      originalPrice: null,
      farmer: "Vijay Jadhav",
      location: "Lasalgaon, MH",
      rating: 4.6,
      reviews: 67,
      image: "🧅",
      organic: false,
      available: "2 tonnes",
      category: "vegetables",
    },
    {
      id: 5,
      name: "Toor Dal",
      nameHi: "तूर दाल",
      price: "₹145/kg",
      originalPrice: "₹160/kg",
      farmer: "Ganesh Reddy",
      location: "Gulbarga, KA",
      rating: 4.7,
      reviews: 156,
      image: "🫘",
      organic: true,
      available: "10 quintals",
      category: "pulses",
    },
    {
      id: 6,
      name: "Fresh Potatoes",
      nameHi: "ताज़े आलू",
      price: "₹28/kg",
      originalPrice: null,
      farmer: "Mohan Singh",
      location: "Agra, UP",
      rating: 4.5,
      reviews: 92,
      image: "🥔",
      organic: false,
      available: "3 tonnes",
      category: "vegetables",
    },
  ];

  const myListings = [
    {
      name: "Organic Tomatoes",
      status: "active",
      views: 234,
      inquiries: 12,
      price: "₹50/kg",
      stock: "200 kg",
    },
    {
      name: "Fresh Coriander",
      status: "active",
      views: 156,
      inquiries: 8,
      price: "₹30/bunch",
      stock: "100 bunches",
    },
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* Header with Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search vegetables, fruits, grains..." 
            className="pl-10 input-field"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button className="btn-primary-gradient gap-2">
            <Plus className="w-4 h-4" />
            Sell Product
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="browse" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="browse">Browse Market</TabsTrigger>
          <TabsTrigger value="my-listings">My Listings</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>

        {/* Browse Tab */}
        <TabsContent value="browse" className="space-y-6">
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                className={`flex-shrink-0 ${
                  activeCategory === cat.id ? "btn-primary-gradient" : ""
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="marketplace-card overflow-hidden">
                <div className="relative p-6 bg-muted/30 flex items-center justify-center">
                  <span className="text-7xl">{product.image}</span>
                  {product.organic && (
                    <Badge className="absolute top-3 left-3 bg-success text-primary-foreground">
                      Organic
                    </Badge>
                  )}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <CardContent className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.nameHi}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{product.farmer}</span>
                    <span>•</span>
                    <span>{product.location}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                    <Badge variant="outline">{product.available}</Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 gap-1">
                      <Phone className="w-4 h-4" />
                      Contact
                    </Button>
                    <Button size="sm" className="flex-1 gap-1 btn-primary-gradient">
                      <ShoppingCart className="w-4 h-4" />
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* My Listings Tab */}
        <TabsContent value="my-listings" className="space-y-6">
          <Card>
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>My Products</CardTitle>
              <Button size="sm" className="btn-primary-gradient gap-2">
                <Plus className="w-4 h-4" />
                Add New
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {myListings.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Package className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.price} • {item.stock} in stock
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-success text-primary-foreground mb-1">Active</Badge>
                    <p className="text-xs text-muted-foreground">
                      {item.views} views • {item.inquiries} inquiries
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Total Sales", value: "₹45,230", icon: ShoppingCart },
              { label: "Active Listings", value: "5", icon: Package },
              { label: "Total Views", value: "1,234", icon: Clock },
              { label: "Pending Orders", value: "3", icon: Truck },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Card key={idx}>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-xl font-bold text-foreground">{stat.value}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Orders Tab */}
        <TabsContent value="orders" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { 
                    id: "ORD-001", 
                    product: "Organic Tomatoes - 50kg", 
                    buyer: "Amit Sharma", 
                    amount: "₹2,500", 
                    status: "delivered" 
                  },
                  { 
                    id: "ORD-002", 
                    product: "Fresh Coriander - 30 bunches", 
                    buyer: "Priya Singh", 
                    amount: "₹900", 
                    status: "shipped" 
                  },
                  { 
                    id: "ORD-003", 
                    product: "Organic Tomatoes - 25kg", 
                    buyer: "Raj Patel", 
                    amount: "₹1,250", 
                    status: "pending" 
                  },
                ].map((order, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Truck className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{order.product}</p>
                        <p className="text-sm text-muted-foreground">
                          {order.id} • {order.buyer}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">{order.amount}</p>
                      <Badge 
                        variant="outline"
                        className={
                          order.status === "delivered" 
                            ? "bg-success/10 text-success border-success" 
                            : order.status === "shipped"
                            ? "bg-info/10 text-info border-info"
                            : "bg-warning/10 text-warning border-warning"
                        }
                      >
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Marketplace;
