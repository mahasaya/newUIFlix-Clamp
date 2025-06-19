import { HiCurrencyPound } from "react-icons/hi2";
import { FaTruck } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import imageOne from "../../public/Sldier-Images/top-cat-hp-summer-tech.webp";
import imageTwo from "../../public/Sldier-Images/2.webp";
import imageThree from "../../public/Sldier-Images/3.webp";
import imageFour from "../../public/Sldier-Images/4.webp";
import imageFive from "../../public/Sldier-Images/5.webp";
import imageSix from "../../public/Sldier-Images/6.webp";
import imageSeven from "../../public/Sldier-Images/7.webp";
import imageEight from "../../public/Sldier-Images/8.webp";
import imageNine from "../../public/Sldier-Images/9.webp";
import imageTen from "../../public/Sldier-Images/10.webp";
import imageEleven from "../../public/Sldier-Images/11.webp";
import imageTwelve from "../../public/Sldier-Images/12.webp";
import productImg from "../../public/img-feature-big.jpg";
import secProductImg from "../../public/img-product-small.jpg";
import bannerPhoneImg from "../../public/Product-Images/phone-banner.webp";
import bannerSecPhoneImg from "../../public/Product-Images/phone-banner-2.webp";
import laptopPhoneImg from "../../public/Product-Images/lap-banner.webp";
import laptopSecPhoneImg from "../../public/Product-Images/lap-banner-2.webp";
import tvImg from "../../public/Product-Images/tv-banner.webp";

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
  {
    img: imageOne,
    label: "summer tech",
    tag: "small-appliances/summer-tech",
  },
  {
    img: imageTwo,
    label: "TVs",
    tag: "tv-&-entertainment/tv",
  },
  {
    img: imageThree,
    label: "laptops",
    tag: "computing/laptops",
  },
  {
    img: imageFour,
    label: "mobile phones",
    tag: "phones/phones",
  },
  {
    img: imageFive,
    label: "washing machines",
    tag: "kitchen-appliances/washing-machines",
  },
  {
    img: imageSix,
    label: "smart watches",
    tag: "small-appliances/smart-watches",
  },
  {
    img: imageSeven,
    label: "vaccume cleaners",
    tag: "kitchen-appliances/vaccume-cleaners",
  },
  {
    img: imageEight,
    label: "iPads,tablet & eReaders",
    tag: "phones/tabs",
  },
  {
    img: imageNine,
    label: "digital cameras",
    tag: "small-appliances/digital-cameras",
  },
  {
    img: imageTen,
    label: "fridge freezers",
    tag: "kitchen-appliances/fridge-freezers",
  },
  {
    img: imageEleven,
    label: "console gaming",
    tag: "/tv-&-entertainment/console-gaming",
  },
  {
    img: imageTwelve,
    label: "headphones",
    tag: "small-appliances/headphones",
  },
];

export const ProductRecommendation = [
  {
    id: 1,
    name: "Product name/model, title",
    img: productImg,
    price: "£199.00",
    save: "50.00",
  },
  {
    id: 2,
    name: "Product name/model, title",
    img: productImg,
    price: "£299.00",
    save: "30.00",
  },
  {
    id: 3,
    name: "Product name/model, title",
    img: productImg,
    price: "£499.00",
    save: "40.00",
  },
  {
    id: 4,
    name: "Product name/model, title",
    img: productImg,
    price: "£699.00",
    save: "50.00",
  },
  {
    id: 5,
    name: "Product name/model, title",
    img: productImg,
    price: "£699.00",
  },
  {
    id: 6,
    name: "Product name/model, title",
    img: productImg,
    price: "£699.00",
  },
  {
    id: 7,
    name: "Product name/model, title",
    img: productImg,
    price: "£699.00",
  },
];

