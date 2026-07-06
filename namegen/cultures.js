// ── GOD HUNTER NAME GENERATOR — SHARED CULTURE DATA ──────────────────────
// Edit syllable pools here and all tools update automatically.

const CULTURES = {

  Saladisi: {
    label: 'Saladisi',
    desc: 'Iberian fire',
    realWorld: 'Spanish / Italian / Portuguese',
    forbidStart: ['x','z','k','w','j','q','y'],
    sylsM: ['ren','vel','cor','sal','nar','bar','tar','mor','alv','rod','fen','nav','rav','dal','bel','mon','cel','dor','fer','gar','hel','lor','mal','nor','pal','tor','var','zel','car','don','fal','gan','har','jar','kal','lan','man','nan','par','ran','san','tan','van'],
    sylsF: ['rel','vel','cor','sal','nar','bar','tar','mor','dal','bel','fen','nav','rav','zel','ade','bel','car','del','ela','fer','gar','hed','isa','jal','kal','lar','mar','nar','ora','pal','ran','sal','tal','ual','var','yal','zel'],
    sylsN: ['ren','vel','cor','sal','nar','bar','tar','mor','dal','bel','fen','nav','rav','zel','car','del','fer','gar','hel','jal','kal','lar','mar','nar','pal','ran','sal','tal','var','wal'],
    endM:  [['o',12],['on',8],['or',7],['ar',6],['an',6],['ro',7],['al',5],['ino',6],['ano',6],['ero',5],['ren',5],['den',4],['vel',4],['dar',4],['tor',4]],
    endF:  [['a',14],['ela',7],['ara',8],['ora',7],['ira',6],['ella',7],['ina',7],['ena',6],['ana',7],['osa',5],['ica',5],['ida',5],['ia',6],['era',5]],
    endN:  [['el',7],['al',7],['is',6],['in',6],['en',6],['an',6],['iel',4],['orin',4]],
    lnOnsets: ['fort','ros','karak','gras','casga','mon','vel','cor','sal','nar','bar','tar','mor','alv','rod','fen','nav','rav','dal','bel','tel','font','herm','sev','ald','balt','lop','card','ren','cel','dom','fer','gon','her','lon','mal','nor','pal','ram','sab','tan','van'],
    lnNuclei: ['al','en','ez','az','or','ar','in','on','ro','re','ri','vel','cor','sal'],
    lnEnd:  ['a','o','or','al','ar','ez','iz','ini','ani','ona','ena','ina','ino','ero','ado','ido','ense','illo','illa'],
    midNames: ['Von','Kan','Te','De','Del','La','El','Al','Vel','Cor','Mon','Mar','San'],
    midChance: 0.35,
    preview: ['Velaro','Renela','Fenrica'],
    mixNote: 'Pairs naturally with Torrelari. Strong contrast with Kastozsi.'
  },

  Cospaijian: {
    label: 'Cospaijian',
    desc: 'Eastern spirit',
    realWorld: 'Japanese / Arabic blend',
    forbidStart: ['v','b','f','x','z','w'],
    sylsM: ['ami','kyo','shi','nao','har','tak','rei','sen','zen','miy','sor','nor','fum','hir','kaz','mak','ich','ori','ren','kai','shu','nak','yom','rin','sak','tor','yuk','rum','haru','kage','kami','kori','maru','naru','roku','saku','taku'],
    sylsF: ['ami','shi','nao','har','rei','miy','sor','nor','fum','hir','kaz','ori','umi','ren','kai','nak','yom','rin','sak','yuk','hana','kaho','kari','mari','nari','rari','sari','tari','himi','kami','kimi','mimi','nimi','rimi','simi'],
    sylsN: ['ami','kyo','shi','nao','har','tak','rei','sen','miy','sor','nor','fum','hir','kaz','ori','umi','ren','kai','nak','yom','rin','sak','yuk','hana','komi','nomi','romi','somi','tomi','yomi'],
    endM:  [['ji',5],['kyu',6],['ryu',5],['shu',4],['ro',6],['to',5],['ko',5],['no',5],['do',4],['kyo',7],['ren',5],['ken',4],['zen',4],['on',4],['ru',4],['su',3]],
    endF:  [['a',8],['ya',6],['ra',5],['ka',5],['na',6],['rika',5],['kana',5],['nara',4],['mira',4],['sora',5],['hana',5],['yuki',4],['mio',4],['haru',3]],
    endN:  [['ikyo',6],['nikyo',5],['ai',5],['ei',5],['ri',5],['ki',4],['ni',4],['kiro',3],['soru',3],['miru',3]],
    lnOnsets: ['pap','veyt','abr','llel','shir','tak','mor','nor','sor','yor','zor','kar','par','sar','tar','var','hir','mir','nar','bor','kor','dor','vor','rar','yar','ais','oka','shi','nak','miy','hay','kaw','fuj','ish','yam','mat','sak','tan','wat'],
    lnNuclei: ['a','ar','or','ur','er','ir','al','el','il','ol','an','en','in','on','omi','ori','ami','iri','uki','aki'],
    lnEnd:  ['ra','ara','har','ythar','oka','ika','ori','omi','umi','ami','ishi','endo','iken','ako','hara','yama','gawa','saki','moto','naka','hashi','mura'],
    midNames: ['Char','Shion','Llell','Veyt','Shir','Tak','Kor','Yor','Mir','Nar','Kai','Ren','Sen','Zen'],
    midChance: 0.45,
    preview: ['Amikyo','Yukina','Haruna'],
    mixNote: 'Pairs with Kirleighan for distinctive mixed register. Strong contrast with Kastozsi.'
  },

  Chaldean: {
    label: 'Chaldean',
    desc: 'Verdant lands',
    realWorld: 'Mediterranean-ancient (Kokia, Aranea, Habrina register)',
    forbidStart: ['x','z','j','w','q'],
    sylsM: ['ko','ka','ha','ho','ra','ro','na','no','ba','bo','ma','mo','la','lo','sa','so','ta','to','da','do','ca','co','pa','po','fa','fo','ga','go','va','vo','re','ke','he','ne','be','me','le','se','te','de','ce','pe','fe','ge','ve'],
    sylsF: ['ka','ha','ra','na','ba','ma','la','sa','ta','da','ca','pa','fa','ga','va','ke','he','re','ne','be','me','le','se','te','de','ce','pe','fe','ge','ve','ki','hi','ri','ni','bi','mi','li','si','ti','di','ci','pi','fi','gi','vi'],
    sylsN: ['ko','ka','ha','ho','ra','ro','na','no','ba','bo','ma','mo','la','lo','sa','so','ta','to','da','do','ca','co','pa','po','fa','fo','ga','go','va','vo'],
    endM:  [['ia',6],['an',8],['on',8],['in',7],['or',6],['ar',6],['us',6],['os',5],['as',5],['is',5],['ek',5],['ok',5],['ik',5]],
    endF:  [['a',12],['ia',8],['ea',7],['ina',7],['ara',7],['ora',6],['ela',6],['ana',7],['ira',6],['era',5],['ula',5],['ola',5],['ima',6]],
    endN:  [['y',6],['ey',6],['i',6],['ei',6],['ai',5],['oi',5],['in',6],['an',6],['el',6],['ol',5],['al',5]],
    lnOnsets: ['nak','bur','mor','cor','fen','kel','mel','ren','ald','corm','dor','fir','had','ivo','lar','mer','nor','pad','red','sed','vald','wes','hab','kor','lar','mar','nar','par','sar','tar','var','kar','har','bar','dar','far','gar','ber','cer','der','fer','ger','her','ler','ner','per','ter','ver'],
    lnNuclei: ['an','or','er','al','el','on','in','ar','ir','ul','ol','ab','ib','ob','am','im','om'],
    lnEnd:  ['an','ia','a','i','or','ar','on','in','us','os','as','is','ek','ok','ik','ina','ara','ora','ela','ana','ira','era'],
    midNames: ['De','Le','La','El','Al','Ha','Ka','Ra','Na','Ba','Ma'],
    midChance: 0.2,
    preview: ['Kokia','Habrina','Aranea'],
    mixNote: 'Smooth blend with Kirleighan. Nearly indistinguishable register.'
  },

  Kirleighan: {
    label: 'Kirleighan',
    desc: 'Gossamer tongue',
    realWorld: 'Underground modern elves — soft, worn smooth, vowel-forward',
    forbidStart: ['k','g','x','z','b','p','q','j','w'],
    sylsM: ['sel','mir','vel','orn','nel','del','rel','tel','mel','aer','sir','cor','aed','uel','eil','oel','sael','mael','nael','rael','tael','dael','fael','hael','lael','vael'],
    sylsF: ['ael','eil','iel','ail','oil','uel','oel','sel','mir','vel','nel','del','rel','tel','mel','aer','sir','cor','aed','sael','mael','nael','rael','tael','dael','fael','hael','lael','vael','aeil','oeil','ueil'],
    sylsN: ['ael','sel','mir','vel','orn','nel','del','rel','tel','mel','aer','sir','cor','aed','uel','eil','oel'],
    endM:  [['orn',7],['aun',6],['ith',5],['un',5],['or',6],['er',5],['en',5],['an',5],['in',5],['ard',4],['aur',4],['iel',6],['nel',4],['del',4],['vel',5],['sel',5],['rel',4],['tel',4],['mel',4]],
    endF:  [['a',7],['ia',6],['ea',6],['le',5],['re',5],['ne',5],['ise',4],['ine',5],['ene',4],['aire',4],['eire',4],['iana',3],['ela',5],['ira',4],['era',4],['ael',5],['eil',4],['iel',5]],
    endN:  [['i',6],['ei',6],['ai',5],['oi',5],['ie',5],['ae',5],['oe',4],['ir',4],['er',4],['el',5],['ol',4],['al',4]],
    lnOnsets: ['rom','krisht','vel','sel','mir','nel','del','rel','tel','mel','cor','sir','aed','vor','orn','rin','eth','dor','aen','iel','sil','nil','dil','ril','til','mil','fil','hil','lil','nal','ral','sal','tal','val','wal','yel','zel','bel','cel','del','fel','gel','hel','jel','kel','lel','mel'],
    lnNuclei: ['na','ma','ra','la','sa','ta','da','fa','ha','va','ni','mi','ri','li','si','ti','di','fi','hi','vi','no','mo','ro','lo','so','to','do','fo','ho','vo'],
    lnEnd:  ['nan','man','ran','lan','san','tan','dan','fan','han','van','nin','min','rin','lin','sin','tin','din','fin','hin','vin','non','mon','ron','lon','son','ton','don','fon','hon','von','na','ma','ra','la','sa','ta','da','fa','ha','va'],
    midNames: ['De','Du','Di','Le','La','Ae','Ei','Oi','Mir','Vel','Sel','Nel'],
    midChance: 0.25,
    preview: ['Aelira','Selorn','Mireth'],
    mixNote: 'Smooth blend with Chaldean. Jarring but distinctive with Cospaijian.'
  },

  Torrelari: {
    label: 'Torrelari',
    desc: 'Indian-Japanese blend',
    realWorld: 'Indian / Japanese — Lanova, Nelrimen, Rokunga register',
    forbidStart: ['x','z','q','w'],
    sylsM: ['rok','nel','ven','ren','kal','sal','nar','bar','tar','mor','rav','dal','bel','man','ran','kan','san','tan','lan','ban','van','pan','han','dan','gan','jan','wal','ral','nal','mal','lal','hal','gal','fal','dal','cal','bal'],
    sylsF: ['lan','van','nav','ran','san','tan','man','kan','ban','han','dan','gan','wal','ral','nal','mal','lal','hal','gal','fal','dal','cal','bal','la','va','na','ra','ma','ka','ha','da','ga','ta','sa','ba','pal','tal','sal','kal','jal'],
    sylsN: ['rok','nel','ven','ren','kal','sal','nar','bar','tar','mor','rav','dal','bel','man','ran','kan','san','tan','lan','ban','van','pan','han','dan','gan'],
    endM:  [['nga',9],['ren',7],['men',7],['ven',6],['lin',6],['rin',6],['din',5],['gin',5],['kin',5],['sin',5],['min',5],['bin',5],['tin',5],['vin',5],['on',6],['an',6],['in',6],['or',5],['ar',5]],
    endF:  [['va',9],['na',10],['ra',9],['ma',8],['la',8],['ya',7],['ka',6],['ha',6],['da',6],['ga',6],['ta',6],['sa',6],['ba',5],['nika',5],['mika',5],['lika',5],['vika',5]],
    endN:  [['ri',7],['mi',7],['vi',6],['ni',6],['li',6],['ki',5],['si',5],['hi',5],['di',5],['gi',5],['ti',5],['pi',5]],
    lnOnsets: ['ven','tor','kan','kaz','sev','mor','hal','kar','zel','nav','fer','vel','cor','sal','pal','nar','bar','tav','bren','alv','naz','gal','aim','far','dar','jal','raj','sin','han','ram','kri','dev','man','sun','van','ran','san','pan','tan','lan','ban'],
    lnNuclei: ['u','a','e','i','o','ar','er','ir','or','an','en','in','ul','el','ri','ra','or','al','vel','am','em','im','om','um'],
    lnEnd:  ['eparte','avel','aki','ara','anza','anda','elia','aria','oria','ga','er','amma','ima','ita','ika','ula','ola','ila','ela','ala','uma','oma','ema','ama','ami','imi','umi','omi'],
    midNames: [],
    midChance: 0,
    preview: ['Lanova','Nelrimen','Rokuri'],
    mixNote: 'Pairs naturally with Saladisi. Interesting contrast with Kirleighan.'
  },

  Kastozsi: {
    label: 'Kastozsi',
    desc: 'Iron & ice',
    realWorld: 'Slavic / Eastern European',
    forbidStart: ['x','q','j','y'],
    sylsM: ['zal','vel','drel','grel','krel','trel','ost','brat','grat','krat','svet','kov','krev','daz','kur','yul','bren','hal','ghal','veld','gret','zold','dren','kran','bor','gor','kor','mor','nor','sor','tor','vor','zor','ral','sal','tal','val','wal','yal'],
    sylsF: ['zal','vel','ost','svet','kov','krev','daz','kur','yul','bren','hal','veld','gret','zold','dren','bor','gor','kor','mor','nor','sor','tor','vor','zor','ral','sal','tal','val','wal','yal','ova','eva','iva','kova','nova','lova','dova','tova'],
    sylsN: ['zal','vel','ost','svet','kov','krev','daz','kur','bren','hal','veld','gret','zold','bor','gor','kor','mor','nor','sor','tor','vor','zor','ral','sal','tal','val','wal'],
    endM:  [['ren',7],['rik',6],['ven',5],['gatz',5],['or',5],['ul',4],['al',4],['ev',5],['ov',6],['ar',4],['er',4],['an',5],['en',5],['in',5],['gratz',4],['tch',4],['drek',5],['dim',4],['kov',5],['lan',4]],
    endF:  [['iva',7],['anna',7],['isa',5],['ana',5],['ina',6],['ova',7],['eva',6],['ira',5],['a',6],['ya',5],['ra',5],['ka',5],['na',5],['inka',5],['anka',5],['enka',4],['riva',5]],
    endN:  [['el',5],['al',5],['is',4],['as',4],['in',5],['en',5],['an',5],['ev',5],['ov',5],['av',4],['eln',4],['keln',4]],
    lnOnsets: ['korv','krisht','tori','tim','suy','mir','hal','kan','kov','krev','ost','brat','grat','krat','vrat','zol','vel','drel','grel','krel','svet','bor','gor','prat','zald','imal','seno','kano','drev','bren'],
    lnNuclei: ['eth','na','el','ov','ev','av','iv','uv','an','en','in','on','ar','er','ir','or','kov','kev','kav','nov','nev','nav'],
    lnEnd:  ['eth','na','enko','tch','ov','ev','av','iv','sky','ski','ska','skie','vel','nal','gatz','brat','vitch','mitch','nitch','kov','kova','nov','nova','lev','leva'],
    midNames: ['Ival','Sen','Halm','Tim','Suyov','Mir','Kan','Bor','Kor','Daz','Vel','Zel','Bel','Del','Kel'],
    midChance: 0.85,
    preview: ['Ghalrik','Kovrina','Zaldorn'],
    mixNote: 'Strong contrast with every other culture. Works with Alien for unusual heritage.'
  },

  Alien: {
    label: 'Alien',
    desc: 'Beyond tongue',
    realWorld: 'Non-human — no natural language equivalent',
    forbidStart: [],
    sylsM: ['syr','jed','vog','pan','kal','tryl','nril','skil','thar','zor','vol','kel','veth','dai','nth','egda','alfn','kril','sryn','vyth','zrel','mab','ai','ob','eg'],
    sylsF: ['syr','jed','ail','mab','vog','pan','kal','tryl','nril','skil','thar','zor','vol','kel','veth','egda','alfn','kril','sryn','vyth','zrel','ai','ob','eg','kai','jai','lai','mai','nai'],
    sylsN: ['syr','jed','ail','mab','vog','pan','kal','tryl','nril','skil','thar','zor','vol','kel','veth','egda','alfn','kril','sryn','vyth','zrel','ai','ob','eg'],
    endM:  [['oi',5],['char',4],['uri',4],['nth',5],['dai',5],['dor',5],['kel',5],['vol',4],['thar',5],['skil',4],['nril',4],['veth',5],['zor',4],['kril',4],['tryl',4],['rynth',4],['neth',4]],
    endF:  [['uri',5],['ila',5],['aya',5],['a',6],['ia',5],['era',4],['ara',4],['ora',4],['ika',4],['ela',4],['ina',4],['una',4],['ova',4],['ira',4],['thari',4]],
    endN:  [['oi',5],['al',5],['il',5],['el',5],['ul',4],['ol',4],['yn',5],['yr',5],['yl',5],['yv',4],['ai',5],['ei',5]],
    lnOnsets: ['ob','eg','syr','jed','ail','mab','vog','zryn','krel','sth','rth','nth','xrel','sryn','vyth','tryl','kril','nril','skil','thar','veth','zor','vol','kel','pan','kal','jeil','blad','alf','egda'],
    lnNuclei: ['eg','dai','ai','yn','el','al','il','ol','an','en','in','on','ar','er','ir','or','ov','kri','nri','tri'],
    lnEnd:  ['dai','dor','kel','vol','thar','skil','nril','veth','zor','kril','tryl','zryn','egdai','char','uri','nth','nile','rim','fens'],
    midNames: ['Eg','Ai','Ob','Syr','Jed','Vog','Zryn','Krel','Tryl','Nril'],
    midChance: 0.3,
    preview: ['Syrynth','Kalruna','Egdaith'],
    mixNote: 'Works with Kastozsi for harsh heritage. Very distinctive with anything else.'
  }
};

