class MeetingSlots {
  constructor(schedules, minutes) {
    this.schedules = schedules;
    this.minutes = minutes;
  }


  // [[10, 50], [60, 70], [141, 150]],
  // [[0, 15], [65, 120]],
  solution() {
    let firstAvailableSlot = [];
    let [shortestSlot, longestSlot] = this.reassignSlots(this.schedules[0], this.schedules[1]);
    for(let i = 0; i < shortestSlot.length; i++) {
      for(let j = 0; j < longestSlot.length; j++) {
        if(shortestSlot[i][1] - shortestSlot[i][0] >= this.minutes && shortestSlot[i][1] - longestSlot[j][0] >= this.minutes && (longestSlot[j][1] - longestSlot[j][0] >= this.minutes) && longestSlot[j][1] - shortestSlot[i][0] >= this.minutes) {
          let max = Math.max(shortestSlot[i][0], longestSlot[j][0])
          firstAvailableSlot.push(max, max+this.minutes);
        }
      }
    }
    return firstAvailableSlot;
  }

  reassignSlots(firstSlot, secondSlot){
    if(firstSlot.length > secondSlot.length) {
      let tempSlot = firstSlot;
      firstSlot = secondSlot;
      secondSlot = tempSlot;
    }
    return [firstSlot, secondSlot];
  }
}

const meetingSlots = new MeetingSlots(
  [
    [[0, 15], [60, 70], [141, 150]],
    [[10, 50], [60, 120]],
    // [[18, 26], [60, 120], [141, 150]],
    // [[18, 30], [60, 70]],
    // [[60, 70]],
    // [[60, 120]],
  ],
  8
)

console.log(meetingSlots.solution());
