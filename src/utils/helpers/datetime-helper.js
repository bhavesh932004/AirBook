function compareTime(timeStringA, timeStringB) {
  let dateTimeA = new Date(timeStringA),
    dateTimeB = new Date(timeStringB);

  return dateTimeA.getTime() > dateTimeB.getTime();
}

module.exports = {
  compareTime,
};