const MIXED_GUIDE = {
  'Saladisi + Torrelari':   'Natural blend — both warm, open vowels. First from one, last from the other flows cleanly.',
  'Saladisi + Chaldean':    'Works well. Both soft consonants, slightly foreign feel when combined.',
  'Cospaijian + Kirleighan':'Jarring but distinctive. Both vowel-rich but differently. Good for mixed characters.',
  'Cospaijian + Kastozsi':  'Strong contrast. Soft Japanese-Arabic meets hard Slavic. Reads as very different parents.',
  'Kirleighan + Chaldean':  'Smooth blend. Both soft and ancient-feeling. Hard to tell apart at a glance.',
  'Kastozsi + Alien':       'Harsh combination. Works for characters with unusual non-human heritage.',
  'Torrelari + Kirleighan': 'Interesting contrast. Indian-Japanese warmth against soft elvish.',
  'Saladisi + Kastozsi':    'Strong contrast. Warm Romance against cold Slavic. Reads as very different parents.',
  'Chaldean + Kirleighan':  'Nearly identical register. Very smooth — could pass as one culture.',
  'Cospaijian + Alien':     'Implies alien ancestry. Immediately distinctive.',
};

// Export for use in other files
if (typeof module !== 'undefined') module.exports = { CULTURES, MIXED_GUIDE };
