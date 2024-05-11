import { Extention } from "../types"

export const vsc: Extention = {
    title: "VSC",
    description: "Visual Studio Code",
    version: "1.0.0",
    modules: [],
    functions: {
        start: () => {
            console.log("Starting VSC")
        }
    }
}