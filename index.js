#! usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let conditions = true;
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                message: "Select an option you want to do:",
                type: "list",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"]
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
//function to Add new task  to the list:-
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            message: "Enter your new Task :",
            type: "input"
        }
    ]);
    todoList.push(newTask.task);
    console.log(` \n ${newTask.task} Task added successfully in Todo-List`);
};
//function to delete a Task from the List:-
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            message: "Enter the 'index no.' of the task you want to delete :",
            type: "number"
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} This task has been deleted successfully from Todo-List`);
};
//function to UpDate Task:-
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            message: "Enter the 'index no :' of the task you want to update :",
            type: "number"
        },
        {
            name: "new_task",
            message: "Now enter new task name",
            type: "input"
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(` \n Task at index no. ${update_task_index.index - 1} updated successfully [for updated list check option: "View Todo-List"] `);
};
//function to view all Todo-List Tasks:-
let viewTask = async () => {
    console.log("\n Your Todo-List:- /n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
main();
