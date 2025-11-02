const data = [

  { title:"supernatural", year:2024, type:"song", cover:"./assets/album-covers/supernatural.jpg" },

  { title:"eternal sunshine deluxe: brighter days ahead", year:2025, type:"Album", cover:"./assets/album-covers/eternalsunshinedeluxe.png" },
  { title:"eternal sunshine deluxe: brighter days ahead (a cappella version)", year:2025, type:"Album", cover:"./assets/album-covers/es-acapella.jpeg" },
  { title:"eternal sunshine deluxe: brighter days ahead (instrumental version)", year:2025, type:"Album", cover:"./assets/album-covers/es-instrumental.jpg" },


  { title:"eternal sunshine", year:2024, type:"Album", cover:"./assets/album-covers/eternalsunshine.png" },
  { title:"Wicked: The Soundtrack", year:2024, type:"Compilation", cover:"./assets/album-covers/wicked.jpeg" },
  { title:"yes, and?", year:2024, type:"Single", cover:"./assets/album-covers/yesand.png" },


  { title:"Positions", year:2020, type:"Album", cover:"./assets/album-covers/positions.png" },
  { title:"Positions (Deluxe)", year:2021, type:"Album", cover:"./assets/album-covers/positionsdeluxe.jpeg" },

  { title:"thank u, next", year:2019, type:"Album", cover:"./assets/album-covers/thankunext.jpg" },
  { title:"Sweetener", year:2018, type:"Album", cover:"./assets/album-covers/sweetener.jpg" },
  { title:"Dangerous Woman", year:2016, type:"Album", cover:"./assets/album-covers/dangerouswoman.jpg" },
  { title:"My Everything", year:2014, type:"Album", cover:"./assets/album-covers/myeverything.jpg" },
  { title:"Yours Truly", year:2013, type:"Album", cover:"./assets/album-covers/yourstruly.jpg" },
  { title:"Santa Tell Me", year:2014, type:"Single", cover:"./assets/album-covers/santatellme.jpg" },
  { title:"Christmas Kisses", year:2013, type:"EP", cover:"./assets/album-covers/christmaskisses.png" },


];

const pref = {
  tab: 'All',      
  query: '',
  sort: 'year-desc'    
};

const chips = document.getElementById('typeChips');
const q = document.getElementById('q');
const sortBy = document.getElementById('sortBy');
const latestList = document.getElementById('latestList');
const listTitle = document.getElementById('listTitle');
const releaseList = document.getElementById('releaseList');
const empty = document.getElementById('empty');
const reset = document.getElementById('reset');
const toggleSearch = document.getElementById('toggleSearch');
const controls = document.getElementById('controls');

toggleSearch.addEventListener('click', () => {
  controls.classList.toggle('show');
  if(controls.classList.contains('show')) q.focus();
});

chips.addEventListener('click', (e)=>{
  const btn = e.target.closest('.chip');
  if(!btn) return;
  chips.querySelectorAll('.chip').forEach(c=>c.classList.remove('is-active'));
  btn.classList.add('is-active');
  pref.tab = btn.dataset.type;
  render();
});


q.addEventListener('input', e => { pref.query = e.target.value.trim(); render(); });
sortBy.addEventListener('change', e => { pref.sort = e.target.value; render(); });
reset.addEventListener('click', ()=>{
  pref.tab = 'Albums';
  pref.query = '';
  pref.sort = 'year-desc';
  chips.querySelectorAll('.chip').forEach(c=>c.classList.remove('is-active'));
  chips.querySelector('[data-type="Albums"]').classList.add('is-active');
  q.value = '';
  sortBy.value = 'year-desc';
  render();
});

function listForTab(items){
  if(pref.tab === 'All') return items;
  if(pref.tab === 'Albums') return items.filter(x=> x.type === 'Album');
  if(pref.tab === 'SinglesEPs') return items.filter(x=> x.type === 'Single' || x.type === 'EP');
  if(pref.tab === 'Compilation') return items.filter(x=> x.type === 'Compilation');
  if(pref.tab === 'Live') return items.filter(x=> x.type === 'Live');
  return items.filter(x=> x.type === pref.tab.slice(0,-0)); // Compilations, Live
}
function filterQuery(items){
  if(!pref.query) return items;
  const qq = pref.query.toLowerCase();
  return items.filter(x => x.title.toLowerCase().includes(qq) || String(x.year).includes(qq));
}
function sortItems(items){
  const arr = items.slice();
  if(pref.sort === 'az') arr.sort((a,b)=> a.title.localeCompare(b.title) || b.year - a.year);
  else if(pref.sort === 'year-asc') arr.sort((a,b)=> a.year - b.year || a.title.localeCompare(b.title));
  else arr.sort((a,b)=> b.year - a.year || a.title.localeCompare(b.title));
  return arr;
}
function latestOf(items){
  return items.slice().sort((a,b)=> b.year - a.year || a.title.localeCompare(b.title))[0];
}
function itemHTML(r){
  const cover = r.cover || './assets/images/placeholder.jpg';
  return `
    <li class="item" data-type="${r.type}" data-year="${r.year}">
      <img class="thumb" src="${cover}" alt="${r.title} cover" loading="lazy" />
      <div class="meta">
        <h3 class="title">${r.title}</h3>
        <p class="sub">${r.year} | ${r.type}</p>
      </div>
    </li>
  `;
}

function render(){
  const scoped = sortItems(filterQuery(listForTab(data)));

  // Latest release (always the newest overall)
  const latest = latestOf(data);
  latestList.innerHTML = latest ? itemHTML(latest) : '';

  const titleMap = {
    Albums: 'Albums',
    SinglesEPs: 'Singles and EPs',
    Compilation: 'Compilation',
    Live: 'Live',
    All: 'All releases'
  };
  listTitle.textContent = titleMap[pref.tab];

  // Main list
  releaseList.innerHTML = scoped.map(itemHTML).join('');

  empty.hidden = scoped.length !== 0;
}

render();
