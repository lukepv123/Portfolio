function filterProjects() {
    const filterValue = document.getElementById('tech-filter').value;
    const projects = document.querySelectorAll('.project-item');

    projects.forEach(project => {
        if (filterValue === 'all' || project.getAttribute('data-tech').includes(filterValue)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}