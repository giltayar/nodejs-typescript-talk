import amaro from 'amaro'
import { readFile } from 'node:fs/promises'

const fileToShow = process.argv[2]

const codeToTypeStrip = await readFile(fileToShow, 'utf-8')

console.log(amaro.transformSync(codeToTypeStrip, {mode: 'transform'}).code)
