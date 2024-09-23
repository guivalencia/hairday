import {scheduleFetchByDay} from "../../services/schedule-fecth-by-day.js"
import {hoursLoad} from "../form/hours-load.js"
import {schedulesShow} from "../schedules/show.js"

// Seleciona o input de data
const selectedDate = document.getElementById("date")

export async function schedulesDay(){
    // Obtem a data do input
    const date = selectedDate.value

    // Buscar na API os agendamentos
    const dailyShedules = await scheduleFetchByDay({ date })
    
    // Exibe os agendamentos
    schedulesShow({dailyShedules})

    // Renderiza as horas disponiveis
    hoursLoad({date})
}