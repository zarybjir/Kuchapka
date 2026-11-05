const SEED_RECIPE = {
  id: "seed-butter-chicken",
  title: "Butter Chicken (thatdudecancook)",
  description: "Pečené marinované kuře v hedvábné kešu-rajčatové omáčce.",
  category: "Indická kuchyně",
  baseServings: 4,
  doneSteps: [],
  groups: [
    {
      name: "Marináda",
      items: [
        {name:"kuřecí prsa, na pečení pod grilem", amount:900, unit:"g"},
        {name:"čerstvě vymačkaná citronová šťáva", amount:2, unit:"lžíce"},
        {name:"kašmírská chilli paprika", amount:3, unit:"lžičky"},
        {name:"kosher sůl", amount:1, unit:"lžička"},
        {name:"řecký jogurt", amount:0.33, unit:"hrnku"},
        {name:"avokádový olej", amount:2, unit:"lžíce"},
        {name:"mletá pískavice, nejlépe lístky", amount:1, unit:"lžička"},
        {name:"mletá kurkuma", amount:2, unit:"lžičky"},
        {name:"nasekaný česnek", amount:3, unit:"lžíce"},
        {name:"nasekaný zázvor", amount:1, unit:"lžíce"},
        {name:"garam masala", amount:2, unit:"lžičky"}
      ]
    },
    {
      name: "Omáčka",
      items: [
        {name:"rajčata dle výběru, konzervovaná nebo čerstvá", amount:680, unit:"g"},
        {name:"skořicová tyčinka", amount:1, unit:"ks"},
        {name:"zelená chilli paprička", amount:1, unit:"ks"},
        {name:"naklepané kardamomové lusky", amount:6, unit:"ks"},
        {name:"celé hřebíčky", amount:3, unit:"ks"},
        {name:"neslané máslo, na začátek omáčky", amount:40, unit:"g"},
        {name:"neslané máslo, na dokončení omáčky", amount:30, unit:"g"},
        {name:"nasekaný česnek", amount:2, unit:"lžíce"},
        {name:"nasekaný zázvor", amount:2, unit:"lžičky"},
        {name:"syrové kešu ořechy", amount:30, unit:"ks"},
        {name:"kašmírská chilli paprika", amount:2, unit:"lžičky"},
        {name:"cukr", amount:1, unit:"lžička"},
        {name:"voda", amount:2, unit:"hrnky"},
        {name:"garam masala", amount:1, unit:"lžička"},
        {name:"smetana ke šlehání", amount:0.25, unit:"hrnku"},
        {name:"semínka pískavice, nejlépe lístky", amount:1, unit:"lžička"},
        {name:"sůl dle chuti", amount:1.5, unit:"lžičky"},
        {name:"nasekaný koriandr, na ozdobu", amount:2, unit:"lžíce"},
        {name:"smetana, na ozdobu", amount:2, unit:"lžíce"}
      ]
    }
  ],
  steps: [
    {title:"① Marináda – 1. část", content:"Kuře osušte a promíchejte s citronovou šťávou, kašmírskou chilli paprikou a solí. Nechte chvíli odstát, než připravíte druhou marinádu."},
    {title:"① Marináda – 2. část", content:"Přidejte řecký jogurt, avokádový olej, pískavici, kurkumu, česnek, zázvor a garam masalu. Kuře důkladně obalte, přikryjte a dejte marinovat do lednice – ideálně přes noc, minimálně 2 hodiny."},
    {title:"① Upečte kuře pod grilem", content:"Rozpalte gril (broiler) na maximum. Kuře dejte na mřížku nad plech, aby stékala šťáva, a pečte cca 10–12 minut, jednou obraťte, dokud není propečené a mírně připálené po okrajích. Šťávu si schovejte do omáčky. Kuře nechte odpočinout a nakrájejte na kousky."},
    {title:"② Omáčka – orestujte koření", content:"V hrnci rozpusťte máslo na začátek omáčky. Přidejte skořici, kardamom, hřebíček a chilli papričku a orestujte, dokud nezavoní."},
    {title:"② Omáčka – česnek a zázvor", content:"Vmíchejte česnek a zázvor a restujte asi minutu."},
    {title:"② Omáčka – vařte základ", content:"Přidejte rajčata, kešu, chilli papriku, cukr, schovanou šťávu z kuřete a vodu. Přikryjte a duste 20–25 minut, dokud se rajčata nerozvaří a kešu nezměknou."},
    {title:"② Omáčka – rozmixujte a přeceďte", content:"Vyjměte skořicovou tyčinku, kardamom a hřebíček. Omáčku dokonale rozmixujte a propasírujte přes jemné síto zpět do hrnce."},
    {title:"② Omáčka – dochuťte", content:"Vmíchejte garam masalu, máslo na dokončení a pískavici. Chvíli povařte, aby zhoustla, a dosolte."},
    {title:"Přidejte kuře a smetanu", content:"Do omáčky přidejte pečené kuře a duste 5–8 minut, aby se prohřálo a spojilo s omáčkou. Vmíchejte smetanu."},
    {title:"Ozdobte a podávejte", content:"Butter chicken ozdobte smetanou a koriandrem a podávejte třeba s rýží nebo pečivem dle chuti."}
  ],
  notes: "Kuře bylo v originále uvedeno jako 1,5–2 lb, zvolil jsem horní hranici (~900 g). Přesné časy vaření jsou odhad podle standardní techniky – doporučuji video jednou přehrát a doladit, než recept označíš za „ověřený“."
};

const SEED_RECIPE_2 = {
  id: "seed-rozlitany-ptacek",
  title: "Rozlítaný ptáček",
  description: "Hovězí krk dušený na tmavé cibuli, s buřty, vejci a kyselými okurkami.",
  category: "Česká kuchyně",
  baseServings: 4,
  doneSteps: [],
  groups: [
    {
      name: "Ingredience",
      items: [
        {name:"cibule (nakrájená nadrobno)", amount:3, unit:"ks"},
        {name:"máslo", amount:null, unit:""},
        {name:"sádlo", amount:null, unit:""},
        {name:"sůl", amount:null, unit:""},
        {name:"pepř (čerstvě namletý)", amount:null, unit:""},
        {name:"anglická slanina (nakrájená na kostičky)", amount:100, unit:"g"},
        {name:"hovězí krk (nakrájený na menší plátky)", amount:900, unit:"g"},
        {name:"vývar", amount:1, unit:"l"},
        {name:"hořčice", amount:2, unit:"lžičky"},
        {name:"hladká mouka", amount:null, unit:""},
        {name:"vejce", amount:3, unit:"ks"},
        {name:"buřt (nebo párky)", amount:3, unit:"ks"},
        {name:"kyselé okurky 8–10 ks + lák", amount:null, unit:""}
      ]
    }
  ],
  steps: [
    {title:"Základ z cibule", content:"Cibuli nakrájejte nadrobno. V hrnci rozehřejte kousek másla a kousek sádla – dva tuky dodají výraznější chuť. Přidejte cibuli, lehce osolte a nechte zvolna restovat. Barva cibule určí výslednou barvu omáčky."},
    {title:"Nakrájejte slaninu", content:"Anglickou slaninu nakrájejte na kostičky."},
    {title:"Připravte maso", content:"Hovězí krk nakrájejte na menší plátky. Recept se často připravuje z roštěné; hovězí krk vyjde levněji a nakrájený na menší kousky bude i dříve hotový."},
    {title:"Podlévejte cibuli", content:"Jakmile cibule začne získávat barvu, podlijte ji trochou vývaru. Ten se během chvíle vyvaří a cibule získá jednotnou barvu. Postup dvakrát až třikrát zopakujte."},
    {title:"Přidejte hořčici", content:"Do tmavé cibule vmíchejte hořčici, nechte odvařit ocet, který obsahuje, a odstavte."},
    {title:"Opečte slaninu a maso", content:"Na pánvi rozehřejte kousek sádla, opečte na něm slaninu a dejte ji stranou. Na výpeku orestujte maso, vždy jen v jedné vrstvě a zprudka. Obracejte postupně, aby pánev nevychladla a maso nezačalo pouštět šťávu. Ze stejného důvodu solte až po opečení. Větší množství masa opékejte po částech, stále jen v jedné vrstvě."},
    {title:"Spojte se základem", content:"Cibulový základ znovu zahřejte a přidejte maso se slaninou. Do pánve od masa nalijte vývar a odvařte připečeniny."},
    {title:"Duste v troubě", content:"Dolijte vývarem – hovězím, vepřovým, masovým i kuřecím. Podle potřeby osolte a opepřete, přikryjte pokličkou a vložte do trouby rozehřáté na 150 °C, dokud maso nezměkne."},
    {title:"Připravte jíšku", content:"Mezitím z másla a mouky připravte máslovou jíšku. Potřebujete mírně tmavší, což zabere přibližně 10 minut."},
    {title:"Vejce a buřty", content:"Vejce uvařte natvrdo, nechte zchladnout a oloupejte. Buřty oloupejte, rozřízněte napůl, nakrájejte na silnější plátky a opečte."},
    {title:"Zahustěte omáčku", content:"Jakmile je maso měkké, vyjměte hrnec z trouby a omáčku zahustěte jíškou."},
    {title:"Přidejte lák a buřty", content:"Do hrnce přidejte lák z okurek a opečené buřty a nechte 20 minut provařit."},
    {title:"Dokončete okurkami a vejci", content:"Kyselé okurky nakrájejte. Na posledních 10 minut je vložte do hrnce spolu s uvařenými vejci a nechte provařit. Podle potřeby osolte a opepřete. Poté můžete podávat."}
  ],
  notes: ""
};

