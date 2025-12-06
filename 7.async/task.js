//Задание 1
class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    if (this.alarmCollection.some((item) => item.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }
    this.alarmCollection.push({
      callback,
      time,
      canCall: true
    });
  }
  removeClock(time) {
    const initialLength = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    return initialLength !== this.alarmCollection.length;
  }
  getCurrentFormattedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();

      this.alarmCollection.forEach(item => {
        if (item.time === currentTime && item.canCall) {
          item.canCall = false;
          item.callback();
        }
      });
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  resetAllCalls() {
    this.alarmCollection.forEach((item) => item.canCall = true);
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection.length = 0;
  }
}
