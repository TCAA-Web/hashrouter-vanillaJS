import { navbar } from "../components/navbar.js";
import { pageHeading } from "../components/pageHeading.js";

export function overviewpage (){

    const page = `
        ${navbar()}
        ${pageHeading('Oversigt')}
    `

    return (page)
}