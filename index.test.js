const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const actual = utils.trimProperties(input);
    expect(input).not.toBe(actual);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  let input;
  beforeAll(() => {
    input = { foo: "  foo ", bar: "bar ", baz: " baz" };
  });
  test("[3] returns an object with the properties trimmed", () => {
    const sharpedObject = utils.trimPropertiesMutation(input);
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    expect(sharpedObject).toEqual(expected);
  });
  test("[4] the object returned is the exact same one we passed in", () => {
    const sameInputObj = utils.trimPropertiesMutation(input);
    expect(sameInputObj).toBe(input);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    const arrObj = [{ a: 8 }, { b: 2 }, { c: 18 }, { d: 5 }];
    const largestInt = utils.findLargestInteger(arrObj);
    expect(largestInt).toBe(18);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    const initialCall = counter.countDown();
    expect(initialCall).toBe(3);
  });
  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown();
    const secondCall = counter.countDown();
    expect(secondCall).toBe(2);
  });
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    counter.countDown();
    counter.countDown();
    counter.countDown();
    const fourthCall = counter.countDown();
    expect(fourthCall).toBe(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const firstcall = seasons.next();
    expect(firstcall).toBe("summer");
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    const secondCall = seasons.next();
    expect(secondCall).toBe("fall");
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next();
    seasons.next();
    const thirdCall = seasons.next();
    expect(thirdCall).toBe("winter");
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    const fourthCall = seasons.next();
    expect(fourthCall).toBe("spring");
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    const fifthCall = seasons.next();
    expect(fifthCall).toBe("summer");
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let fourtyCalls;
    for (let i = 0; i < 40; i++) {
      fourtyCalls = seasons.next();
    }
    expect(fourtyCalls).toBe("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  test("[15] driving the car returns the updated odometer", () => {
      const carMoving =  focus.drive(100)
    expect(carMoving).toBe(100)
  });

   test('[16] driving the car uses gas', () => {
       focus.drive(100)
    expect(Math.floor(focus.tank)).toBe(16)
   })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
      focus.refuel(10)
      const carMoving = focus.drive(200)
      expect(carMoving).toBe(200)
  })
   test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(20)
    expect(Math.floor(focus.tank)).toBe(20)
   })
});

describe("[Exercise 7] isEvenNumberAsync", () => {
   test('[19] resolves true if passed an even number', async () => {
    const result = await utils.isEvenNumberAsync(8)
    expect(result).toBe(true)
   })
   test('[20] resolves false if passed an odd number', async () => {
    const result = await utils.isEvenNumberAsync(9)
    expect(result).toBe(false)
   })
});
