interface ContactIconProps {
  text: string;
  containerClass?: string;
  image: string;
  imageStyle?: string;
}

const ContactIcon = ({
  text,
  containerClass,
  image,
  imageStyle,
}: ContactIconProps) => {
  return (
    <div className={containerClass}>
      <img className={imageStyle} src={image} alt="github img" />
      <p className="text-white">{text}</p>
    </div>
  );
};

export default ContactIcon;
