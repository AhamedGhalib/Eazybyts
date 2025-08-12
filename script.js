document.addEventListener('DOMContentLoaded', function() {
    // Skills data
    const skills = [
        { name: 'HTML'},
        { name: 'CSS'},
        { name: 'JavaScript',},
        { name: 'Python'},
        { name: 'UI/UX'}
    ];

    // Projects data
    const projects = [
        { 
            title: 'Deep Fake Detection System', 
            description: 'Developed an AI-powered system to detect deepfake images and videos using machine learning techniques Implemented convolutional neural networks (CNNs) for feature extraction and classification.',
            tools: 'Python, TensorFlow, OpenCV, Deep Learning.',
        },
        { 
            title: 'Stock Market Trend Prediction System',
            description: 'Developed a predictive system using machine learning models to analyze and forecast stock market trends. Implemented LSTM (Long Short-Term Memory) networks for time-series analysisand trend prediction.',
            tools: 'Python, Pandas, scikit-learn, TensorFlow, Keras.',
        },
        {
            title: 'Connect-4 Game using Python',
            description: 'Designed and developed a digital version of the classic Connect 4 board game using Python. Implemented a graphical user interface (GUI) using Pygame for an interactive gaming experience. Added an AI opponent using Minimax algorithm with Alpha-Beta pruning forintelligent gameplay.',
            tools: 'Python, Pygame, Minimax Algorithm.',
        }
    ];

    // Skills section
    const skillsContainer = document.querySelector('.skills-container');
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <h3>${skill.name}</h3>
        `;
        skillsContainer.appendChild(skillCard);
    });

    // Projects section
    const projectsContainer = document.querySelector('.projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p>Tools Used: ${project.tools}</p>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});