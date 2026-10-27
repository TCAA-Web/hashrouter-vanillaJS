import { navbar } from "../components/navbar.js";
import { pageHeading } from "../components/pageHeading.js";

export function historypage (){

    const page = `
        ${navbar()}
        ${pageHeading('Historik')}
    `

    return (page)
}