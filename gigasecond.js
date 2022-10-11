//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const gigasecond = () => {
  const time = new Date().getTime() * 1000;

  const result = new Date(time + 1000000000);
  return result;
};

gigasecond();
