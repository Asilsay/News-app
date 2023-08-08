function reverseAlphabet(input: string) {
  const minusNumber = input.slice(0, input.length - 1);
  const endNumber = input[input.length - 1];
  const Reversed = minusNumber.split('').reverse().join('');
  return Reversed + endNumber;
}

console.log(reverseAlphabet('NEGIE1')); // Output: "EIGEN1"
