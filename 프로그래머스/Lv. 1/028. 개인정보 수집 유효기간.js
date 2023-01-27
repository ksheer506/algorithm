function solution(today, terms, privacies) {
  const termsExpirationMap = new Map(terms.map((e) => e.split(' ')));
  
  return privacies.reduce((a, c, i) => {
    const [startDate, type] = c.split(' ');
    const expiration = termsExpirationMap.get(type);
    const endDate = calculateExpirationDate(startDate, expiration);
  
    if (isExpired(endDate, today)) {
      return [...a, i + 1]
    }
    return a
  }, []);
}

const isExpired = (expirationDate, today) => {
  if (expirationDate <= today) {
    return true;
  }
  return false;
}

const calculateExpirationDate = (startDate, validityTerm) => {
  const start = toDays(startDate);
  const end = start + (validityTerm * 28)
  
  return formatDays(end);
}

// 2000.01.01 => 1부터 시작
const toDays = (date) => {
  const [year, month, day] = date.split('.').map((e) => Number(e));

  return ((year - 2000) * 12 + (month - 1)) * 28 + day;
}

const formatDays = (days) => {
  const day = (days % 28) || 28
  const month = ((days - day) / 28) % 12 + 1
  const year = ((days - day) / 28 - (month - 1)) / 12 + 2000

  return `${year}.${appendPrefix(month)}.${appendPrefix(day)}`
}

const appendPrefix = (number) => {
  if (number < 10) {
    return `0${number}`
  }
  return `${number}`
}

const today = "2020.01.01"
const terms = ["Z 3", "D 5"]
const privacies = ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]
console.log(solution(today, terms, privacies));