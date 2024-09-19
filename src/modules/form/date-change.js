import {scheduleDay} from "../schedules/load.js"

const selecteddate = document.getElementById("date")

selecteddate.onchange = () => scheduleDay()