const SEED_RECIPE_3 = {
  id: "seed-bolonske-ragu",
  title: "Boloňské ragú",
  description: "Ragù bolognese – pomalu dušené masové ragú z hovězího a vepřového. Správnou přílohou jsou ploché tagliatelle, nikoli špagety.",
  category: "Italská kuchyně",
  baseServings: 7,
  doneSteps: [],
  groups: [
    {
      name: "Suroviny",
      items: [
        {name:"bobkové listy", amount:2, unit:"ks"},
        {name:"kuličky černého pepře", amount:10, unit:"ks"},
        {name:"kuličky nového koření", amount:5, unit:"ks"},
        {name:"oloupaná cibule", amount:200, unit:"g"},
        {name:"oloupané stroužky česneku", amount:3, unit:"ks"},
        {name:"oloupaná mrkev", amount:300, unit:"g"},
        {name:"oloupaný celer", amount:200, unit:"g"},
        {name:"řapíkatý celer", amount:100, unit:"g"},
        {name:"lardo nebo pancetta", amount:100, unit:"g"},
        {name:"olivový olej", amount:100, unit:"ml"},
        {name:"mleté hovězí krk", amount:400, unit:"g"},
        {name:"mletý vepřový bok", amount:400, unit:"g"},
        {name:"sůl", amount:null, unit:""},
        {name:"rajský protlak", amount:150, unit:"g"},
        {name:"čerstvě mletý pepř", amount:0.5, unit:"lžičky"},
        {name:"suché červené víno", amount:300, unit:"ml"},
        {name:"voda", amount:null, unit:""},
        {name:"mletý muškátový oříšek", amount:1, unit:"lžička"}
      ]
    },
    {
      name: "Ještě potřebujete",
      items: [
        {name:"čtverec 10 × 10 cm čisté bílé látky nebo gázy", amount:null, unit:""},
        {name:"kuchyňský provázek", amount:null, unit:""},
        {name:"plochá vařečka", amount:null, unit:""}
      ]
    }
  ],
  steps: [
    {title:"Sáček s kořením", content:"Do látky dejte bobkové listy, kuličky pepře a nového koření. Pevně zavažte kuchyňským provázkem."},
    {title:"Cibule a česnek", content:"Cibuli a česnek nakrájejte najemno."},
    {title:"Mrkev a celer", content:"Mrkev a celer nakrájejte na kostičky o hraně 0,5 cm."},
    {title:"Řapíkatý celer", content:"Stonek řapíkatého celeru rozřízněte podélně na poloviny a ty nakrájejte na malé kousky."},
    {title:"Lardo", content:"Lardo nakrájejte na kostky o hraně 1 cm."},
    {title:"Orestujte zeleninu", content:"V kastrolu na středním ohni rozpalte olej a přidejte lardo. Jakmile začne zlátnout, přidejte mrkev, celer a řapíkatý celer. Za častého míchání orestujte zeleninu dozlatova."},
    {title:"Přidejte cibuli", content:"Přidejte cibuli a za častého míchání ji orestujte dozlatova."},
    {title:"Přidejte maso a česnek", content:"Přidejte maso a česnek. Důkladně vše promíchejte a osolte. Stáhněte oheň na třetinu, často míchejte a nechte vařit 10 minut."},
    {title:"Přidejte protlak", content:"Přidejte protlak a za častého míchání vařte 15 minut."},
    {title:"Koření a pepř", content:"Přidejte sáček s kořením a čerstvě mletý pepř."},
    {title:"Přilijte víno", content:"Přilijte víno a za občasného míchání nechte vařit 20 minut."},
    {title:"Duste 3 hodiny", content:"Přilijte 100 ml vody, stáhněte oheň na minimum, přidejte muškátový oříšek, zamíchejte a přiklopte pokličkou. Nechte dusit 3 hodiny za občasného promíchání."},
    {title:"Dokončení", content:"Pokud se tekutina během dušení z kastrolu zcela odpařila, přilijte dalších 100 ml vody, promíchejte a opět přiklopte pokličkou. Z hotového ragú vyjměte sáček s kořením a vyhoďte ho."}
  ],
  notes: "Lardo je italský špek, pancetta je italská zauzená slanina. Pro silnější omáčku lze místo vody použít hovězí vývar a nechat s masem vyvařit kůži z pancetty. Po orestování zeleniny a cibule lze přidat pokrájenou italskou čerstvou klobásu salsiccia staženou ze střívka. Ragú je nutné vařit pomalu na velmi mírném ohni – jen tak se důkladně provaří kolagen z hovězího masa a omáčka získá sílu. Původní recept je na 6–8 porcí."
};

const SEED_RECIPE_4 = {
  id: "seed-coleslaw",
  title: "Coleslaw",
  description: "Křupavý zelný salát s mrkví, křenem a majonézovým dresinkem.",
  category: "Saláty",
  baseServings: 4,
  doneSteps: [],
  groups: [
    {
      name: "Suroviny",
      items: [
        {name:"bílé zelí", amount:500, unit:"g"},
        {name:"oloupaná mrkev", amount:100, unit:"g"},
        {name:"sůl", amount:1, unit:"lžíce"},
        {name:"cukr krupice", amount:2, unit:"lžíce"},
        {name:"najemno nastrouhaný křen", amount:1, unit:"lžíce"},
        {name:"majonéza", amount:150, unit:"g"},
        {name:"ocet", amount:2, unit:"lžíce"}
      ]
    }
  ],
  steps: [
    {title:"Nakrájejte zelí a mrkev", content:"Ze zelí vykrojte tuhý střed a listy nakrájejte na jemné nudličky. Mrkev nastrouhejte nahrubo a dejte stranou."},
    {title:"Promíchejte a promačkejte", content:"Ve velké míse promíchejte zelí, sůl a cukr. Ochucené zelí promačkejte rukou, aby částečně zkřehlo. Přidejte křen a promíchejte. Majonézu a ocet promíchejte v misce a přidejte k zelí. Promíchejte. Nakonec přidejte mrkev a promíchejte."},
    {title:"Nechte vychladit", content:"Dejte vychladit do lednice a před podáváním promíchejte."}
  ],
  notes: "Mrkev přidávejte až na závěr, aby salát nezabarvila dočervena."
};

let recipes = [];
let currentRecipeId = null;
let currentServings = {};
let searchQuery = '';
let activeCategory = 'Vše';
let statsPeriod = 'month';
let editingId = null;
let wakeLock = null;

/* ---------- storage (local only) ---------- */
async function loadRecipes(){
  try{
    const raw = localStorage.getItem('kucharka_recipes');
    if(raw) return JSON.parse(raw);
    return null;
  }catch(e){ return null; }
}
async function saveRecipes(list){
  try{
    localStorage.setItem('kucharka_recipes', JSON.stringify(list));
    return true;
  }catch(e){ return false; }
}

/* ---------- theme ---------- */
function themeIconSVG(theme){
  if(theme==='dark'){
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  }
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
}
function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('theme-toggle').innerHTML = themeIconSVG(theme);
  try{ localStorage.setItem('kucharka_theme', theme); }catch(e){}
}
function toggleTheme(){
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  applyTheme(current==='dark' ? 'light' : 'dark');
}

/* ---------- wake lock (keep screen on while a recipe is open) ---------- */
async function updateWakeLock(active){
  try{
    if(active){
      if('wakeLock' in navigator){
        wakeLock = await navigator.wakeLock.request('screen');
      }
    } else if(wakeLock){
      await wakeLock.release();
      wakeLock = null;
    }
  }catch(e){ /* not critical if unsupported */ }
}
document.addEventListener('visibilitychange', async ()=>{
  if(document.visibilityState==='visible' && !document.getElementById('view-detail').classList.contains('hidden')){
    await updateWakeLock(true);
  }
});

function plural(n, one, few, many){
  const a = Math.abs(n);
  if(a === 1) return one;
  if(a >= 2 && a <= 4) return few;
  return many;
}
function servingsLabel(n){ return n + ' ' + plural(n, 'porce', 'porce', 'porcí'); }

