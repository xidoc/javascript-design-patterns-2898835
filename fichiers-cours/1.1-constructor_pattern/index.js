class Task {
    constructor(name) {
        this.name = name
        this.completed = false
    }
    complete(){
        this.completed = !this.completed
    }
    toString(){
        !this.completed ? console.log(`To do : ${this.name}`) : console.log(`Completed : ${this.name}`)
    }
}

let task = new Task("To learn JS")
task.toString()
task.complete()
task.toString()