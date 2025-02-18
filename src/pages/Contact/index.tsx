import ProfileCard from "../../components/atoms/ProfileCard";
import {
  contactInfo,
  contactData,
  profileData,
} from "../../static/profileData";
import ContactIcon from "../../components/atoms/ContactIcon";

const Contact = () => {
  return (
    <div className="flex mt-[100px] ml-[100px] px-[36px] pt-[36px] pb-[10px] w-full overflow-hidden gap-[60px]">
      <ProfileCard
        containerClass="flex flex-col w-[30%] h-full"
        isButton={false}
        profileName={profileData.name}
        description={profileData.desc}
        imgStyle="w-full h-[60%] object-cover"
        profileDescStyle="text-[18px] text-justify"
        profileNameStyle="text-[46px] font-bold"
      />

      <div className="w-[70%]">
        <p className="text-[64px] font-bold">GET CONNECTED</p>
        {contactInfo.map((item, index) => (
          <ContactIcon
            text={contactData[item as keyof typeof contactData].text}
            containerClass={
              contactData[item as keyof typeof contactData].containerClass
            }
            image={contactData[item as keyof typeof contactData].icon}
            key={index}
            imageStyle={
              contactData[item as keyof typeof contactData].imageStyle
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
