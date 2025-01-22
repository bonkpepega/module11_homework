let fruits = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry", "blue"]
  ]);
for (let [name, color] of fruits)  {
    console.log("Ключ - ", name, "значение -", color ); 
}

