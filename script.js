document.getElementById('resumeMain')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get references to form elements using their IDs
    const profilePictureInput = document.getElementById('profilePicture');
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const addressElement = document.getElementById('address');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');

    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        const resumeBtn = `
        <div>
        
        <h2>Resume </h2>
        <div class="resume-wrap"> 
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
                <div class="profile-detail">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone Number:</strong> ${phone}</p>
                    <p><strong>Address:</strong> ${address}</p>
                </div>
        </div>

        <div class="edu">
            <h3>Education</h3>
            <p>${education}</p>
        </div>
        <hr/>

        <div class="work">
            <h3>Work Experience</h3>
            <p>${experience}</p>
        </div>
        <hr/>

        <div class="skill">
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>
        <hr/>
        </div>
        `;

        const resumeOutputElement = document.getElementById('resumeBtn');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeBtn;
        } 
        document.getElementById('resumeForm')?.reset();
    }
});