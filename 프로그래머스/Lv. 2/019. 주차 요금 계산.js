function solution(fees, records) {
  // 차량번호 → [[in1, out1], [in2, out2]]
  const table = new Map();
  const carPlates = new Set();
  
  for (let i = 0; i < records.length; i++) {
    const [time, plate, status] = records[i].split(" ");
    const [H, M] = time.split(":");
    const minutes = 60 * Number(H) + Number(M);
    
    if (!table.get(plate)) {
      table.set(plate, []);
    }
    
    const current = table.get(plate);
    if (status === "IN") {
      current.push([minutes]);
    }
    if (status === "OUT") {
      const lastIn = current.pop()[0];
      const elapsed = minutes - lastIn;
      
      table.set(plate, [...current, elapsed]);
    }
    
    carPlates.add(plate);
  }
  
  const cars = [...carPlates].sort((a, b) => a - b);
  for (let j = 0; j < cars.length; j++) {
    const todayRecords = table.get(cars[j]).reduce((a, c) => {
      if (typeof c !== "number") {
        return a + (23 * 60 + 59) - c
      }
      return a + c;
    }, 0);
    
    const bill = fees[1] + Math.ceil((todayRecords - fees[0]) / fees[2]) * fees[3];
    
    cars[j] = bill < fees[1] ? fees[1] : bill;
  }
  
  return cars;
}

// 기본 시간, 기본 요금, 단위 시간, 단위 요금
const fees = [120, 0, 60, 591];
const records = ["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"];

console.log(solution(fees, records));