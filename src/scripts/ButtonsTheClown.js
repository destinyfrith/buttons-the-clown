import { Requests } from "./PartyRequests.js"
import { ServiceForm } from "./ServiceForm.js"

//import and invoke both html elemnts that you created on other modules
export const ButtonsTheClown = () => {
    return `
    <h1>Buttons the Clown Party Service</h1>
    <section class="serviceForm">
        ${ServiceForm()}
    </section>

    <section class="serviceRequests">
        <h2>Party Requests</h2>
        ${Requests()}
    </section>
    `
}