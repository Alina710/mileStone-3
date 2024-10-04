document.getElementById("generateBtn")?.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission
  generateResume();
});

function generateResume(): void {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;

  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const institution = (document.getElementById("institution") as HTMLInputElement).value;
  const years = (document.getElementById("years") as HTMLInputElement).value;

  const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
  const company = (document.getElementById("company") as HTMLInputElement).value;
  const jobDescription = (document.getElementById("jobDescription") as HTMLTextAreaElement).value;

  const projectName = (document.getElementById("projectName") as HTMLInputElement).value;
  const projectDescription = (document.getElementById("projectDescription") as HTMLTextAreaElement).value;

  const skills = (document.getElementById("skills") as HTMLInputElement).value.split(',').map(skill => skill.trim()).join(', ');

  const referenceName = (document.getElementById("referenceName") as HTMLInputElement).value;
  const referenceContact = (document.getElementById("referenceContact") as HTMLInputElement).value;

  const resumeContent = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>

    <h2>Education</h2>
    <p><strong>Degree:</strong> ${degree}</p>
    <p><strong>Institution:</strong> ${institution}</p>
    <p><strong>Years Attended:</strong> ${years}</p>

    <h2>Work Experience</h2>
    <p><strong>Job Title:</strong> ${jobTitle}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Description:</strong> ${jobDescription}</p>

    <h2>Projects</h2>
    <p><strong>${projectName}:</strong> ${projectDescription}</p>

    <h2>Skills</h2>
    <p>${skills}</p>

    <h2>References</h2>
    <p><strong>${referenceName}:</strong> ${referenceContact}</p>
  `;

  const resumeDiv = document.getElementById("resumeContent") as HTMLElement;
  resumeDiv.innerHTML = resumeContent;

  const resumeSection = document.getElementById("resume") as HTMLElement;
  const formSection = document.getElementById("resumeForm") as HTMLElement;

  formSection.style.display = "none"; 
  resumeSection.style.display = "block"; 
}
