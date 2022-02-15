import { sendRequest } from "./dataAccess.js"

export const ServiceForm = () => {
    let html =
        `
        <div class="field">
            <label class="label" for="kidName">Kid Name</label>
            <input type="text" name="kidName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="parentName">Parent's Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Address</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partySize">Party Size</label>
            <input type="number" name="partySize" class="input" />
        </div>
        <div class="field">
        <label class="label" for="partyDate">Party Date</label>
        <input type="date" name="partyDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyLength">Party Length</label>
            <input type="text" name="partyLength" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

// an event listener that listens for clicks
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userKidName = document.querySelector("input[name='kidName']").value
        const userParentName = document.querySelector("input[name='parentName']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userPartySize = document.querySelector("input[name='partySize']").value
        const userPartyDate = document.querySelector("input[name='partyDate']").value
        const userPartyLength = document.querySelector("input[name='partyLength']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            kidName: userKidName,
            parentName: userParentName,
            address: userAddress,
            partySize: userPartySize,
            partyDate: userPartyDate,
            partyLength: userPartyLength
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})