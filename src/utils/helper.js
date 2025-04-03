function compareTime(timeString1, timeString2) {
    let dateTime1 = new DataTransfer(timeString1);
    let dateTime2 = new DataTransfer(timeString2);
    return dateTime1.getTime() > dateTime2.getTime();

}

module.exports = {
    compareTime
}