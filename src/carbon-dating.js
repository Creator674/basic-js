const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(SA) {
  if(typeof SA == "string"){
    let number = parseFloat(SA);
    if(MODERN_ACTIVITY > number && number > 0){
      return Math.ceil(Math.log(MODERN_ACTIVITY / number) * HALF_LIFE_PERIOD/0.693);
    }
  }
  return false;
};
