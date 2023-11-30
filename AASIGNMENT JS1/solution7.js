// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    // Area formula: π * r^2
    let area = Math.PI * Math.pow(radius, 2);
    return area;
}

// Example usage with a radius of 10
let radius = 10;

// Call the function and store the result in a variable
let circleArea = calculateCircleArea(radius);

// Display the result
console.log("Radius: " + radius);
console.log("Area of the circle: " + circleArea.toFixed(2));  // Displaying area with two decimal places
