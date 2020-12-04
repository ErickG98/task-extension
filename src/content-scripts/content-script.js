let db = {}

db.addTask = (task) => {
    let tasks = '';

    if (localStorage.getItem ('taskCollection') ) {
        task += localStorage.getItem ('taskCollection')
    }

    tasks += localStorage.getItem('taskCollection')
    tasks += ','

    localStorage.setItem('taskCollection', tasks)

}

db.deleteTask = (id) => {

}

db.getTasks = () => {
    if (localStorage.getItem('taskCollection')){
        const tasks = localStorage.getItem('taskCollection')
        const array = tasks.split(',')
        return array
    }
}

export default db;