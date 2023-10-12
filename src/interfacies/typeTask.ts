import Instruction from "./typeInstruction";

export default interface Task {
    taskName: string;
    endDate: string;
    description: Instruction[] | Instruction
    status:  "Completed" | "Pending" | "In Progress" | "Aborted"
    

}