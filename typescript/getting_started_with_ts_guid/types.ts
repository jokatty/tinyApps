// any type
// when we don't know the type of the variable.
// avoid using any type.

// Array
let myArray: number[] = [1, 2, 3];
let secondArray: number[] = [];

// Tuple: fixed length array where elements have particular type
let myTuple: [string, number] = ['hello', 10];

// enum: list of related constants.
// PascalCase. Notice the variables is also PascalCase.
// If no value is specified, compiler assumes the small value is 0 by default. and other values are incremented by 1.
enum Size {
  Small = 1,
  Medium,
  Large,
}
// using enum
let mySize: Size = Size.Small;

// Objects

// Union type

// Intersection type

// Literal type:
// to limit the value of a variable to a particular value.
// limits the myValue to be 5 or 10.
let myValue: 5 | 10 = 5;
// or create a type alias
type Values = 5 | 10;
let myValue2: Values = 5;

// Nullable type:

// Optional chaining
