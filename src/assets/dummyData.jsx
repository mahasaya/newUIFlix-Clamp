import { HiCurrencyPound } from "react-icons/hi2";
import { FaTruck, FaPiggyBank, FaVideo } from "react-icons/fa";

export const bannerNav = [
  "kitchen appliances",
  "small appliances",
  "tv & entertainment",
  "computing",
  "phones",
];

export const highlightBarData = [
  {
    Icon: <HiCurrencyPound size={30} color="#41e886" />,
    textPrim: "Price Promise",
    textSecondary: "always get the best price",
  },
  {
    Icon: <FaTruck size={30} color="#41e886" />,
    textPrim: "free delivery",
    textSecondary: "on 1000's of products",
  },
  {
    Icon: <FaPiggyBank size={30} color="#41e886" />,
    textPrim: "flexi pay",
    textSecondary: "spread the cost with finance",
  },
  {
    Icon: <FaVideo size={30} color="#41e886" />,
    textPrim: "shop live",
    textSecondary: "video call an expert to help you shop",
  },
];

export const SliderProductData = [
  { img: "/Sldier-Images/top-cat-hp-summer-tech.webp", label: "summer tech", tag: "small-appliances/summer-tech" },
  { img: "/Sldier-Images/2.webp", label: "TVs", tag: "tv-&-entertainment/tv" },
  { img: "/Sldier-Images/3.webp", label: "laptops", tag: "computing/laptops" },
  { img: "/Sldier-Images/4.webp", label: "mobile phones", tag: "phones/phones" },
  { img: "/Sldier-Images/5.webp", label: "washing machines", tag: "kitchen-appliances/washing-machines" },
  { img: "/Sldier-Images/6.webp", label: "smart watches", tag: "small-appliances/smart-watches" },
  { img: "/Sldier-Images/7.webp", label: "vaccume cleaners", tag: "kitchen-appliances/vaccume-cleaners" },
  { img: "/Sldier-Images/8.webp", label: "iPads,tablet & eReaders", tag: "phones/tabs" },
  { img: "/Sldier-Images/9.webp", label: "digital cameras", tag: "small-appliances/digital-cameras" },
  { img: "/Sldier-Images/10.webp", label: "fridge freezers", tag: "kitchen-appliances/fridge-freezers" },
  { img: "/Sldier-Images/11.webp", label: "console gaming", tag: "/tv-&-entertainment/console-gaming" },
  { img: "/Sldier-Images/12.webp", label: "headphones", tag: "small-appliances/headphones" },
];

export const ProductRecommendation = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  name: "Product name/model, title",
  img: "/img-feature-big.jpg",
  price: "£699.00",
  ...(i < 4 && { save: ["50.00", "30.00", "40.00", "50.00"][i] }),
}));

const sharedBanner = ["/Product-Images/phone-banner.webp", "/Product-Images/phone-banner-2.webp"];

