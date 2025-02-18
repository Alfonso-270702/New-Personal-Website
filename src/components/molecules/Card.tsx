interface Card {
  duration: string;
  title: string;
  place: string;
  jobDescription?: string[];
  applications?: string;
  techStacks?: string;
  description?: string;
}

const Card = ({
  duration,
  title,
  place,
  jobDescription = [],
  applications,
  techStacks,
  description,
}: Card) => {
  return (
    <div className="flex flex-col gap-[28px]">
      <p className="text-[#D3D9D4] text-[20px]">{duration}</p>
      <div>
        <p className="text-[36px] font-medium">{title}</p>
        <p className="text-[32px] text-[#50849C]">@{place}</p>
      </div>
      {jobDescription.length > 0 ? (
        <div className="pl-[28px]">
          <ul className="list-disc list-outside text-[20px]">
            {jobDescription.map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-[20px]">{description}</p>
      )}
      {applications && (
        <div>
          <p className="text-[#D3D9D4] text-[18px]">APPLICATIONS</p>
          <p className="text-[20px] font-medium">{applications}</p>
        </div>
      )}
      {techStacks && (
        <div>
          <p className="text-[#D3D9D4] text-[18px]">TECH STACKS</p>
          <p className="text-[20px] font-medium">{techStacks}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
