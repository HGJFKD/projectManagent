import Task from "./typeTask";

export default interface Project {
    id : number;
    name : string;
    tasks : Task [] | Task;
}