import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import MaterialSymbolsImageRounded from "../../../Common/Icons/image-rounded.icon";

const DontKnowYet = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {}, []);

  const triggerTextAnim = () => {
    gsap.from(".text_cant", { opacity: 0, y: "20%", delay: 0.3, stagger: 0.2 });
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
    <section className="h-screen 2xl:h-auto 2xl:py-40" ref={ref}>
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
        <div className="aspect-square border border-zinc-600 rounded-xl grid place-content-center">
          <MaterialSymbolsImageRounded size={100} className="opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default DontKnowYet;
