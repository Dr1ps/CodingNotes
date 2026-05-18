class MoveToEndC<T> {
    private _a: T[]
    private _f: (a: T, b: T) => boolean

    constructor(a: T[], f: (a: T, b: T) => boolean) {

    }

    public get a() {
        return this._a
    }

    public get f() {
        return this._f
    }

    private set a(a: T[]) {
        this._a = a
    }

    private set f(f: (a: T, b: T) => boolean) {
        this._f = f
    }

    public move(k: T) {
        let num: number = this.a.indexOf(k)
        if (num < 0) return -1
        this.a.splice(num)
        this.a.push(k)
    }

}