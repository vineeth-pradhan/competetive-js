class MeetingSlots {
  constructor(schedules, minutes) {
    this.schedules = schedules;
    this.minutes = minutes;
  }


  solution() {
    let firstAvailableSlot = [];
    for(let i = 0; i < this.schedules[0].length; i++) {
      if(this.schedules[0][i][1] - this.schedules[1][i][0] > this.minutes) {
        firstAvailableSlot.push(this.schedules[1][i][0], this.schedules[0][i][0]+this.minutes);
        return firstAvailableSlot;
      }
    }
  }
}

const meetingSlots = new MeetingSlots(
  [
    [[0, 15], [60, 70], [140, 150]],
    [[10, 50], [60, 120], [140, 210]]
  ],
  8
)

console.log(meetingSlots.solution());
