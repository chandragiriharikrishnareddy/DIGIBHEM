// Sample course data
let courses = [];

// Function to display courses
function displayCourses() {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';

    courses.forEach((course, index) => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
        courseItem.innerHTML = `
            <h3>${course.title}</h3>
            <button onclick="deleteCourse(${index})">Delete</button>
        `;
        courseList.appendChild(courseItem);
    });
}

// Function to delete course
function deleteCourse(index) {
    courses.splice(index, 1);
    displayCourses();
}

// Function to show create course modal
function showCreateCourseModal() {
    const modal = document.getElementById('createCourseModal');
    modal.style.display = 'block';
}

// Function to close create course modal
function closeCreateCourseModal() {
    const modal = document.getElementById('createCourseModal');
    modal.style.display = 'none';
}

// Function to handle upload course content
function uploadCourse() {
    const title = document.getElementById('courseTitle').value;
    const file = document.getElementById('courseFile').files[0];

    if (!title || !file) {
        alert('Please enter course title and select a file.');
        return;
    }

    // Simulating upload process
    setTimeout(() => {
        courses.push({ title, file });
        displayCourses();
        closeCreateCourseModal();
    }, 1000);
}

// Event listeners
document.getElementById('createCourseBtn').addEventListener('click', showCreateCourseModal);
document.querySelector('.close').addEventListener('click', closeCreateCourseModal);
document.getElementById('uploadBtn').addEventListener('click', uploadCourse);
window.addEventListener('click', function(event) {
    const modal = document.getElementById('createCourseModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Initial display of courses
displayCourses();
