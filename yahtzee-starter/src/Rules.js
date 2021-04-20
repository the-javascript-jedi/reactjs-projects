/** Rule for Yahtzee scoring.
 *
 * This is an "abstract class"; the real rules are subclasses of these.
 * This stores all parameters passed into it as properties on the instance
 * (to simplify child classes so they don't need constructors of their own).
 *
 * It contains useful functions for summing, counting values, and counting
 * frequencies of dice. These are used by subclassed rules.
 */

class Rule {
  constructor(params) {
    // put all properties in params on instance
    Object.assign(this, params);
  }
  /*
Explanation
The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
*/
  //
  // return sum of all dice passed in
  sum(dice) {
    // sum of all dice
    return dice.reduce((prev, curr) => prev + curr);
  }
  // takes an array of dice and returns frequency of values
  //O/P
  //freq([4,4,4,3,2]) =>  (3) [3, 1, 1]
  freq(dice) {
    // frequencies of dice values
    const freqs = new Map();
    for (let d of dice) freqs.set(d, (freqs.get(d) || 0) + 1);
    console.log("freqs", freqs);
    return Array.from(freqs.values());
  }
  /*
    Explanations
    1)for...of
    const array1 = ['a', 'b', 'c'];
    for (const element of array1) {
      console.log(element);
    }
    // expected output: "a"
    // expected output: "b"
    // expected output: "c"
    */
  /*
    2)Map()-The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    let contacts = new Map()
    contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
    contacts.has('Jessie') // true
    contacts.get('Hilary') // undefined
    contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
    contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
    contacts.delete('Raymond') // false
    contacts.delete('Jessie') // true
    console.log(contacts.size) // 1
    ////////
    const map = new Map([[1, 2], [2, 4], [4, 8]]);
    Array.from(map);
    // [[1, 2], [2, 4], [4, 8]]
    //  
    const mapper = new Map([['1', 'a'], ['2', 'b']]);
    Array.from(mapper.values());
    // ['a', 'b'];
    //
    Array.from(mapper.keys());
    // ['1', '2'];
    */
  /*
    3)Array.from()
    console.log(Array.from('foo'));
    // expected output: Array ["f", "o", "o"]
    console.log(Array.from([1, 2, 3], x => x + x));
    // expected output: Array [2, 4, 6]
     */
  //count takes an array of dice and a value and teels us how many times it appears in the dice
  count(dice, val) {
    // # times val appears in dice
    return dice.filter((d) => d === val).length;
  }
}

/** Given a sought-for val, return sum of dice of that val.
 *
 * Used for rules like "sum of all ones" or "Sum all of sixes"
 // const sixes = new TotalOneNumber({ val: 6 });
 when value is 6, it will take array of dice and return six times the count of occurences of six
 //return this.val * this.count(dice, this.val);
 */
class TotalOneNumber extends Rule {
  evalRoll = (dice) => {
    return this.val * this.count(dice, this.val);
  };
}

/** Given a required # of same dice, return sum of all dice.
 *
 * Used for rules like "sum of all dice when there is a 3-of-kind"
 * const threeOfKind = new SumDistro({ count: 3 });
 * we pass in a count, threeOfKind we are looking for a distribution of three of the same thing
 */

class SumDistro extends Rule {
  evalRoll = (dice) => {
    // do any of the counts meet of exceed this distro?
    //If frequency of the dice array (i.e.)//O/P//freq([4,4,4,3,2]) =>  (3) [3, 1, 1]
    //.some()- in some cases [2,2,2,2,2] -(technically a yatzee) qualifies for 3 of a kind and 4 of a kind
    //make sure it contains atleast 3 of a kind
    return this.freq(dice).some((c) => c >= this.count) ? this.sum(dice) : 0;
  };
}
/*
.some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

*/
/** Check if full house (3-of-kind and 2-of-kind) */
//we extend the Rule class to make use of the freq method
//freq[1,2,2,2,1]=>[2,3]
class FullHouse extends Rule {
  // TODO
  evalRoll = (dice) => {
    const freqs = this.freq(dice);
    // if the value includes 2(of a kind) or 3(of a kind) return 25 points which is passed as an object {score:25}
    return freqs.includes(2) && freqs.includes(3) ? this.score : 0;
  };
}

