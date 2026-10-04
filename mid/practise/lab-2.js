function getStudentData() {
    console.log("Fetching student data...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
       console.log("Fetching student data...");

            resolve({
                name: "John Doe",
                age: 20,
                major: "Computer Science",
                cgpa: 3.8
            });
        }, 2000); // Simulating a delay of 2 seconds
    });
}

function displayStudentData() {
    getStudentData()
        .then((studentData) => {
            console.log("Student result resived")
            console.log("ID:", studentData.id);
            console.log("Name:", studentData.name);
            console.log("Department:", studentData.department);
            console.log("Marks:", studentData.marks);
        })
        .catch((error) => {
            console.error("Error fetching student data:", error);
        });
}

async function displayStudentData() {
    try {
        const studentData = await getStudentData();
        console.log("Student Data:", studentData);
    } catch (error) {
        console.error("Error fetching student data:", error);
    }
}

displayStudentData();