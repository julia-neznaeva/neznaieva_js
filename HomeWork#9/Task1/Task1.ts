type SortingDirection = "asc" | "desc";
type SortFunction = (arr:string[], SortingDirection)=>string[]

function superSort(arr: string[], sorting: SortingDirection): string[] {
  const copiedArray = [...arr];
  if (sorting === "asc") {
    return copiedArray.sort((a, b) => a.localeCompare(b));
  }
  if (sorting === "desc") {
    return copiedArray.sort((a, b) => b.localeCompare(a));
  }
  return copiedArray;
}

function main(): void{
const names: string[] = ["Vlad", "Ira", "Nina", "Alex"];

console.log(superSort(names, "asc"));

// [ 'Alex', 'Ira', 'Nina', 'Vlad' ]

const func: SortFunction = superSort;

const result = func(["A", "C", "D", "B"], "desc");

console.log(result);

// [ 'D', 'C', 'B', 'A' ]
}

main();