import { createLogger } from "vite";

interface IStudent {
 name: string;
 //age: number;
 grade: number;
}
function getName():string {
    let name: string = "Bipro";
    return name;
}
function getAge():number {
    let age: number = 20;
    return age;
} 
function getGrade():number {
    let grade: number = 3.5;
    return grade;
}
function getStudentInfo():{name: string, age: number, grade: number} {
    const name: string = getName();
    const age: number = getAge();
    const grade: number = getGrade();
    console.log({name,age,grade});
    return { name, age, grade };
}

async function getStudentInfoAsync(): Promise<{name: string, age: number, grade: number}> {
    const name = await getName();
    const age = await getAge();
    const grade = await getGrade();
    console.log({name,age,grade});
    
    return { name, age, grade };
}
function getStudentInfo3(): IStudent {
    const name = getName();
    const grade = getGrade();
    console.log({name,grade});
    return { name,  grade };
}

async function main() {
    getStudentInfo();
    getStudentInfo3();
    await getStudentInfoAsync();
}
main();