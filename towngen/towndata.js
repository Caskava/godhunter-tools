// ── GOD HUNTER — CAELIT SETTLEMENT DATA ──────────────────────────────────
// Each country has syllable pools for settlement names and descriptor data.

const SETTLEMENT_TYPES = [
  { type: 'Capital City',       weight: 1 },
  { type: 'Port Town',          weight: 4 },
  { type: 'Market Town',        weight: 5 },
  { type: 'Fishing Village',    weight: 5 },
  { type: 'Mining Settlement',  weight: 4 },
  { type: 'Border Outpost',     weight: 3 },
  { type: 'Rural Village',      weight: 6 },
  { type: 'Trade Hub',          weight: 4 },
  { type: 'Military Fort',      weight: 3 },
  { type: 'Underground Colony', weight: 2 },
];

const DESCRIPTOR_TRAITS = {
  'Capital City':       ['seat of the ruling government', 'densely populated and politically active', 'home to the country\'s largest institutions'],
  'Port Town':          ['built along the coastline', 'known for fishing and maritime trade', 'busy with incoming ships and merchants'],
  'Market Town':        ['a center of regional commerce', 'known for its weekly trade gatherings', 'draws travelers from surrounding villages'],
  'Fishing Village':    ['a quiet coastal community', 'sustains itself through daily fishing runs', 'close-knit and largely self-sufficient'],
  'Mining Settlement':  ['built around a valuable ore deposit', 'known for hard labor and rough living', 'supplies raw materials to larger cities'],
  'Border Outpost':     ['positioned at the edge of national territory', 'lightly populated but strategically important', 'watches over cross-border movement'],
  'Rural Village':      ['a small farming community', 'largely isolated from major political events', 'known for its agricultural output'],
  'Trade Hub':          ['positioned at the intersection of major routes', 'a melting pot of cultures and goods', 'known for its busy markets and inns'],
  'Military Fort':      ['a fortified defensive installation', 'home to a permanent garrison', 'built to control a strategic position'],
  'Underground Colony': ['built beneath the surface', 'largely hidden from outsiders', 'relies on Zoeic lighting and underground farming'],
};

