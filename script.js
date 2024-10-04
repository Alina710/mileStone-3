var _a;
(_a = document.getElementById("generateBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    generateResume();
});
function generateResume() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var years = document.getElementById("years").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var company = document.getElementById("company").value;
    var jobDescription = document.getElementById("jobDescription").value;
    var projectName = document.getElementById("projectName").value;
    var projectDescription = document.getElementById("projectDescription").value;
    var skills = document.getElementById("skills").value.split(',').map(function (skill) { return skill.trim(); }).join(', ');
    var referenceName = document.getElementById("referenceName").value;
    var referenceContact = document.getElementById("referenceContact").value;
    var resumeContent = "\n    <p><strong>Name:</strong> ".concat(name, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n    <h2>Education</h2>\n    <p><strong>Degree:</strong> ").concat(degree, "</p>\n    <p><strong>Institution:</strong> ").concat(institution, "</p>\n    <p><strong>Years Attended:</strong> ").concat(years, "</p>\n\n    <h2>Work Experience</h2>\n    <p><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n    <p><strong>Company:</strong> ").concat(company, "</p>\n    <p><strong>Description:</strong> ").concat(jobDescription, "</p>\n\n    <h2>Projects</h2>\n    <p><strong>").concat(projectName, ":</strong> ").concat(projectDescription, "</p>\n\n    <h2>Skills</h2>\n    <p>").concat(skills, "</p>\n\n    <h2>References</h2>\n    <p><strong>").concat(referenceName, ":</strong> ").concat(referenceContact, "</p>\n  ");
    var resumeDiv = document.getElementById("resumeContent");
    resumeDiv.innerHTML = resumeContent;
    var resumeSection = document.getElementById("resume");
    var formSection = document.getElementById("resumeForm");
    formSection.style.display = "none"; // Hide form
    resumeSection.style.display = "block"; // Show resume
}
