const filterLinks = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project');

filterLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const filter = link.getAttribute('data-filter');

        projects.forEach(project => {
            const category = project.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                project.style.display = 'block'; // Show matching projects
            } else {
                project.style.display = 'none'; // Hide non-matching projects
            }
        });
    });
});


// Modal elements
const modal = document.getElementById("project-modal");
const modalMediaContainer = document.querySelector(".modal-left");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close");

// Add event listeners to all projects
document.querySelectorAll(".project").forEach(project => {
    project.addEventListener("click", () => {
        const title = project.getAttribute("data-title");
        const description = project.getAttribute("data-description");
        const image = project.getAttribute("data-image");
        const video = project.getAttribute("data-video");

        // Populate modal
        modalTitle.textContent = title;
        modalDescription.innerHTML = description;

        // Clear existing media
        modalMediaContainer.innerHTML = "";

        // Add image if it exists
        if (image) {
            const imgElement = document.createElement("img");
            imgElement.src = image;
            imgElement.alt = title;
            imgElement.style.width = "100%";
            imgElement.style.borderRadius = "10px";
            modalMediaContainer.appendChild(imgElement);
        }

        // Add video if it exists
        if (video) {
            const videoElement = document.createElement("video");
            videoElement.src = video;
            videoElement.controls = true;
            videoElement.style.width = "100%";
            videoElement.style.marginTop = "1rem";
            modalMediaContainer.appendChild(videoElement);
        }

        // Show modal
        modal.style.display = "flex";
    });
});

// Close modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", event => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
