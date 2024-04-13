import type { Tab } from "./Index";
import { DataBox, Space } from "./Timeline";

type Props = {};

const Work: React.FC<Props> = ({}) => {
  return (
    <div>
      <div className="space-y-10 py-10 2xl:py-40" id="work">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-6 right-[50%] border-dark/50 h-[110%] border"></div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <DataBox heading="Freelancing" place="Upwkork, Fiverr, and more." date="2021 - Date" />

            <Space />

            <DataBox heading="Frontend Engineer (Intern)" place="Pancokrato Inc." date="2023 - 2024" side="right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
