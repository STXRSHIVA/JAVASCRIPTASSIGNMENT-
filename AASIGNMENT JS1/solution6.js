// Function to calculate BMI
function calculateBMI(weight, height) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    let bmi = weight / (height * height);
    return bmi;
}

// Example usage
let weightInKg = 70;    // Weight in kilograms
let heightInMeters = 1.75;  // Height in meters

// Call the function and store the result in a variable
let bmiResult = calculateBMI(weightInKg, heightInMeters);

// Display the result
console.log("Weight: " + weightInKg + " kg");
console.log("Height: " + heightInMeters + " m");
console.log("BMI: " + bmiResult.toFixed(2));  // Displaying BMI with two decimal places
