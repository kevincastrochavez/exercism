const gigasecond = (year, month, day) => {
  const gigasecond = new Date(Date.UTC(year, month, day)).getTime();
  const newDate = new Date(gigasecond + 1000000000000);

  return newDate;
};

gigasecond(2011, 3, 25);
gigasecond(1977, 5, 13);
gigasecond(1959, 6, 19);
gigasecond(2015, 0, 24, 22, 0, 0);
gigasecond(2015, 0, 24, 23, 59, 59);
