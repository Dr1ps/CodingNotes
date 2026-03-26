class Counter {
    value: number
    static DEFAULT_VALUE: number = 0
    constructor(value: number | undefined = Counter.DEFAULT_VALUE) {
        this.value = value
    }
    increment(x: number) {
        if(x > 0)
            this.value += x
        else
            throw new RangeError("Cannot increment timer value for a non-positive value")
    }

    decrement(x: number) {
        if(x < 0)
            this.value -= x
        else
            throw new RangeError("Cannot decrement timer value for a non-negative value")

    }
}

enum Level {
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR"
}

class Logger {
    static LOG_HISTORY: string[] = []
    static LOG(level: Level, message: string) {
        if(Object.getOwnPropertyNames(Level).includes(level)) {
            throw new UnknownLevel("Error, Unknown level specified.")
        }
        let record: string = "[" + level + "] " + message
        this.LOG_HISTORY.push(record)
        console.log(record)
    }
    static HISTORY() {
        for(let item of this.LOG_HISTORY) {
            console.log(item)
        }
    }
}

class UnknownLevel extends Error {
    constructor(m: string) {
        super(m)
        this.name = "UnknownLevel"
    }
}

class TreeNode {
    value: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(value: number) {
        this.value = value
        this.left = null
        this.right = null
    }
    insertLeft(value: number) {
        if(!this.left) {
            this.left = new TreeNode(value)
        } else {
            throw new Error("Left son is taken")
        }
    }

    insertRight(value: number) {
        if(!this.right) {
            this.right = new TreeNode(value)
        } else {
            throw new Error("Right son is taken")
        }
    }

    isLeaf() {
        if(!this.left && !this.right) return true
        return false
    }

    minmax() {
        let res: [number,number] | null = 
        let sx: [number,number] | null = 
        let dx: [number,number] | null = 
        if(this.isLeaf()) {
            res = [this.value,this.value]
            return res
        }
        if(this.left) {
            sx = this.left.minmax()
        }
        if(this.right)
            dx = this.left.minmax()
        res = [Math.min()]

    }
}