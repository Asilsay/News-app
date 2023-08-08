function findFromQuery(input: string[], query: string[]) {
  const output: number[] = [];

  for (let i = 0; i < query.length; i++) {
    const wordQ = query[i];
    const count = input.filter((word) => word === wordQ).length;
    output.push(count);
  }

  return output;
}

console.log(findFromQuery(['xc', 'dz', 'bbb', 'dz'], ['bbb', 'ac', 'dz'])); // Output: [1, 0, 2]
