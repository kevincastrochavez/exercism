//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const gigasecond = () => {
  const gigasecond =
    new Date(Date.UTC(2011, 3, 25)).getTime() + 3600 * 6 * 1000;
  const newDate = new Date(gigasecond + 1000000000000);

  return newDate;
};

gigasecond();
