import {scheduleFetchByDay} from "../../services/schedule-fecth-by-day.js"
import {schedulesShow} from "./show.js"
import {hoursLoad} from "../form/hours-load.js"

// Seleciona o input de data
const selectedDate = document.getElementById("date")

export async function scheduleDay(){
    // Obtem a data do input
    const date = selectedDate.value

    // Buscar na API os agendamentos
    const dailyShedules = await scheduleFetchByDay({ date })

    // Exibe os agendamentos
    schedulesShow({dailyShedules})

    // Renderiza as horas disponiveis
    hoursLoad({date})
}