const dummyData = [
	{
		"gender": "male",
		"fname": "Gabriel",
		"lname": "Fuentes",
		"email": "gabriel.fuentes@example.com",
		"username": "bluefish780",
		"age": 46
	},
	{
		"gender": "male",
		"fname": "Eugen",
		"lname": "Guillaume",
		"email": "eugen.guillaume@example.com",
		"username": "crazyleopard638",
		"age": 42
	},
	{
		"gender": "female",
		"fname": "Amy",
		"lname": "Ma",
		"email": "amy.ma@example.com",
		"username": "smallswan158",
		"age": 46
	},
	{
		"gender": "male",
		"fname": "Ali",
		"lname": "Babaoğlu",
		"email": "ali.babaoglu@example.com",
		"username": "blacktiger475",
		"age": 26
	},
	{
		"gender": "male",
		"fname": "Harley",
		"lname": "Chen",
		"email": "harley.chen@example.com",
		"username": "lazyrabbit567",
		"age": 50
	},
	{
		"gender": "male",
		"fname": "Ezra",
		"lname": "Brown",
		"email": "ezra.brown@example.com",
		"username": "purplekoala288",
		"age": 64
	},
	{
		"gender": "male",
		"fname": "Benjamin",
		"lname": "Morris",
		"email": "benjamin.morris@example.com",
		"username": "orangerabbit183",
		"age": 41
	},
	{
		"gender": "male",
		"fname": "Sean",
		"lname": "Rommers",
		"email": "sean.rommers@example.com",
		"username": "brownfish989",
		"age": 46
	},
	{
		"gender": "male",
		"fname": "Olivier",
		"lname": "Knight",
		"email": "olivier.knight@example.com",
		"username": "redswan914",
		"age": 43
	},
	{
		"gender": "female",
		"fname": "Mariël",
		"lname": "Levels",
		"email": "mariel.levels@example.com",
		"username": "ticklishwolf403",
		"age": 69
	},
	{
		"gender": "female",
		"fname": "Ege",
		"lname": "Köylüoğlu",
		"email": "ege.koyluoglu@example.com",
		"username": "purplerabbit318",
		"age": 77
	},
	{
		"gender": "male",
		"fname": "Donald",
		"lname": "Campbell",
		"email": "donald.campbell@example.com",
		"username": "beautifulfrog844",
		"age": 50
	},
	{
		"gender": "male",
		"fname": "مهدي",
		"lname": "حسینی",
		"email": "mhdy.hsyny@example.com",
		"username": "tinybutterfly928",
		"age": 74
	},
	{
		"gender": "female",
		"fname": "Tiril",
		"lname": "Schjetne",
		"email": "tiril.schjetne@example.com",
		"username": "yellowpanda604",
		"age": 70
	},
	{
		"gender": "female",
		"fname": "Ella",
		"lname": "Jørgensen",
		"email": "ella.jorgensen@example.com",
		"username": "bluemouse931",
		"age": 70
	},
	{
		"gender": "female",
		"fname": "Mariam",
		"lname": "Gunnes",
		"email": "mariam.gunnes@example.com",
		"username": "lazykoala160",
		"age": 26
	},
	// {
	// 	"gender": "male",
	// 	"fname": "Askil",
	// 	"lname": "Ugland",
	// 	"email": "askil.ugland@example.com",
	// 	"username": "beautifulgorilla512",
	// 	"age": 78
	// },
	// {
	// 	"gender": "female",
	// 	"fname": "Eva",
	// 	"lname": "Dubois",
	// 	"email": "eva.dubois@example.com",
	// 	"username": "organicbird496",
	// 	"age": 56
	// },
	// {
	// 	"gender": "female",
	// 	"fname": "Carolina",
	// 	"lname": "Navarro",
	// 	"email": "carolina.navarro@example.com",
	// 	"username": "greenmeercat941",
	// 	"age": 65
	// },
	// {
	// 	"gender": "female",
	// 	"fname": "Jane",
	// 	"lname": "Caldwell",
	// 	"email": "jane.caldwell@example.com",
	// 	"username": "tinykoala110",
	// 	"age": 59
	// },
	// {
	// 	"gender": "male",
	// 	"fname": "Deniz",
	// 	"lname": "Özdenak",
	// 	"email": "deniz.ozdenak@example.com",
	// 	"username": "whiteswan239",
	// 	"age": 68
	// },
	// {
	// 	"gender": "male",
	// 	"fname": "Rasmus",
	// 	"lname": "Johansen",
	// 	"email": "rasmus.johansen@example.com",
	// 	"username": "redtiger810",
	// 	"age": 29
	// },
	// {
	// 	"gender": "female",
	// 	"fname": "Maya",
	// 	"lname": "Mackay",
	// 	"email": "maya.mackay@example.com",
	// 	"username": "brownladybug815",
	// 	"age": 76
	// },
	// {
	// 	"gender": "female",
	// 	"fname": "آنیتا",
	// 	"lname": "سالاری",
	// 	"email": "anyt.slry@example.com",
	// 	"username": "purplefrog478",
	// 	"age": 63
	// },
	// {
	// 	"gender": "male",
	// 	"fname": "Borja",
	// 	"lname": "Benitez",
	// 	"email": "borja.benitez@example.com",
	// 	"username": "bluecat790",
	// 	"age": 55
	// },
	// {
	// 	"gender": "male",
	// 	"fname": "حسین",
	// 	"lname": "جعفری",
	// 	"email": "hsyn.jaafry@example.com",
	// 	"username": "whitewolf188",
	// 	"age": 25
	// },
	// {
	// 	"gender": "female",
	// 	"fname": "Begüm",
	// 	"lname": "Abanuz",
	// 	"email": "begum.abanuz@example.com",
	// 	"username": "blackpeacock330",
	// 	"age": 45
	// },
	// {
	// 	"gender": "male",
	// 	"fname": "Clayton",
	// 	"lname": "Jordan",
	// 	"email": "clayton.jordan@example.com",
	// 	"username": "tinysnake825",
	// 	"age": 53
	// },
	// {
	// 	"gender": "male",
	// 	"fname": "Apostolos",
	// 	"lname": "Hammel",
	// 	"email": "apostolos.hammel@example.com",
	// 	"username": "silverbutterfly148",
	// 	"age": 35
	// },
	// {
	// 	"gender": "male",
	// 	"fname": "Chad",
	// 	"lname": "Larson",
	// 	"email": "chad.larson@example.com",
	// 	"username": "blackrabbit510",
	// 	"age": 58
	// },
	// {
	// 	"gender": "female",
	// 	"fname": "Holly",
	// 	"lname": "Anderson",
	// 	"email": "holly.anderson@example.com",
	// 	"username": "greenbutterfly136",
	// 	"age": 38
	// },
	// {
	// 	"gender": "male",
	// 	"fname": "Mads",
	// 	"lname": "Rasmussen",
	// 	"email": "mads.rasmussen@example.com",
	// 	"username": "lazybutterfly697",
	// 	"age": 48
	// },
	// {
	// 	"gender": "male",
	// 	"fname": "Eetu",
	// 	"lname": "Lassila",
	// 	"email": "eetu.lassila@example.com",
	// 	"username": "redladybug478",
	// 	"age": 66
	// },
	// {
	// 	"gender": "female",
	// 	"fname": "Ellie",
	// 	"lname": "Jackson",
	// 	"email": "ellie.jackson@example.com",
	// 	"username": "yellowduck671",
	// 	"age": 43
	// },
	// {
	// 	"gender": "female",
	// 	"fname": "Hermine",
	// 	"lname": "Nygaard",
	// 	"email": "hermine.nygaard@example.com",
	// 	"username": "blackmeercat830",
	// 	"age": 43
	// },
	// {
	// 	"gender": "female",
	// 	"fname": "Katherine",
	// 	"lname": "Gordon",
	// 	"email": "katherine.gordon@example.com",
	// 	"username": "orangebear280",
	// 	"age": 31
	// },
	// {
	// 	"gender": "female",
	// 	"fname": "Latife",
	// 	"lname": "Özberk",
	// 	"email": "latife.ozberk@example.com",
	// 	"username": "goldenmeercat702",
	// 	"age": 76
	// },
	// {
	// 	"gender": "female",
	// 	"fname": "Asta",
	// 	"lname": "Andersen",
	// 	"email": "asta.andersen@example.com",
	// 	"username": "goldenbird444",
	// 	"age": 71
	// },
	// {
	// 	"gender": "male",
	// 	"fname": "Davut",
	// 	"lname": "Menemencioğlu",
	// 	"email": "davut.menemencioglu@example.com",
	// 	"username": "lazygoose894",
	// 	"age": 52
	// },
	// {
	// 	"gender": "male",
	// 	"fname": "Ruben",
	// 	"lname": "Ray",
	// 	"email": "ruben.ray@example.com",
	// 	"username": "ticklishelephant581",
	// 	"age": 51
	// },
	// {
	// 	"gender": "male",
	// 	"fname": "Beau",
	// 	"lname": "Wang",
	// 	"email": "beau.wang@example.com",
	// 	"username": "brownmeercat933",
	// 	"age": 70
	// },
	// {
	// 	"gender": "male",
	// 	"fname": "Cesar",
	// 	"lname": "Vazquez",
	// 	"email": "cesar.vazquez@example.com",
	// 	"username": "organiccat934",
	// 	"age": 32
	// },
	// {
	// 	"gender": "female",
	// 	"fname": "Jean",
	// 	"lname": "Silva",
	// 	"email": "jean.silva@example.com",
	// 	"username": "tinymeercat974",
	// 	"age": 45
	// },
	// {
	// 	"gender": "male",
	// 	"fname": "Francisco",
	// 	"lname": "Reed",
	// 	"email": "francisco.reed@example.com",
	// 	"username": "goldenzebra803",
	// 	"age": 75
	// },
	// {
	// 	"gender": "female",
	// 	"fname": "Latife",
	// 	"lname": "Koçoğlu",
	// 	"email": "latife.kocoglu@example.com",
	// 	"username": "purplebird694",
	// 	"age": 30
	// },
	// {
	// 	"gender": "female",
	// 	"fname": "Ytje",
	// 	"lname": "Waijers",
	// 	"email": "ytje.waijers@example.com",
	// 	"username": "crazymeercat367",
	// 	"age": 48
	// },
	// {
	// 	"gender": "female",
	// 	"fname": "Sophia",
	// 	"lname": "Campbell",
	// 	"email": "sophia.campbell@example.com",
	// 	"username": "greenbutterfly476",
	// 	"age": 33
	// },
	// {
	// 	"gender": "male",
	// 	"fname": "Aytaç",
	// 	"lname": "De Jager",
	// 	"email": "aytac.dejager@example.com",
	// 	"username": "blackbear287",
	// 	"age": 27
	// },
	// {
	// 	"gender": "male",
	// 	"fname": "Vivaldo",
	// 	"lname": "Teixeira",
	// 	"email": "vivaldo.teixeira@example.com",
	// 	"username": "purplebear960",
	// 	"age": 67
	// },
	// {
	// 	"gender": "male",
	// 	"fname": "Landon",
	// 	"lname": "Odonoghue",
	// 	"email": "landon.odonoghue@example.com",
	// 	"username": "greenswan890",
	// 	"age": 45
	// }
];

export default dummyData;