function todayISO(){
  const d = new Date();
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function fmtDateCz(iso){
  const p = iso.split('-');
  if(p.length !== 3) return iso;
  return parseInt(p[2],10)+'. '+parseInt(p[1],10)+'. '+p[0];
}
function daysSince(iso){
  const p = iso.split('-').map(Number);
  const then = new Date(p[0], p[1]-1, p[2]);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((today - then) / 86400000);
}

async function markCookedToday(){
  const r = recipes.find(x=>x.id===currentRecipeId);
  if(!r) return;
  if(!Array.isArray(r.cooked)) r.cooked = [];
  const today = todayISO();
  if(!r.cooked.includes(today)) r.cooked.push(today);
  // finishing a recipe clears the working state for next time
  r.checkedIngredients = [];
  r.doneSteps = [];
  await saveRecipes(recipes);
  renderDetail();
}
async function removeCookDate(iso){
  const r = recipes.find(x=>x.id===currentRecipeId);
  if(!r || !Array.isArray(r.cooked)) return;
  r.cooked = r.cooked.filter(d => d !== iso);
  await saveRecipes(recipes);
  renderDetail();
}

function fmtAmount(n){
  if(n===null || n===undefined) return '';
  const rounded = Math.round(n*100)/100;
  const whole = Math.floor(rounded + 1e-9);
  const frac = rounded - whole;
  const fracs = [[0.25,'¼'],[0.33,'⅓'],[0.5,'½'],[0.67,'⅔'],[0.75,'¾']];
  for(const [val,sym] of fracs){
    if(Math.abs(frac-val) < 0.03){ return whole>0 ? (whole+' '+sym) : sym; }
  }
  let d = Math.round(rounded*10)/10;
  if(Number.isInteger(d)) return String(d);
  return String(d).replace('.', ',');
}

function recipeMatches(r, q){
  if(!q) return true;
  const hay = (r.title || '').toLowerCase();
  return q.split(/\s+/).filter(Boolean).every(term => hay.includes(term));
}

function loadFilterCollapsed(){
  try{ return localStorage.getItem('kucharka_filter_collapsed') === '1'; }catch(e){ return false; }
}
function saveFilterCollapsed(v){
  try{ localStorage.setItem('kucharka_filter_collapsed', v ? '1' : '0'); }catch(e){}
}
function applyFilterBarState(){
  const collapsed = loadFilterCollapsed();
  document.getElementById('cat-filter').classList.toggle('hidden', collapsed);
  document.getElementById('filter-toggle').classList.toggle('collapsed', collapsed);
  const label = document.getElementById('filter-toggle-label');
  label.textContent = (collapsed && activeCategory !== 'Vše') ? ('Kategorie: ' + activeCategory) : 'Kategorie';
}
function toggleFilterBar(){
  saveFilterCollapsed(!loadFilterCollapsed());
  applyFilterBarState();
}

function onSearchInput(){
  searchQuery = document.getElementById('search-input').value.trim().toLowerCase();
  document.getElementById('search-clear').classList.toggle('hidden', !searchQuery);
  renderList();
}
function clearSearch(){
  document.getElementById('search-input').value = '';
  searchQuery = '';
  document.getElementById('search-clear').classList.add('hidden');
  renderList();
}

function renderList(){
  const wrap = document.getElementById('recipe-list');
  const filterEl = document.getElementById('cat-filter');

  const allCats = ['Vše', ...Array.from(new Set(recipes.map(r => (r.category||'').trim()).filter(Boolean)))];
  if(!allCats.includes(activeCategory)) activeCategory = 'Vše';
  filterEl.innerHTML = allCats.map((cat, i) =>
    `<button class="cat-pill ${cat===activeCategory?'active':''}" data-cat-index="${i}">${escapeHtml(cat)}</button>`
  ).join('');
  filterEl.querySelectorAll('.cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = allCats[parseInt(btn.dataset.catIndex, 10)];
      renderList();
    });
  });
  applyFilterBarState();

  const matched = recipes
    .filter(r => activeCategory === 'Vše' || (r.category||'').trim() === activeCategory)
    .filter(r => recipeMatches(r, searchQuery));

  if(matched.length === 0){
    wrap.innerHTML = searchQuery
      ? '<div class="empty-state">Nic nenalezeno. Zkus jiný název.</div>'
      : `<div class="empty-state">
           Žádný recept tu zatím není.
           <button class="add-btn" style="margin-top:14px;" onclick="showAdd()">+ Přidat recept</button>
         </div>`;
    return;
  }

  wrap.innerHTML = matched.map(r => `
    <div class="recipe-card" data-recipe-id="${escapeHtml(r.id)}">
      ${r.category ? `<span class="cat-label">${escapeHtml(r.category)}</span>` : ''}
      <h3>${escapeHtml(r.title)}</h3>
      <div class="desc">${escapeHtml(r.description||'')}</div>
      <div class="meta"><span>${servingsLabel(r.baseServings)}</span><span class="chevron">&rsaquo;</span></div>
    </div>
  `).join('');

  wrap.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('click', () => openRecipe(card.dataset.recipeId));
  });
}

function openRecipe(id){
  currentRecipeId = id;
  const r = recipes.find(x=>x.id===id);
  if(!r) return;
  if(!(id in currentServings)) currentServings[id] = r.baseServings;
  renderDetail();
  showView('detail');
}

function changeServings(delta){
  const r = recipes.find(x=>x.id===currentRecipeId);
  if(!r) return;
  let v = currentServings[currentRecipeId] + delta;
  if(v < 1) v = 1;
  currentServings[currentRecipeId] = v;
  renderDetail();
}

function toggleStep(idx){
  const r = recipes.find(x=>x.id===currentRecipeId);
  if(!r) return;
  if(!r.doneSteps) r.doneSteps = [];
  const pos = r.doneSteps.indexOf(idx);
  if(pos>-1) r.doneSteps.splice(pos,1); else r.doneSteps.push(idx);
  saveRecipes(recipes);
  renderDetail();
}

