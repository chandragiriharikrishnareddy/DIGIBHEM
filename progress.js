const studentProgressData = [
    { name: 'Student 1', progress: 70 },
    { name: 'Student 2', progress: 85 },
    { name: 'Student 3', progress: 50 },
];

const instructorProgressData = [
    { name: 'Instructor 1', progress: 90 },
    { name: 'Instructor 2', progress: 75 },
];

function displayStudentProgress() {
    const studentProgressContainer = document.getElementById('studentProgress');
    studentProgressContainer.innerHTML = '';

    studentProgressData.forEach(student => {
        const progressDiv = document.createElement('div');
        progressDiv.classList.add('progress-bar');
        progressDiv.innerHTML = `
            <div class="student-name">${student.name}</div>
            <div class="progress-bar-fill" style="width: ${student.progress}%;"></div>
        `;
        studentProgressContainer.appendChild(progressDiv);
    });
}

function displayInstructorProgress() {
    const instructorProgressContainer = document.getElementById('instructorProgress');
    instructorProgressContainer.innerHTML = '';

    instructorProgressData.forEach(instructor => {
        const progressDiv = document.createElement('div');
        progressDiv.classList.add('instructor-progress-bar');
        progressDiv.innerHTML = `
            <div class="instructor-name">${instructor.name}</div>
            <div class="progress-bar-fill" style="width: ${instructor.progress}%;"></div>
        `;
        instructorProgressContainer.appendChild(progressDiv);
    });
}
displayStudentProgress();
displayInstructorProgress();
