function solution(record) {
  const msg = [];
  const id = new Map();
  
  for (let i = 0; i < record.length; i++) {
    const [status, uid, name] = record[i].split(' ');
    const entry = {};
    
    if (status === 'Change') {
      id.set(uid, name);
      continue;
    }
    if (status === 'Enter') {
      id.set(uid, name);
      entry.status = 1
    } 
    if (status === 'Leave') {
      entry.status = 0;
    }
    entry.uid = uid;
    msg.push(entry);
  }
  
  for (let j = 0; j < msg.length; j++) {
    let message;

    if (msg[j].status) {
      message = '님이 들어왔습니다.';
    } else {
      message = '님이 나갔습니다.';
    }
    const user = id.get(msg[j].uid);
    msg[j] = `${user}${message}`
  }
  
  return msg;
}

const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
console.log(solution(record))
