//write your code here to make the tests pass

class Document {
    EmployeeName
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName
    }
}

class Employee {
    name
    EmployeeName
    constructor(name) {
        this.name = name
    }

    work(office){
        for (let i=0; i<10; i++){
            office.documents.push(new Document(this.name));
        }
    }
}

class Manager {
    employees = []
    name
    constructor(name){
        this.name = name
    }

    hireEmployee(name){
        
        this.employees.push(new Employee(name))
    }
    askEmployeesToWork(office){
        for (let em of this.employees){
            em.work(office) 
        }

    }
}

class Cleaner {
    name
    constructor(name){
        this.name = name
    }

    clean(){
        console.log("Clean")
    }
}

class Office {
    documents
    managers
    cleaners

    constructor(){
        this.documents = []
        this.managers = []
        this.cleaners = []
    }

    hireCleaner(name){
        this.cleaners.push(new Cleaner(name)) 
    }

    hireManager(name){
        this.managers.push(new Manager(name)) 
    }

    startWorkDay(){
        for (let m of this.managers){
            m.askEmployeesToWork(this)
        }
        for (let cl of this.cleaners){
            cl.clean()
        }
    }

}
