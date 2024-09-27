const IconCard = ({ imageSrc, altText, title }) => (
    <div className="flex flex-col items-center">
      <img src={imageSrc} alt={altText} className="cursor-pointer " />
      <p className="text-sm mt-2">
        <b>{title}</b>
      </p>
    </div>
  );

export default IconCard