const pages = {
  home: { title: 'A collection of work.', eyebrow: 'The ongoing collection', intro: 'Bible studies, projects, and ideas along the way.', section: 'Latest additions', note: 'A little of everything, gathered in one place.', drawing: 0 },
  'bible-studies': { title: 'Bible studies.', eyebrow: 'Read. Reflect. Return.', intro: 'Series I teach, with room for the ones still to come.', section: 'The study collection', note: 'A space for each series, its sessions, and resources.', drawing: 1 },
  projects: { title: 'Projects.', eyebrow: 'Made along the way', intro: 'A gallery of things I’m working on and bringing to life.', section: 'The project collection', note: 'Finished work and works in progress.', drawing: 2 },
  ideas: { title: 'Ideas.', eyebrow: 'Room to explore', intro: 'Notes, questions, and beginnings worth keeping.', section: 'The notebook', note: 'A place for thoughts to take shape.', drawing: 3 },
  about: { title: 'About me.', eyebrow: 'Behind the collection', intro: 'I’m Nathaniel. I teach Bible studies and make things.', section: 'A little introduction', note: 'More of the story, in time.', drawing: 4 },
};
const key = location.pathname.split('/').filter(Boolean).find(part => pages[part]) || 'home';
const page = pages[key];
document.title = `${key === 'home' ? 'Home' : page.title.replace('.', '')} — Nathaniel`;
document.querySelector('meta[name="description"]').content = page.intro;
document.querySelectorAll('nav a').forEach(a => { if (a.dataset.page === key) a.setAttribute('aria-current', 'page'); });
document.querySelector('#eyebrow').textContent = page.eyebrow;
document.querySelector('h1').textContent = page.title;
document.querySelector('#intro').textContent = page.intro;
document.querySelector('#section-title').textContent = page.section;
document.querySelector('#section-note').textContent = page.note;
document.querySelector('.drawing').style.setProperty('--panel', page.drawing);
const collections = {
  home: [ ['Bible study series', 'Bible studies', 'bible-studies', '01'], ['A project in the making', 'Projects', 'projects', '02'], ['From the notebook', 'Ideas', 'ideas', '03'], ['A new session', 'Bible studies', 'bible-studies', '04'], ['Something taking shape', 'Projects', 'projects', '05'], ['A question to explore', 'Ideas', 'ideas', '06'] ],
  'bible-studies': [['Your first study series', 'Series', null, '01'], ['Your next study series', 'Series', null, '02'], ['Room for more', 'Series', null, '03']],
  projects: [['Your first project', 'Project', null, '01'], ['A work in progress', 'Project', null, '02'], ['Room for more', 'Project', null, '03']],
  ideas: [['A note to return to', 'Note', null, '01'], ['A question to explore', 'Thought', null, '02'], ['A new beginning', 'Idea', null, '03']],
};
const grid = document.querySelector('#gallery');
if (key === 'about') {
  grid.classList.add('about');
  grid.innerHTML = '<div class="about-number">Hello.</div><div><h3>A space for what I’m learning and making.</h3><p>This collection brings together the Bible studies I teach, my projects, and ideas I want to explore.</p><p class="muted">More about me coming soon.</p></div>';
  document.querySelector('.template-note').hidden = true;
} else {
  collections[key].forEach(([title, category, route, number], i) => {
    const item = document.createElement(route ? 'a' : 'article');
    item.className = `card card-${i % 3}`;
    if (route) item.href = `/${route}/`;
    item.innerHTML = `<div class="card-cover" aria-hidden="true"><span class="cover-category">${category}</span><span class="cover-number">${number}</span><span class="cover-label">${key === 'home' ? 'THE COLLECTION' : 'COMING SOON'}</span></div><div class="card-meta"><span>${category}</span><span>Placeholder</span></div><h3>${title}${route ? '<span aria-hidden="true">↗</span>' : ''}</h3>`;
    grid.append(item);
  });
}
