function solution(babbling) {
  const speakable = ["aya", "ye", "woo", "ma"];

  return babbling.filter((e) => {
    for (let i = 0; i < speakable.length; i++) {
      const speakReg = new RegExp(speakable[i], "g");
      const isRepeated = e.match(new RegExp(`${speakable[i]}${speakable[i]}`, "g"));

      if (isRepeated) return false;
      e = e.replace(speakReg, "");
    }

    if (e.length < 1) return true;
    return false;
  });
}

const babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];
console.log(solution(babbling));
