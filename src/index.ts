import { openStreamDeck, listStreamDecks, StreamDeck } from "@elgato-stream-deck/node"
import path from 'path'
import fs from 'fs'
import ws from 'ws'
import { Extention, KeyLayout } from "./types"

const files: string[] = fs.readdirSync(path.join(__dirname, 'extentions'))

let exentions: Extention[] = []
let keyLayout: KeyLayout = {}

async function main() {
    const devices = await listStreamDecks()
    
    try {
        const myStreamDeck = await openStreamDeck(devices[0].path)
        myStreamDeck.clearPanel()

        myStreamDeck.on("up", (keyIndex: number) => {
            if (keyLayout[keyIndex]) {
                keyLayout[keyIndex].up(myStreamDeck)
            }
        })

        myStreamDeck.on("down", (keyIndex: number) => {
            if (keyLayout[keyIndex]) {
                keyLayout[keyIndex].down(myStreamDeck)
            }
        })
        
        myStreamDeck.on("error", (error) => {
            console.error(error)
        })
    } catch (err) {
        console.error(err)
    }
}

main()