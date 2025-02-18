import Title from "../../components/atoms/Title";
import Card from "../../components/molecules/Card";

import { educations } from "../../static/aboutData";

const Education = () => {
  return (
    <div className="h-full overflow-y-auto">
      <Title
        title="EDUCATION"
        redirectText="EXPERIENCE"
        redirectURL="/about/experience"
      />
      <div className="w-full grid grid-cols-2 gap-4">
        {educations.map((education, index) => (
          <Card
            description={education.description}
            duration={education.duration}
            title={education.title}
            place={education.place}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
