{
  //tranar oparatior
  /**
   * tarnary oparator
   * optional chainning
   * nullish coalescring
   */

  const age: numer = 15;

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Bacca");
  }

  const isAdult = age >= 18 ? "Adult " : "tumi baccha";
  console.log(isAdult);

  //desecition make er jonno nulishing oparatoer use korte hoy
  // null / undifind hole ki dekhabe setar jonno nulishing oparatoer

  const isAuthenticated = null;
  const isAuthenticated1 = undefined;

  const result1 = isAuthenticated ?? "Gust";
  const result2 = isAuthenticated1 ? isAuthenticated : "Gust";
  console.log(result1, result2);
}
