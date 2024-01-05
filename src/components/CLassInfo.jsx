const classesList = {
  "First Training Class": {
    image:
      "https://themewagon.github.io/training-studio/assets/images/training-image-01.jpg",
    description: `
    Dynamic class focusing on foundational exercises for a well-rounded fitness experience. Suitable for all levels.
    `,
  },
  "Second Training Class": {
    image:
      "https://themewagon.github.io/training-studio/assets/images/training-image-02.jpg",
    description: `
    High-energy class with intense intervals to boost cardiovascular endurance and calorie burning. All fitness levels welcome.
    `,
  },
  "Third Training Class": {
    image:
      "https://themewagon.github.io/training-studio/assets/images/training-image-03.jpg",
    description: `
    Strength-focused class mastering essential movements like squat, bench press, and deadlift. Perfect for muscle gains.
    `,
  },
  "Fourth Training Class": {
    image:
      "https://themewagon.github.io/training-studio/assets/images/training-image-04.jpg",
    description: `
    Cardiovascular class incorporating running, cycling, and rowing to elevate heart rate and improve overall fitness. Suitable for everyone.
    `,
  },
};

function CLassInfo({ trainingClass }) {
  const image = classesList[trainingClass].image;
  const description = classesList[trainingClass].description;
  const name = trainingClass;
  return (
    <div className="flex flex-col items-start">
      <img src={image} alt="class" className="min-w-full" />
      <h1 className="text-2xl font-bold my-6">{name}</h1>
      <p className="text-sm text-gray-500 font-medium mb-4 max-w-[700px]">
        {description}
      </p>
    </div>
  );
}

export default CLassInfo;