/** Check for small straights. */
//[1234],[2345],[3456]
// we must return 30 points for a small straight
class SmallStraight extends Rule {
  // TODO
  evalRoll = (dice) => {
    const d = new Set(dice);
    // straight can be 234 + either 1 or 5
    if (d.has(2) && d.has(3) && d.has(4) && (d.has(1) || d.has(5))) {
      return this.score;
    }
    // or 345 +either 2 or 6
    else if (d.has(3) && d.has(4) && d.has(5) && (d.has(2) || d.has(6))) {
      return this.score;
    } else {
      return 0;
    }
  };
}

/** Check for large straights. */

class LargeStraight extends Rule {
  evalRoll = (dice) => {
    const d = new Set(dice);

    // large straight must be 5 different dice & only one can be a 1 or a 6
    // yatzee largeStraight must have a (1 or !6) or (!1 or 6)--it cannot have both 1 and 6 because there is only 5 spaces allowed
    //if valid return score -- largeStraight always scores 40
    return d.size === 5 && (!d.has(1) || !d.has(6)) ? this.score : 0;
  };
}
/**
 * Explanation
 * The Set object lets you store unique values of any type, whether primitive values or object references.
 * eg 1: [1,3,4,5,6] -- all unique values will stay
 * eg 2: [1,2,2,3,4] -- (1,2,3,4) - this will tell us that there was not 5 unique values, repeated value is merged
 * mySet1.add(1)           // Set [ 1 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add('some text') // Set [ 1, 5, 'some text' ]
const o = {a: 1, b: 2}
mySet1.add(o)

mySet1.add({a: 1, b: 2})   // o is referencing a different object, so this is okay

mySet1.has(1)              // true
mySet1.has(3)              // false, since 3 has not been added to the set
mySet1.has(5)              // true
mySet1.has(Math.sqrt(25))  // true
mySet1.has('Some Text'.toLowerCase()) // true
mySet1.has(o)       // true

mySet1.size         // 5

mySet1.delete(5)    // removes 5 from the set
mySet1.has(5)       // false, 5 has been removed

mySet1.size         // 4, since we just removed one value

console.log(mySet1)
 */
/** Check if all dice are same. */
//In yahtzee we need to check if we have the same values 5 times
class Yahtzee extends Rule {
  evalRoll = (dice) => {
    // all dice must be the same
    return this.freq(dice)[0] === 5 ? this.score : 0;
  };
}

// ones, twos, etc score as sum of that value
const ones = new TotalOneNumber({ val: 1, description: "1 point per 1" });
const twos = new TotalOneNumber({ val: 2, description: "2 point per 2" });
const threes = new TotalOneNumber({ val: 3, description: "3 point per 3" });
const fours = new TotalOneNumber({ val: 4, description: "4 point per 4" });
const fives = new TotalOneNumber({ val: 5, description: "5 point per 5" });
const sixes = new TotalOneNumber({ val: 6, description: "6 point per 6" });

// three/four of kind score as sum of all dice
const threeOfKind = new SumDistro({
  count: 3,
  description: "Sum all dice if 3 are the same",
});
const fourOfKind = new SumDistro({
  count: 4,
  description: "Sum all dice if 4 are the same",
});

// full house scores as flat 25
const fullHouse = new FullHouse({
  score: 25,
  description: "25 points for a full house",
});

// small/large straights score as 30/40
// smallStraight must extend the Rule to use the constructor because to access this.score which we are passing as an object,
//because in the constructor we are using Ibject.assign and assigning all the properties
const smallStraight = new SmallStraight({
  score: 30,
  description: "30 points for a small straight",
});
const largeStraight = new LargeStraight({
  score: 40,
  description: "40 points for a large straight",
});

// yahtzee scores as 50
const yahtzee = new Yahtzee({
  score: 50,
  description: "50 points for Yahtzee",
});

// for chance, can view as some of all dice, requiring at least 0 of a kind
const chance = new SumDistro({
  count: 0,
  description: "Sum of all dice",
});
//we pass count 0 to SumDistro
//return this.freq(dice).some((c) => c >= this.count) ? this.sum(dice) : 0; ->this.count==0 so we can short circuit SumDistro and always return the count
export {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
};
