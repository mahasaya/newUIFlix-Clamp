import { HiCurrencyPound } from "react-icons/hi2";
import { FaTruck } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";


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
        img:"public/Sldier-Images/top-cat-hp-summer-tech.webp",
        label : "summer tech"
    },
    {
        img:"public/Sldier-Images/2.webp",
        label : "TVs",
        tag:"tv-&-entertainment/tv"
    },
    {
        img:"public/Sldier-Images/3.webp",
        label : "laptops",
        tag:"/computing/laptops"
    },    
    {
        img:"public/Sldier-Images/4.webp",
        label : "mobile phones",
        tag:"phones/phones"
    },
    {
        img:"public/Sldier-Images/5.webp",
        label : "washing machines"
    },
    {
        img:"public/Sldier-Images/6.webp",
        label : "smart watched"
    },
    {
        img:"public/Sldier-Images/7.webp",
        label : "vaccume cleaners"
    },
    {
        img:"public/Sldier-Images/8.webp",
        label : "iPads,tablet & eReaders"
    },
    {
        img:"public/Sldier-Images/9.webp",
        label : "digital cameras"
    },
    {
        img:"public/Sldier-Images/10.webp",
        label : "fridge freezers"
    },
    {
        img:"public/Sldier-Images/11.webp",
        label : "console gaming"
    },
    {
        img:"public/Sldier-Images/12.webp",
        label : "headphones"
    },
]

export const ProductRecommendation=[
    {
        id:1,
        name:'Product name/model, title',
        img:"public/img-feature-big.jpg",
        price:"£199.00",
        save:"50.00",
    },
    {
        id:2,
        name:'Product name/model, title',
        img:"public/img-feature-big.jpg",
        price:"£299.00",
        save:"30.00",
    },    
    {
        id:3,
        name:'Product name/model, title',
        img:"public/img-feature-big.jpg",
        price:"£499.00",
        save:"40.00",
    },
    {
        id:4,
        name:'Product name/model, title',
        img:"public/img-feature-big.jpg",
        price:"£699.00",
        save:"50.00",
    },
    {
        id:5,
        name:'Product name/model, title',
        img:"public/img-feature-big.jpg",
        price:"£699.00",
        
    },
    {
        id:6,
        name:'Product name/model, title',
        img:"public/img-feature-big.jpg",
        price:"£699.00",
        
    },
    {
        id:7,
        name:'Product name/model, title',
        img:"public/img-feature-big.jpg",
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
                img:"public/img-feature-big.jpg",
                emi:
                    {
                        price:"£699.00",
                        save:"50.00",
                        text:"From £28.32 per month for 36 months*",
                        offers:"Get an extra £100 when you trade-in any eligible working Products name or later and buy a New iPhone 16",
                        banner:["/public/Product-Images/phone-banner.webp","/public/Product-Images/phone-banner-2.webp"]
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
                img:"public/img-feature-big.jpg",
                secImg:"public/img-product-small.jpg",
                emi:
                    {
                        price:"£499.00",
                        save:"300.00",
                        text:"From £12.32 per month for 48 months*",
                        offers:"FREE next day delivery on this product",
                        banner:["/public/Product-Images/lap-banner.webp","/public/Product-Images/lap-banner-2.webp"]
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
                img:"public/img-feature-big.jpg",
                secImg:"public/img-product-small.jpg",
                emi:
                    {
                        price:"£1,079.00",
                        save:"300.00",
                        text:"From £43.37 per month for 36 months*",
                        offers:"Get £50 off the LG US20A 2.0 Compact Sound Bar when bought with any TV. Use code US20A50.",
                        banner:["/public/Product-Images/tv-banner.webp"]
                    }
                ,
                description:['Advanced OLED α9 AI processor with AI Super Upscaling','LG SELF-LIT OLED evo for extraordinary detail and contrast','HDMI 2.1 x 4','5 year guarantee' , 'LG’s webOS gives you easy access to all your must-have apps']
            }
        ]
    }
]