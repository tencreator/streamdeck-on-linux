export interface Module {
    title: string
    description: string
    icon: Buffer
    function: Function
}

export interface Extention {
    title: string
    description: string
    version: string
    modules: Module[]
    functions: {
        [key: string]: Function
    }
}

export interface KeyLayout {
    [keyIndex: number]: {
        up: Function,
        down: Function,
        color: {
            r: number,
            g: number,
            b: number
        },
        image: Buffer
    }
}