import type { Tab } from "./Index";

export type Box = { heading: string; place: string; date: string; side?: "right" | "left" };

export const DataBox: React.FC<Box> = ({ heading, date, place, side = "left" }) => {
  return (
    <div className={`border-dark/40 px-8 min-h-[10rem] min-w-[15rem] rounded-lg ${side === "left" && "text-right"}`}>
      <div className="space-y-2">
        <h4 className="font-bold text-lg">{heading}</h4>
        <div>
          <p className="text-gray-600">{place}</p>
          <p className="text-gray-500">{date}</p>
        </div>
      </div>
    </div>
  );
};

export const Space = () => (
  <>
    <div className="min-w-[10rem] min-h-[10rem]"></div>
    <div className="min-w-[10rem] min-h-[10rem]"></div>
  </>
);

export const TabHead: React.FC<{ updateTab: (tab: Tab) => void; tab: Tab }> = ({ updateTab, tab }) => {
  return (
    <h3 className="font-anton text-6xl text-center uppercase flex gap-2 justify-center items-end">
      <span
        className={`cursor-pointer duration-300 border-b-2 border-dashed ${
          tab === "work" ? "text-sm border-secondaryPurple" : "border-transparent"
        }`}
        onClick={() => updateTab("education")}
        title={tab === "work" ? "Show education" : ""}
      >
        EDUCATION
      </span>
      <span
        className={`duration-300 cursor-pointer border-b-2 border-dashed ${
          tab === "education" ? "text-sm border-secondaryPurple" : "border-transparent"
        }`}
        onClick={() => updateTab("work")}
        title={tab === "education" ? "Show work" : ""}
      >
        WORK
      </span>
    </h3>
  );
};