export const ProductDetails = [
  {
    tag: "phones",
    details: [{
      id: 1,
      name: "iPhone 16 Pro",
      img: "/img-feature-big.jpg",
      emi: {
        price: "£699.00",
        save: "50.00",
        text: "From £28.32 per month for 36 months*",
        offers: "Get an extra £100 when you trade-in any eligible working iPhone model",
        banner: sharedBanner,
      },
      description: [
        "iOS 18", "Apple Intelligence", '6.1" Super Retina HDR display',
        "Dual 48 MP / 12 MP main cameras", "12 MP front camera",
      ],
    }],
  },
  {
    tag: "laptops",
    details: [{
      id: 1,
      name: "Dell XPS 13",
      img: "/img-feature-big.jpg",
      secImg: "/img-product-small.jpg",
      emi: {
        price: "£499.00",
        save: "300.00",
        text: "From £12.32 per month for 48 months*",
        offers: "FREE next day delivery on this product",
        banner: ["/Product-Images/lap-banner.webp", "/Product-Images/lap-banner-2.webp"],
      },
      description: [
        "Windows 11", "Intel® Evo™ platform", "Intel® Core™ i5-13500H Processor",
        "RAM:8 GB / Storage: 512 GB SSD", "2.2K screen",
      ],
    }],
  },
  {
    tag: "tv",
    details: [{
      id: 1,
      name: "LG OLED C3",
      img: "/img-feature-big.jpg",
      secImg: "/img-product-small.jpg",
      emi: {
        price: "£1,079.00",
        save: "300.00",
        text: "From £43.37 per month for 36 months*",
        offers: "Get £50 off the LG US20A 2.0 Compact Sound Bar when bought with any TV. Use code US20A50.",
        banner: ["/Product-Images/tv-banner.webp"],
      },
      description: [
        "Advanced OLED α9 AI processor with AI Super Upscaling",
        "LG SELF-LIT OLED evo", "HDMI 2.1 x 4", "5 year guarantee",
        "LG’s webOS with top streaming apps",
      ],
    }],
  },
  {
    tag: "summer-tech",
    details: [{
      id: 1,
      name: "Portable Air Cooler X200",
      img: "/img-feature-big.jpg",
      emi: {
        price: "£149.00",
        save: "20.00",
        text: "From £6.21 per month for 24 months*",
        offers: "Perfect for beating the summer heat",
        banner: sharedBanner,
      },
      description: [
        "3-speed cooling", "Water tank: 4.5L", "Remote control included",
        "Energy efficient design", "Portable and lightweight",
      ],
    }],
  },
  {
    tag: "washing-machines",
    details: [{
      id: 1,
      name: "Samsung EcoBubble 9kg",
      img: "/img-feature-big.jpg",
      emi: {
        price: "£429.00",
        save: "70.00",
        text: "From £17.87 per month for 24 months*",
        offers: "Free installation & recycling",
        banner: sharedBanner,
      },
      description: [
        "9kg capacity", "Digital Inverter Motor", "15-minute quick wash",
        "EcoBubble™ technology", "SmartThings app compatible",
      ],
    }],
  },
  {
    tag: "smart-watches",
    details: [{
      id: 1,
      name: "Galaxy Watch 6",
      img: "/img-feature-big.jpg",
      emi: {
        price: "£249.00",
        save: "30.00",
        text: "From £10.37 per month for 24 months*",
        offers: "Free strap with purchase",
        banner: sharedBanner,
      },
      description: [
        "Heart rate & sleep tracking", "GPS & fitness features",
        "1.4-inch AMOLED display", "Bluetooth + LTE", "Water resistant",
      ],
    }],
  },
  {
    tag: "vaccume-cleaners",
    details: [{
      id: 1,
      name: "Dyson V15 Detect",
      img: "/img-feature-big.jpg",
      emi: {
        price: "£599.00",
        save: "100.00",
        text: "From £24.95 per month for 24 months*",
        offers: "Comes with 3-year warranty",
        banner: sharedBanner,
      },
      description: [
        "Laser reveals microscopic dust", "Run time: 60 mins",
        "Advanced filtration", "Digital display", "Powerful suction",
      ],
    }],
  },
  {
    tag: "fridge-freezers",
    details: [{
      id: 1,
      name: "LG InstaView Door-in-Door",
      img: "/img-feature-big.jpg",
      emi: {
        price: "£1,299.00",
        save: "200.00",
        text: "From £54.12 per month for 24 months*",
        offers: "Free delivery & old appliance removal",
        banner: sharedBanner,
      },
      description: [
        "Capacity: 635L", "DoorCooling+ & LINEAR Cooling™",
        "Smart Diagnosis™", "Inverter Linear Compressor", "Frost-free technology",
      ],
    }],
  },
  {
    tag: "digital-cameras",
    details: [{
      id: 1,
      name: "Canon EOS R50 Mirrorless Camera",
      img: "/img-feature-big.jpg",
      emi: {
        price: "£749.00",
        save: "100.00",
        text: "From £31.21 per month for 24 months*",
        offers: "Free memory card & camera bag included",
        banner: sharedBanner,
      },
      description: [
        "24.2MP APS-C CMOS Sensor", "4K 30p Video Recording",
        "Dual Pixel CMOS AF II", "Compact & Lightweight Design",
        "Built-in Wi-Fi and Bluetooth",
      ],
    }],
  },
  {
    tag: "console-gaming",
    details: [{
      id: 1,
      name: "PlayStation 5",
      img: "/img-feature-big.jpg",
      emi: {
        price: "£479.00",
        save: "20.00",
        text: "From £19.95 per month for 24 months*",
        offers: "Includes free game bundle",
        banner: sharedBanner,
      },
      description: [
        "825GB SSD", "4K gaming support", "DualSense Wireless Controller",
        "Ray tracing technology", "Haptic feedback & adaptive triggers",
      ],
    }],
  },
  {
    tag: "headphones",
    details: [{
      id: 1,
      name: "Sony WH-1000XM5",
      img: "/img-feature-big.jpg",
      emi: {
        price: "£349.00",
        save: "50.00",
        text: "From £14.54 per month for 24 months*",
        offers: "Noise Cancelling King - Free case included",
        banner: sharedBanner,
      },
      description: [
        "Industry-leading noise cancellation", "Up to 30 hours battery life",
        "Multipoint connection", "Speak-to-Chat feature", "Lightweight design",
      ],
    }],
  },
];
