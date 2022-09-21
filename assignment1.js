function fibs(n) {
  let n1 = 0,
    n2 = 1,
    nextTerm
  for (let i = 1; i <= n; i++) {
    console.log(n1)
    nextTerm = n1 + n2
    n1 = n2
    n2 = nextTerm
  }
}

function fibsRec(n) {
  return n <= 1 ? n : fibsRec(n - 1) + fibsRec(n - 2)
}

for (let i = 0; i < 10; i++) {
  console.log(fibsRec(i))
}
