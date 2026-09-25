// All content is provisional, drawn from the supplied website sketch.
const pages = {
  home: ['Nathaniel Silveira', 'Studies, projects, and things along the way.', [209, 170, 130, 142]],
  'bible-studies': ['Bible Studies', 'A growing collection of studies, one series at a time.', [865, 158, 130, 132]],
  projects: ['Projects', 'Things I’m building, exploring, and bringing to life.', [1549, 155, 130, 134]],
  ideas: ['Ideas', 'A little room for what comes next.', [540, 573, 132, 145]],
  about: ['About', 'The person behind the collection.', [1187, 588, 137, 142]],
};
const key = location.pathname.split('/').filter(Boolean).find(part => pages[part]) || 'home';
const [title, intro, portrait] = pages[key];
document.title = `${key === 'home' ? 'Home' : title} — Nathaniel`;
document.querySelector('meta[name="description"]').content = intro;
document.querySelectorAll('nav a').forEach(a => { if (a.dataset.page === key) a.setAttribute('aria-current', 'page'); });
document.querySelector('h1').textContent = title;
document.querySelector('#intro').textContent = intro;
document.body.dataset.page = key;
function cropStyle([x,y,w,h]) { return `background-size:${2048 / w * 100}% ${1028 / h * 100}%;background-position:${x / (2048-w)*100}% ${y / (1028-h)*100}%;aspect-ratio:${w}/${h}`; }
document.querySelector('.portrait').style.cssText = cropStyle(portrait);
const art = {
  video: [174,359,208,113], meetitude: [460,353,227,121], kingdom: [1112,344,237,126], phone: [1745,346,233,126], note: [401,771,226,119],
};
function sketch(name, label) { return `<div class="sketch artwork" role="img" aria-label="${label}" style="${cropStyle(art[name])}"></div>`; }
const content = document.querySelector('#content');
function feature(label, name, image, description, route = '') {
  return `<section class="feature"><h2>${label}</h2>${route ? `<a class="feature-link" href="${route}">` : ''}<div class="picture-frame">${sketch(image, `${name} sketch`)}</div><div class="feature-caption"><h3>${name}</h3>${route ? '<span aria-hidden="true">↗</span>' : ''}</div>${route ? '</a>' : ''}<p class="feature-description">${description}</p></section>`;
}
const studies = [
  {name:'Every Jesus Parable Explained', color:'blue', glyph:'↗', detail:'A place for the parables, their context, and what they teach.', image:'kingdom'},
  {name:'Every Book Explained', color:'peach', glyph:'▤', detail:'A series exploring the books of the Bible.', image:'kingdom'},
  {name:'What is the Holy Spirit?', color:'purple', glyph:'?', detail:'A place to study the Holy Spirit through Scripture.', image:'kingdom'},
  {name:'Every Bible “Contradiction” Debunked', color:'mint', glyph:'“ ”', detail:'Questions and passages to explore in context.', image:'kingdom'},
];
const projects = [
  {name:'OneSource Rebuild',color:'stone',glyph:'01',detail:'A home for the OneSource project and future updates.',image:'phone'},
  {name:'Meetitude',color:'yellow',glyph:'M',detail:'A home for Meetitude and the work behind it.',image:'meetitude'},
  {name:'UMB Navigator',color:'pink',glyph:'↗',detail:'A home for UMB Navigator and future updates.',image:'phone'},
  {name:'Smart Classroom Attendance System',color:'aqua',glyph:'S',detail:'A home for the classroom attendance project.',image:'meetitude'},
];
if (key === 'home') {
  content.className = 'home-grid';
  content.innerHTML = feature('Latest video', 'A new study, coming soon', 'video', 'Room for the next video in the collection.', '/bible-studies/') + feature('Latest project', 'Meetitude', 'meetitude', 'A glimpse of what I’m working on.', '/projects/');
} else if (key === 'bible-studies' || key === 'projects') {
  const isStudies = key === 'bible-studies';
  const items = isStudies ? studies : projects;
  content.className = 'browse-grid';
  content.innerHTML = `<section class="library" aria-label="${isStudies ? 'Study series' : 'Projects'}"><label class="search-box"><span aria-hidden="true" class="search-icon"></span><input type="search" id="search" placeholder="Search ${isStudies ? 'Bible studies' : 'projects'}…" aria-label="Search ${isStudies ? 'Bible studies' : 'projects'}"></label><div class="item-list" id="item-list"></div><p class="search-status" id="search-status" role="status" aria-live="polite"></p></section><div id="preview" aria-live="polite"></div>`;
  const list = document.querySelector('#item-list');
  const preview = document.querySelector('#preview');
  let selected = null;
  function updatePreview(item) {
    preview.innerHTML = feature(item ? (isStudies ? 'Selected series' : 'Selected project') : (isStudies ? 'Latest series' : 'Latest project'), item?.name || (isStudies ? 'Kingdom of God' : 'OneSource app'), item?.image || (isStudies ? 'kingdom' : 'phone'), item?.detail || (isStudies ? 'A space for the next series and its sessions.' : 'A space for the latest project and its story.')) + '<p class="sample-label">Preview · content coming soon</p>';
  }
  function renderList(query = '') {
    const matched = items.filter(item => item.name.toLowerCase().includes(query.trim().toLowerCase()));
    list.replaceChildren();
    for (const item of matched) {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'list-item';
      button.setAttribute('aria-pressed', String(selected === item));
      const icon = document.createElement('span'); icon.className = `item-icon ${item.color}`; icon.textContent = item.glyph; icon.setAttribute('aria-hidden','true');
      const label = document.createElement('span'); label.textContent = item.name;
      button.append(icon,label);
      button.addEventListener('click', () => { selected = item; updatePreview(item); renderList(document.querySelector('#search').value); const buttons = [...list.querySelectorAll('button')]; buttons.find(b=>b.textContent === button.textContent)?.focus(); });
      list.append(button);
    }
    if (!matched.length) { const empty = document.createElement('p'); empty.className='empty'; empty.textContent='No matches. Try another search.'; list.append(empty); }
    document.querySelector('#search-status').textContent = query ? `${matched.length} ${matched.length === 1 ? 'match' : 'matches'}` : `${items.length} ${isStudies ? 'series' : 'projects'} in the collection`;
  }
  document.querySelector('#search').addEventListener('input', e => renderList(e.target.value));
  renderList(); updatePreview(null);
} else if (key === 'ideas') {
  content.className='ideas-grid';
  content.innerHTML = feature('On the drawing board', 'The next video idea', 'note', 'A space for notes, questions, and future studies.') + `<section class="requests"><h2>Video requests</h2><p class="request-intro">What would you like to explore?</p><form id="request-form"><label for="request">Your idea</label><textarea id="request" name="request" placeholder="A question, a passage, a topic…" required maxlength="500" rows="3"></textarea><div class="form-bottom"><span>Local demo · only saved in this browser</span><button class="submit-button" type="submit">Add idea <span aria-hidden="true">+</span></button></div></form><p id="request-status" role="status"></p><ul id="requests-list" aria-label="Your video ideas"></ul></section>`;
  const storageKey='nathaniel-video-ideas-v1'; let requests=[];
  try { const stored=JSON.parse(localStorage.getItem(storageKey)||'[]'); if(Array.isArray(stored)) requests=stored.filter(x=>typeof x==='string' && x.length<=500).slice(0,50); } catch {}
  const list=document.querySelector('#requests-list');
  function renderRequests() { list.replaceChildren(); if(!requests.length) { const li=document.createElement('li'); li.className='empty'; li.textContent='Your ideas will appear here.'; list.append(li); } else requests.forEach((text,index)=>{const li=document.createElement('li'); const label=document.createElement('span'); label.className='request-author'; label.textContent='Your idea'; const p=document.createElement('p'); p.textContent=text; const remove=document.createElement('button');remove.type='button';remove.className='remove-request';remove.textContent='Remove';remove.setAttribute('aria-label','Remove idea: '+text);remove.addEventListener('click',()=>{requests.splice(index,1);try{localStorage.setItem(storageKey,JSON.stringify(requests));document.querySelector('#request-status').textContent='Idea removed.';}catch{document.querySelector('#request-status').textContent='Removed for this visit. Browser storage is unavailable.';}renderRequests();});li.append(label,p,remove);list.append(li);}); }
  document.querySelector('#request-form').addEventListener('submit',e=>{e.preventDefault();const field=document.querySelector('#request');const value=field.value.trim();if(!value){field.setCustomValidity('Write a short idea first.');field.reportValidity();return;}requests.unshift(value);requests=requests.slice(0,50);let saved=true;try{localStorage.setItem(storageKey,JSON.stringify(requests));}catch{saved=false;}renderRequests();field.value='';document.querySelector('#request-status').textContent=saved?'Idea saved in this browser. It has not been sent to Nathaniel.':'Idea added for this visit. Browser storage is unavailable.';});
  document.querySelector('#request').addEventListener('input',e=>e.target.setCustomValidity(''));
  renderRequests();
} else {
  content.className='about-content';
  content.innerHTML=`<a class="contact" href="mailto:nathaniel.silveira10@gmail.com">nathaniel.silveira10@gmail.com</a><div class="about-copy"><h2>Hi, I’m Nathaniel.</h2><p>I teach Bible studies and make things. This is a place to bring that work together: the series I teach, the projects I build, and the ideas I’m still exploring.</p><p class="muted">More of the story coming soon.</p></div>`;
}
