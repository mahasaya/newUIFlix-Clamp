import { HiCurrencyPound } from "react-icons/hi2";
import { FaTruck } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import imageOne from "../../public/Sldier-Images/top-cat-hp-summer-tech.webp"
import imageTwo from "../../public/Sldier-Images/2.webp"
import imageThree from "../../public/Sldier-Images/3.webp"
import imageFour from "../../public/Sldier-Images/4.webp"
import imageFive from "../../public/Sldier-Images/5.webp"
import imageSix from "../../public/Sldier-Images/6.webp"
import imageSeven from "../../public/Sldier-Images/7.webp"
import imageEight from "../../public/Sldier-Images/8.webp"
import imageNine from "../../public/Sldier-Images/9.webp"
import imageTen from "../../public/Sldier-Images/10.webp"
import imageEleven from "../../public/Sldier-Images/11.webp"
import imageTwelve from "../../public/Sldier-Images/12.webp"
import productImg from "../../public/img-feature-big.jpg"
import secProductImg from "../../public/img-product-small.jpg"
import bannerPhoneImg from "../../public/Product-Images/phone-banner.webp"
import bannerSecPhoneImg from "../../public/Product-Images/phone-banner-2.webp"
import laptopPhoneImg from "../../public/Product-Images/lap-banner.webp"
import laptopSecPhoneImg from "../../public/Product-Images/lap-banner-2.webp"
import tvImg from "../../public/Product-Images/tv-banner.webp"



export const bannerNav = ["kitchen appliances","small appliances","tv & entertainment","computing","phones"]
export const highlightBarData = [
    {
        Icon : <HiCurrencyPound size={30} color="#41e886"/>,
        textPrim :"Price Promise",
        textSecondary:"always get the best price"
    },
        {
        Icon : <FaTruck size={30} color="#41e886"/>,
        textPrim :"free delivery",
        textSecondary:"on 1000's of products"
    },
        {
        Icon : <FaPiggyBank size={30} color="#41e886"/>,
        textPrim :"flexi pay",
        textSecondary:"spread the cost with finance"
    },
        {
        Icon : <FaVideo size={30} color="#41e886"/>,
        textPrim :"shop live",
        textSecondary:"video call an expert to help you shop"
    }
]

export const SliderProductData =[
    {
        img:imageOne,
        label : "summer tech"
    },
    {
        img:imageTwo,
        label : "TVs",
        tag:"tv-&-entertainment/tv"
    },
    {
        img:imageThree,
        label : "laptops",
        tag:"/computing/laptops"
    },    
    {
        img:imageFour,
        label : "mobile phones",
        tag:"phones/phones"
    },
    {
        img:imageFive,
        label : "washing machines"
    },
    {
        img:imageSix,
        label : "smart watched"
    },
    {
        img:imageSeven,
        label : "vaccume cleaners"
    },
    {
        img:imageEight,
        label : "iPads,tablet & eReaders"
    },
    {
        img:imageNine,
        label : "digital cameras"
    },
    {
        img:imageTen,
        label : "fridge freezers"
    },
    {
        img:imageEleven,
        label : "console gaming"
    },
    {
        img:imageTwelve,
        label : "headphones"
    },
]

export const ProductRecommendation=[
    {
        id:1,
        name:'Product name/model, title',
        img:productImg,
        price:"£199.00",
        save:"50.00",
    },
    {
        id:2,
        name:'Product name/model, title',
       img:productImg,
        price:"£299.00",
        save:"30.00",
    },    
    {
        id:3,
        name:'Product name/model, title',
        img:productImg,
        price:"£499.00",
        save:"40.00",
    },
    {
        id:4,
        name:'Product name/model, title',
        img:productImg,
        price:"£699.00",
        save:"50.00",
    },
    {
        id:5,
        name:'Product name/model, title',
       img:productImg,
        price:"£699.00",
        
    },
    {
        id:6,
        name:'Product name/model, title',
        img:productImg,
        price:"£699.00",
        
    },
    {
        id:7,
        name:'Product name/model, title',
        img:productImg,
        price:"£699.00",
        
    }
]

export const ProductDetails = [
    {
        tag:"phones",
        details:[
            {
                id:1,
                name:"Product name/model, title",
                img:productImg,
                emi:
                    {
                        price:"£699.00",
                        save:"50.00",
                        text:"From £28.32 per month for 36 months*",
                        offers:"Get an extra £100 when you trade-in any eligible working Products name or later and buy a New iPhone 16",
                        banner:[bannerPhoneImg,bannerSecPhoneImg]
                    }
                ,
                description:['iOS 18','Apple Intelligence','6.1" Super Retina HDR display','Dual 48 MP / 12 MP main cameras' , '12 MP front camera']
            }
        ]
    },
    {
        tag:"laptops",
        details:[
            {
                id:1,
                name:'Product name/model, title ',
                img:productImg,
                secImg:secProductImg,
                emi:
                    {
                        price:"£499.00",
                        save:"300.00",
                        text:"From £12.32 per month for 48 months*",
                        offers:"FREE next day delivery on this product",
                        banner:[laptopPhoneImg,laptopSecPhoneImg ]
                    }
                ,
                description:['Windows 11','Intel® Evo™ platform','Intel® Core™ i5-13500H Processor','RAM:8 GB / Storage: 512 GB SSD' , '2.2K screen']
            }
        ]
    },
        {
        tag:"tv",
        details:[
            {
                id:1,
                name:'Product name/model, title',
                img:productImg,
                secImg:secProductImg,
                emi:
                    {
                        price:"£1,079.00",
                        save:"300.00",
                        text:"From £43.37 per month for 36 months*",
                        offers:"Get £50 off the LG US20A 2.0 Compact Sound Bar when bought with any TV. Use code US20A50.",
                        banner:[tvImg]
                    }
                ,
                description:['Advanced OLED α9 AI processor with AI Super Upscaling','LG SELF-LIT OLED evo for extraordinary detail and contrast','HDMI 2.1 x 4','5 year guarantee' , 'LG’s webOS gives you easy access to all your must-have apps']
            }
        ]
    }
]