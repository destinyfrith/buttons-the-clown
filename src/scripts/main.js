import { ButtonsTheClown } from "./ButtonsTheClown.js"
import { fetchRequests } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = ButtonsTheClown()
        }
    )
}

render()

// main module has to listen for the custom event and invoke the render() function to build all the HTML again

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)