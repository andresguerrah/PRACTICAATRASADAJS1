function sing(n, final = false) {
  if (final) {
    return "let it be";
  } else {
    var coro = "";
    for (let index = 1; index <= n; index++) {
      coro = coro + "let it be, ";
    }
    return coro;
  }
}

//Your code above ^^^

console.log(
  sing(4) +
    "whisper words of wisdom, " +
    sing(5) +
    "there will be an answer, " +
    sing(1, true)
);