const COUNTRIES = {

  Torrelis: {
    label: 'Torrelis',
    desc: 'Sun-open coastal nation',
    // Warm, open vowels, geographical and founder-named. Blackmoor, Terlin register.
    prefixes: ['Vel','Cor','Nav','Sol','Tor','Sal','Bel','Kar','Lan','Mar','Dal','Gal','Far','Bar','Tav','Vor','Sev','Ren','Pal','Naz','Alv','Bren','Helm','Zel','Aim','Rok','Ast','Cal','Fen','Mor'],
    middles: ['a','en','or','el','an','ar','in','on','al','er','ra','ro','ri','la','lo','li','na','no','ni','va','vo','vi','ma','mo','mi'],
    suffixes: ['moor','vale','shore','crest','haven','bay','reach','ford','banks','crossing','ridge','pass','point','isle','delta','mouth','grove','field','heath','marsh'],
    preview: ['Blackmoor','Terlin','Solvane']
  },

  Kirleigh: {
    label: 'Kirleigh',
    desc: 'Underground civilization',
    // Soft, vowel-forward, worn smooth. Lopa, Scillea, Daelith register.
    // sc-, sl-, -ea, -iel, -ea territory. Feels carved not grown.
    prefixes: ['Sci','Sli','Sel','Scel','Scil','Mir','Nel','Del','Rel','Tel','Mel','Aer','Sir','Uel','Eil','Oel','Ael','Ciel','Diel','Fiel','Niel','Riel','Siel','Tiel','Vel','Orn'],
    middles: ['lea','iel','ael','eth','orn','aen','sel','mir','rin','nan','aun','lia','eil','oa','ia'],
    suffixes: ['lea','delve','hollow','deep','vault','cairn','seam','grotto','arch','hall','run','drift','hold','ria','eia','eil','iel','orn','eth'],
    preview: ['Scillea','Daelith','Selorn']
  },

  Kastozsi: {
    label: 'Kastozsi',
    desc: 'Iron & ice nation',
    // Hard consonants, blunt, historically named. Mirskaya Brutale register.
    prefixes: ['Zal','Vel','Drel','Grel','Krel','Trel','Ost','Brat','Grat','Krat','Svet','Kov','Krev','Daz','Kur','Bren','Hal','Ghal','Veld','Gret','Zold','Dren','Kran','Bor','Gor','Kor','Mir','Nor','Sor','Tor'],
    middles: ['ov','ev','av','iv','an','en','in','on','ar','er','ir','or','ska','sky','ski','na','eth'],
    suffixes: ['grad','burg','bruk','fell','vik','mark','hold','gard','kamp','fort','val','brak','drel','krel','ost','brat','vrat','svet'],
    preview: ['Mirskaya','Zaldburg','Ostgrad']
  },

  Saladisi: {
    label: 'Saladisi',
    desc: 'Iberian fire nation',
    // Romance-adjacent. Sulmorra, Salabiya, Adrietla register.
    // -orra, -iya, -la, -tra endings. Warm vowels, rolls naturally.
    prefixes: ['Sul','Sal','Vel','Cor','Nar','Bar','Tar','Mor','Alv','Rod','Fen','Nav','Rav','Dal','Bel','Mon','Cel','Dor','Fer','Gar','Hel','Lor','Mal','Nor','Pal','Tor','Var','Zel','Car','Dom','Ram','Adr'],
    middles: ['al','en','ez','az','or','ar','in','on','ro','re','ri','vel','cor','sal','nar','bar','mor','sul','biy'],
    suffixes: ['orra','iya','tra','mora','ado','osa','eira','ona','ina','ero','illa','illo','enza','anda','aria','oria','elia','ano','era','ava','ova','ida','ica','ache','etla'],
    preview: ['Sulmorra','Salabiya','Adrietla']
  },

  Cospaiji: {
    label: 'Cospaiji',
    desc: 'Eastern spirit nation',
    // Flowing compound words describing character. Japanese-Arabic adjacent.
    prefixes: ['Ami','Kyo','Shi','Nao','Har','Tak','Rei','Sen','Zen','Miy','Sor','Nor','Fum','Hir','Kaz','Mak','Ori','Ren','Kai','Shu','Nak','Yom','Rin','Sak','Yuk','Hana','Kage','Kami','Maru','Naru'],
    middles: ['no','na','ni','ka','ki','ko','ra','ri','ro','ma','mi','mo','sa','si','so','ta','ti','to','ya','yo','yu'],
    suffixes: ['shima','hara','yama','gawa','saki','moto','naka','hashi','mura','dera','zaki','kawa','shiro','numa','bashi','oka','hana','mise','tani','umi'],
    preview: ['Haruyama','Nakashima','Senkawa']
  },

  JinGardi: {
    label: 'Jin-gardi',
    desc: 'Ancient royalty nation',
    // Two tiers: noble (Mediterranean-ancient, soft) and common (craft/trade named)
    // Noble
    noblePrefixes: ['Ara','Kori','Habi','Sela','Mori','Lari','Nari','Tari','Dari','Gari','Vari','Kari','Bari','Fari','Hari','Jari','Pari','Rari','Sari','Wari','Yari','Zari','Cori','Dori','Fori'],
    nobleMiddles: ['ne','na','ni','re','ra','ri','me','ma','mi','le','la','li','be','ba','bi','he','ha','hi','ke','ka','ki'],
    nobleSuffixes: ['ath','ora','ium','ara','eon','ion','alis','anis','oris','eia','aria','oria','enia','ania','oria','inis','arum','orum','erum','irum'],
    // Common
    commonPrefixes: ['Red','Ash','Cold','Grey','Iron','Salt','Black','White','Dark','Stone','Oak','Elm','Marsh','Fen','Mire','Sand','Dust','Coal','Flint','Frost','Gold','Silver','Bone','Thorn','Mud'],
    commonSuffixes: ['smithe','mill','keep','forge','port','gate','bridge','cross','ford','wick','ton','ham','worth','stead','thorpe','field','wood','hurst','shaw','cliff','croft','barn','well','pool','moor'],
    preview: ['Redsmithe','Korianath','Ashkeep']
  }

};

// Weighted pick helper
function wpickSettlement(arr) {
  const total = arr.reduce((s, item) => s + item.weight, 0);
  let r = Math.random() * total;
  for (const item of arr) { r -= item.weight; if (r <= 0) return item; }
  return arr[arr.length - 1];
}

if (typeof module !== 'undefined') module.exports = { COUNTRIES, SETTLEMENT_TYPES, DESCRIPTOR_TRAITS, wpickSettlement };