export const ProductDetails = [
  {
    tag: "phones",
    details: [
      {
        id: 1,
        name: "iPhone 16 Pro",
        img: productImg,
        emi: {
          price: "£699.00",
          save: "50.00",
          text: "From £28.32 per month for 36 months*",
          offers:
            "Get an extra £100 when you trade-in any eligible working iPhone model",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "iOS 18",
          "Apple Intelligence",
          '6.1" Super Retina HDR display',
          "Dual 48 MP / 12 MP main cameras",
          "12 MP front camera",
        ],
      },
    ],
  },
  {
    tag: "laptops",
    details: [
      {
        id: 1,
        name: "Dell XPS 13",
        img: productImg,
        secImg: secProductImg,
        emi: {
          price: "£499.00",
          save: "300.00",
          text: "From £12.32 per month for 48 months*",
          offers: "FREE next day delivery on this product",
          banner: [laptopPhoneImg, laptopSecPhoneImg],
        },
        description: [
          "Windows 11",
          "Intel® Evo™ platform",
          "Intel® Core™ i5-13500H Processor",
          "RAM:8 GB / Storage: 512 GB SSD",
          "2.2K screen",
        ],
      },
    ],
  },
  {
    tag: "tv",
    details: [
      {
        id: 1,
        name: "LG OLED C3",
        img: productImg,
        secImg: secProductImg,
        emi: {
          price: "£1,079.00",
          save: "300.00",
          text: "From £43.37 per month for 36 months*",
          offers:
            "Get £50 off the LG US20A 2.0 Compact Sound Bar when bought with any TV. Use code US20A50.",
          banner: [tvImg],
        },
        description: [
          "Advanced OLED α9 AI processor with AI Super Upscaling",
          "LG SELF-LIT OLED evo",
          "HDMI 2.1 x 4",
          "5 year guarantee",
          "LG’s webOS with top streaming apps",
        ],
      },
    ],
  },
  {
    tag: "summer-tech",
    details: [
      {
        id: 1,
        name: "Portable Air Cooler X200",
        img: productImg,
        emi: {
          price: "£149.00",
          save: "20.00",
          text: "From £6.21 per month for 24 months*",
          offers: "Perfect for beating the summer heat",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "3-speed cooling",
          "Water tank: 4.5L",
          "Remote control included",
          "Energy efficient design",
          "Portable and lightweight",
        ],
      },
    ],
  },
  {
    tag: "washing-machines",
    details: [
      {
        id: 1,
        name: "Samsung EcoBubble 9kg",
        img: productImg,
        emi: {
          price: "£429.00",
          save: "70.00",
          text: "From £17.87 per month for 24 months*",
          offers: "Free installation & recycling",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "9kg capacity",
          "Digital Inverter Motor",
          "15-minute quick wash",
          "EcoBubble™ technology",
          "SmartThings app compatible",
        ],
      },
    ],
  },
  {
    tag: "smart-watches",
    details: [
      {
        id: 1,
        name: "Galaxy Watch 6",
        img: productImg,
        emi: {
          price: "£249.00",
          save: "30.00",
          text: "From £10.37 per month for 24 months*",
          offers: "Free strap with purchase",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "Heart rate & sleep tracking",
          "GPS & fitness features",
          "1.4-inch AMOLED display",
          "Bluetooth + LTE",
          "Water resistant",
        ],
      },
    ],
  },
  {
    tag: "vaccume-cleaners",
    details: [
      {
        id: 1,
        name: "Dyson V15 Detect",
        img: productImg,
        emi: {
          price: "£599.00",
          save: "100.00",
          text: "From £24.95 per month for 24 months*",
          offers: "Comes with 3-year warranty",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "Laser reveals microscopic dust",
          "Run time: 60 mins",
          "Advanced filtration",
          "Digital display",
          "Powerful suction",
        ],
      },
    ],
  },
  {
    tag: "fridge-freezers",
    details: [
      {
        id: 1,
        name: "LG InstaView Door-in-Door",
        img: productImg,
        emi: {
          price: "£1,299.00",
          save: "200.00",
          text: "From £54.12 per month for 24 months*",
          offers: "Free delivery & old appliance removal",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "Capacity: 635L",
          "DoorCooling+ & LINEAR Cooling™",
          "Smart Diagnosis™",
          "Inverter Linear Compressor",
          "Frost-free technology",
        ],
      },
    ],
  },
  {
    tag: "digital-cameras",
    details: [
      {
        id: 1,
        name: "Canon EOS R50 Mirrorless Camera",
        img: productImg,
        emi: {
          price: "£749.00",
          save: "100.00",
          text: "From £31.21 per month for 24 months*",
          offers: "Free memory card & camera bag included",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "24.2MP APS-C CMOS Sensor",
          "4K 30p Video Recording",
          "Dual Pixel CMOS AF II",
          "Compact & Lightweight Design",
          "Built-in Wi-Fi and Bluetooth",
        ],
      },
    ],
  },
  {
    tag: "console-gaming",
    details: [
      {
        id: 1,
        name: "PlayStation 5",
        img: productImg,
        emi: {
          price: "£479.00",
          save: "20.00",
          text: "From £19.95 per month for 24 months*",
          offers: "Includes free game bundle",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "825GB SSD",
          "4K gaming support",
          "DualSense Wireless Controller",
          "Ray tracing technology",
          "Haptic feedback & adaptive triggers",
        ],
      },
    ],
  },
  {
    tag: "headphones",
    details: [
      {
        id: 1,
        name: "Sony WH-1000XM5",
        img: productImg,
        emi: {
          price: "£349.00",
          save: "50.00",
          text: "From £14.54 per month for 24 months*",
          offers: "Noise Cancelling King - Free case included",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "Industry-leading noise cancellation",
          "Up to 30 hours battery life",
          "Multipoint connection",
          "Speak-to-Chat feature",
          "Lightweight design",
        ],
      },
    ],
  },
];
