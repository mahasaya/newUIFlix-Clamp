import React, { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams, useLocation, useNavigationType } from "react-router-dom";
import { useSelector } from "react-redux";

import { ProductDetails, ProductRecommendation } from "../../assets/dummyData";
import Product_Card from "../Common/Product_Card";
import SliderContainer from "../Core/Home/SliderContainer";
import Product_Recommendation_Card from "./Product_Recommendation_Card";
import CTAButtons from "./CTAButtons";
import { fliXScript } from "../../assets/script";
import useFetchUrl from "../Hooks/useFetchUrl";

const Products = () => {
  const { tag } = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigationType = useNavigationType();

  const flixInpageRef = useRef(null);
  const miniRef = useRef(null);

  const [showFlixDiv, setShowFlixDiv] = useState(false);
  const [productImg, setProductImg] = useState();
  const [prod_Name, setProdName] = useState();
  const [flixHeight, setFlixHeight] = useState("");
  const [maxHeight, setMaxHeight] = useState("350px");

  const global_variable = useSelector((state) => state.flixParams.global_variable);

  const distributor = searchParams.get("distId");

  const focusDiv = () => {
    miniRef.current?.focus();
    miniRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    console.log("this ran");
  };

  const content = distributor === "2298" ? (
    <div
      id="flix-embed-block"
      ref={miniRef}
      style={{ outline: "none" }}
      className="flix_retailer_width_2298"
    >
      <div data-flix-embed-meta="review_stars"></div>
      <div data-flix-embed-meta="product_info"></div>
      <div data-flix-embed-meta="main_video"></div>
      <div data-flix-embed-meta="videos"></div>
      <div data-flix-embed-meta="360view"></div>
      <div data-flix-embed-meta="images"></div>
      <div data-flix-embed-meta="features"></div>
      <div data-flix-embed-meta="specifications"></div>
      <div data-flix-embed-meta="documents"></div>
      <div data-flix-embed-meta="reviews"></div>
      <div data-flix-embed-meta="complimentary"></div>
    </div>
  ) : (
    <>
      <div id="flix-minisite"></div>
      <div
        ref={miniRef}
        style={{ outline: "none" }}
        tabIndex={-1}
        id="flix-inpage"
      ></div>
    </>
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showFlixDiv) {
      const timer = setTimeout(() => {
        setMaxHeight(`${flixHeight + 9000}px`);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setMaxHeight("350px");
    }
  }, [showFlixDiv, flixHeight]);

  useEffect(() => {
    const language = searchParams.get("iso");
    const product_mpn = searchParams.get("mpn");
    const product_ean = searchParams.get("ean");
    const product_brand = searchParams.get("brand");
    const live = searchParams.get("live");
    if (flixInpageRef.current && live && distributor && language && (product_mpn || product_ean)) {
      fliXScript({
        distributor,
        language,
        product_mpn,
        product_ean,
        product_brand,
        live,
      });
      
    } else {
      console.warn("Missing necessary query params for FlixScript");
    }

    useFetchUrl(setProductImg, setProdName);

    return () => {
      if (typeof window.flixJsCallbacks?.reset === "function") {
        window.flixJsCallbacks.reset();
      }

      const existingScript = document.getElementById("flix-script");
      if (existingScript) existingScript.remove();

      setProductImg(null);
    };
  }, [searchParams]);

  useEffect(() => {
    if (miniRef) {
      const observer = new MutationObserver(() => {
        const secondChild = flixInpageRef.current?.children?.[1];
        if (secondChild) {
          console.log(secondChild.offsetHeight);
          setFlixHeight(secondChild.offsetHeight);
        }
      });

      if (flixInpageRef.current) {
        observer.observe(flixInpageRef.current, {
          childList: true,
          subtree: true,
        });

        const secondChild = flixInpageRef.current.children[1];
        if (secondChild) {
          console.log(secondChild.offsetHeight);
          setFlixHeight(secondChild.offsetHeight);
        }
      }

      return () => observer.disconnect();
    }
  }, [miniRef?.current?.offsetHeight]);

  const product = ProductDetails.find((e) => e?.tag === tag);

  // if (!productImg?.length) {
  //   return (
  //     <div className="w-full text-white h-screen flex items-center justify-center">
  //       <div className="spinner"></div>
  //     </div>
  //   );
  // }

  return (
    <div className="w-full h-full bg-[#f2f2f2]">
      {product?.details.map((data, index) => (
        <div key={index}>
          <Product_Card
            productName={prod_Name}
            img={productImg}
            tag={product?.tag}
            details={data}
          />
        </div>
      ))}

      {/* INFORMATION CONTAINER */}
      <div className="w-[90%] mx-auto flex flex-col gap-5 p-6 rounded-[7px] relative border border-[#cdd8df] bg-white mb-6">
        <span className="text-[18px] leading-[22px]">Product Information</span>

        <div className="flex flex-col gap-3.5">
          <span className="text-[14px] text-[#213038]">Product Code : 456789</span>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic
            sapiente quidem totam debitis! Eum illo sed libero, impedit repellendus
            placeat cumque iure perferendis earum autem hic inventore maxime
            distinctio? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates error dolorem earum saepe perferendis amet in dolorum, ut
            voluptatum commodi.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-[14px] text-[#213038] font-semibold">Good to know</span>
          <p className="text-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
            quisquam! Molestiae autem accusamus praesentium odit optio eum
            consectetur assumenda? Nam tempora voluptate sint eveniet rem ratione qui
            amet itaque quasi?
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-[14px] text-[#213038] font-semibold">What we love</span>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptates
            consequuntur quidem ratione numquam porro, dolores, vero ipsum a accusamus
            qui ipsam, nostrum quisquam quam non. Architecto dolorum distinctio
            quisquam.
          </p>
        </div>

        <div className="w-full mx-auto absolute flex justify-center -bottom-5 self-center">
          <div className="w-[20%] min-w-[200px]">
            <CTAButtons
              outline={false}
              text={showFlixDiv ? "View Less" : "View More"}
              btnFunction={() => {
                setShowFlixDiv(!showFlixDiv);
                if (!showFlixDiv) focusDiv();
              }}
            />
          </div>
        </div>

        <div
          className="transition-all duration-600 ease-in-out overflow-hidden"
          style={{ maxHeight }}
          ref={flixInpageRef}
          id="flix-Div"
        >
          {content}
        </div>
      </div>

      {/* PRODUCT RECOMMENDATION SLIDER */}
      <SliderContainer SliderData={ProductRecommendation} Card={Product_Recommendation_Card} />
    </div>
  );
};

export default Products;
