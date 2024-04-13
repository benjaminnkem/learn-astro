import { useRef, useState } from "react";
import Education from "./Education";
import Work from "./Work";
import gsap from "gsap";
import { TabHead } from "./Timeline";
import { useGSAP } from "@gsap/react";

export type Tab = "education" | "work";

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<Tab>("education");

  // hide work initially
  useGSAP(
    () => {
      gsap.set("#work", { display: "none" });
    },
    { scope: ref.current }
  );

  const activateTabAnim = (tab: Tab) => {
    gsap.context(() => {
      gsap
        .timeline()
        .to(tab === "work" ? "#education" : "#work", { opacity: 0 })
        .set(tab === "work" ? "#education" : "#work", { display: "none" })
        .set(tab === "work" ? "#work" : "#education", { display: "block" })
        .to(tab === "work" ? "#work" : "#education", { opacity: 1 });
    }, ref.current);
  };

  const updateTab = (tab: Tab) => {
    setTab(tab);
    activateTabAnim(tab);
  };

  return (
    <div className="-mt-52" ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#ffffe3"
          fillOpacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,160C384,149,480,75,576,80C672,85,768,171,864,202.7C960,235,1056,213,1152,202.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <section className="min-h-screen 2xl:h-auto bg-primary text-dark">
        {/* education */}
        <TabHead tab={tab} updateTab={updateTab} />

        <Education />
        <Work />

        {/* experience */}
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#ffffe3"
          fillOpacity="1"
          d="M0,256L34.3,261.3C68.6,267,137,277,206,240C274.3,203,343,117,411,101.3C480,85,549,139,617,138.7C685.7,139,754,85,823,74.7C891.4,64,960,96,1029,138.7C1097.1,181,1166,235,1234,256C1302.9,277,1371,267,1406,261.3L1440,256L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Experience;
