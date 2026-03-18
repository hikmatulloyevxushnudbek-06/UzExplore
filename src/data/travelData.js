const travelData = {
  samarkand: {
    id: 1,
    name: "Samarqand",
    mainImage: "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?q=80&w=800",
    description: "Yer yuzining sayqali hisoblangan Samarqand - temuriylar renessansining markazi va jahon sivilizatsiyasi chorrahasi.",
    monuments: [
      { title: "Registon maydoni", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800", info: "Ulug'bek, Sherdor va Tilla-Qori madrasalaridan iborat jahonshumul ansambl.", location: "Registon ko'chasi", nearbyRestaurants: [{ name: "Registon Restoran", distance: "100m" }] },
      { title: "Shohi Zinda", image: "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=800", info: "Moviy koshinlar bilan bezatilgan maqbaralar turkumi.", location: "Afrosiyob tepaligi yaqinida", nearbyRestaurants: [{ name: "Zinda Cafe", distance: "200m" }] },
      { title: "Go'ri Amir", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800", info: "Amir Temur va temuriylar xilxonasi.", location: "Bo'stonsaroy ko'chasi", nearbyRestaurants: [{ name: "Amir Temur Cafe", distance: "150m" }] },
      { title: "Bibixonim masjidi", image: "https://images.unsplash.com/photo-1627838563920-5321f64f3583?q=80&w=800", info: "O'rta asrlarning eng ulkan jome masjidi.", location: "Islom Karimov ko'chasi", nearbyRestaurants: [{ name: "Bibi Cafe", distance: "120m" }] },
      { title: "Ulug'bek rasadxonasi", image: "https://images.unsplash.com/photo-1545532503-4f928e086113?q=80&w=800", info: "XV asrda qurilgan astronomik tadqiqotlar markazi.", location: "Cho'ponota tepaligi", nearbyRestaurants: [{ name: "Olimlar oshxonasi", distance: "300m" }] },
      { title: "Xo'ja Ahror Valiy", image: "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?q=80&w=800", info: "Tasavvuf namoyandasi xotirasiga qurilgan majmua.", location: "Samarqand tumani", nearbyRestaurants: [{ name: "Milliy taomlar", distance: "400m" }] },
      { title: "Ruhobod maqbarasi", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800", info: "XIV asrga oid eng qadimiy maqbaralardan biri.", location: "Registon yaqinida", nearbyRestaurants: [{ name: "Labigovuz", distance: "200m" }] }
    ]
  },
  bukhara: {
    id: 2,
    name: "Buxoro",
    mainImage: "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=800",
    description: "Buxoroai Sharif - Islom olamining ma'rifat markazi va 2500 yillik tarixiy yodgorliklar xazinasi.",
    monuments: [
      { title: "Ark qal'asi", image: "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=800", info: "Buxoro amirlarining qadimiy qarorgohi.", location: "Eski shahar markazi", nearbyRestaurants: [{ name: "Ark Restoran", distance: "50m" }] },
      { title: "Poyi Kalon", image: "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?q=80&w=800", info: "Minorai Kalon va Masjidi Kalon ansambli.", location: "Xo'ja Nurobod ko'chasi", nearbyRestaurants: [{ name: "Minora Cafe", distance: "100m" }] },
      { title: "Somoniylar maqbarasi", image: "https://images.unsplash.com/photo-1627838563920-5321f64f3583?q=80&w=800", info: "Pishgan g'ishtdan qurilgan ilk me'moriy durdona.", location: "Somoniylar bog'i", nearbyRestaurants: [{ name: "Chashmai Ayub", distance: "300m" }] },
      { title: "Labihovuz", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800", info: "Nodir Devonbegi madrasasi va xonaqohidan iborat majmua.", location: "Buxoro markazi", nearbyRestaurants: [{ name: "Lyabi House", distance: "20m" }] },
      { title: "Sitorai Mohi Xosa", image: "https://images.unsplash.com/photo-1610450949065-1f2842379051?q=80&w=800", info: "Buxoro amirlarining yozgi saroyi.", location: "Buxoro chekkasi", nearbyRestaurants: [{ name: "Amir saroyi", distance: "500m" }] },
      { title: "Chor Minor", image: "https://images.unsplash.com/photo-1626015569573-0498a46b38c2?q=80&w=800", info: "To'rt minorali o'ziga xos madrasa.", location: "Eski shahar", nearbyRestaurants: [{ name: "Chor Minor Cafe", distance: "150m" }] },
      { title: "Bahouddin Naqshband", image: "https://images.unsplash.com/photo-1545532503-4f928e086113?q=80&w=800", info: "Naqshbandiya tariqati asoschisining muqaddas ziyoratgohi.", location: "Kogon tumani", nearbyRestaurants: [{ name: "Ziyorat Restoran", distance: "200m" }] }
    ]
  },
  khiva: {
    id: 3,
    name: "Xiva",
    mainImage: "https://images.unsplash.com/photo-1627838563920-5321f64f3583?q=80&w=800",
    description: "Xiva - tirik muzey shahar, Xorazm me'morchiligining o'chmas namunasi.",
    monuments: [
      { title: "Ichan Qal'a", image: "https://images.unsplash.com/photo-1627838563920-5321f64f3583?q=80&w=800", info: "YUNESKO ro'yxatidagi butun boshli tarixiy shahar.", location: "Xiva markazi", nearbyRestaurants: [{ name: "Khiva Moon", distance: "200m" }] },
      { title: "Kalta Minor", image: "https://images.unsplash.com/photo-1565452326792-748939c05809?q=80&w=800", info: "Moviy sirlangan g'ishtlar bilan qoplangan ulkan minora.", location: "Ichan Qal'a darvozasi", nearbyRestaurants: [{ name: "Terrassa Cafe", distance: "50m" }] },
      { title: "Juma masjidi", image: "https://images.unsplash.com/photo-1610450949065-1f2842379051?q=80&w=800", info: "213 ta o'ymakor yog'och ustunli noyob masjid.", location: "Ichan Qal'a markazi", nearbyRestaurants: [{ name: "Mirza Bashi", distance: "100m" }] },
      { title: "Pahlavon Mahmud maqbarasi", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800", info: "Xiva xonlarining daxmasi va muqaddas qadamjo.", location: "Ichan Qal'a ichida", nearbyRestaurants: [{ name: "Zaynab Cafe", distance: "150m" }] },
      { title: "Islomxo'ja minorasi", image: "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=800", info: "Xivadagi eng baland minora.", location: "Islomxo'ja madrasasi yonida", nearbyRestaurants: [{ name: "Minora View", distance: "80m" }] },
      { title: "Toshhovli saroyi", image: "https://images.unsplash.com/photo-1626015569573-0498a46b38c2?q=80&w=800", info: "Xonlarning hashamatli yozgi saroyi.", location: "Ichan Qal'a sharqiy qismi", nearbyRestaurants: [{ name: "Palvan Restoran", distance: "120m" }] }
    ]
  },
  tashkent: {
    id: 4,
    name: "Toshkent",
    mainImage: "https://images.unsplash.com/photo-1626015569573-0498a46b38c2?q=80&w=800",
    description: "Poytaxt Toshkent - qadimiy va zamonaviy binolar uyg'unlashgan Markaziy Osiyoning eng yirik shahri.",
    monuments: [
      { title: "Hazrati Imom", image: "https://images.unsplash.com/photo-1626015569573-0498a46b38c2?q=80&w=800", info: "Usmon Qur'oni saqlanadigan muqaddas majmua.", location: "Olmazor tumani", nearbyRestaurants: [{ name: "Milliy taomlar", distance: "300m" }] },
      { title: "Ko'kaldosh madrasasi", image: "https://images.unsplash.com/photo-1610450949065-1f2842379051?q=80&w=800", info: "XVI asrga oid faoliyat yuritayotgan madrasa.", location: "Chorsu maydoni", nearbyRestaurants: [{ name: "Chorsu ovqat bozori", distance: "50m" }] },
      { title: "Zangiota majmuasi", image: "https://images.unsplash.com/photo-1545532503-4f928e086113?q=80&w=800", info: "Toshkent viloyatidagi eng mashhur ziyoratgoh.", location: "Zangiota tumani", nearbyRestaurants: [{ name: "Zangiota restorani", distance: "200m" }] },
      { title: "Baroqxon madrasasi", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800", info: "XVI asr me'morchiligi namunasi.", location: "Hastimom majmuasida", nearbyRestaurants: [{ name: "Old City Cafe", distance: "100m" }] }
    ]
  },
  shahrisabz: {
    id: 5,
    name: "Shahrisabz",
    mainImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800",
    description: "Amir Temurning tug'ilgan shahri - Kesh.",
    monuments: [
      { title: "Oqsaroy", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800", info: "Amir Temurning ulkan saroyi qoldiqlari.", location: "Shahrisabz markazi", nearbyRestaurants: [{ name: "Kesh Cafe", distance: "100m" }] },
      { title: "Dorut Tilovat", image: "https://images.unsplash.com/photo-1627838563920-5321f64f3583?q=80&w=800", info: "Ko'k Gumbaz masjidi joylashgan majmua.", location: "Tarixiy markaz", nearbyRestaurants: [{ name: "Dorut Tilovat Cafe", distance: "150m" }] },
      { title: "Dorusiodat", image: "https://images.unsplash.com/photo-1565452326792-748939c05809?q=80&w=800", info: "Temuriylar xonadoni vakillari uchun qurilgan xilxona.", location: "Oqsaroy yaqinida", nearbyRestaurants: [{ name: "Temuriy Taomlar", distance: "200m" }] }
    ]
  },
  termiz: {
    id: 6,
    name: "Termiz",
    mainImage: "https://images.unsplash.com/photo-1545532503-4f928e086113?q=80&w=800",
    description: "Qadimiy Baqtriya poytaxti, turli dinlar va madaniyatlar beshigi.",
    monuments: [
      { title: "Hakim at-Termiziy", image: "https://images.unsplash.com/photo-1545532503-4f928e086113?q=80&w=800", info: "Buyuk muhaddis Hakim at-Termiziy majmuasi.", location: "Amudaryo bo'yi", nearbyRestaurants: [{ name: "Surxon Milliy", distance: "300m" }] },
      { title: "Sulton Saodat", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800", info: "Sayyidlar sulolasi daxmasi.", location: "Termiz shahri chekkasi", nearbyRestaurants: [{ name: "Saodat Cafe", distance: "400m" }] },
      { title: "Fayoztepa", image: "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=800", info: "Qadimgi Budda ibodatxonasi qoldiqlari.", location: "Termiz yaqinida", nearbyRestaurants: [{ name: "Baqtriyaosh", distance: "1km" }] },
      { title: "Zurmala minorasi", image: "https://images.unsplash.com/photo-1610450949065-1f2842379051?q=80&w=800", info: "Qadimgi Budda stupasi.", location: "Termiz yaqinida", nearbyRestaurants: [{ name: "Termiz Rest", distance: "500m" }] }
    ]
  },
  kokan: {
    id: 7,
    name: "Qo'qon",
    mainImage: "https://images.unsplash.com/photo-1610450949065-1f2842379051?q=80&w=800",
    description: "Qo'qon xonligi poytaxti, san'at va hunarmandlar markazi.",
    monuments: [
      { title: "Xudoyorxon o'rdasi", image: "https://images.unsplash.com/photo-1610450949065-1f2842379051?q=80&w=800", info: "Qo'qon xonlarining oxirgi hashamatli saroyi.", location: "Markaziy maydon", nearbyRestaurants: [{ name: "Xon Saroy", distance: "150m" }] },
      { title: "Jome masjidi", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800", info: "98 ta ustunli betakror jome masjidi.", location: "Eski shahar", nearbyRestaurants: [{ name: "Qo'qon patiri", distance: "200m" }] },
      { title: "Modarixon daxmasi", image: "https://images.unsplash.com/photo-1565452326792-748939c05809?q=80&w=800", info: "Nodira begim xotirasiga qurilgan maqbara.", location: "Tarixiy qabriston", nearbyRestaurants: [{ name: "Nodira Cafe", distance: "100m" }] }
    ]
  },
  nukus: {
    id: 8,
    name: "Nukus",
    mainImage: "https://images.unsplash.com/photo-1565452326792-748939c05809?q=80&w=800",
    description: "Qoraqalpog'iston poytaxti va Orolbo'yi tarixi markazi.",
    monuments: [
      { title: "Mizdaxon majmuasi", image: "https://images.unsplash.com/photo-1626015569573-0498a46b38c2?q=80&w=800", info: "O'rta asrlarga oid ulkan tarixiy nekropol.", location: "Xo'jayli tumani", nearbyRestaurants: [{ name: "Karvon Cafe", distance: "500m" }] },
      { title: "Chilpiq minorasi", image: "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?q=80&w=800", info: "Zardushtiylarning qadimiy 'Dahmasi'.", location: "Beruniy yo'nalishida", nearbyRestaurants: [{ name: "Orol Rest", distance: "2km" }] },
      { title: "Gabr qal'a", image: "https://images.unsplash.com/photo-1544365530-36319888989b?q=80&w=800", info: "Antik davrga oid mudofaa inshooti.", location: "Nukus yaqinida", nearbyRestaurants: [{ name: "Nukusosh", distance: "1km" }] }
    ]
  },
  margilan: {
    id: 9,
    name: "Marg'ilon",
    mainImage: "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?q=80&w=800",
    description: "Atlas va Ipak vatani bo'lgan qadimiy Marg'ilon.",
    monuments: [
      { title: "Yodgorlik ipak fabrikasi", image: "https://images.unsplash.com/photo-1544365530-36319888989b?q=80&w=800", info: "Ipak to'qishning qadimiy uslublari saqlangan joy.", location: "Marg'ilon markazi", nearbyRestaurants: [{ name: "Ipakchi Cafe", distance: "100m" }] },
      { title: "Pir Siddiq majmuasi", image: "https://images.unsplash.com/photo-1590076175582-45a1877799bb?q=80&w=800", info: "Kaptarli mozor nomi bilan mashhur qadamjo.", location: "Marg'ilon markazi", nearbyRestaurants: [{ name: "Said Cafe", distance: "200m" }] }
    ]
  },
  navoi: {
    id: 10,
    name: "Navoiy",
    mainImage: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=800",
    description: "Navoiy - qadimiy karvon yo'llari va petrogliflar o'lkasi.",
    monuments: [
      { title: "Raboti Malik", image: "https://images.unsplash.com/photo-1590076175582-45a1877799bb?q=80&w=800", info: "XI asrga oid ulkan karvonsaroy darvozasi.", location: "Navoiy-Buxoro yo'li", nearbyRestaurants: [{ name: "Malik Restoran", distance: "50m" }] },
      { title: "Chashma majmuasi", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=800", info: "Nurotadagi muqaddas buloq va qal'a.", location: "Nurota shahri", nearbyRestaurants: [{ name: "Nurota Taomlari", distance: "100m" }] },
      { title: "Sarmishsoy", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=800", info: "Minglab qoyatosh suratlari (petrogliflar).", location: "Nurota tizmalari", nearbyRestaurants: [{ name: "Camp Site", distance: "2km" }] }
    ]
  },
  namangan: {
    id: 11,
    name: "Namangan",
    mainImage: "https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=800",
    description: "Namangan - gullar shahri va qadimiy Axsikent vatani.",
    monuments: [
      { title: "Axsikent", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800", info: "Qadimgi Farg'ona poytaxti qoldiqlari.", location: "To'raqo'rg'on tumani", nearbyRestaurants: [{ name: "Sirdaryo Restoran", distance: "1km" }] },
      { title: "Mulla Qirg'iz", image: "https://images.unsplash.com/photo-1596422846543-75c6fc18a593?q=80&w=800", info: "XX asr boshiga oid noodatiy madrasa.", location: "Namangan markazi", nearbyRestaurants: [{ name: "Gulzor Cafe", distance: "200m" }] }
    ]
  },
  jizzakh: {
    id: 12,
    name: "Jizzax",
    mainImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
    description: "Jizzax - Ilonoti darasi va Zomin tog'lari o'lkasi.",
    monuments: [
      { title: "Amir Temur darvozasi", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800", info: "Tabiiy dara va tarixiy qoyatosh yozuvlari.", location: "G'allaorol yaqinida", nearbyRestaurants: [{ name: "Jizzax Somsa", distance: "1km" }] }
    ]
  }
};

export default travelData;