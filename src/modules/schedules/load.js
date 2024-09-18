import {hoursLoad} from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export function scheduleDay(){

    const date = selectedDate.value
    hoursLoad({date})
}