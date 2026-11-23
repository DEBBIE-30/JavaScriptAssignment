let negatives = 0;
  let positives = 0;
  let zeros = 0;

  for (let i = 1; i <= 5; i++) {
    let n = Number(prompt("Enter number " + i + ":"));
    if (n < 0) {
      negatives++;
    } else if (n > 0) {
      positives++;
    } else {
      zeros++;
    }
  }

  console.log("Negative: " + negatives);
  console.log("Positive: " + positives);
  console.log("Zeros: " + zeros);
}
