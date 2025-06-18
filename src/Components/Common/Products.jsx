import React, { useEffect, useRef, useState } from "react";
import { ProductDetails } from "../../assets/dummyData";
import { useParams, useSearchParams } from "react-router-dom";
import Product_Card from "../Common/Product_Card";
import SliderContainer from "../Core/Home/SliderContainer";
import { ProductRecommendation } from "../../assets/dummyData";
import Product_Recommendation_Card from "./Product_Recommendation_Card";
import CTAButtons from "./CTAButtons";
import { fliXScript } from "../../assets/script";
import { useLocation } from "react-router-dom";
const Products = () => {
  const { tag } = useParams();
  const [searchParams] = useSearchParams();
  const flixInpageRef = useRef();
  const [showFlixDiv, setShowFlixDiv] = useState(false);
  const location = useLocation();
  const [flixHeight, setFlixHeight] = useState("")
  // const [spinner , setSpinner] = useState(true)
  useEffect(() => {
    window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      // Page was restored from bfcache
      window.location.reload(); // Force reload from server
    }
  });
  }, [location.key]);

  useEffect(() => {
    const distributor = searchParams.get("distId");
    const language = searchParams.get("iso");
    const product_mpn = searchParams.get("mpn");
    const product_ean = searchParams.get("ean");
    const product_brand = searchParams.get("brand");
    const live = searchParams.get("live")
    const flixDiv = flixInpageRef.current;
    if (live && distributor && language && (product_mpn || product_ean)) {
      fliXScript({
        distributor,
        language,
        product_mpn,
        product_ean,
        product_brand,
        live
      });
    } else {
      console.warn("Missing necessary query params for FlixScript");
    }

    if (flixDiv && flixDiv.children.length === 0) {
      const flixMini = document.createElement("div");
      flixMini.id = "flix-minisite";

      const flixInpage = document.createElement("div");
      flixInpage.id = "flix-inpage";

      flixDiv.appendChild(flixMini);
      flixDiv.appendChild(flixInpage);
    }

    return () => {
      if (typeof window.flixJsCallbacks?.reset === "function") {
        window.flixJsCallbacks.reset();
      }
      localStorage.clear();
      sessionStorage.clear();
      const existingScript = document.getElementById("flix-script");
      if (existingScript) existingScript.remove();
    };

    // setSpinner(false)
  }, [searchParams]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const secondChild = flixInpageRef.current?.children?.[1];
      if (secondChild) {
        setFlixHeight(secondChild.offsetHeight);
      }
    });

    if (flixInpageRef.current) {
      observer.observe(flixInpageRef.current, {
        childList: true,
        subtree: true,
      });

      // Initial check
      const secondChild = flixInpageRef.current.children[1];
      if (secondChild) {
        setFlixHeight(secondChild.offsetHeight);
      }
    }

    return () => observer.disconnect();
  }, []);


  // Re-run Flix script on route changes (including browser back/forward)
  // useEffect(() => {
  //   const distributor = searchParams.get("distId");
  //   const language = searchParams.get("iso");
  //   const product_mpn = searchParams.get("mpn");
  //   const product_ean = searchParams.get("ean");
  //   const product_brand = searchParams.get("brand");

  //   if (distributor && language && (product_mpn || product_ean)) {
  //     fliXScript({ distributor, language, product_mpn, product_ean, product_brand });
  //   }

  //   return () => {
  //     if (typeof window.flixJsCallbacks?.reset === 'function') {
  //       window.flixJsCallbacks.reset();
  //     }

  //     const existingScript = document.getElementById("flix-script");
  //     if (existingScript) existingScript.remove();
  //   };
  // }, [location.key]);

  const product = ProductDetails.find((e) => e?.tag === tag);
  // if(spinner){
  // return<div className='spinner'>

  // </div>
  // }
  return (
    <div className="w-full h-full bg-[#f2f2f2]">
      {product?.details.map((data, index) => (
        <div key={index}>
          <Product_Card tag={product?.tag} details={data} />
        </div>
      ))}

      {/* INFORMATION-CONTIANER */}
      <div className="w-[90%] mx-auto flex flex-col gap-5 p-6 rounded-[7px] relative border border-[#cdd8df] bg-white mb-6">
        <span className="text-[18px] leading-[22px]">Product Information</span>
        <div className="flex flex-col gap-3.5">
          <span className="text-[14px] text-[#213038]">
            Product Code : 456789
          </span>
          <p className="text-[14px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            hic sapiente quidem totam debitis! Eum illo sed libero, impedit
            repellendus placeat cumque iure perferendis earum autem hic
            inventore maxime distinctio? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates error dolorem earum saepe perferendis
            amet in dolorum, ut voluptatum commodi. Aperiam harum, deserunt
            animi reiciendis corporis ratione sequi fugiat exercitationem.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[14px] text-[#213038] font-semibold">
            Good to know
          </span>
          <p className="text-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
            quisquam! Molestiae autem accusamus praesentium odit optio eum
            consectetur assumenda? Nam tempora voluptate sint eveniet rem
            ratione qui amet itaque quasi?
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[14px] text-[#213038] font-semibold">
            What we love
          </span>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptates consequuntur quidem ratione numquam porro, dolores, vero
            ipsum a accusamus qui ipsam, nostrum quisquam quam non. Architecto
            dolorum distinctio quisquam.
          </p>
        </div>

        <div className="w-full mx-auto absolute flex justify-center -bottom-5 self-center">
          <div className="w-[20%] min-w-[200px]">
            <CTAButtons
              outline={false}
              text={showFlixDiv ? "View Less":"View More"}
              btnFunction={() => setShowFlixDiv(!showFlixDiv)}
            />
          </div>
        </div>
        <div
          className={`
            transition-all duration-600 ease-in-out 
            overflow-hidden
          `}
          style={{ maxHeight: showFlixDiv ? `${flixHeight + 300}px` : "350px" }}
          ref={flixInpageRef}
          id="flix-Div"
        >
          <div id="flix-minisite"></div>

          <div id="flix-inpage"></div>
        </div>
      </div>

      {/* PRODUCT_SLIDER_CARD */}
      <SliderContainer
        SliderData={ProductRecommendation}
        Card={Product_Recommendation_Card}
      />
    </div>
  );
};

export default Products;
