function display(str:string):void;
function display(str:string, str1:string):void;
function display(strArray:string[], ):void;


function display(strOrArray: string[] | string, ...rest: string[]): void {
  let res = "";

  if (Array.isArray(strOrArray)) {
    strOrArray.forEach((element) => {
      res += element + "\n";
    });
  } else {
    [strOrArray, ...rest].forEach((element) => {
      res += element + "\n";
    });
  }
  console.log(res);
}

display("Hello, World!");

display("Hello", "World!");

display(["Hello", "World", "!"]);
