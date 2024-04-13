import type { Tab } from "./Index";
import { DataBox, Space, TabHead } from "./Timeline";

type Props = {};

const Education: React.FC<Props> = ({}) => {
  return (
    <div>
      <div className=" space-y-10 py-10 2xl:py-40" id="education">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-6 right-[50%] border-dark/50 h-[110%] border"></div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <DataBox
              heading="Bachelor's Degree in Computer Science"
              place="Federal University of Agriculture, ABK"
              date="2022 - Date"
            />

            <Space />

            <DataBox heading="Fullstack Web Development" place="Udemy" date="2020" side="right" />
            <DataBox heading="High School Diploma" place="DFSSS" date="2018 - 2021" />

            {/* <Left
              heading="Meta Frontend Developer"
              place="Coursera"
              date="20"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
