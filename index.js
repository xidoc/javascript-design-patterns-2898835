var Task = function (name){
    this.name = name
    this.toString = function (){
        console.log(`I have to learn ${this.name}`)
    }
}
var task = new Task('Learn the JS Pattern')
var task1 = new Task('all the designs patterns')
task.toString()
task1.toString()