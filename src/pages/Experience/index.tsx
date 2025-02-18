import Title from "../../components/atoms/Title";
import Card from "../../components/molecules/Card";

import { experiences } from "../../static/aboutData";

const Experience = () => {
  return (
    <div className="h-full overflow-y-auto">
      <Title
        title="EXPERIENCE"
        redirectText="EDUCATION"
        redirectURL="/about/education"
      />
      <div className="w-full grid grid-cols-2 gap-4">
        {experiences.map((experience, index) => (
          <Card
            jobDescription={experience.jobDescription}
            duration={experience.duration}
            title={experience.title}
            place={experience.place}
            applications={experience.applications}
            techStacks={experience.techStacks}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
