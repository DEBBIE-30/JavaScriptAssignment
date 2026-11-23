let n1 = Number(prompt("Enter first integer:"));
  let n2 = Number(prompt("Enter second integer:"));
  let n3 = Number(prompt("Enter third integer:"));

  let sum = n1 + n2 + n3;
 
  let product = n1 * n2 * n3;

  let smallest = n1;
  if (n2 < smallest) smallest = n2;
  if (n3 < smallest) smallest = n3;

  let largest = n1;
  if (n2 > largest) largest = n2;
  if (n3 > largest) largest = n3;

  console.log("Sum: " + sum);
  
  console.log("Product: " + product);
  console.log("Smallest: " + smallest);
  console.log("Largest: " + largest);
