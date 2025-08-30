document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            window.location.href = url;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.title');
    const mainContent = document.querySelector('main');

    const contentData = {
        'python-developer': `
            <section>
                <h2>Python Developer</h2>
                <p class="p2">Welcome to the Python Developer page. Here you'll find information about my Python projects and skills.</p>
                <h3 class="developer">Projects</h3>
                <ul class="ul1">
                    <li>Flappy Bird Clone using Python</li>
                    <li>Tic Tac Toe game with multiplayer functionality</li>
                    <li>Snake game with leaderboard and high score tracking</li>
                </ul>
                <h3 class="developer">Skills</h3>
                <ul class="ul2">
                    <li>Web development with Flask and Django</li>
                    <li>Data analysis with Pandas and NumPy</li>
                    <li>Machine learning with Scikit-Learn</li>
                    <li>Automation with Selenium and BeautifulSoup</li>
                </ul>
            </section>
        `,
        'html-developer': `
            <section>
                <h2>HTML Developer</h2>
                <p class="p2">As an HTML Developer, I specialize in creating the structure of web pages using semantic HTML5.</p>
                <h3class="developer">Projects</h3>
                <ul class="ul1">
                    <li>Responsive landing pages</li>
                    <li>Accessibility-focused web designs</li>
                    <li>SEO-optimized content structures</li>
                </ul>
                <h3 class="developer">Skills</h3>
                <ul class="ul2">
                    <li>Semantic HTML5</li>
                    <li>Form handling and validation</li>
                    <li>SEO best practices</li>
                </ul>
            </section>
        `,
        'css-developer': `
            <section>
                <h2>CSS Developer</h2>
                <p class="p2">As a CSS Developer, I create visually appealing and responsive web designs.</p>
                <h3 class="developer">Projects</h3>
                <ul class="ul1">
                    <li>Responsive e-commerce websites</li>
                    <li>Customizable landing pages</li>
                    <li>CSS animations and transitions</li>
                </ul>
                <h3 class="developer">Skills</h3>
                <ul class="ul2">
                    <li>Responsive design</li>
                    <li>CSS Grid and Flexbox</li>
                    <li>CSS animations</li>
                </ul>
            </section>
        `,
        'javascript-developer': `
            <section>
                <h2>JavaScript Developer</h2>
                <p class="p2">As a JavaScript Developer, I build interactive and dynamic web applications.</p>
                <h3 class="developer">Projects</h3>
                <ul class="ul1">
                    <li>Rock-Paper-Scissors game with AI opponent</li>
                    <li>Interactive web applications</li>
                    <li>Real-time data visualizations</li>
                </ul>
                <h3 class="developer">Skills</h3>
                <ul class="ul2">
                    <li>DOM manipulation</li>
                    <li>Asynchronous programming with Promises and async/await</li>
                    <li>Frameworks: React, Vue</li>
                </ul>
            </section>
        `,
        'c-developer': `
            <section>
                <h2>C Developer</h2>
                <p class="p2">As a C Developer, I work on system-level programming, data structures, and performance-driven applications.</p>
                <h3 class="developer">Projects</h3>
                <ul class="ul1">
                    <li>Library Management System in C</li>
                    <li>Banking System Project (mini ATM simulation)</li>
                    <li>Student Record Management with File Handling</li>
                </ul>
                <h3 class="developer">Skills</h3>
                <ul class="ul2">
                    <li>Data Structures and Algorithms</li>
                    <li>Memory management (pointers, dynamic allocation)</li>
                    <li>File handling and system-level programming</li>
                </ul>
            </section>
        `
    };

    titles.forEach(title => {
        title.addEventListener('click', function() {
            const contentKey = this.getAttribute('data-title');
            if (contentData[contentKey]) {
                mainContent.innerHTML = contentData[contentKey];
            }
        });
    });
});