function renderDetail(){
  const r = recipes.find(x=>x.id===currentRecipeId);
  if(!r) return;
  const scale = currentServings[currentRecipeId] / r.baseServings;
  const doneSteps = r.doneSteps || [];

  const checkedIng = Array.isArray(r.checkedIngredients) ? r.checkedIngredients : [];
  const groupsHtml = r.groups.map((g, gi) => `
    <div class="group-block">
      <span class="group-title">${escapeHtml(g.name)}</span>
      ${g.items.map((it, ii) => {
        const key = gi + '-' + ii;
        return `
        <div class="ingredient-row ${checkedIng.includes(key) ? 'checked' : ''}" data-ing-key="${key}">
          <span class="amt">${fmtAmount(it.amount!=null? it.amount*scale : null)}${it.unit? ' '+escapeHtml(it.unit):''}</span>
          <span>${escapeHtml(it.name)}</span>
        </div>`;
      }).join('')}
    </div>
  `).join('');

  const stepsHtml = r.steps.map((s,idx) => {
    const done = doneSteps.includes(idx);
    return `
      <div class="step-item ${done?'done':''}" onclick="toggleStep(${idx})">
        <div class="step-check">
          <svg viewBox="0 0 24 24" fill="none"><path d="M4 12.5L9.5 18L20 6" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="step-body">
          <div class="step-title">${escapeHtml(s.title)}</div>
          <div class="step-content">${escapeHtml(s.content)}</div>
          ${(() => { const t = parseTimeFromText(s.content); return t
            ? `<button class="step-timer" data-timer-secs="${t.seconds}" data-timer-label="${escapeHtml(s.title)}">⏱ Spustit ${t.label}</button>`
            : ''; })()}
        </div>
      </div>
    `;
  }).join('');

  const cooked = Array.isArray(r.cooked) ? r.cooked.slice().sort().reverse() : [];
  const cookedHtml = cooked.length
    ? '<div class="cooked-list">' + cooked.map(d => `
        <div class="cooked-row">
          <span>${fmtDateCz(d)}</span>
          <button class="del" onclick="removeCookDate('${d}')" aria-label="Odebrat záznam">&times;</button>
        </div>`).join('') + '</div>'
    : '<div class="cooked-empty">Zatím žádný záznam.</div>';

  const notesHtml = r.notes ? `
    <div class="notes-block">
      <div class="lbl">Poznámka</div>
      <p>${escapeHtml(r.notes)}</p>
    </div>` : '';

  document.getElementById('view-detail').innerHTML = `
    ${r.category ? `<span class="cat-label">${escapeHtml(r.category)}</span>` : ''}
    <h2>${escapeHtml(r.title)}</h2>
    <div class="detail-desc">${escapeHtml(r.description||'')}</div>

    <div class="servings-row">
      <span class="label">Porce</span>
      <button class="stepper-btn" onclick="changeServings(-1)">–</button>
      <span class="servings-num">${currentServings[currentRecipeId]}</span>
      <button class="stepper-btn" onclick="changeServings(1)">+</button>
    </div>

    ${groupsHtml}

    <div class="backup-hint" style="text-align:left;margin:0;">Klepnutím označ suroviny, které potřebuješ koupit.</div>
    <div class="shop-actions" style="margin-top:14px;">
      <button class="secondary-btn" onclick="addRecipeToShopping()">${recipeInShopping(r.id) ? 'Aktualizovat v nákupu' : 'Přidat označené do nákupu'}</button>
      <button class="secondary-btn" onclick="resetIngredients()" ${checkedIng.length ? '' : 'disabled style="opacity:.45;"'}>Zrušit označení</button>
    </div>
    <div class="backup-hint" id="shop-added" style="text-align:left;margin-top:6px;"></div>


    <div class="divider"><span>&#9670;</span></div>
    <div class="steps-title">Postup</div>
    ${stepsHtml}

    ${notesHtml ? `<div class="divider"><span>&#9670;</span></div>${notesHtml}` : ''}

    <div class="divider"><span>&#9670;</span></div>
    <div class="steps-title">Vaření</div>
    <button class="cooked-btn" style="margin-bottom:14px;" onclick="startCooking()">Spustit režim vaření</button>
    <div class="cooked-block">
      <button class="cooked-btn" onclick="markCookedToday()">Uvařeno dnes</button>
      ${cookedHtml}
    </div>

    <div class="actions-row">
      <button class="edit-link" onclick="editRecipe('${r.id}')">Upravit recept</button>
      <button class="delete-link" id="del-link" onclick="askDelete()">Smazat recept</button>
    </div>
    <div id="del-confirm"></div>
  `;

  const detailEl = document.getElementById('view-detail');
  detailEl.querySelectorAll('.ingredient-row').forEach(row => {
    row.addEventListener('click', () => toggleIngredient(row.dataset.ingKey));
  });
  detailEl.querySelectorAll('.step-timer').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      startTimer(parseInt(btn.dataset.timerSecs, 10), btn.dataset.timerLabel);
    });
  });
}

function toggleIngredient(key){
  const r = recipes.find(x=>x.id===currentRecipeId);
  if(!r) return;
  if(!Array.isArray(r.checkedIngredients)) r.checkedIngredients = [];
  const i = r.checkedIngredients.indexOf(key);
  if(i > -1) r.checkedIngredients.splice(i, 1); else r.checkedIngredients.push(key);
  saveRecipes(recipes);
  renderDetail();
}

function askDelete(){
  document.getElementById('del-link').classList.add('hidden');
  document.getElementById('del-confirm').innerHTML = `
    <div class="confirm-row">
      <span style="color:var(--ink-soft);font-size:13.5px;">Opravdu smazat?</span>
      <button class="confirm-yes" onclick="confirmDelete()">Smazat</button>
      <button class="confirm-no" onclick="renderDetail()">Zpět</button>
    </div>`;
}
async function confirmDelete(){
  recipes = recipes.filter(r=>r.id!==currentRecipeId);
  await saveRecipes(recipes);
  currentRecipeId = null;
  showList();
}

let suppressHistory = false;

function showView(name){
  ['list','shop','stats','detail','add','cook'].forEach(v=>{
    document.getElementById('view-'+v).classList.toggle('hidden', name!==v);
  });
  document.getElementById('app-header').classList.toggle('hidden',
    name==='detail' || name==='add' || name==='cook');
  document.getElementById('back-fab').classList.toggle('hidden', name!=='detail');
  document.getElementById('add-fab').classList.toggle('hidden', name!=='list');

  if(!suppressHistory){
    const state = {view:name, recipeId:currentRecipeId, cookIndex:cookIndex};
    if(history.state === null) history.replaceState(state, '');
    else history.pushState(state, '');
  }
  document.querySelectorAll('.tab').forEach(t=>{
    t.classList.toggle('active', t.dataset.view === name);
  });
  window.scrollTo(0,0);
  updateWakeLock(name==='detail' || name==='cook');
}
function showList(){ showView('list'); renderList(); }

window.addEventListener('popstate', (e) => {
  suppressHistory = true;
  const s = e.state;
  const view = s && s.view ? s.view : 'list';
  if(view === 'detail' && s.recipeId && recipes.some(r => r.id === s.recipeId)){
    currentRecipeId = s.recipeId;
    renderDetail();
    showView('detail');
  } else if(view === 'cook' && s.recipeId && recipes.some(r => r.id === s.recipeId)){
    currentRecipeId = s.recipeId;
    cookIndex = s.cookIndex || 0;
    renderCook();
    showView('cook');
  } else if(view === 'shop'){
    renderShop(); showView('shop');
  } else if(view === 'stats'){
    renderStats(); showView('stats');
  } else if(view === 'add'){
    showView('add');
  } else {
    showView('list'); renderList();
  }
  suppressHistory = false;
});
function showStats(){ renderStats(); showView('stats'); }
function showShop(){ renderShop(); showView('shop'); }

function setStatsPeriod(key){
  statsPeriod = key;
  renderStats();
}

function renderStats(){
  const PERIODS = [
    {key:'month', label:'Poslední měsíc', days:30},
    {key:'year',  label:'Poslední rok',   days:365},
    {key:'all',   label:'Celá historie',  days:null}
  ];
  const period = PERIODS.find(p => p.key === statsPeriod) || PERIODS[0];

  const allEvents = [];
  recipes.forEach(r=>{
    (Array.isArray(r.cooked) ? r.cooked : []).forEach(d=>{
      allEvents.push({id:r.id, title:r.title, date:d, days:daysSince(d)});
    });
  });

  const events = period.days === null
    ? allEvents.filter(e => e.days >= 0)
    : allEvents.filter(e => e.days >= 0 && e.days < period.days);

  const el = document.getElementById('view-stats');

  const pillsHtml = `
    <div class="period-row">
      ${PERIODS.map(p => `
        <button class="period-pill ${p.key===period.key?'active':''}" data-period="${p.key}">${p.label}</button>
      `).join('')}
    </div>`;

  if(allEvents.length === 0){
    el.innerHTML = pillsHtml + '<div class="empty-state">Zatím tu nic není. Otevři recept a po uvaření klepni na „Uvařeno dnes“.</div>';
    attachPeriodHandlers(el);
    return;
  }

  if(events.length === 0){
    el.innerHTML = pillsHtml + `<div class="empty-state">V období „${escapeHtml(period.label.toLowerCase())}“ nemáš žádný záznam.</div>`;
    attachPeriodHandlers(el);
    return;
  }

  const counts = {};
  events.forEach(e=>{
    if(!counts[e.id]) counts[e.id] = {title:e.title, n:0};
    counts[e.id].n++;
  });
  const ranked = Object.entries(counts)
    .map(([id,v]) => ({id, ...v}))
    .sort((a,b) => b.n - a.n || (a.title > b.title ? 1 : -1));

  const recent = events.slice().sort((a,b)=> a.date < b.date ? 1 : -1).slice(0, 8);

  el.innerHTML = pillsHtml + `
    <div class="stat-grid">
      <div class="stat-card">
        <div class="big">${events.length}</div>
        <div class="lbl">${plural(events.length,'uvařené jídlo','uvařená jídla','uvařených jídel')}</div>
      </div>
      <div class="stat-card">
        <div class="big">${ranked.length}</div>
        <div class="lbl">${plural(ranked.length,'různý recept','různé recepty','různých receptů')}</div>
      </div>
    </div>

    <div class="stat-section-title">Nejčastěji vařené</div>
    <div>
      ${ranked.slice(0,10).map((r,i)=>`
        <div class="rank-row" data-recipe-id="${escapeHtml(r.id)}">
          <span class="pos">${i+1}.</span>
          <span class="nm">${escapeHtml(r.title)}</span>
          <span class="cnt">${r.n}&times;</span>
        </div>`).join('')}
    </div>

    <div class="stat-section-title">Naposledy uvařeno</div>
    <div>
      ${recent.map(e=>`
        <div class="rank-row" data-recipe-id="${escapeHtml(e.id)}">
          <span class="nm">${escapeHtml(e.title)}</span>
          <span class="cnt">${fmtDateCz(e.date)}</span>
        </div>`).join('')}
    </div>
  `;

  attachPeriodHandlers(el);
  el.querySelectorAll('.rank-row').forEach(row=>{
    row.addEventListener('click', ()=> openRecipe(row.dataset.recipeId));
  });
}

function attachPeriodHandlers(el){
  el.querySelectorAll('.period-pill').forEach(btn=>{
    btn.addEventListener('click', ()=> setStatsPeriod(btn.dataset.period));
  });
}

function groupsToText(groups){
  return groups.map(g=>{
    const lines = g.items.map(it=>{
      if(it.amount!=null) return `${it.amount} ${it.unit||''} ${it.name}`.replace(/\s+/g,' ').trim();
      return it.name;
    });
    return ['## '+g.name, ...lines].join('\n');
  }).join('\n\n');
}
function stepsToText(steps){
  return steps.map(s=>{
    if(/^Krok \d+$/.test(s.title)) return s.content;
    return `${s.title}: ${s.content}`;
  }).join('\n');
}

function populateCategoryDatalist(){
  const cats = Array.from(new Set(recipes.map(r=>r.category).filter(Boolean)));
  document.getElementById('category-list').innerHTML = cats.map(c=>`<option value="${escapeHtml(c)}"></option>`).join('');
}

/* ---------- smart paste import (no AI, pattern-based) ---------- */
function toggleImportBox(){
  document.getElementById('import-box').classList.toggle('hidden');
}

function smartImportParse(text){
  const JUNK_RE = /(https?:\/\/|www\.|\.com|\.to\/|amzn\.to|bit\.ly|buy my|shop my|follow me|subscribe|instagram|tiktok|facebook|patreon|discount code|affiliate|merch store|sponsored)/i;
  const HEADER_RE = /^[\wÁ-Žá-ž' -]{2,40}:\s*$/;
  const STEP_CUE_RE = /^(instructions?|method|directions?|postup|steps?)\s*:?\s*$/i;
  const NUM_STEP_RE = /^(?:step\s*)?(\d{1,2})[\.\):]\s*(.+)$/i;
  const BULLET_RE = /^[•*\-–]\s+/;
  const QTY_START_RE = /^([\d]+(?:[.,\/][\d]+)?|[¼½¾⅓⅔⅛⅜⅝⅞])\s+(.+)$/;

  const rawLines = text.split('\n').map(l=>l.trim());
  const cleaned = [];
  for(const raw of rawLines){
    if(!raw) continue;
    if(JUNK_RE.test(raw)) continue;
    const line = raw.replace(BULLET_RE,'').trim();
    if(line) cleaned.push(line);
  }

  let title = null;
  let titleConsumed = false;
  if(cleaned.length){
    const first = cleaned[0];
    if(!QTY_START_RE.test(first) && !HEADER_RE.test(first) && !STEP_CUE_RE.test(first) && !NUM_STEP_RE.test(first) && first.length<70){
      title = first;
      titleConsumed = true;
    }
  }

  let mode = 'ingredients';
  const ingLines = [];
  const stepLines = [];

  cleaned.forEach((line, i)=>{
    if(titleConsumed && i===0) return;
    if(STEP_CUE_RE.test(line)){ mode='steps'; return; }
    const numMatch = line.match(NUM_STEP_RE);
    if(numMatch){ mode='steps'; stepLines.push(numMatch[2].trim()); return; }
    if(HEADER_RE.test(line) && !QTY_START_RE.test(line)){
      const headerText = line.replace(/:\s*$/, '');
      if(mode==='ingredients') ingLines.push('## '+headerText);
      else stepLines.push(headerText+':');
      return;
    }
    if(mode==='ingredients') ingLines.push(line);
    else stepLines.push(line);
  });

  return { title, ingredientsText: ingLines.join('\n'), stepsText: stepLines.join('\n') };
}

function runSmartImport(){
  const raw = document.getElementById('f-import').value;
  if(!raw.trim()) return;
  const result = smartImportParse(raw);
  if(result.title && !document.getElementById('f-title').value.trim()){
    document.getElementById('f-title').value = result.title;
  }
  if(result.ingredientsText){
    document.getElementById('f-ingredients').value = result.ingredientsText;
  }
  if(result.stepsText){
    document.getElementById('f-steps').value = result.stepsText;
  }
  document.getElementById('add-status').textContent = 'Zkontroluj prosím vyplněná pole níž – automatické rozpoznání nemusí být dokonalé.';
  document.getElementById('import-box').classList.add('hidden');
}

function showAdd(recipeToEdit){
  editingId = recipeToEdit ? recipeToEdit.id : null;
  document.getElementById('add-heading').textContent = recipeToEdit ? 'Upravit recept' : 'Nový recept';
  document.getElementById('f-title').value = recipeToEdit ? recipeToEdit.title : '';
  document.getElementById('f-desc').value = recipeToEdit ? (recipeToEdit.description||'') : '';
  document.getElementById('f-category').value = recipeToEdit ? (recipeToEdit.category||'') : '';
  document.getElementById('f-servings').value = recipeToEdit ? recipeToEdit.baseServings : 4;
  document.getElementById('f-ingredients').value = recipeToEdit ? groupsToText(recipeToEdit.groups) : '';
  document.getElementById('f-steps').value = recipeToEdit ? stepsToText(recipeToEdit.steps) : '';
  document.getElementById('f-notes').value = recipeToEdit ? (recipeToEdit.notes||'') : '';
  document.getElementById('f-import').value = '';
  document.getElementById('import-box').classList.add('hidden');
  document.getElementById('add-status').textContent = '';
  populateCategoryDatalist();
  showView('add');
}
function editRecipe(id){
  const r = recipes.find(x=>x.id===id);
  if(r) showAdd(r);
}
function cancelAdd(){
  if(editingId){ openRecipe(editingId); } else { showList(); }
}

function parseIngredients(text){
  const lines = text.split('\n').map(l=>l.trim()).filter(l=>l.length>0);
  const groups = [];
  let current = {name:'Ingredience', items:[]};
  let started = false;
  for(const line of lines){
    if(line.startsWith('##')){
      if(started) groups.push(current);
      current = {name: line.replace(/^##\s*/,'').trim() || 'Ingredience', items:[]};
      started = true;
      continue;
    }
    started = true;
    const m = line.match(/^([\d.,\/]+)\s+(\S+)\s+(.+)$/);
    if(m){
      let amtStr = m[1].replace(',', '.');
      let amount;
      if(amtStr.includes('/')){
        const parts = amtStr.split('/');
        amount = parseFloat(parts[0])/parseFloat(parts[1]);
      } else amount = parseFloat(amtStr);
      current.items.push({amount, unit:m[2], name:m[3]});
    } else {
      current.items.push({amount:null, unit:'', name:line});
    }
  }
  groups.push(current);
  return groups.filter(g=>g.items.length>0);
}
function parseSteps(text){
  const lines = text.split('\n').map(l=>l.trim()).filter(l=>l.length>0);
  return lines.map((line,idx)=>{
    const colonIdx = line.indexOf(':');
    if(colonIdx>-1 && colonIdx<40){
      return {title:line.slice(0,colonIdx).trim(), content:line.slice(colonIdx+1).trim()};
    }
    return {title:'Krok '+(idx+1), content:line};
  });
}

async function saveNewRecipe(){
  const title = document.getElementById('f-title').value.trim();
  const desc = document.getElementById('f-desc').value.trim();
  const category = document.getElementById('f-category').value.trim();
  const servings = parseInt(document.getElementById('f-servings').value,10) || 4;
  const ingrText = document.getElementById('f-ingredients').value;
  const stepsText = document.getElementById('f-steps').value;
  const notes = document.getElementById('f-notes').value.trim();
  const statusEl = document.getElementById('add-status');

  if(!title){
    statusEl.textContent = 'Doplň prosím název receptu.';
    return;
  }
  const groups = parseIngredients(ingrText);
  const steps = parseSteps(stepsText);
  const wasEditing = editingId;

  if(wasEditing){
    const idx = recipes.findIndex(r=>r.id===wasEditing);
    if(idx>-1){
      recipes[idx] = Object.assign({}, recipes[idx], {title, description:desc, category, baseServings:servings, groups, steps, notes});
    }
  } else {
    recipes.push({id:'r-'+Date.now(), title, description:desc, category, baseServings:servings, groups, steps, notes, doneSteps:[]});
  }

  statusEl.textContent = 'Ukládám…';
  const ok = await saveRecipes(recipes);
  if(ok){
    editingId = null;
    if(wasEditing){ openRecipe(wasEditing); } else { showList(); }
  } else {
    statusEl.textContent = 'Nepodařilo se uložit, zkus to prosím znovu.';
  }
}

/* ---------- backup / restore ---------- */
function exportRecipes(){
  try{
    const blob = new Blob([JSON.stringify(recipes, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const d = new Date();
    const stamp = d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
    a.href = url;
    a.download = 'kucharka-zaloha-'+stamp+'.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(()=>URL.revokeObjectURL(url), 1000);
    setBackupHint('Záloha stažena.');
  }catch(e){
    setBackupHint('Zálohu se nepodařilo vytvořit.');
  }
}

function setBackupHint(msg){
  const el = document.getElementById('backup-hint');
  el.textContent = msg;
  setTimeout(()=>{ el.textContent = 'Zálohu si ulož před nahráním nové verze appky.'; }, 5000);
}

function importRecipes(event){
  const file = event.target.files && event.target.files[0];
  event.target.value = '';
  if(!file) return;
  const reader = new FileReader();
  reader.onload = async () => {
    let incoming;
    try{
      incoming = JSON.parse(reader.result);
    }catch(e){
      setBackupHint('Soubor se nepodařilo přečíst.');
      return;
    }
    if(!Array.isArray(incoming)){
      setBackupHint('Tohle nevypadá jako záloha kuchařky.');
      return;
    }
    const existingIds = new Set(recipes.map(r=>r.id));
    let added = 0;
    incoming.forEach(r=>{
      if(!r || !r.title) return;
      if(existingIds.has(r.id)){
        const idx = recipes.findIndex(x=>x.id===r.id);
        recipes[idx] = r;
      } else {
        recipes.push(r);
        added++;
      }
    });
    const ok = await saveRecipes(recipes);
    renderList();
    setBackupHint(ok ? ('Obnoveno – přidáno '+added+' nových receptů.') : 'Nepodařilo se uložit.');
  };
  reader.onerror = () => setBackupHint('Soubor se nepodařilo přečíst.');
  reader.readAsText(file);
}

/* ---------- install prompt + diagnostics ---------- */
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('install-btn').classList.remove('hidden');
  updateDiag('prompt zachycen');
});

window.addEventListener('appinstalled', () => {
  deferredPrompt = null;
  document.getElementById('install-btn').classList.add('hidden');
  updateDiag('nainstalováno');
});

async function doInstall(){
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  try{ await deferredPrompt.userChoice; }catch(e){}
  deferredPrompt = null;
  document.getElementById('install-btn').classList.add('hidden');
}

async function updateDiag(note){
  const el = document.getElementById('diag');
  if(!el) return;
  const bits = [];

  bits.push('https: ' + (location.protocol === 'https:' ? 'ano' : 'NE (' + location.protocol + ')'));

  let swState = 'nepodporováno';
  if('serviceWorker' in navigator){
    try{
      const regs = await navigator.serviceWorker.getRegistrations();
      swState = regs.length
        ? (navigator.serviceWorker.controller ? 'aktivní' : 'registrován, neřídí stránku')
        : 'NEregistrován';
    }catch(e){ swState = 'chyba'; }
  }
  bits.push('SW: ' + swState);

  let manState = '?';
  try{
    const link = document.querySelector('link[rel="manifest"]');
    if(!link){ manState = 'chybí odkaz'; }
    else {
      const res = await fetch(link.href, {cache:'no-store'});
      if(!res.ok){ manState = 'HTTP ' + res.status; }
      else {
        const m = await res.json();
        const has192 = (m.icons||[]).some(i => (i.sizes||'').includes('192'));
        const has512 = (m.icons||[]).some(i => (i.sizes||'').includes('512'));
        manState = 'ok (' + (m.display||'?') + (has192 && has512 ? ', ikony ok' : ', IKONY CHYBÍ') + ')';
      }
    }
  }catch(e){ manState = 'nenačten'; }
  bits.push('manifest: ' + manState);

  const standalone = window.matchMedia('(display-mode: standalone)').matches;
  bits.push('režim: ' + (standalone ? 'appka' : 'prohlížeč'));
  bits.push('prompt: ' + (note || (deferredPrompt ? 'zachycen' : 'zatím ne')));

  el.textContent = bits.join(' · ');
}

/* ---------- časovače ---------- */
let timerState = {id:null, endsAt:0, label:'', ringing:false};

function parseTimeFromText(text){
  const re = /(\d+)\s*(?:[\u2013\u2014-]\s*(\d+)\s*)?(hodin\w*|minut\w*|min\b|vte\u0159in\w*|sekund\w*)/i;
  const m = text.match(re);
  if(!m) return null;
  const a = parseInt(m[1], 10);
  const b = m[2] ? parseInt(m[2], 10) : null;
  const n = (b !== null) ? b : a;      // u rozsahu bereme horní hranici
  const unit = m[3].toLowerCase();
  let secs;
  if(unit.indexOf('hodin') === 0) secs = n * 3600;
  else if(unit.indexOf('minut') === 0 || unit === 'min') secs = n * 60;
  else secs = n;
  if(secs < 10 || secs > 6*3600) return null;
  return {seconds: secs, label: fmtDuration(secs)};
}

function fmtDuration(s){
  if(s < 60) return s + ' s';
  const h = Math.floor(s/3600), m = Math.round((s % 3600)/60);
  if(h && m) return h + ' h ' + m + ' min';
  if(h) return h + ' h';
  return m + ' min';
}
function fmtClock(ms){
  const total = Math.max(0, Math.ceil(ms/1000));
  const h = Math.floor(total/3600);
  const m = Math.floor((total % 3600)/60);
  const s = total % 60;
  const pad = n => String(n).padStart(2,'0');
  return h ? (h + ':' + pad(m) + ':' + pad(s)) : (pad(m) + ':' + pad(s));
}

function startTimer(seconds, label){
  if(timerState.id) clearInterval(timerState.id);
  timerState.endsAt = Date.now() + seconds*1000;
  timerState.label = label || '';
  timerState.ringing = false;
  document.getElementById('timer-bar').classList.remove('hidden','ringing');
  document.body.classList.add('timer-on');
  document.getElementById('t-label').textContent = timerState.label;
  timerState.id = setInterval(tickTimer, 250);
  tickTimer();
}
function tickTimer(){
  const left = timerState.endsAt - Date.now();
  document.getElementById('t-count').textContent = fmtClock(left);
  if(left <= 0) timerDone();
}
function timerDone(){
  if(timerState.id){ clearInterval(timerState.id); timerState.id = null; }
  timerState.ringing = true;
  const bar = document.getElementById('timer-bar');
  bar.classList.add('ringing');
  document.getElementById('t-count').textContent = 'Hotovo';
  alarmSound();
  if(navigator.vibrate) navigator.vibrate([300,150,300,150,300]);
}
function stopTimer(){
  if(timerState.id){ clearInterval(timerState.id); timerState.id = null; }
  timerState.ringing = false;
  document.getElementById('timer-bar').classList.add('hidden');
  document.getElementById('timer-bar').classList.remove('ringing');
  document.body.classList.remove('timer-on');
}
function alarmSound(){
  try{
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if(!Ctx) return;
    const ctx = new Ctx();
    [0, 0.45, 0.9].forEach(t => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = 'sine'; o.frequency.value = 880;
      g.gain.setValueAtTime(0.0001, ctx.currentTime + t);
      g.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime + t + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + t + 0.32);
      o.start(ctx.currentTime + t);
      o.stop(ctx.currentTime + t + 0.35);
    });
  }catch(e){}
}

/* ---------- zařazení surovin do regálů ---------- */
// Pořadí odpovídá běžné trase typickým českým supermarketem.
// První shoda vyhrává, proto je koření a trvanlivé zboží dřív než zelenina
// (jinak by "kašmírská chilli paprika" spadla mezi čerstvou zeleninu).
const SEKCE = [
  {name:'Koření a dochucovadla', keys:['garam masala','kurkuma','p\u00edskavic','kardamom','h\u0159eb\u00ed\u010d','sko\u0159ic','bobkov','ko\u0159en\u00ed','pep\u0159','s\u016fl','ka\u0161m\u00edrsk','chilli paprika','mu\u0161k\u00e1tov','km\u00edn','vanilk','skalice']},
  {name:'Trvanlivé a suché', keys:['kysel\u00e9 okurk','protlak','konzerv','mouka','r\u00fd\u017ee','t\u011bstovin','cukr','krupice','olej','ocet','ke\u0161u','o\u0159ech','\u010do\u010dk','fazol','lu\u0161t\u011bnin','med','ho\u0159\u010dic','v\u00fdvar','buj\u00f3n','kokosov','sirup','su\u0161en','dro\u017ed\u00ed','\u017eelatin','strouhank']},
  {name:'Maso a uzeniny', keys:['hov\u011bz','vep\u0159ov','ku\u0159ec','ku\u0159e','dr\u016fbe\u017e','slanin','pancett','lardo','\u0161pek','bu\u0159t','p\u00e1rk','klob\u00e1s','sal\u00e1m','\u0161unk','maso','ryb','losos']},
  {name:'Mléčné a chlazené', keys:['jogurt','smetan','m\u00e1slo','ml\u00e9ko','s\u00fdr','tvaroh','vejce','vaj\u00ed\u010dk','majon\u00e9z','zakysan','mascarpone','parmez','s\u00e1dlo']},
  {name:'Pečivo', keys:['chl\u00e9b','chleb','pe\u010divo','rohl\u00edk','housk','naan','tortill','bageta']},
  {name:'Mražené', keys:['mra\u017een','zmrzlin']},
  {name:'Nápoje', keys:['v\u00edno','pivo','d\u017eus','n\u00e1poj','limon']},
  {name:'Ovoce a zelenina', keys:['cibul','\u010desnek','z\u00e1zvor','mrkv','mrke','celer','raj\u010dat','zel\u00ed','okurk','citron','limet','papri','brambor','k\u0159en','koriandr','petr\u017eel','bylink','sal\u00e1t','avok\u00e1do','jablk','ban\u00e1n','houb']}
];
const SEKCE_OSTATNI = 'Ostatní';

function sekceProSurovinu(name){
  const n = name.toLowerCase();
  for(const s of SEKCE){
    if(s.keys.some(k => n.includes(k))) return s.name;
  }
  return SEKCE_OSTATNI;
}
function poradiSekce(name){
  const i = SEKCE.findIndex(s => s.name === name);
  return i === -1 ? SEKCE.length : i;
}

/* ---------- sdílení seznamu ---------- */
function shoppingAsText(){
  const list = loadShopping().filter(x => !x.done);
  if(list.length === 0) return '';
  const groups = {};
  list.forEach(it => {
    const sec = sekceProSurovinu(it.name);
    (groups[sec] = groups[sec] || []).push(it);
  });
  const order = Object.keys(groups).sort((a,b) => poradiSekce(a) - poradiSekce(b));
  let out = 'N\u00e1kupn\u00ed seznam\n';
  order.forEach(sec => {
    out += '\n' + sec + '\n';
    groups[sec].forEach(it => {
      const a = itemAmount(it);
      const amt = a != null ? (fmtAmount(a) + (it.unit ? ' ' + it.unit : '') + ' ') : '';
      out += '- ' + amt + it.name + '\n';
    });
  });
  return out.trim();
}

async function shareShopping(){
  const text = shoppingAsText();
  if(!text){ return; }
  if(navigator.share){
    try{
      await navigator.share({title:'N\u00e1kupn\u00ed seznam', text});
      return;
    }catch(e){
      if(e && e.name === 'AbortError') return;   // uživatel sdílení zrušil
    }
  }
  // bez systémového sdílení otevřeme rovnou WhatsApp
  window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
}

/* ---------- nákupní seznam ---------- */
function loadShopping(){
  try{
    const raw = localStorage.getItem('kucharka_shopping');
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  }catch(e){ return []; }
}
function saveShopping(list){
  try{ localStorage.setItem('kucharka_shopping', JSON.stringify(list)); return true; }
  catch(e){ return false; }
}

// Příspěvek receptu se ukládá zvlášť pod jeho id, takže opakované přidání
// množství nezdvojnásobí — jen přepíše, co ten recept do seznamu dává.
function itemAmount(it){
  if(it.override != null) return it.override;      // ručně nastavené množství má přednost
  if(!it.parts || !it.parts.length) return it.amount != null ? it.amount : null;
  let sum = 0;
  for(const p of it.parts){
    if(p.amount == null) return null;
    sum += p.amount;
  }
  return sum;
}
function itemSources(it){
  if(!it.parts || !it.parts.length) return it.from || [];
  return it.parts.map(p => p.title);
}
function recipeInShopping(id){
  return loadShopping().some(it => (it.parts || []).some(p => p.id === id));
}

function addRecipeToShopping(){
  const r = recipes.find(x => x.id === currentRecipeId);
  if(!r) return;
  const scale = currentServings[currentRecipeId] / r.baseServings;
  const list = loadShopping();
  const uz = Array.isArray(r.checkedIngredients) ? r.checkedIngredients : [];
  const bylTam = recipeInShopping(r.id);

  // nejdřív pryč se starým příspěvkem tohoto receptu
  list.forEach(it => { if(it.parts) it.parts = it.parts.filter(p => p.id !== r.id); });

  let pridano = 0;
  r.groups.forEach((g, gi) => {
    // pomůcky nejsou potraviny, na nákupní seznam nepatří
    if(/pot\u0159ebujete|pom\u016fcky/i.test(g.name)) return;
    g.items.forEach((it, ii) => {
      if(!uz.includes(gi + '-' + ii)) return;   // přidáváme jen to, co je označené ke koupi
      pridano++;
      const key = it.name.trim().toLowerCase() + '|' + (it.unit || '').trim().toLowerCase();
      const amt = (it.amount != null) ? it.amount * scale : null;
      let found = list.find(x => x.key === key);
      if(!found){
        found = {key, name: it.name, unit: it.unit || '', done: false, parts: []};
        list.push(found);
      }
      if(!found.parts) found.parts = [];
      found.parts.push({id: r.id, title: r.title, amount: amt});
    });
  });

  // položky, ke kterým už nikdo nepřispívá, ze seznamu zmizí
  const cleaned = list.filter(it => (it.parts && it.parts.length) || (!it.parts && it.amount !== undefined && !it.migrated));
  saveShopping(cleaned.filter(it => !it.parts || it.parts.length));

  renderDetail();
  const el = document.getElementById('shop-added');
  if(el){
    if(!pridano){
      el.textContent = 'Neozna\u010dil jsi \u017e\u00e1dnou surovinu ke koupi.';
    } else if(bylTam){
      el.textContent = 'Seznam aktualizov\u00e1n \u2013 ' + pridano + ' ' + plural(pridano, 'polo\u017eka', 'polo\u017eky', 'polo\u017eek') + ' z tohoto receptu.';
    } else {
      el.textContent = 'P\u0159id\u00e1no ' + pridano + ' ' + plural(pridano, 'polo\u017eka', 'polo\u017eky', 'polo\u017eek') + ' na n\u00e1kupn\u00ed seznam.';
    }
    setTimeout(()=>{ if(el) el.textContent=''; }, 4000);
  }
}

async function resetIngredients(){
  const r = recipes.find(x => x.id === currentRecipeId);
  if(!r) return;
  r.checkedIngredients = [];
  await saveRecipes(recipes);
  renderDetail();
}

function setShopAmount(key, raw){
  const list = loadShopping();
  const it = list.find(x => x.key === key);
  if(!it) return;
  const txt = String(raw).trim().replace(',', '.');
  if(txt === ''){
    delete it.override;                            // prázdné pole vrátí spočítané množství
  } else {
    const n = parseFloat(txt);
    if(isNaN(n) || n < 0) return;
    it.override = n;
  }
  saveShopping(list);
  renderShop();
}
function resetShopAmount(key){
  const list = loadShopping();
  const it = list.find(x => x.key === key);
  if(!it) return;
  delete it.override;
  saveShopping(list);
  renderShop();
}
function editShopAmount(key, el){
  const list = loadShopping();
  const it = list.find(x => x.key === key);
  if(!it) return;
  const cur = itemAmount(it);
  el.innerHTML = `<input class="amt-input" type="text" inputmode="decimal" value="${cur != null ? fmtAmount(cur) : ''}">`;
  const input = el.querySelector('input');
  input.focus();
  input.select();
  let hotovo = false;
  const ulozit = () => { if(hotovo) return; hotovo = true; setShopAmount(key, input.value); };
  input.addEventListener('blur', ulozit);
  input.addEventListener('keydown', (ev) => {
    if(ev.key === 'Enter'){ ev.preventDefault(); ulozit(); }
    if(ev.key === 'Escape'){ hotovo = true; renderShop(); }
  });
  input.addEventListener('click', ev => ev.stopPropagation());
}

function addCustomShopItem(){
  const input = document.getElementById('shop-new');
  if(!input) return;
  const raw = input.value.trim();
  if(!raw) return;

  // "2 l mléko" rozdělíme na množství, jednotku a název; "mléko" projde jako holá položka
  let amount = null, unit = '', name = raw;
  const m = raw.match(/^([\d]+(?:[.,][\d]+)?)\s*(\S+)?\s+(.+)$/);
  if(m){
    amount = parseFloat(m[1].replace(',', '.'));
    unit = m[2] || '';
    name = m[3];
  }

  const list = loadShopping();
  const key = name.trim().toLowerCase() + '|' + unit.trim().toLowerCase();
  let found = list.find(x => x.key === key);
  if(!found){
    found = {key, name, unit, done:false, parts:[]};
    list.push(found);
  }
  found.parts.push({id:'vlastni-' + Date.now(), title:'Vlastn\u00ed', amount});
  saveShopping(list);
  input.value = '';
  renderShop();
}

function deleteShopItem(key){
  saveShopping(loadShopping().filter(x => x.key !== key));
  renderShop();
}

function toggleShopItem(key){
  const list = loadShopping();
  const it = list.find(x => x.key === key);
  if(!it) return;
  it.done = !it.done;
  saveShopping(list);
  renderShop();
}
function clearShoppingDone(){
  saveShopping(loadShopping().filter(x => !x.done));
  renderShop();
}
function clearShoppingAll(){
  saveShopping([]);
  renderShop();
}

function renderShop(){
  const el = document.getElementById('view-shop');
  const list = loadShopping();

  const addBox = `
    <div class="shop-add">
      <input id="shop-new" type="text" placeholder="Vlastn\u00ed polo\u017eka, nap\u0159. 2 l ml\u00e9ko">
      <button onclick="addCustomShopItem()" aria-label="P\u0159idat polo\u017eku">+</button>
    </div>`;

  if(list.length === 0){
    el.innerHTML = '<div class="empty-state">Seznam je pr\u00e1zdn\u00fd. V receptu ozna\u010d suroviny, kter\u00e9 pot\u0159ebuje\u0161 koupit, nebo si polo\u017eku p\u0159idej r\u016f\u010dn\u011b n\u00ed\u017ee.</div>' + addBox;
    bindShopAdd(el);
    return;
  }

  // seskupení podle regálů, v pořadí trasy obchodem
  const groups = {};
  list.forEach(it => {
    const sec = sekceProSurovinu(it.name);
    (groups[sec] = groups[sec] || []).push(it);
  });
  const order = Object.keys(groups).sort((a, b) => poradiSekce(a) - poradiSekce(b));

  const body = order.map(sec => `
    <div class="shop-sec">${escapeHtml(sec)}</div>
    ${groups[sec].map(it => `
      <div class="shop-row ${it.done ? 'done' : ''}" data-shop-key="${escapeHtml(it.key)}">
        <span class="tick">
          <svg viewBox="0 0 24 24" fill="none"><path d="M4 12.5L9.5 18L20 6" stroke="white" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        <span class="amt">
          <span class="amt-chip ${it.override != null ? 'custom' : ''}" data-edit-key="${escapeHtml(it.key)}">${(() => {
            const a = itemAmount(it);
            return a != null ? fmtAmount(a) + (it.unit ? ' ' + escapeHtml(it.unit) : '') : '\u2013';
          })()}</span>
        </span>
        <span style="flex:1;">
          <span class="nm">${escapeHtml(it.name)}</span>
          ${it.override != null
            ? `<div class="src">ru\u010dn\u011b upraveno <button class="amt-reset" data-reset-key="${escapeHtml(it.key)}">vr\u00e1tit</button></div>`
            : (() => { const s = itemSources(it); return s.length > 1 ? `<div class="src">${escapeHtml(s.join(', '))}</div>` : ''; })()}
        </span>
        <button class="shop-del" data-del-key="${escapeHtml(it.key)}" aria-label="Odebrat">&times;</button>
      </div>`).join('')}
  `).join('');

  const left = list.filter(x => !x.done).length;

  el.innerHTML = `
    <div class="backup-hint" style="text-align:left;margin:0;">
      ${left} ${plural(left, 'polo\u017eka zb\u00fdv\u00e1', 'polo\u017eky zb\u00fdvaj\u00ed', 'polo\u017eek zb\u00fdv\u00e1')} &middot; se\u0159azeno podle regál\u016f &middot; klepnut\u00edm na mno\u017estv\u00ed ho zm\u011bn\u00ed\u0161
    </div>
    ${body}
    ${addBox}
    <button class="share-btn" onclick="shareShopping()">Sd\u00edlet seznam</button>
    <div class="shop-actions">
      <button onclick="clearShoppingDone()">Smazat koupen\u00e9</button>
      <button onclick="clearShoppingAll()">Vypr\u00e1zdnit seznam</button>
    </div>`;

  el.querySelectorAll('.shop-row').forEach(row => {
    row.addEventListener('click', () => toggleShopItem(row.dataset.shopKey));
  });
  el.querySelectorAll('.amt-chip').forEach(chip => {
    chip.addEventListener('click', (ev) => {
      ev.stopPropagation();
      editShopAmount(chip.dataset.editKey, chip.parentElement);
    });
  });
  el.querySelectorAll('.amt-reset').forEach(btn => {
    btn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      resetShopAmount(btn.dataset.resetKey);
    });
  });
  el.querySelectorAll('.shop-del').forEach(btn => {
    btn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      deleteShopItem(btn.dataset.delKey);
    });
  });
  bindShopAdd(el);
}

function bindShopAdd(el){
  const input = el.querySelector('#shop-new');
  if(!input) return;
  input.addEventListener('keydown', (ev) => {
    if(ev.key === 'Enter'){ ev.preventDefault(); addCustomShopItem(); }
  });
}

/* ---------- režim vaření ---------- */
let cookIndex = 0;
let cookIngOpen = false;

function startCooking(){
  cookIndex = 0;
  renderCook();
  showView('cook');
}
function toggleCookIngredients(){
  cookIngOpen = !cookIngOpen;
  renderCook();
}
function cookStep(delta){
  const r = recipes.find(x => x.id === currentRecipeId);
  if(!r) return;
  cookIndex = Math.min(Math.max(0, cookIndex + delta), r.steps.length - 1);
  renderCook();
}
function renderCook(){
  const r = recipes.find(x => x.id === currentRecipeId);
  if(!r) return;
  const s = r.steps[cookIndex];
  const t = parseTimeFromText(s.content);
  const last = cookIndex === r.steps.length - 1;

  // suroviny přepočtené na aktuální porce, ať se nemusí zpět do receptu
  const sc = currentServings[currentRecipeId] / r.baseServings;
  const ingHtml = r.groups.map(g => `
    ${r.groups.length > 1 ? `<div class="g">${escapeHtml(g.name)}</div>` : ''}
    ${g.items.map(it => `
      <div class="i">
        <span class="a">${it.amount != null ? fmtAmount(it.amount * sc) + (it.unit ? ' ' + escapeHtml(it.unit) : '') : ''}</span>
        <span>${escapeHtml(it.name)}</span>
      </div>`).join('')}
  `).join('');

  document.getElementById('view-cook').innerHTML = `
    <div class="cook-top">
      <span class="where">${escapeHtml(r.title)} &middot; krok ${cookIndex+1} z ${r.steps.length}</span>
      <button class="cook-exit" onclick="openRecipe('${r.id}')">Ukon\u010dit</button>
    </div>
    <div class="cook-progress">
      ${r.steps.map((_, i) => `<span class="${i <= cookIndex ? 'on' : ''}"></span>`).join('')}
    </div>
    <button class="cook-ing-toggle ${cookIngOpen ? 'open' : ''}" onclick="toggleCookIngredients()">
      <span class="caret">&#9660;</span><span>Suroviny</span>
    </button>
    ${cookIngOpen ? `<div class="cook-ing-list">${ingHtml}</div>` : ''}

    <div class="cook-body">
      <div class="cook-step-title">${escapeHtml(s.title)}</div>
      <div class="cook-step-text">${escapeHtml(s.content)}</div>
      ${t ? `<button class="timer-btn" id="cook-timer" data-secs="${t.seconds}" data-label="${escapeHtml(s.title)}">Spustit \u010dasova\u010d ${t.label}</button>` : ''}
    </div>
    <div class="cook-nav">
      <button onclick="cookStep(-1)" ${cookIndex === 0 ? 'disabled' : ''}>Zp\u011bt</button>
      ${last
        ? `<button class="primary" onclick="finishCooking()">Hotovo</button>`
        : `<button class="primary" onclick="cookStep(1)">Dal\u0161\u00ed</button>`}
    </div>`;

  const tb = document.getElementById('cook-timer');
  if(tb){
    tb.addEventListener('click', () => startTimer(parseInt(tb.dataset.secs, 10), tb.dataset.label));
  }
}
async function finishCooking(){
  await markCookedToday();
  openRecipe(currentRecipeId);
}

function escapeHtml(str){
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

(async function init(){
  if('serviceWorker' in navigator && location.protocol.startsWith('http')){
    navigator.serviceWorker.getRegistrations()
      .then(regs => regs.forEach(reg => reg.update()))
      .catch(()=>{});
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  }
  let theme = 'light';
  try{ theme = localStorage.getItem('kucharka_theme') || 'light'; }catch(e){}
  applyTheme(theme);

  document.getElementById('recipe-list').innerHTML = '<div class="empty-state">Načítám recepty…</div>';
  const SEEDS = [SEED_RECIPE, SEED_RECIPE_2, SEED_RECIPE_3, SEED_RECIPE_4];
  let loaded = await loadRecipes();

  if(!loaded){
    loaded = SEEDS.slice();
    await saveRecipes(loaded);
    try{ localStorage.setItem('kucharka_seeded', JSON.stringify(SEEDS.map(s=>s.id))); }catch(e){}
  } else {
    // add seed recipes introduced in a newer version, but never resurrect ones the user deleted
    let seededIds = [];
    try{ seededIds = JSON.parse(localStorage.getItem('kucharka_seeded') || '[]'); }catch(e){}
    if(!Array.isArray(seededIds)) seededIds = [];
    const existingIds = new Set(loaded.map(r=>r.id));
    let changed = false;
    SEEDS.forEach(s=>{
      if(!seededIds.includes(s.id) && !existingIds.has(s.id)){
        loaded.push(s);
        seededIds.push(s.id);
        changed = true;
      }
    });
    if(changed){
      await saveRecipes(loaded);
      try{ localStorage.setItem('kucharka_seeded', JSON.stringify(seededIds)); }catch(e){}
    }
  }

  recipes = loaded;
  renderList();
  setTimeout(updateDiag, 2500);
})();
