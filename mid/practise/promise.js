const { createLogger } = require("vite");

function getStudentResult() {
    const logger = createLogger();

    return new Promise((resolve, reject) => {
        
        console.log("Fetching student result...");
        setTimeout(() => {
            const success = true; 

            if (success) {
                resolve({
                    id: 101,
                    name: "Rahim",
                    department: "CSE",
                    marks: 85
                });
            } else {
                reject(new Error("Failed to retrieve student result."));
            }
        }, 3000);
    });
}

function displayResult() {
  getStudentResult()
    .then((student) => {
      console.log("Student result received!");
      console.log("ID:", student.id);
      console.log("Name:", student.name);
      console.log("Department:", student.department);
      console.log("Marks:", student.marks);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Result processing completed.");
    });
}

async function displayResultAsync() {
  try {
    const student = await getStudentResult();

    console.log("Student result received!");
    console.log("ID:", student.id);
    console.log("Name:", student.name);
    console.log("Department:", student.department);
    console.log("Marks:", student.marks);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Result processing completed.");
  }
}

displayResultAsync();