import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import MaterialSymbolsImageRounded from "../../../Common/Icons/image-rounded.icon";
import classNames from "classnames";

const DontKnowYet = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {}, []);

  const triggerTextAnim = () => {
    gsap
      .timeline()
      .from(".text_cant", { opacity: 0, y: "20%", delay: 0.3, stagger: 0.2 })
      .from("#dontknow_img", { opacity: 0 });
  };

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "top top",
          // toggleActions: "none none none none",
          scrub: 1,
          onEnter: triggerTextAnim,
        },
      });
    },
    { scope: ref }
  );

  return (
    <section
      className={classNames([
        "min-h-screen pt-40 pb-64 2xl:h-auto 2xl:py-40 relative",
        "before:absolute before:top-0 before:left-0 before:w-full before:h-[10rem] before:content-[''] before:bg-gradient-to-b before:from-dark",
        "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[10rem] after:content-[''] after:bg-gradient-to-t after:from-dark -z-[1]",
      ])}
      ref={ref}
    >
      <img
        src="/svgs/block-pattern.svg"
        alt="pattern"
        width={1000}
        height={800}
        className="absolute top-0 left-0 w-full h-full object-cover -z-[2]"
      />

      <div className="container items-center h-full grid grid-cols-2 gap-10">
        <div id="text-part">
          <h3 className="font-anton uppercase text-[4rem] text_cant">can't think of a text now.</h3>
          <div className="space-y-4">
            <p className="opacity-90 text_cant">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, eaque recusandae. Ducimus, quasi provident
              laborum quos iste vero! adipisicing elit. In, eaque recusandae. Ducimus, quasi provident laborum quos iste
            </p>
            <p className="opacity-90 text_cant">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, eaque recusandae. Ducimus, quasi provident
              laborum quos iste vero! adipisicing elit. In, eaque recusandae. Ducimus, quasi provident laborum quos iste
            </p>
          </div>
        </div>
        <div className="aspect-square border border-zinc-600 rounded-xl grid place-content-center" id="dontknow_img">
          <MaterialSymbolsImageRounded size={100} className="opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default DontKnowYet;
