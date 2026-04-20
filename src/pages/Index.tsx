import { useState, useEffect } from "react";
import { Phone, MessageCircle, MapPin, Leaf, Clock, Sparkles, Pizza, Sandwich, Coffee, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
const PHONE = "+917898265977";
const WHATSAPP_URL = `https://wa.me/917898265977?text=${encodeURIComponent("Hi! I'd like to place an order from DND Cafeteria 🍔")}`;

const MENU_CATEGORIES = [
  {
    category: "PIZZAS",
    icon: Pizza,
    items: [
      { name: "Single Topping Pizza", price: "₹90", desc: "(Onion, Capsicum, Tomato, Corn)" },
      { name: "Always Pizza", price: "₹130" },
      { name: "Double Topping Pizza", price: "₹120" },
      { name: "Always Paneer Pizza", price: "₹150", desc: "(Onion, Capsicum, Tomato, Corn, Paneer)" },
    ]
  },
  {
    category: "BURGER",
    icon: Sandwich,
    items: [
      { name: "Aloo Tikki Burger", price: "₹50" },
      { name: "Special Burger", price: "₹60" },
      { name: "Cheese Slice Burger", price: "₹70" },
      { name: "Paneer Tikka Burger", price: "₹80" },
    ]
  },
  {
    category: "SANDWICH",
    icon: Sandwich,
    items: [
      { name: "Veg Butter Sandwich", price: "₹50" },
      { name: "Cheese Slice Sandwich", price: "₹70" },
      { name: "Cheese Corn Sandwich", price: "₹70" },
      { name: "Paneer Tikka Sandwich", price: "₹80" },
    ]
  },
  {
    category: "ROLLS",
    icon: Sandwich,
    items: [
      { name: "Veg Roll", price: "₹50" },
      { name: "Cheese Roll", price: "₹70" },
      { name: "Paneer Roll", price: "₹80" },
      { name: "Paneer Wrap", price: "₹150" },
    ]
  },
  {
    category: "PASTAS",
    icon: Leaf,
    items: [
      { name: "White Sauce Pasta", price: "₹99" },
      { name: "Red Sauce Pasta", price: "₹109" },
      { name: "Mix Sauce Pasta", price: "₹120" },
    ]
  },
  {
    category: "SHAKES",
    icon: Coffee,
    items: [
      { name: "Cold Coffee", price: "₹60" },
      { name: "Butter Scotch Shake", price: "₹60" },
      { name: "Strawberry Shake", price: "₹60" },
      { name: "Pineapple Shake", price: "₹60" },
      { name: "Black Shake", price: "₹60" },
      { name: "Mango Shake", price: "₹60" },
      { name: "Banana Shake", price: "₹60" },
      { name: "Litchi Shake", price: "₹60" },
    ]
  }
];

const REVIEWS = [
  { name: "Bhavesh Pal", time: "7 months ago", text: "Very nice survise", rating: 5, meta: "1 review" },
  { name: "Ravi Singh", time: "7 months ago", text: "Very good", rating: 5, meta: "2 reviews · 6 photos" },
  { name: "Laxmi bagel Baghel", time: "4 months ago", text: "Breakfast", rating: 5, meta: "" },
  { name: "Kundan singh Sharma", time: "7 months ago", text: "Good Food & Service!", rating: 5, meta: "" },
  { name: "Siddhant Goel", time: "7 months ago", text: "Excellent experience, highly recommended!", rating: 5, meta: "Local Guide · 19 reviews · 20 photos" }
];

const Index = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2500);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-4 z-50 mx-auto max-w-4xl px-4 md:px-0 mb-8">
        <div className="backdrop-blur-xl bg-background/80 border border-border shadow-lg rounded-full flex items-center justify-between h-16 px-4 sm:px-6 transition-all duration-300 relative">

          {/* Left - Logo */}
          <div className="flex items-center gap-2 z-10">
            <img src="/logo.png" alt="DND Logo" className="h-10 w-10 object-cover rounded-full shadow-sm" />
            <span className="text-xl sm:text-2xl font-bold text-gradient tracking-wider">DND</span>
          </div>

          {/* Center - Links */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-6 md:gap-8">
            <a href="#menu" className="font-semibold text-sm text-foreground/90 hover:text-primary transition-colors">Menu</a>
            <a href="#order" className="font-semibold text-sm text-foreground/90 hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Right - Call Button */}
          <div className="flex items-center gap-2 z-10">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Call</span>
            </a>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, hsl(45 100% 55% / 0.25), transparent 40%), radial-gradient(circle at 80% 60%, hsl(18 95% 55% / 0.25), transparent 45%)",
          }}
        />
        <div className="container text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/40 text-green-400 text-xs font-semibold mb-6 animate-fade-up">
            <Leaf className="w-3.5 h-3.5" />
            ONLY VEG · 100% Pure Vegetarian
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-up">
            Welcome to <br />
            <span className="text-gradient">DND Cafeteria 🍔</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-3 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Fresh, Tasty &amp; Affordable Street Food
          </p>
          <p className="text-sm text-primary font-medium mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            ✨ Order now for fresh and quick service
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-base font-bold bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp))]/90 text-white animate-pulse-glow"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href={`tel:${PHONE}`}>
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Floating food emojis */}
          <div className="flex items-center justify-center gap-6 md:gap-10 mt-14 text-4xl md:text-6xl">
            <span className="animate-float" style={{ animationDelay: "0s" }}>🍕</span>
            <span className="animate-float" style={{ animationDelay: "0.4s" }}>🍔</span>
            <span className="animate-float" style={{ animationDelay: "0.8s" }}>🥪</span>
            <span className="animate-float" style={{ animationDelay: "1.2s" }}>🌯</span>
            <span className="animate-float hidden sm:inline" style={{ animationDelay: "1.6s" }}>🥤</span>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container grid grid-cols-2 md:grid-cols-4 gap-4 -mt-8 mb-16">
        {[
          { icon: Leaf, label: "100% Veg", color: "text-green-400" },
          { icon: Sparkles, label: "Fresh Daily", color: "text-primary" },
          { icon: Clock, label: "Quick Service", color: "text-secondary" },
          { icon: MapPin, label: "Galleria-1", color: "text-primary" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-xl p-4 text-center shadow-card hover:scale-105 hover:border-primary/50 transition-all"
          >
            <item.icon className={`w-6 h-6 mx-auto mb-2 ${item.color}`} />
            <p className="text-sm font-semibold">{item.label}</p>
          </div>
        ))}
      </section>

      {/* MENU */}
      <section id="menu" className="container py-12 md:py-20">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/40 text-green-400 text-xs font-semibold mb-4">
            <Leaf className="w-3.5 h-3.5" />
            100% PURE VEGETARIAN
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-3">
            Our <span className="text-gradient">Menu</span>
          </h2>
          <p className="text-muted-foreground text-lg">Freshly prepared, just for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {MENU_CATEGORIES.map((cat, i) => (
            <div key={i} className="bg-card border border-border/60 rounded-3xl p-6 shadow-card hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col group/card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-10 -mt-10 transition-all group-hover/card:bg-primary/10"></div>

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-md">
                  <cat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground/90">{cat.category}</h3>
              </div>

              <div className="flex-1 flex flex-col gap-5 relative z-10">
                {cat.items.map((item, j) => (
                  <div key={j} className="flex flex-col group/item cursor-default">
                    <div className="flex items-end justify-between gap-3">
                      <span className="font-semibold text-[15px] text-foreground/80 group-hover/item:text-primary transition-colors">{item.name}</span>
                      <div className="flex-1 border-b border-dashed border-border/80 mb-1.5 mx-1 opacity-50 group-hover/item:border-primary/40 transition-colors"></div>
                      <span className="font-bold text-primary whitespace-nowrap">{item.price}</span>
                    </div>
                    {item.desc && (
                      <span className="text-xs text-muted-foreground/70 mt-1.5 max-w-[85%] leading-relaxed font-medium">{item.desc}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ORDER */}
      <section id="order" className="container py-12 md:py-20">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-card to-muted border border-primary/30 rounded-3xl p-8 md:p-12 text-center shadow-card">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--whatsapp))]/20 mb-5">
            <MessageCircle className="w-8 h-8 text-[hsl(var(--whatsapp))]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Hungry? <span className="text-gradient">Order Now!</span>
          </h2>
          <p className="text-muted-foreground mb-2">Quick WhatsApp ordering · Fresh & hot delivery</p>
          <p className="text-primary font-semibold text-lg mb-8">📞 +91 78982 65977</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 font-bold bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp))]/90 text-white"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 font-bold">
              <a href={`tel:${PHONE}`}>
                <Phone className="w-5 h-5" />
                Call to Order
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="container py-12 md:py-20 border-t border-border/20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-600 dark:text-yellow-400 text-xs font-semibold mb-4">
            <Star className="w-3.5 h-3.5 fill-current" />
            GOOGLE REVIEWS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Loved by our <span className="text-gradient">Customers</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">See what people are saying about us</p>
        </div>

        <div className="max-w-7xl mx-auto px-1 md:px-12 relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 mt-1 pb-4">
              {REVIEWS.map((review, i) => (
                <CarouselItem key={i} className="pl-3 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="h-full bg-card border border-border/60 rounded-2xl p-6 shadow-card hover:border-primary/40 hover:-translate-y-1 transition-all flex flex-col gap-4 group relative overflow-hidden select-none">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 blur-3xl rounded-full -mr-10 -mt-10 transition-all group-hover:bg-yellow-500/10"></div>
                    <div className="flex gap-1 text-yellow-500 relative z-10">
                      {[...Array(review.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-foreground/90 text-[15px] font-medium leading-snug group-hover:text-primary transition-colors relative z-10 whitespace-normal">"{review.text}"</p>
                    <div className="mt-auto pt-4 border-t border-border/50 flex flex-col relative z-10">
                      <span className="font-bold text-sm">{review.name}</span>
                      <span className="text-xs text-muted-foreground font-medium mt-1">{review.time}</span>
                      {review.meta && (
                         <span className="text-[10px] text-muted-foreground/70 uppercase tracking-widest mt-1">{review.meta}</span>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-6 xl:-left-12" />
              <CarouselNext className="-right-6 xl:-right-12" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border mt-10">
        <div className="container py-10 text-center">
          <div className="text-2xl font-bold text-gradient mb-2">DND CAFETERIA</div>
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1.5 mb-1">
            <MapPin className="w-4 h-4 text-primary" /> Address - Galleria-1
          </p>
          <p className="text-muted-foreground text-sm mb-4">📞 +91 78982 65977</p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} DND Cafeteria · Only Veg 🌱</p>
        </div>
      </footer>

      {/* STICKY WHATSAPP */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-[hsl(var(--whatsapp))] text-white font-bold px-5 py-3.5 rounded-full glow-whatsapp animate-pulse-glow hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">Order Now</span>
      </a>


    </div>
  );
};

export default Index;
