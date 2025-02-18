import AlfonsoImg from "../../assets/alfonso.png";

interface ProfileCardProps {
  containerClass?: string;
  profileName: string;
  description: string;
  isButton?: boolean;
  buttonFunction?: () => void;
  buttonContent?: string;
  imgStyle?: string;
  profileNameStyle?: string;
  profileDescStyle?: string;
}

const ProfileCard = ({
  containerClass,
  profileName,
  description,
  isButton,
  buttonFunction = () => {},
  buttonContent,
  imgStyle,
  profileNameStyle,
  profileDescStyle,
}: ProfileCardProps) => {
  return (
    <div className={containerClass}>
      <img className={imgStyle} src={AlfonsoImg} alt="alfonso img" />
      <div className="mt-[20px]">
        <p className={profileNameStyle}>{profileName}</p>
        <p className={profileDescStyle}>{description}</p>
      </div>
      {isButton && (
        <button
          className="w-[224px] border-1 border-white mt-[20px] py-[10px] cursor-pointer"
          onClick={() => buttonFunction()}
        >
          {buttonContent}
        </button>
      )}
    </div>
  );
};

export default ProfileCard;
