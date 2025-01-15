import { Equal, Expect } from 'type-testing';

// complexity: 1
// tags: learning-generics, generics-with-constraints, learning-arrays

// Update `Concat` to implement the JavaScript Array.concat function in the type
// system. A type takes the two arguments. The output should be a new array that
// includes inputs in ltr order.

// First thing I did was set up `type Test` below so I could see what the resulting type was as I tried different things. Cool.
// first attempt: [...A1, ...A2];
// second attempt: [...([keyof A1]), ...([keyof A2])];
// third attempt: A1 | A2
// fourth attempt:  [...A1 | ...A2]

// finally asked for help and was given the hint that my first solution was basically it.
// Just needed to constrain my types in the signature (e.g. with `extends!`)

type Concat<A1 extends any[], A2 extends any[]> = [...A1, ...A2];

type Test = Concat<[1], [2]>;
//   ^?

type cases = [Expect<Equal<Concat<[1], [2]>, [1, 2]>>];
