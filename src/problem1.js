function problem1(pobi, crong) {
  const pobiScore = Math.max(parseInt(pobi.map(num => getScore(num))));
  const crongScore = Math.max(parseInt(crong.map(num => getScore(num))));

  if(pobiScore > crongScore) {
    return 1;
  } else if(crongScore > pobiScore) {
    return 2;
  } else
    return 0;

  function getScore(num) {
    const add = String(num).split("").reduce((acc, cur) => acc + parseInt(cur), 0);
    const multiply = String(num).split("").reduce((acc, cur) => acc * parseInt(cur));
    const highScore = Math.max(add, multiply);

    return highScore;
  }
}

module.exports = problem1;

