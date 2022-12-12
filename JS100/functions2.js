//Note that formula requires a height in meters, but the function takes the height in centimeters (1 meter is equivalent to 100 centimeters).

function calculateBMI(heightInCentimeters, weightInKilograms) {
  let heightInMeters = heightInCentimeters / 100;
  let bmi = weightInKilograms / heightInMeters**2;
  return bmi.toFixed(2);
}

console.log(calculateBMI(180, 80)); // "24.69"////