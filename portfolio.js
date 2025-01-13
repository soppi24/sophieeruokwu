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
