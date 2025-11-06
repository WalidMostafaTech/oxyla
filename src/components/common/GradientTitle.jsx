const GradientTitle = ({ title }) => {
  return (
    <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-b from-myGreen via-myBlue to-myPurple bg-clip-text text-transparent text-center mb-4 lg:mb-10">
      {title}
    </h3>
  );
};

export default GradientTitle;
