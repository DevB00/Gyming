function Program({ title = "Basic Fitness", program = "Lorem ipsum" }) {
  return (
    <div className="flex items-start mb-7">
      <img
        src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
        alt="First One"
        className="max-w-32 max-h-28"
      />
      <div className="ml-4">
        <h4 className="text-lg font-bold mb-2">{title}</h4>
        <p className="text-sm text-gray-500 font-medium mb-4 max-w-[250px]">{program}</p>
        <button className="text-orange-600 hover:text-orange-800 transition duration-150">
          Discover More
        </button>
      </div>
    </div>
  );
}

export default Program;
