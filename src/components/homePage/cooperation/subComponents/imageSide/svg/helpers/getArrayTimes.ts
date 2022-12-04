import { ArrayDate } from "../../../../../../../@types/ArrayDate";

export function getArrayTime() {
    const time = new Date();

    const hours = time.getHours();
    const minutes = time.getMinutes();

    const hoursString = hours < 10 ? "0" + hours.toString() : hours.toString();
    const minutesString =
        minutes < 10 ? "0" + minutes.toString() : minutes.toString();

    const arrayTimes = (hoursString + minutesString).split("");

    return arrayTimes as ArrayDate;
}
