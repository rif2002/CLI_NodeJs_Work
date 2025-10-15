import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

const todos=[];

const showMenu = () => {
    console.log("\nMenu:");
    console.log("1. Add Todo");
    console.log("2. View Todos");
    console.log("3. Exit");
    rl.question("Choose an option: ", handleInput);
}

const handleInput = (option) => {
    if(option === '1') {
        rl.question("Enter the task:", (task)=>{
            todos.push(task);
            console.log("Task added:", task);
            showMenu();
        })
    } else if(option === '2'){
        console.log("\nYour Todos:");
        todos.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
        showMenu();
    } else if(option === '3'){
        console.log("Goodbye");
        rl.close();
    } else {
        console.log("Invalid option, please try again.");
        showMenu();
    }
}

showMenu();