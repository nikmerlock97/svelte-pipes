"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNextLunchtime(hours, minutes) {
    var lunchtime = new Date();
    lunchtime.setHours(hours);
    lunchtime.setMinutes(minutes);
    lunchtime.setSeconds(0);
    lunchtime.setMilliseconds(0);
    // if we've already had lunch today, start planning
    // tomorrow's lunch
    if (lunchtime.getTime() < Date.now())
        lunchtime.setDate(lunchtime.getDate() + 1);
    return lunchtime;
}
exports.default = getNextLunchtime;
