import { mergeTravelLocales } from './travelDataMerge.js';
import { travelPatchRu, travelPatchEn } from './travelLocalePatches.js';

const travelDataUz = {
    samarkand: {
      id: 1,
      name: 'Samarqand',
      mainImage:
        'https://uzbekistan.travel/storage/app/media/Rasmlar/Samarqand/umumiy/cropped-images/shutterstock_1401921575-0-0-0-0-1738745845.jpg',
      description:
        "Samarqand — O‘zbekistondagi qadimiy va eng yirik shaharlardan biri, Samarqand viloyatining ma'muriy, iqtisodiy va madaniy markazi. Buyuk Ipak yo‘li ustida joylashgan bu shahar o‘zining betakror masjidlari, maqbaralari va tarixiy obidalari bilan dunyoga mashhur.Samarqand haqida asosiy ma'lumotlar:Tarixiy ahamiyati: Shahar 1925-1930 yillarda O‘zbekiston SSRning poytaxti bo‘lgan.Diqqatga sazovor joylar: Amir Temur maqbarasi, Registon maydoni, Shohi Zinda majmuasi va boshqa ko‘plab me'moriy yodgorliklar.Joylashuvi: O‘zbekistonning markaziy qismida, Samarqand viloyatida joylashgan. Samarqand o‘zining boy tarixi va madaniy merosi bilan Sharq durdonasi deb ataladi.",
      monuments: [
        {
          title: 'Registon maydoni',
          image:
            'https://uzbekistan.travel/storage/app/uploads/public/67a/45f/ae4/thumb_4552_1140_0_0_0_auto.png',
          info: "Ulug'bek, Sherdor va Tilla-Qori madrasalaridan iborat jahonshumul ansambl.",
          location:
            'https://yandex.uz/maps/org/1223343165/?ll=66.977769%2C39.654941&mode=search&sctx=ZAAAAAgBEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJDJQUWABT1j8RbMzriEM2xD8iBgABAgMEBSgKOABA31BIAWoCdXqdAc3MzD2gAQCoAQC9Abz7pyjCAQW9%2BKrHBIICEFJlZ2lzdG9uIG1heWRvbmmKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=66.975709%2C39.654941&sspn=0.010900%2C0.005059&text=Registon%20maydoni&z=17',
          nearbyRestaurants: [
            { name: "Labig'or Restoran", distance: '150m' },
            { name: 'Registon Choyxonasi', distance: '200m' },
          ],
        },
        {
          title: 'Shohi Zinda',
          image:
            'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/zinda1-0-0-0-0-1582891137-0-0-0-0-1585300990.jpg',
          info: 'XI–XIX asrlar davomida shakllangan maqbaralar ansambli.',
          location:
            'https://yandex.uz/maps/10334/samarkand/search/Shohi%20Zinda/?ll=66.951569%2C39.660101&sll=66.977769%2C39.654941&sspn=0.006781%2C0.005059&z=11.89',
          nearbyRestaurants: [
            { name: 'Zinda Cafe', distance: '300m' },
            { name: 'Afrosiyob Oshxonasi', distance: '450m' },
          ],
        },
        {
          title: "Go'ri Amir",
          image:
            'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/guremir-0-0-0-0-1586953464.jpg',
          info: 'Amir Temur va temuriylar xonadoni maqbarasi.',
          location:
            'https://yandex.uz/maps/org/57510713981/?ll=66.969241%2C39.648564&mode=search&sll=66.951569%2C39.660101&sspn=0.376452%2C0.174695&text=Go%27ri%20Amir&z=16.63',
          nearbyRestaurants: [
            { name: 'Samarkand Restaurant', distance: '400m' },
            { name: 'Gur Emir Cafe', distance: '100m' },
          ],
        },
        {
          title: 'Bibixonim masjidi',
          image:
            'https://uzbekistan.travel/storage/app/media/Rasmlar/Samarqand/cropped-images/IMG_0623-0-0-0-0-1738316617.jpg',
          info: 'Amir Temur farmoni bilan qurilgan ulkan jome masjid.',
          location:
            'https://yandex.uz/maps/10334/samarkand/search/Bibixonim%20masjidi/?ll=66.944422%2C39.659584&sll=66.969241%2C39.648564&sspn=0.014087%2C0.006538&z=12.24',
          nearbyRestaurants: [
            { name: 'Bibixonim Choyxonasi', distance: '50m' },
            { name: 'Siyob Milliy Taomlar', distance: '250m' },
          ],
        },
        {
          title: "Ulug'bek rasadxonasi",
          image:
            'https://uzbekistan.travel/storage/app/media/uploaded-files/ulugbek.gif',
          info: 'Rasadxona bunyodkori Muhammad Taragʻay Ulugʻbek Amir Temurning nevarasidir. U bobosi vafotidan 11 yil avval, yaʼni, 1394-yilda tugʻilgan. Shahzodaning ustozlari yozuvchi va faylasuf Orif Ozariy va buyuk matematik Qozizoda Rumiy boʻlib, keyinchalik rasadxona faoliyatida ularning ham xizmatlari katta.',
          location:
            "https://yandex.uz/maps/10334/samarkand/search/Ulug'bek%20rasadxonasi/?ll=67.005667%2C39.674934&sll=66.944422%2C39.659584&sspn=0.295358%2C0.137064&z=16.24",
          nearbyRestaurants: [
            { name: 'Ulughbek Cafe', distance: '100m' },
            { name: 'Yulduzlar Restorani', distance: '350m' },
          ],
        },
        {
          title: 'Xo‘ja Doniyor maqbarasi',
          image:
            'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/daniil-0-0-0-0-1598606722.jpg',
          info: 'Samarqanddagi Xo‘ja Doniyor maqbarasi Afrosiyob tepaligi yaqinida, Siyob arig‘i bo‘yida joylashgan 20-asr boshlariga oid noyob me’moriy yodgorlikdir. U 15 metrli g‘ayritabiiy cho‘ziq daxmasi bilan mashhur bo‘lib, uch din (islom, xristian, iudaizm) vakillari tomonidan avliyo deb e’zozlanadi. Maqbara besh gumbazli bo‘lib, yonida shifobaxsh hisoblangan buloq bor.',
          location:
            'https://yandex.uz/maps/org/219003379558/?ll=66.994535%2C39.673359&mode=search&sctx=ZAAAAAgBEAAaKAoSCafqHtlcwFBAEa96wDxk1kNAEhIJ1%2FoioS3nkj8RJjYf14aKgT8iBgABAgMEBSgKOABA3lBIAWoCdXqdAc3MzD2gAQCoAQC9AXWRQcrCAQbmvvnsrwaCAhlYb%2BKAmGphIERvbml5b3IgbWFxYmFyYXNpigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=66.994535%2C39.673359&sspn=0.018718%2C0.008684&text=Xo%E2%80%98ja%20Doniyor%20maqbarasi&z=16.22',
          nearbyRestaurants: [
            { name: 'Siyob Shovullama', distance: '600m' },
            { name: 'Konigil Meros Cafe', distance: '1.2km' },
          ],
        },
        {
          title: 'Ruhobod maqbarasi',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Mausoleum_Ruhabad_%282%29.jpg/250px-Mausoleum_Ruhabad_%282%29.jpg',
          info: "Samarqanddagi Ruhobod maqbarasi XIV asrga (1380-yillar) oid boʻlib, Amir Temur tomonidan mashhur diniy arbob va avliyo Burhoniddin Sagʻarjiy xotirasiga qurdirilgan eng qadimiy binolardan biridir. Ruhlar maskani ma'nosini anglatuvchi bu maqbara oddiy, bezaksiz, ammo ulugʻvor kub shaklidagi gumbazli bino boʻlib, Amir Temur ham bu yerdan oʻtganda otidan tushib hurmat bajo keltirgan.",
          location:
            'https://yandex.uz/maps/10334/samarkand/search/Ruhobod%20maqbarasi/?ll=66.985385%2C39.663365&sll=66.994535%2C39.673359&sspn=0.018718%2C0.008684&z=14.2',
          nearbyRestaurants: [
            { name: 'Old City Restaurant', distance: '300m' },
            { name: 'Platan', distance: '800m' },
          ],
        },
        {
          title: 'Xo‘ja Ahror Valiy majmuasi',
          image:
            'https://uzbekistan.travel/storage/app/media/Rasmlar/Toshkent/cropped-images/IMG_0551.JPG-0-0-0-0-1738065894.jpg',
          info: 'Xoja Ahror majmuasi – Samarqand atrofidagi meʼmoriy yodgorlik; Samarqand tumanidagi Ulugʻbek qishlogʻi hududida. Xoja Axror qabri yaqinida turli davrlarda bunyod etilgan Nodir Devonbegi madrasasi, ikki ayvon, masjid, minora hamda hovuzli hovlidan iborat majmua. ',
          location:
            'https://yandex.uz/maps/org/45955052341/?ll=66.985385%2C39.648835&mode=search&sctx=ZAAAAAgBEAAaKAoSCQM%2BP4wQv1BAEdAn8iTp1ENAEhIJc51GWipvsz8Rj1Tf%2BUUJoj8iBgABAgMEBSgKOABA3lBIAWoCdXqdAc3MzD2gAQCoAQC9AVQ%2F5FfCAQa15omZqwGCAhxYb%2BKAmGphIEFocm9yIFZhbGl5IG1ham11YXNpigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=66.985385%2C39.648835&sspn=0.151831%2C0.070470&text=Xo%E2%80%98ja%20Ahror%20Valiy%20majmuasi&z=13.2',
          nearbyRestaurants: [
            { name: 'Xonatlas Restoran', distance: '500m' },
            { name: "Xo'ja Ahror Milliy Taomlar", distance: '200m' },
          ],
        },
        {
          title: 'Abu Mansur al-Moturidiy maqbarasi',
          image:
            'https://uzbekistan.travel/storage/app/media/wepb/Maqolalar/Maturudi/cropped-images/IMG_6083-0-0-0-0-1744364022.webp',
          info: "Samarqanddagi Abu Mansur al-Moturidiy majmuasi — buyuk islom ilohiyotchisi va moturidiylik ta'limoti asoschisi sharafiga 2000-yilda barpo etilgan muhtasham yodgorlikdir. Registon yaqinida joylashgan majmua .",
          location:
            'https://yandex.uz/maps/org/156060725059/?ll=66.986279%2C39.654610&mode=search&sctx=ZAAAAAgBEAAaKAoSCQM%2BP4wQv1BAEQXAeAYN00NAEhIJzm3CvTJvwz8R7l9ZaVIKsj8iBgABAgMEBSgKOABA3lBIAWoCdXqdAc3MzD2gAQCoAQC9AQfHylbCAQbD3savxQSCAiFBYnUgTWFuc3VyIGFsLU1vdHVyaWRpeSBtYXFiYXJhc2mKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=66.986279%2C39.654610&sspn=0.018979%2C0.008808&text=Abu%20Mansur%20al-Moturidiy%20maqbarasi&z=16.2',
          nearbyRestaurants: [
            { name: 'Emirhan', distance: '350m' },
            { name: 'Registon Fast Food', distance: '400m' },
          ],
        },
        {
          title: 'Imom al-Buxoriy majmuasi',
          image:
            'https://www.silkroad-samarkand.com/upload/heads/al-buhari-0-head.jpg',
          info: "Samarqanddagi Imom al-Buxoriy majmuasi buyuk muhaddis Imom Buxoriy qabri ustiga qurilgan muhtasham ziyoratgohdir. Majmua oʻz ichiga maqbara, masjid, kutubxona va oʻquv markazini (Dorul hadis) oladi. Hozirda majmua zamonaviy va tarixiy uslubda ta'mirlanib, ziyoratchilar uchun keng infratuzilma yaratilgan",
          location:
            'https://yandex.uz/maps/?ll=66.960911%2C39.739063&mode=search&sll=66.986279%2C39.654610&sspn=0.018979%2C0.008808&text=Imom%20al-Buxoriy%20majmuasi&z=11.2',
          nearbyRestaurants: [
            { name: 'Tayloq Somsa', distance: '1km' },
            { name: 'Buxoriy Milliy Taomlar', distance: '200m' },
          ],
        },
        {
          title: 'Hazrati Xizr masjidi',
          image: 'https://legacy.uz/media/0.1.jpg',
          info: 'Rasadxona bunyodkori Muhammad Taragʻay Ulugʻbek Amir Temurning nevarasidir. U bobosi vafotidan 11 yil avval, yaʼni, 1394-yilda tugʻilgan. Shahzodaning ustozlari yozuvchi va faylasuf Orif Ozariy va buyuk matematik Qozizoda Rumiy boʻlib, keyinchalik rasadxona faoliyatida ularning ham xizmatlari katta.',
          location:
            'https://yandex.uz/maps/10334/samarkand/search/Hazrati%20Xizr%20masjidi/?ll=66.988319%2C39.666225&sll=66.960911%2C39.739063&sspn=0.607324%2C0.281507&z=14.67',
          nearbyRestaurants: [
            { name: 'Hazrati Xizr Choyxonasi', distance: '150m' },
            { name: 'Siyob Dehqon Bozori Oshxonasi', distance: '300m' },
          ],
        },
        {
          title: 'Afrosiyob tepaliklari',
          image:
            'https://uzbekistan.travel/storage/app/media/uploaded-files/afrosiyob1.jpg',
          info: 'Afrosiyob tepaliklari — Samarqand shahrining shimoliy qismida joylashgan, qadimgi va oʻrta asrlarga oid ulkan shahar xarobalaridir. Bu hudud qadimiy Samarqandning asl oʻrni hisoblanadi.',
          location:
            'https://yandex.uz/maps/org/104123169290/?ll=66.987685%2C39.669817&mode=search&sctx=ZAAAAAgBEAAaKAoSCf3AVZ5Av1BAEYhjXdxG1UNAEhIJRUseT8sPrD8RnWUWodgKmj8iBgABAgMEBSgKOABA3lBIAWoCdXqdAc3MzD2gAQCoAQC9AZFrd7fCASGK9OXxgwPwuI%2FiPN2A2esqj9T0wvUC79f6tS2v%2F5CgsQOCAh9TYW1hcnFhbmQgQWZyb3NpeW9iIHRlcGFsaWtsYXJpigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=67.003685%2C39.655482&sspn=0.125916%2C0.058436&text=Samarqand%20Afrosiyob%20tepaliklari&z=13.47',
          nearbyRestaurants: [
            { name: 'Afrosiyob Palace Restaurant', distance: '700m' },
            { name: 'Caravan Restaurant', distance: '900m' },
          ],
        },
        {
          title: 'Afrosiyob muzeyi',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/2/22/Afrasiabmain.jpg',
          info: 'Samarqanddagi Afrosiyob muzeyi (Samarqand shahar tarixi muzeyi) — dunyodagi eng yirik arxeologik yodgorliklardan biri bo‘lgan qadimgi Afrosiyob shaharchasi hududida joylashgan muhim madaniy maskandir.',
          location:
            'https://yandex.uz/maps/org/16311901296/?ll=66.990403%2C39.669340&mode=search&sll=66.987685%2C39.669817&sspn=0.078326%2C0.058424&text=Afrosiyob%20muzeyi&z=16.47',
          nearbyRestaurants: [
            { name: 'Museum Cafe', distance: '50m' },
            { name: 'Osh Markazi', distance: '1.5km' },
          ],
        },
      ],
    },
    bukhara: {
      id: 2,
      name: 'Buxoro',
      mainImage:
        'https://uzbekistan.travel/storage/app/media/Rasmlar/Buxoro/Umumiy/cropped-images/shutterstock_1007253181-0-0-0-0-1738740666.jpg',
      description:
        "Buxoro – 2500 yildan ortiq tarixga ega, O‘zbekistonning eng qadimiy va muqaddas shaharlaridan biri, Gumbazlar shahri deb ataladi. UNESCO Butunjahon merosi ro‘yxatiga kiritilgan ushbu shahar Islom madaniyati markazi, ko‘plab me’moriy obidalar (Ark qal’asi, Minorai Kalon) va madrasalarga ega yirik turizm markazidir. Buxoroda ko‘plab tarixiy shaxslar yashab ijod etgan.Buxoro haqida asosiy ma'lumotlar:Tarixi: Shahar 2500 yildan oshiq tarixga ega bo'lib, miloddan avvalgi davrlarga borib taqaladi. U qadimiy Buyuk Ipak yo'li ustida joylashgan bo'lib, ilm-fan va savdo markazi bo'lgan.Nomi: Buxoro so'zi fors tilidan olingan bo'lib, vihara (ibodatxona) yoki buxor (nur) degan ma'nolarni anglatadi, bu uning qadimiy diniy markaz bo'lganidan dalolat beradi.Me'moriy merosi: Buxoroning tarixiy markazi ochiq osmon ostidagi muzey hisoblanadi. Asosiy obidalarga Ark qal'asi, Minorai Kalon, Poi Kalon majmuasi, Labi Hovuz va ko'plab qadimiy madrasalar kiradi.Madaniyat va ilm-fan: Buxoro Islom olamining gumbazi deb ham atalgan. Bu yerda Ibn Sino, Bahouddin Naqshband kabi buyuk olim va tasavvuf namoyandalari yashab ijod qilgan.Turizm: Hozirgi kunda Buxoro xalqaro turizm markazi bo'lib, har yili minglab sayyohlar uning tarixiy ko'chalari va me'moriy obidalarini ko'rish uchun tashrif buyurishadi.",
      monuments: [
        {
          title: "Ark qal'asi",
          image:
            'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/Ark-0-0-0-0-1596541961.jpg',
          info: "Buxoro Ark qal’asi — shaharning eng qadimiy va monumental mudofaa inshooti bo‘lib, 4 gektar maydonda 16-20 metr balandlikdagi sun’iy tepalikda joylashgan. Qadimda hukmdorlar yashagan, shahar ichida shahar sanalgan ushbu qal'a Registon maydoni ustida qad ko‘targan va 1920-yilgacha Buxoro amirlarining qarorgohi bo‘lgan.",
          location:
            'https://yandex.uz/maps/org/244760055164/?ll=64.410361%2C39.778558&mode=search&sctx=ZAAAAAgBEAAaKAoSCQ%2B3Q8Niv1BAEcvz4O6s1UNAEhIJ58b0hCUekD8Ru16aIsDpfT8iBgABAgMEBSgKOABA3lBIAWoCdXqdAc3MzD2gAQCoAQC9AYL09ujCAQb8mtjmjweCAhJCdXhvcm8gQXJrIHFhbCdhc2mKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=64.410361%2C39.778558&sspn=0.022105%2C0.010240&text=Buxoro%20Ark%20qal%27asi&z=15.98',
          nearbyRestaurants: [{ name: 'Ark Restoran', distance: '50m' }],
        },
        {
          title: 'Poyi Kalon',
          image:
            'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/cropped-images/poikalon-641-46-0-0-1582871540-0-0-0-0-1582871789.jpg',
          info: "Buxorodagi Poyi Kalon ansambli XII-XVI asrlarda bunyod etilgan noyob me'moriy majmua bo'lib, o'z ichiga Minorai Kalon, Masjidi Kalon va Mir-Arab madrasasini oladi. Minorai Kalon o'z davrida karvonlar uchun mayoq vazifasini o'tagan va Chingizxon bosqini paytida ham saqlanib qolgan yagona inshootdir.",
          location:
            'https://yandex.uz/maps/10330/bukhara/search/Buxoro%20Poyi%20Kalon/?ll=64.439753%2C39.774226&sll=64.410361%2C39.778558&sspn=0.022105%2C0.010240&z=12.66',
          nearbyRestaurants: [{ name: 'Minora Cafe', distance: '100m' }],
        },
        {
          title: 'Labihovuz',
          image:
            'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/xaos-0-0-0-0-1582872376.jpg',
          info: 'Buxoroning qoq markazidagi Labi Hovuz majmuasi (XVI-XVII asrlar) shahar tarixiy markazining asosiy me’moriy majmualaridan biri hisoblanadi. U Nodir Devonbegi hovuzi atrofida qurilgan Kukeldosh madrasasi, Nodir Devonbegi madrasasi va xonaqohidan iborat. Hozirda bu maskan sayyohlar uchun sevimli maskandir.',
          location:
            'https://yandex.uz/maps/org/95587691370/?ll=64.420272%2C39.773373&mode=search&sctx=ZAAAAAgBEAAaKAoSCVhUxOkkHFBAEUDbatYZ40NAEhIJgEkqU8xBzD8R7IhDNpAuuj8iBgABAgMEBSgKOABA2lBIAWoCdXqdAc3MzD2gAQCoAQC9ARkjDiHCAQbq1uGL5AKCAhBCdXhvcm8gTGFiaWhvdnV6igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=64.420272%2C39.773373&sspn=0.014087%2C0.006526&text=Buxoro%20Labihovuz&z=16.63',
          nearbyRestaurants: [{ name: 'Lyabi House', distance: '20m' }],
        },
        {
          title: 'Somoniylar maqbarasi',
          image:
            'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/mausoleum%20of%20ismail%20samani%20in%20bukhara-0-0-0-0-1597225108.jpg',
          info: 'Buxorodagi Somoniylar maqbarasi (taxm. 892—907-yillar) — Ismoil Somoniy va uning avlodlari dafn etilgan, o‘rta asrlar islom me’morchiligining noyob namunasi. Pishgan g‘ishtdan geometrik uslubda qurilgan bu inshoot qadimiy So‘g‘d an’analarini o‘zida saqlab qolgan, YUNESKOning Butunjahon merosi ro‘yxatiga kiritilgan.',
          location:
            'https://yandex.uz/maps/org/245485358573/?ll=64.411607%2C39.774065&mode=search&sctx=ZAAAAAgBEAAaKAoSCSvbh7zlGlBAEQFO7%2BL94kNAEhIJF9hjIqXZjD8R29styQG7ej8iBgABAgMEBSgKOABA2lBIAWoCdXqdAc3MzD2gAQCoAQC9AYfdujrCAQbtm8XAkgeCAhtCdXhvcm8gU29tb25peWxhciBtYXFiYXJhc2mKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=64.411607%2C39.774065&sspn=0.031479%2C0.014584&text=Buxoro%20Somoniylar%20maqbarasi&z=15.47',
          nearbyRestaurants: [{ name: 'Chashmai Ayub', distance: '300m' }],
        },
        {
          title: 'Chor Minor',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Chor_minor_from_south.jpg/250px-Chor_minor_from_south.jpg',
          info: "1807-yilda Xalifa Niyozqul tomonidan bunyod etilgan ushbu madrasa to'rtta minorasi bilan ajralib turadi. Har bir minora o'ziga xos shaklga ega bo'lib, ba'zi tadqiqotchilar buni to'rt xil dunyo dinlarining ramziy ifodasi deb talqin qilishadi. Chor Minor o'zining noyob me'moriy uslubi va rang-barang bezaklari bilan mashhur bo'lib, Buxoro shahrining tarixiy markazida joylashgan.",
          location:
            'https://yandex.uz/maps/10330/bukhara/search/Buxoro%20Chor%20Minor/?ll=64.439753%2C39.774226&sll=64.411607%2C39.774065&sspn=0.031479%2C0.014584&z=12.66',
          nearbyRestaurants: [{ name: 'Old Bukhara', distance: '150m' }],
        },
        {
          title: 'Sitorai Mohi Xosa',
          image:
            'https://uzbekistan.travel/storage/app/media/Otabek/kategoriya/bukhara/cropped-images/DSC_0885-0-0-0-0-1770099794.jpg',
          info: "Sitorai Mohi Xosa — Buxoro amirlarining XIX-XX asrlarga mansub yozgi qarorgohi bo‘lib, Yulduzlar va oyga xos saroy ma'nosini anglatadi. Buxoro shahrining shimolida joylashgan bu majmua sharqona va yevropacha uslublar uyg‘unligida qurilgan. Hozirda saroy amaliy bezak san’ati muzeyi va salomatlik maskani sifatida faoliyat yuritmoqda.",
          location:
            'https://yandex.uz/maps/10330/bukhara/search/BuxoroSitorai%20Mohi%20Xosa/?ll=64.439753%2C39.774226&sll=64.439753%2C39.774226&sspn=0.220758%2C0.102273&z=12.66',
          nearbyRestaurants: [{ name: 'Sitora Restoran', distance: '500m' }],
        },
        {
          title: 'Bolo hovuz masjidi',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/f/f7/La_mosqu%C3%A9e_Bolo-Khaouz_%28Boukhara%2C_Ouzb%C3%A9kistan%29_%285684790316%29.jpg',
          info: "1712-yilda qurilgan ushbu masjid 'Qirq ustunli masjid' nomi bilan ham mashhur. Ark qal'asi qarshisida joylashgan bo'lib, Buxoro amirlari bu yerga juma namozini o'qish uchun chiqishgan. Masjid ustunlarining hovuzdagi aksi judo go'zal manzara hosil qiladi.Masjidning eng diqqatga sazovor qismi uning 20 ta baland yog'och ustunli ayvonidir. Bu ustunlar hovuz suvida akslanib, jami 40 ta bo'lib ko'ringani uchun xalq orasida Qirq ustunli masjid deb ham yuritiladi.",
          location:
            'https://yandex.uz/maps/?ll=64.439753%2C39.930426&mode=search&sll=64.439753%2C39.774226&sspn=0.220758%2C0.102273&text=Buxoro%20Bolo%20hovuz%20masjidi&z=10.64',
          nearbyRestaurants: [
            { name: 'Bolo Hovuz Choyxonasi', distance: '50m' },
          ],
        },
        {
          title: "Ulug'bek va Abdulazizxon madrasalari",
          image:
            'https://uzbekistan.travel/storage/app/media/abdulaziz%20khan.jpg',
          info: 'Buxorodagi Ulug‘bek (1417-y) va Abdulazizxon (1652-y) madrasalari shahar markazida bir-biriga ro‘parasida joylashgan noyob meʼmoriy ansambl bo‘lib, o‘rta asrlar islom ta’lim tizimi va sharqona me’morchilikning eng go‘zal namunalaridir. Ulug‘bek madrasasi astronomik bezaklari bilan ajralib tursa, Abdulazizxon madrasasi murakkab naqshinkorligi va hashamati bilan ajralib turadi. ',
          location:
            "https://yandex.uz/maps/10330/bukhara/search/Buxoro%20Ulug'bek%20va%20Abdulazizxon%20madrasalari/?ll=64.423543%2C39.776834&sll=64.439753%2C39.930426&sspn=0.895359%2C0.413853&z=15.56",
          nearbyRestaurants: [
            { name: 'Wishbone Cafe', distance: '50m' },
            { name: 'Silk Road Tea House', distance: '120m' },
          ],
        },
        {
          title: "Mag'oki Attori masjidi",
          image: 'https://uzbekistan.travel/storage/app/media/s1200.jpg',
          info: 'Magʻoki attori masjidi — oʻrta asr meʼmorchiligi yodgorligi, Buxorodagi tarixiy, 12—16-asrlarga oid ustunli gumbazli masjid. Yer sathidan 4,5 metrdan koʻproq pastda joylashgan. Oʻymakor bezaklari bilan mashhur. Buxoro yodgorliklarining bugungi kungacha saqlanib qolganlar orasidagi eng qadimiysi.',
          location:
            'https://yandex.uz/maps/org/10263250005/?ll=64.423543%2C39.776834&mode=search&sll=64.423543%2C39.776834&sspn=0.029575%2C0.013701&text=Buxoro%20Mag%27oki%20Attori%20masjidi&z=15.56',
          nearbyRestaurants: [
            { name: 'Bella Italia', distance: '100m' },
            { name: 'Budreddin', distance: '150m' },
          ],
        },
        {
          title: 'Chor Bakr nekropoli',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/3/31/%D0%A7%D0%BE%D1%80-%D0%91%D0%B0%D0%BA%D1%80.jpg',
          info: "Buxoro yaqinidagi Chor Bakr majmuasi (XVI asr) O'liklar shahri nomi bilan mashhur bo'lib, Juybori shayxlari dafn etilgan yirik me'moriy nekropoldir. Sumitan qishlog'ida joylashgan bu majmua xonaqoh, masjid, madrasa va haziralardan iborat bo'lib, Shayboniy Abdullaxon II davrida rivojlangan. Ziyoratgoh to'rt aka-uka (Bakrlar) avlodlari xotirasiga qurilgan.",
          location:
            'https://yandex.uz/maps/10330/bukhara/geo/6471921489/?ll=64.412839%2C39.789426&z=19.33',
          nearbyRestaurants: [
            { name: 'Chor Bakr Somsa', distance: '100m' },
            { name: 'Milliy Taomlar', distance: '300m' },
          ],
        },
        {
          title: 'Chashmai Ayub maqbarasi',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/9/9e/Chashma-Ayub_Mausoleum1.jpg',
          info: "Buxorodagi Chashmai Ayub maqbarasi (XII-XVI asrlar) — shifobaxsh buloq va muqaddas qadamjo joylashgan tarixiy me'moriy yodgorlik. Rivoyatlarga ko'ra, Injil payg'ambari Ayub asos solgan buloq ustiga qurilgan. O'ziga xos konus gumbazlari bilan ajralib turadigan ushbu inshootda hozirda suv muzeyi faoliyat yuritadi.",
          location:
            'https://yandex.uz/maps/org/163147644807/?ll=64.407477%2C39.783100&mode=search&sctx=ZAAAAAgBEAAaKAoSCdvgRPRrGlBAEVlOQukL5UNAEhIJeJYgI6DCYT8R6V%2BSyhRzUD8iBgABAgMEBSgKOABA2lBIAWoCdXqdAc3MzD2gAQCoAQC9AUpRoWPCAQaH%2F%2B3i3wSCAh5CdXhvcm8gQ2hhc2htYWkgQXl1YiBtYXFiYXJhc2mKAgCSAgUxMDMyMpoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=64.407477%2C39.783100&sspn=0.036920%2C0.017102&text=Buxoro%20Chashmai%20Ayub%20maqbarasi&z=15.24',
          nearbyRestaurants: [
            { name: 'Samonidlar Cafe', distance: '200m' },
            { name: 'Chashma Restaurant', distance: '150m' },
          ],
        },
        {
          title: 'Abduxoliq Gijduvoniy ziyoratgohi (1-pir)',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/4/47/Khoja_Abdulkhaliq_Ghiduvani_complex1.jpg',
          info: 'Abduxoliq G‘ijduvoniy (1103–1179) — Buxorodagi yetti pirning birinchisi, Xojagon tariqati asoschisi. Ziyoratgoh G‘ijduvon shahrida joylashgan bo‘lib, majmua tarkibida Abdulxoliq G‘ijduvoniy maqbarasi, Ulug‘bek madrasasi va masjid mavjud. U xalq orasida Xojai jahon nomi bilan mashhur bo‘lib, dil ba yoru, dast ba kor (qalb Allohda, qo‘l mehnatda) tamoyilini asoslagan.',
          location:
            'https://yandex.uz/maps/org/50207992151/?ll=64.424245%2C39.781828&mode=search&sctx=ZAAAAAgBEAAaKAoSCZavy%2FCfG1BAEQpJZvUO5UNAEhIJycfuAiUFVj8RlwM91LZhRD8iBgABAgMEBSgKOABA2lBIAWoCdXqdAc3MzD2gAQCoAQC9AVwqyl3CAQbX0oSFuwGCAidCdXhvcm8gQWJkdXhvbGlxIEdpamR1dm9uaXkgeml5b3JhdGdvaGmKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=64.424245%2C39.781828&sspn=0.043002%2C0.019920&text=Buxoro%20Abduxoliq%20Gijduvoniy%20ziyoratgohi&z=15.02',
          nearbyRestaurants: [
            { name: 'Gijduvon Somsa', distance: '200m' },
            { name: 'Meros Restoran', distance: '400m' },
          ],
        },
        {
          title: 'Xoja Orif Revgariy ziyoratgohi (2-pir)',
          image:
            'https://avatars.mds.yandex.net/get-altay/16374562/2a00000198848f1e5e3b6d5345cd662b00ce/orig',
          info: 'Xoja Orif Ar-Revgariy (Xoja Orif Mohitobon nomi bilan ham tanilgan) — Buxorodagi mashhur Yetti pirning ikkinchisi, buyuk mutasavvif va murshiddir. U Xojagon-Naqshbandiya tariqatining shakllanishida muhim rol o‘ynagan.',
          location:
            'ZAAAAAgBEAAaKAoSCXUfgNQmG1BAEW2MnfAS5ENAEhIJQj9Tr1sEpj8REjElkuhllD8iBgABAgMEBSgKOABA2lBIAWoCdXqdAc3MzD2gAQCoAQC9Abck9d3CAQbx3fjT9AaCAiVCdXhvcm8gWG9qYSBPcmlmIFJldmdhcml5IHppeW9yYXRnb2hpigIAkgIAmgIMZGVza3RvcC1tYXBz',
          nearbyRestaurants: [
            { name: 'Shofirkon Choyxonasi', distance: '500m' },
          ],
        },
        {
          title: "Xoja Mahmud Anjir Fag'naviy (3-pir)",
          image:
            'https://cdn1.img.sputniknews.uz/img/07e9/03/1c/48615857_0:1:3070:2048_600x0_80_0_0_e7fa417858eaeba84518b1de6fcaa22e.jpg',
          info: "Xoja Mahmud Anjir Fag'naviy (vafoti 1317-yil) — Buxoroi sharifdagi Yetti pirning uchinchi halqasi bo'lib, Naqshbandiya tariqatining buyuk murshidi hisoblanadi.Majmua hududida shifobaxsh hisoblangan suv qudug'i mavjud.",
          location:
            'https://yandex.uz/maps/org/174458840592/?ll=64.485206%2C40.064448&mode=search&sctx=ZAAAAAgBEAAaKAoSCamgoupXIFBAEXvAPGTKD0RAEhIJIVnABG7dpT8RXg8mxccnlD8iBgABAgMEBSgKOABAwekLSAFqAnV6nQHNzMw9oAEAqAEAvQFVUqqewgEGkMy69IkFggIiQnV4b3JvIFhvamEgTWFobXVkIEFuamlyIEZhZyduYXZpeYoCAJICBTEwMzM0mgIMZGVza3RvcC1tYXBz&sll=64.485206%2C40.064448&sspn=0.016753%2C0.007728&text=Buxoro%20Xoja%20Mahmud%20Anjir%20Fag%27naviy&z=16.38',
          nearbyRestaurants: [
            { name: 'Vobkent Milliy Taomlar', distance: '300m' },
          ],
        },
        {
          title: 'Xoja Ali Romitaniy (4-pir)',
          image:
            'https://avatars.mds.yandex.net/get-altay/14584627/2a0000019619fa9053d08308ee1979f26d9a/orig',
          info: 'Xoja Ali Romitaniy (1191–1321), tasavvuf olamida Hazrati Azizon (Azizlar ustozi) nomi bilan mashhur bo‘lgan, Xojagon-Naqshbandiya tariqatining to‘rtinchi piri hisoblanadi.',
          location:
            'https://yandex.uz/maps/?ll=63.355724%2C40.398682&mode=search&sll=64.485206%2C40.064448&sspn=0.016753%2C0.007728&text=Buxoro%20Xoja%20Ali%20Romitaniy&z=8.91',
          nearbyRestaurants: [{ name: 'Romitan Somsa', distance: '150m' }],
        },
        {
          title: 'Xoja Muhammad Boboyi Samosiy (5-pir)',
          image:
            'https://avatars.mds.yandex.net/get-altay/11873493/2a000001926f4694788583b2cc024f8e855c/orig',
          info: "Xoja Muhammad Boboyi Samosiy (1259–1354) – Buxoro Yetti pirining beshinchisi, naqshbandiya tariqatining yirik namoyandasi va buyuk mutasavvufdir.Bahouddin Naqshband bilan bog'liqligi: Samosiy hazratlari Bahouddin Naqshbandning tug'ilishini bashorat qilgan va uni ma'naviy farzandlikka qabul qilgan. Keyinchalik shogirdi Sayyid Mir Kulolga Bahouddin Naqshbandga ta'lim berishni vasiyat qilgan",
          location:
            'https://yandex.uz/maps/?ll=64.223326%2C39.911321&mode=search&sll=63.355724%2C40.398682&sspn=2.970154%2C1.363349&text=Buxoro%20Xoja%20Muhammad%20Boboyi%20Samosiy&z=15.56',
          nearbyRestaurants: [{ name: 'Samos Choyxonasi', distance: '400m' }],
        },
        {
          title: 'Sayyid Amir Kulol (6-pir)',
          image:
            'https://uzbekistan.travel/storage/app/media/uploaded-files/image_2021-02-09_14-03-36.png',
          info: "Kofirshon qishlog'ida joylashgan, kulolchilik piri va Bahouddin Naqshbandning ma'naviy ustozi.",
          location:
            'https://yandex.uz/maps/org/73259208666/?ll=64.570728%2C39.768025&mode=search&sctx=ZAAAAAgBEAAaKAoSCeONzCN%2FJFBAEVDEIoYd4kNAEhIJoDU%2F%2FtKipj8RT3Rd%2BMH5lD8iBgABAgMEBSgKOABAndwLSAFqAnV6nQHNzMw9oAEAqAEAvQHLhJzqwgEG2p%2Fb9JACggIiQnV4b3JvIFNheXlpZCBBbWlyIEt1bG9sIG1hcWJhcmFzaYoCAJICBjE5MjAyOZoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=64.570728%2C39.768025&sspn=0.037696%2C0.017465&text=Buxoro%20Sayyid%20Amir%20Kulol%20maqbarasi&z=15.21',
          nearbyRestaurants: [{ name: 'Amir Kulol Cafe', distance: '100m' }],
        },
        {
          title: 'Bahouddin Naqshband  (7-pir)',
          image:
            'https://uzbekistan.travel/storage/app/media/Otabek/Naqshbandi/cropped-images/7-nakshbandi-9-0-0-0-0-1659339863.jpg',
          info: "Naqshbandiya tasavvuf tariqati asoschisi Bahouddin Naqshband sharafiga qurilgan ulkan majmua. Bu maskan Islom olamining eng muqaddas ziyoratgohlaridan biri sanalib, 'Qasri Orifon' nomi bilan ham ataladi.",
          location:
            'https://yandex.uz/maps/?ll=64.473703%2C39.803453&mode=search&sll=64.570728%2C39.768025&sspn=0.037696%2C0.017465&text=Buxoro%20Bahouddin%20Naqshband&z=12.68',
          nearbyRestaurants: [{ name: 'Ziyorat Cafe', distance: '200m' }],
        },
      ],
    },
    khiva: {
      id: 3,
      name: 'Xiva',
      mainImage:
        'https://uzbekistan.travel/storage/app/media/Otabek/asosiydagi%20rasmlar/cropped-images/2079897013-0-0-0-0-1728537570.jpg',
      description:
        "Xiva — O‘zbekistonning Xorazm viloyatida joylashgan, 2500 yillik tarixga ega ochiq osmon ostidagi muzey shahar. UNESCO Butunjahon merosi ro‘yxatiga kiritilgan Ichan-Qal’a majmuasi, ko‘plab madrasalar, masjidlar va minoralar (masalan, Kalta minor) bilan mashhur. Xiva qadimiy Ipak yo‘lidagi muhim madaniy va savdo markazi bo‘lgan.Tarixi: 2500 yildan ortiq tarixga ega, Xorazm vohasining qadimiy shahri.Ichan-Qal'a: Shaharning ichki qismi bo'lib, o'rta asrlarga oid me'moriy yodgorliklar majmuasi. 1990-yilda UNESCO Butunjahon merosi ro'yxatiga kiritilgan.Asosiy diqqatga sazovor joylar:Kalta Minor: Tugallanmagan ulug'vor minora.Juma masjidi: 213 ta yog'och ustunli o'ziga xos masjid.Kuna Ark: Xon qarorgohi.Pahlavon Mahmud maqbarasi: Xiva xonlarining dafn etilgan joyi.Ahamiyati: O'rta Osiyodagi eng yaxshi saqlanib qolgan o'rta asr shaharlaridan biri hisoblanadi.",
      monuments: [
        {
          title: 'Kalta Minor',
          image:
            'https://uzbekistan.travel/storage/app/media/Otabek/Kalta%20minor./cropped-images/xiva-otmishga-ochilgan-vaqt-darvozasi-0-0-0-0-1724238644.jpg',
          info: "Kaltaminor – Xivadagi meʼmoriy yodgorlik. Muhammad Aminxon madrasasining old tomonida joylashgan va baʼzan uning bir qismi deya eʼtirof etiladi. Oʻzbekistondagi eng baland Oʻrta asr minoralari ichida 6-oʻrinda turadi.Muhammad Aminxon tomonidan qurilishi boshlangan, ammo tugallanmay qolgan ulkan minora. To'liq moviy koshinlar bilan bezatilgan bu inshoot Xivaning asosiy ramzi hisoblanadi.",
          location:
            'https://yandex.uz/maps/10339/khiva/search/Xiva%20Kalta%20Minor/?ll=60.350602%2C41.378587&sll=64.473703%2C39.803453&sspn=0.217719%2C0.100822&z=15.89',
          nearbyRestaurants: [
            { name: 'Terrassa Cafe', distance: '50m' },
            { name: 'Khiva Moon', distance: '200m' },
          ],
        },
        {
          title: 'Juma masjidi',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Friday_Mosque_of_Khiva.jpg',
          info: "O'ziga xos me'morchilikka ega bo'lgan ushbu masjidning shiftini 213 ta o‘ymakor yog‘och ustunlar ushlab turadi. Bu ustunlarning har biri o'ziga xos naqsh va tarixga ega.Xivadagi Juma masjidi (X-XVIII asr) Ichan-qalʼaning markazida joylashgan noyob meʼmoriy obida boʻlib, gumbaz, hovli va portallarga ega emas, balki toʻsinli shiftga ega katta zal koʻrinishida qurilgan. Uning asosiy oʻziga xosligi — turli davrlarga (ayniqsa X-XVI asrlar) oid",
          location:
            'https://yandex.uz/maps/10339/khiva/search/Xiva%20Juma%20masjidi/?ll=60.352542%2C41.380120&sll=60.350602%2C41.378587&sspn=0.023528%2C0.010640&z=15.53',
          nearbyRestaurants: [
            { name: 'Zaynab', distance: '150m' },
            { name: 'Bir Gumbaz', distance: '100m' },
          ],
        },
        {
          title: 'Ko‘hna Ark',
          image:
            'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/kunya%20ark-0-0-0-0-1588586498.jpg',
          info: "Ko‘hna Ark, Xivaning Ichan-qal’a markazida joylashgan, XVII asr oxirida (1686-1688) qurilgan va XIX asrda qayta tiklangan xonlar qarorgohidir. Bu qal’a ichidagi qal’a bo'lib, o'z ichiga qabulxona, masjidlar, zarbxona, haram va zindonni olgan mustahkam majmuadir. U Xiva xonlari va ularning amaldorlari yashagan tarixiy boshqaruv markazi hisoblanadi.Xiva xonlarining qadimgi qarorgohi. Bu yerda zarbxona, ko'rinishxona (qabulxona), masjid va xon xonadonlari uchun maxsus binolar joylashgan.",
          location:
            'https://yandex.uz/maps/org/76130770954/?ll=60.352542%2C41.380120&mode=search&sll=60.352542%2C41.380120&sspn=0.030197%2C0.013655&text=Xiva%20Ko%E2%80%98hna%20Ark&z=15.53',
          nearbyRestaurants: [
            { name: 'Khiva Moon', distance: '250m' },
            { name: 'Terrassa Cafe', distance: '120m' },
          ],
        },
        {
          title: 'Pahlavon Mahmud majmuasi',
          image:
            'https://uzbekistan.travel/storage/app/media/Rasmlar/Pahlavon%20mahmud/cropped-images/shutterstock_497877049-0-0-0-0-1738041454.jpg',
          info: "Xiva shahridagi Pahlavon Mahmud majmuasi XIII-XIV asrlarda yashagan xalq qahramoni, shoir, faylasuf va pahlavon Pahlavon Mahmud (1247–1326) sharafiga barpo etilgan muqaddas ziyoratgohdir. Ichan-Qalʼaning markazida joylashgan ushbu majmua XVIII-XIX asrlarda shakllangan boʻlib, goʻzal koshinlar, nafis oʻymakorlik ishlari va koʻk gumbazi bilan ajralib turadi. U Xorazm hukmdorlari dafn etilgan maskan ham hisoblanadi.Buyuk pahlavon, shoir va faylasuf Pahlavon Mahmud sharafiga qurilgan maqbara. Xivaning eng go'zal moviy gumbazi va nafis koshinli bezaklari aynan shu yerda.",
          location:
            'https://yandex.uz/maps/org/208247221110/?ll=60.359468%2C41.377751&mode=search&sctx=ZAAAAAgBEAAaKAoSCbQ7pBggLU5AERtHrMWnsERAEhIJuM6%2FXfbrnj8REEBqEyf3iz8iBgABAgMEBSgKOABA41BIAWoCdXqdAc3MzD2gAQCoAQC9ASsSijrCAQb21oHkhwaCAh1YaXZhIFBhaGxhdm9uIE1haG11ZCBtYWptdWFzaYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=60.359468%2C41.377751&sspn=0.018332%2C0.008290&text=Xiva%20Pahlavon%20Mahmud%20majmuasi&z=16.25',
          nearbyRestaurants: [
            { name: 'Mirza Boshi', distance: '100m' },
            { name: 'Zaynab', distance: '200m' },
          ],
        },
        {
          title: 'Islomxo‘ja minorasi',
          image:
            'https://uzbekistan.travel/storage/app/media/Otabek/Turli%20xil/Xiva%20minora/cropped-images/khiva-22-0-0-0-0-1724997870.jpg',
          info: "Xivadagi Islomxo‘ja minorasi (1908-1910 yillar) Ichan-Qalʼaning eng baland va eng yosh minorasi bo‘lib, balandligi 56,6 metr (ayrim manbalarda 44,6 metr), asosi esa 9,5 metr diametrga ega. U xonlikning bosh vaziri Islom Xo‘ja tashabbusi bilan qurilgan va o‘zining moviy koshinkor bezaklari, torayib boruvchi shakli bilan Sharq meʼmorchiligining nodir namunasi hisoblanadi. U o'zining tepaga qarab ingichkalashib boruvchi shakli va yorqin rangli belbog'li naqshlari bilan ajralib turadi.",
          location:
            'https://yandex.uz/maps/10339/khiva/?ll=60.359938%2C41.376906&mode=poi&poi%5Bpoint%5D=60.360142%2C41.376603&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D190776853291&z=18',
          nearbyRestaurants: [
            { name: 'Tea House Khiva', distance: '80m' },
            { name: 'Bir Gumbaz', distance: '150m' },
          ],
        },
        {
          title: 'Tosh hovli saroyi',
          image:
            'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/tashhauli2-0-0-0-0-1598001218.jpg',
          info: "Toshhovli – Xivadagi meʼmoriy yodgorlik. Olloqulixon qurdirgan. Vazir Muhammad Yaʼqub mehtar loyihasi asosida qurilgan. Xalq ustalari Nurmuhammad, usta Toji va usta Qalandar Xivaqiy tomonidan bunyod etilgan. Toshhovli, 111 ta xonadan tashkil topgan: Arz hovli, ishrat hovli, haram.Olloqulixon tomonidan qurilgan ushbu saroy o'zining mahobatli hovlilari, moviy koshinlari va mahorat bilan ishlangan yog'och ustunlari bilan mashhur.",
          location:
            'https://yandex.uz/maps/10339/khiva/search/Xiva%20Tosh%20hovli%20saroyi/?ll=60.360777%2C41.378120&sll=60.359938%2C41.376906&sspn=0.005450%2C0.002465&z=16.38',
          nearbyRestaurants: [
            { name: 'Yasavul Boshi', distance: '100m' },
            { name: 'Allaqulixon Cafe', distance: '50m' },
          ],
        },
        {
          title: 'Muhammad Aminxon madrasasi',
          image:
            'https://uzbekistan.travel/storage/app/media/Rasmlar/cropped-images/1407935021-0-0-0-0-1737977780.jpg',
          info: "Muhammad Aminxon madrasasi (1852-1855 yy.) Xivadagi Ichan-qal'aning g'arbiy darvozasi yaqinida joylashgan eng yirik va ko'rkam me'moriy majmualardan biridir Wikipedia. Xiva xoni Muhammad Aminxon tomonidan qurdirilgan bu ikki qavatli bino o'zining koshinli bezaklari va 125 ta hujrasi bilan ajralib turadi. O'rta Osiyodagi eng yirik madrasalardan biri bo'lib, hozirda sayyohlar uchun mehmonxona (Orient Star Khiva) sifatida xizmat qilmoqda.",
          location:
            'https://yandex.uz/maps/10339/khiva/search/Xiva%20Muhammad%20Aminxon%20madrasasi/?ll=60.363860%2C41.380101&sll=60.360777%2C41.378120&sspn=0.016753%2C0.007576&z=15.77',
          nearbyRestaurants: [
            { name: 'Terrassa Cafe', distance: '70m' },
            { name: 'Khiva Moon', distance: '300m' },
          ],
        },
        {
          title: 'Nurullaboy saroyi',
          image:
            'https://uzbekistan.travel/storage/app/media/uploaded-files/1596534870646.png',
          info: "Nurullaboy saroyi – Xivadagi meʼmoriy yodgorlik. Asfandiyorxonning sobiq rasmiy qabulxonasi. Bu saroy-bogʻni Xiva xoni Muhammad Rahimxon II Feruz oʻgʻli Asfandiyorxon uchun qurdirgan.Dishan-qal'ada (tashqi shahar) joylashgan bo'lib, sharq me'morchiligi va Yevropa uslubi uyg'unligini o'zida aks ettirgan xonlarning yozgi saroyidir.",
          location:
            "https://yandex.uz/maps/10339/khiva/search/Xiva%20Nurullaboy%20saroyi'/?ll=60.360982%2C41.381173&sll=60.363860%2C41.380101&sspn=0.025569%2C0.011563&z=15.48",
          nearbyRestaurants: [
            { name: 'Nurullaboy Cafe', distance: '50m' },
            { name: 'Khiva Silk Workshop', distance: '400m' },
          ],
        },
        {
          title: 'Olloqulixon madrasasi',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Allah_Kuli_Khan_Madrassah%2C_Khiva_%284934484418%29.jpg/250px-Allah_Kuli_Khan_Madrassah%2C_Khiva_%284934484418%29.jpg',
          info: "Xivadagi Olloqulixon madrasasi (1834—1835-yillar) — Ichan qal’aning sharqiy qismida, Polvon darvoza yaqinida joylashgan yirik me’moriy yodgorlikdir. Xiva xoni Olloqulixon tomonidan qurdirilgan ushbu madrasa o'ziga xos tarzda sun’iy tepalik ustiga barpo etilgan, shuningdek, u Meros.uz xonaqoh, karvonsaroy va tim (yopiq bozor) bilan yagona me’moriy ansamblni tashkil etadi.Qal'a devoriga tutash qilib qurilgan ushbu madrasa va uning atrofidagi karvonsaroy o'z davrida Xivaning asosiy savdo va ta'lim markazi bo'lgan.",
          location:
            'https://yandex.uz/maps/org/146527889818/?ll=60.360982%2C41.381173&mode=search&sll=60.360982%2C41.381173&sspn=0.031262%2C0.014137&text=Xiva%20Olloqulixon%20madrasasi&z=15.48',
          nearbyRestaurants: [
            { name: 'Bir Gumbaz', distance: '50m' },
            { name: 'Zaynab', distance: '300m' },
          ],
        },
        {
          title: 'Shergozixon madrasasi',
          image:
            'https://meros.uz/uploads/wonder/wonder//4a431af33d15f3d6bffbe394628bf7d3.jpg',
          info: "Shergʻozixon madrasasi – Xivadagi meʼmoriy yodgorlik (1719—26); Ichan kalʼa tarkibida joylashgan koʻplab imoratlardan biri. Manbalarda 1719—1726-yillarda oʻzbek hukmdori Shergʻozixon mablagʻi va farmoni bilan barpo etilgan. Ichan-qal'a markazida, Paxlavon Mahmud maqbarasiga kiraverishda joylashgan.XVIII asr boshlarida qurilgan bu madrasa 'Maskani fozilon' (olimlar maskani) nomi bilan tanilgan, bu yerda ko'plab mashhur mutafakkirlar tahsil olgan.",
          location:
            'https://yandex.uz/maps/10339/khiva/search/Xiva%20Shergozixon%20madrasasi/?ll=60.360982%2C41.381173&sll=60.360982%2C41.381173&sspn=0.031262%2C0.014137&z=15.48',
          nearbyRestaurants: [
            { name: 'Mirza Boshi', distance: '150m' },
            { name: 'Pahlavon Mahmud Cafe', distance: '100m' },
          ],
        },
        {
          title: 'Sayid Alauddin maqbarasi',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/ae/Sayid_Alaouddine_mausoleum_general_view_from_outside.JPG',
          info: "Said Aloviddin maqbarasi – Ichan qalʼadagi meʼmoriy yodgorlik. Soʻfi Amir Kulol tomonidan ustozi shayx Aloviddin qabri ustiga qurilgan. Maqbara Ichan qal’aning gʻarbiy darvozasi yaqinida joylashgan, Muhammad Niyoz devonbegi madrasasining sharqiy tarafida.Xivadagi eng qadimiy inshootlardan biri (XIV asr). Maqbara o'zining noyob sirlangan koshinli daxmasi bilan mashhur bo'lib, u Amir Temur davri me'morchilik san'atining yuksak namunasidir.",
          location:
            'https://yandex.uz/maps/org/33590473618/?ll=60.358584%2C41.378106&mode=search&sctx=ZAAAAAgBEAAaKAoSCes4fqg0Lk5AESGP4EbKsERAEhIJDhE3p5IBoD8RWvROBdzzjD8iBgABAgMEBSgKOABA41BIAWoCdXqdAc3MzD2gAQCoAQC9Aax20dbCAQWS55eRfYICHVhpdmEgU2F5aWQgQWxhdWRkaW4gbWFxYmFyYXNpigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=60.358584%2C41.378106&sspn=0.016753%2C0.007576&text=Xiva%20Sayid%20Alauddin%20maqbarasi&z=16.38',
          nearbyRestaurants: [{ name: 'Khiva Moon', distance: '120m' }],
        },
        {
          title: 'Ota darvoza (G‘arbiy)',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/6/6d/Ota_Darvaza_aka_West_Gates%2C_Khiva_%28Ota_Darvaza%2C_%D0%90%D1%82%D0%B0-%D0%B4%D0%B0%D1%80%D0%B2%D0%B0%D0%B7%D0%B0%29.jpg',
          info: "Xiva shahridagi Ota darvoza (G‘arbiy darvoza) — Ichan-qal’aga kiriladigan asosiy va eng mashhur darvoza bo‘lib, u XIX asrga tegishli me’moriy yodgorlikdir. U Yandex Maps manziliga ko‘ra Xorazm viloyati, Xiva shahri, Polvon Qori ko‘chasida joylashgan. 1970-yillarda qayta qurilgan ushbu darvoza ikki gumbazli va ikki yondosh minorali ko‘rinishga ega. Ichan-qal’aning asosiy darvozasi. Bu darvoza orqali Ko'hna Arkka va Muhammad Aminxon madrasasiga kiriladi. U qal'aning g'arbiy himoya qo'rg'oni vazifasini o'tagan.",
          location:
            'https://yandex.uz/maps/10339/khiva/search/Xiva%20Ota%20darvoza%20(G%E2%80%98arbiy)/?ll=60.362763%2C41.378453&sll=60.358584%2C41.378106&sspn=0.016753%2C0.007576&z=15.8',
          nearbyRestaurants: [{ name: 'Arkanchi', distance: '100m' }],
        },
        {
          title: 'Polvon darvoza (Sharqiy)',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/c/c6/Palwan-Darwaza.jpg',
          info: "Polvon darvoza — Xivaning Ichan-qal’a majmuasidagi sharqiy darvoza (1806) bo'lib, eng gavjum va asosiy kirish joyi hisoblangan. Qomus.INFO ma'lumotlariga ko'ra, darvoza peshtoq-ravoqli, ikki yonida guldasta-minoralar mavjud. Meros.uz ma'lumotlariga ko'ra, u tarixda Poshshob (Jallod) yoki Qul darvozasi deb ham atalgan. Sharqiy kirish darvozasi bo'lib, u o'zining mahobatli peshtoqi va ichki savdo rastalari bilan ajralib turadi. Bu yo'l to'g'ridan-to'g'ri Olloqulixon madrasasiga olib boradi.",
          location:
            'https://yandex.uz/maps/10339/khiva/search/Xiva%20Polvon%20darvoza%20(Sharqiy)/?ll=60.362780%2C41.378123&sll=60.362763%2C41.378453&sspn=0.025043%2C0.011325&z=15.72',
          nearbyRestaurants: [{ name: 'Allaqulixon Cafe', distance: '40m' }],
        },
        {
          title: 'Tosh darvoza (Janubiy)',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/9/91/Itchan_Kala_south_gate.jpg',
          info: "Xiva shahridagi Tosh darvoza (Janubiy darvoza) — Ichan-Qalʼaning to‘rtta asosiy darvozasidan biri bo‘lib, XIX asrning 30-40 yillarida Olloqulixon davrida bunyod etilgan. Ushbu darvoza mustahkamligi va toshdan ishlangan qismlari tufayli shunday nomlangan. U shahar mudofaasi va savdo yo‘llarini nazorat qilishda muhim strategik o‘rin tutgan.XIX asrda qurilgan ushbu darvoza Ichan-qal’aning janubiy qismini himoya qilgan. Karvonlar aynan shu darvoza orqali Dishan-qal’a tomonga yo'l olishgan.",
          location:
            'https://yandex.uz/maps/org/241757612175/gallery/?ll=60.359695%2C41.374862&mode=search&sll=60.362780%2C41.378123&sspn=0.026471%2C0.011971&tab=gallery&text=Xiva%20Tosh%20darvoza%20%28Janubiy%29&z=11.8',
          nearbyRestaurants: [{ name: 'Khiva Local Food', distance: '300m' }],
        },
        {
          title: 'Bog‘cha darvoza (Shimoliy)',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/f/f4/Porte_Nord_Baktcha_Darvoza_Khiva.JPG',
          info: "Bogʻcha darvoza — Xivadagi Ichan-qalʼa tarkibiga kiruvchi shimoliy darvoza boʻlib, XIX asrda qurilgan meʼmoriy yodgorlikdir. U 6 ta gumbazli xonadan iborat boʻlib, qadimiy qalʼa devorlari bilan tutashgan. Umumiy oʻlchamlari metr, balandligi esa 8,5 metrni tashkil etadi va qalʼaning shimoliy qismidagi asosiy kirish joylaridan biridir.Urganch yo'nalishidan keluvchi mehmonlar va karvonlar uchun shimoliy kirish yo'li bo'lgan. Ichki qismi gumbazli va xonalar bilan jihozlangan.",
          location:
            'https://yandex.uz/maps/?ll=60.470634%2C41.463447&mode=search&sll=60.359695%2C41.374862&sspn=0.249245%2C0.181208&text=Xiva%20Bog%E2%80%98cha%20darvoza%20%28Shimoliy%29&z=11.8',
          nearbyRestaurants: [{ name: 'North Gate Cafe', distance: '50m' }],
        },
        {
          title: 'Qutlug‘ Murod Inoq madrasasi',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/5/5b/Medrese_Kutlug_Murad_Inak.jpg',
          info: "Qutlugʻmurod inoq madrasasi – Xivadagi meʼmoriy yodgorlik; Ichan qalʼa tarkibida. Olloqulixonning togʻasi Qutlugʻmurod inoq qurdirgan; vasiyatiga binoan miyonsaroy zamini tagiga dafn etilgan.XIX asr boshlarida qurilgan yirik madrasa. Bu yerda birinchi marta ikki qavatli hujralar qurish uslubi qo'llanilgan va u o'zining yerosti suv ombori (sardoba) bilan ajralib turadi.",
          location:
            'https://yandex.uz/maps/org/235130129955/?ll=60.365134%2C41.378311&mode=search&sll=60.470634%2C41.463447&sspn=0.400684%2C0.180959&text=Xiva%20Qutlug%E2%80%98%20Murod%20Inoq%20madrasasi&z=16.1',
          nearbyRestaurants: [{ name: 'Zaynab', distance: '150m' }],
        },
      ],
    },
    tashkent: {
      id: 4,
      name: 'Toshkent',
      mainImage:
        'https://uzbekistan.travel/storage/app/media/Rasmlar/Toshkent/shaxar/cropped-images/AdobeStock_596864804-0-0-0-0-1738671594.jpeg',
      description:
        "Toshkent — O‘zbekistonning poytaxti, Markaziy Osiyodagi eng yirik va gavjum shahar, muhim siyosiy, iqtisodiy va madaniy markaz. 2025-yil boshiga ko‘ra aholisi 3,14 milliondan ortiq, maydoni 435 km², 12 ta tumandan iborat. Tarixiy shahar (2200 yoshdan oshgan) zamonaviy aviatsiya va transport tugunidir. Toshkent haqida asosiy ma'lumotlar:Aholi: 3 145 236 kishi (2025-yil boshi).Maydon: 435  (2021-yildan keyin).Ma'muriy bo'linish: 12 ta tuman.Iqlim: Kontinental, yozi issiq va quruq, qishi yumshoq.Tarixi: 2200 yildan ortiq tarixga ega, 2009-yilda yubiley nishonlangan.Status: 2024-yilda MDHning Yoshlar poytaxti bo'ldi.Unvon: 1941-1945 yillardagi mehnat shuhrati shahri faxriy unvoni berilgan. Iqtisodiy va madaniy ahamiyati:Toshkent shahrida davlat boshqaruv organlari, elchixonalar, yirik korxonalar va tashkilotlarning shtab-kvartiralari joylashgan. Shuningdek, shahar yirik madaniy markaz bo'lib, o'zining teatrlar, muzeylar, parklar va zamonaviy majmualari (masalan, Humo Arena, Toshkent Siti) bilan mashhur.",
      monuments: [
        {
          title: 'Hazrati Imom (Hastimom)',
          image:
            'https://uzbekistan.travel/storage/app/media/Rasmlar/Toshkent/cropped-images/shutterstock_2294563905-0-0-0-0-1738130309.jpg',
          info: "Hazrati Imom (xalq orasida Hastimom) majmuasi — Toshkent shahrining Olmazor tumanida, Eski shahar qismida joylashgan eng yirik diniy va me'moriy yodgorlikdir. Bu majmua o'z nomini Toshkentning birinchi imomi va mashhur olim, faqih Abu Bakr Muhammad ibn Ali Ismoil ash-Qaffol Shoshiy (Hazrati Imom) sharafiga olgan. Toshkentning diniy markazi. Bu yerda dunyodagi eng qadimiy Usmon Qur'oni saqlanadi. Majmua Baroqxon madrasasi, Tilla Shayx masjidi va Qaffol Shoshiy maqbarasini o'z ichiga oladi.",
          location:
            'https://yandex.uz/maps/?ll=69.645328%2C41.170019&mode=search&sll=60.365134%2C41.378311&sspn=0.020341%2C0.009199&text=Toshkent%20Hazrati%20Imom%20%28Hastimom%29&z=10.1',
          nearbyRestaurants: [
            { name: 'Hastimom Milliy Taomlar', distance: '200m' },
          ],
        },
        {
          title: 'Ko‘kaldosh madrasasi',
          image:
            'https://uzbekistan.travel/storage/app/media/Otabek/Rasmlar%20almashtirilgani/kukaldosh/cropped-images/2T0A0201-0-0-0-0-1769667634.jpg',
          info: "Ko‘kaldosh madrasasi — Toshkentning eng qadimiy va eng yirik me’moriy yodgorliklaridan biri bo‘lib, XVI asrda (taxminan 1570-yilda) Shayboniylar sulolasi davrida qurilgan.XVI asrda qurilgan Toshkentdagi eng yirik madrasalardan biri. Chorsu bozori yonida joylashgan ushbu bino asrlar davomida ta'lim va madaniyat markazi bo'lib kelgan.",
          location:
            'https://yandex.uz/maps/10335/tashkent/search/Toshkent%20Ko%E2%80%98kaldosh%20madrasasi/?indoorLevel=1&ll=69.236302%2C41.323240&sll=69.645328%2C41.170019&sspn=1.301827%2C0.590610&z=16.63',
          nearbyRestaurants: [
            { name: 'Chorsu Ovqat Bozori', distance: '100m' },
          ],
        },
        {
          title: 'Chorsu bozori (Eski shahar)',
          image:
            'https://tashkent.uz/_next/image?url=https%3A%2F%2Fapi.tashkent.uz%2Fupload%2Fcity%2Fseesight%2F2025%2F%25D0%25A0%25D1%258B%25D0%25BD%25D0%25BE%25D0%25BA_%25D0%25A7%25D0%25BE%25D1%2580%25D1%2581%25D1%2583_Russian.jpg&w=3840&q=75',
          info: "Chorsu nomi bilan mashhur boʻlgan „Eski Juva“ bozori eski shaharda toʻrtta savdo koʻchalari chorrahasida joylashgan boʻlib, yil boʻyi oʻzining rang-barang buyumlari va meʼmoriy tuzilishi, qadimiylik va xalq madaniyati nafasi bilan odamlarni hayratga soladi.Ming yillik tarixga ega, moviy gumbazli ulkan an'anaviy bozor. Bu yerda poytaxtning haqiqiy 'Eski shahar' ruhini va mashhur o'zbek taomlarini his qilish mumkin.",
          location:
            'https://yandex.uz/maps/org/73971814447/?ll=69.236302%2C41.323414&mode=search&sctx=ZAAAAAgBEAAaKAoSCa5%2BbJIfT1FAEShhpu1fqURAEhIJF9hjIqXZjD8RSDKrd7gdej8iBgABAgMEBSgKOABAop8GSAFqAnV6nQHNzMw9oAEAqAEAvQEFArg9wgEGr6DByJMCggIkVG9zaGtlbnQgQ2hvcnN1IGJvem9yaSAoRXNraSBzaGFoYXIpigIAkgIGMTAyNDA3mgIMZGVza3RvcC1tYXBz&sll=69.236302%2C41.323414&sspn=0.028967%2C0.013110&text=Toshkent%20Chorsu%20bozori%20%28Eski%20shahar%29&z=15.59',
          nearbyRestaurants: [{ name: 'Obinon Rastasi', distance: '50m' }],
        },
        {
          title: 'Shayxovantohur maqbarasi',
          image:
            'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/1076-0-0-0-0-1594190831.jpg',
          info: "Toshkentdagi Shayxontohur (Shayx Xovandi at-Tohur) maqbarasi 14-asrda barpo etilgan, shahar markazida joylashgan tarixiy-me'moriy yodgorlikdir. Mashhur tasavvuf shayxi sharafiga qurilgan bu majmua, 16,2x9 metr o'lchamli, ikki xonali (ziyoratxona va gorxona) gumbazli binodir. U o'zining qadimiy qabri va yaqinidagi noyob muqaddas Iskandar Saur daraxti bilan mashhur. XV asrga oid ushbu majmua Shayx xovandi Tohur, Qaldirg‘ochbiy va Yunusxon maqbaralaridan tashkil topgan bo'lib, poytaxtning eng qadimiy burchaklaridan biridir.",
          location:
            'https://yandex.uz/maps/10335/tashkent/search/Toshkent%20Shayxovantohur%20maqbarasi/?ll=69.236302%2C41.324551&sll=69.236302%2C41.323414&sspn=0.028967%2C0.013110&z=14.43',
          nearbyRestaurants: [{ name: 'Navvat Restaurant', distance: '350m' }],
        },
        {
          title: 'Suzuk ota majmuasi',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Eq2Ie_KKujGTjMSHt8812L77pHg95ziIcQ&s',
          info: "Toshkentdagi Suzuk ota majmuasi (Shayxontohur tumani) — XIV asrga (1363–1364 yillar) borib taqaladigan, Xoja Ahmad Yassaviyning nabirasi Suzuk ota (Mustafoqul) sharafiga Amir Temur tomonidan qurdirilgan tarixiy maqbara va jome masjid majmuasidir. Hunarmandlar piri Suzuk ota sharafiga qurilgan muhtasham masjid va maqbara. Bu yerda hunarmandchilik an'analari hanuzgacha davom ettiriladi.Majmua zamonaviy rekonstruksiya qilinib, atrofi hunarmandlar uylari bilan obodonlashtirilgan muhim ziyoratgoh hisoblanadi.",
          location:
            'https://yandex.uz/maps/org/13622993273/?ll=69.228100%2C41.318021&mode=search&sll=69.236302%2C41.324551&sspn=0.064728%2C0.029296&text=Toshkent%20Suzuk%20ota%20majmuasi&z=16.43',
          nearbyRestaurants: [{ name: 'Eski Shahar Cafe', distance: '200m' }],
        },
        {
          title: 'Zangiota majmuasi',
          image:
            'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/zangiota1-0-0-0-0-1582869873.jpg',
          info: "Zangiota majmuasi — Toshkent viloyati Zangiota tumanida joylashgan XII-XIV asrlarga oid tarixiy va ziyoratgoh majmua. U Xoja Ahmad Yassaviyning muridi, avliyo Oyxo‘ja Shayx (Zangi ota) va uning xotini Ambar bibi qabrlari ustiga Amir Temur davrida qurilgan, masjid, madrasa va bog‘larni o‘z ichiga olgan tarixiy obida hisoblanadi. Amir Temur farmoni bilan qurilgan ulkan ziyoratgoh. Zangiota va Anbar bibi maqbaralari hamda go'zal bog'dan iborat muqaddas maskan.",
          location:
            'https://yandex.uz/maps/org/100238354600/?ll=69.159030%2C41.200640&mode=search&sctx=ZAAAAAgBEAAaKAoSCUqVKHtLSlFAESF00CUcrERAEhIJ5uYb0T3raj8Rti%2BgF%2B5cWD8iBgABAgMEBSgKOABA0NILSAFqAnV6nQHNzMw9oAEAqAEAvQHjZTHBwgEGqNGvtfUCggIbVG9zaGtlbnQgWmFuZ2lvdGEgbWFxYmFyYXNpigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=69.159030%2C41.200640&sspn=0.044211%2C0.020048&text=Toshkent%20Zangiota%20maqbarasi&z=14.98',
          nearbyRestaurants: [{ name: 'Zangiota Somsa', distance: '150m' }],
        },
        {
          title: 'Ming o‘rik yodgorligi',
          image:
            'https://uzbekistan.travel/storage/app/media/objects/museums/museum-of-the-ancient-site-of-ming-urik/pristroyka_rekonstrukciya_ming_urik.jpg',
          info: 'Mingo‘riktepa (Mingo‘rik) — Toshkent shahridagi eng qadimgi shahar harobasi (milodiy I–XIII asrlar) bo‘lib, Salor kanali bo‘yida, temir yo‘l vokzali yaqinida joylashgan. Qadimiy Choch poytaxti hisoblangan bu maskanda shaharsozlik, mudofaa devorlari va turar-joy qoldiqlari saqlangan, XIX asrdagi o‘rikzor bog‘i tufayli shunday nomlangan.Qadimgi Choch poytaxtining qoldiqlari. Bu arxeologik yodgorlik Toshkentning 2000 yildan ortiq tarixga ega ekanligidan guvohlik beradi.',
          location:
            'https://yandex.uz/maps/org/140535334334/?ll=69.284760%2C41.298599&mode=search&sll=69.159030%2C41.200640&sspn=0.044211%2C0.020048&text=Toshkent%20Ming%20o%E2%80%98rik%20yodgorligi&z=15.88',
          nearbyRestaurants: [{ name: 'Khan Chapan', distance: '400m' }],
        },
        {
          title: 'Shoshtepa yodgorligi',
          image:
            'https://data.daryo.uz/media/2021/12/photo_2021-12-30_04-04-03-680x418-1.jpg',
          info: 'Shoshtepa (yoki Chochtepa) — Toshkent shahrining Sergeli tumanida joylashgan, miloddan avvalgi IX–VIII asrlarga oid eng qadimiy arxeologik yodgorliklardan biri. Jo‘n kanali bo‘yida joylashgan bu maskan ilk istehkomli qishloq-shahar xarobasi bo‘lib, Qovunchi madaniyatiga mansub. Hozirda yodgorlik usti gumbaz bilan yopilib, konservatsiya qilinmoqda. Toshkentning 2200 yillik yoshini belgilab bergan eng qadimiy shahar manzilgohi. Bu yerda qadimgi mudofaa devorlari va olov ibodatxonasi qoldiqlari topilgan.',
          location:
            'https://yandex.uz/maps/org/140069598344/?ll=69.333212%2C41.334545&mode=search&sll=69.284760%2C41.298599&sspn=0.014737%2C0.010727&text=Toshkent%20Shoshtepa%20yodgorligi&z=12.88',
          nearbyRestaurants: [
            { name: 'Choshtepa Milliy Taomlar', distance: '500m' },
          ],
        },
        {
          title: 'Oqtepa yodgorligi (Yunusobod)',
          image:
            'https://uzbekistan.travel/storage/app/media/uploaded-files/aktepa.jpg',
          info: "Yunusobod Oqtepasi — Toshkent shahrining Yunusobod tumanida joylashgan V-XIII asrlarga oid qadimiy arxeologik yodgorlikdir. Oqtepa kanali bo‘yida joylashgan bu tepalik, ilk o‘rta asrlarda Shosh vohasidagi muhim mudofaa istehkomi va aholi punkti bo‘lgan. Yodgorlik Yunusobad Business City loyihasi hududida joylashgan bo‘lib, hozirda konservatsiya qilinib, sayyohlik markaziga aylantirilishi rejalashtirilgan. V-VIII asrlarga oid qadimiy qo'rg'on qoldig'i. Bu yerda qadimda shahar himoyasi uchun xizmat qilgan mustahkam devorlar va minoralar bo'lgan.",
          location:
            'https://yandex.uz/maps/10335/tashkent/search/Toshkent%20Oqtepa%20yodgorligi%20(Yunusobod)/?ll=69.313472%2C41.367427&sll=69.333212%2C41.334545&sspn=0.117900%2C0.085770&z=14.62',
          nearbyRestaurants: [
            { name: 'Yunusobod Osh Markazi', distance: '800m' },
          ],
        },
        {
          title: 'Zayniddin bobo maqbarasi',
          image:
            'https://tashkent.uz/_next/image?url=https%3A%2F%2Fapi.tashkent.uz%2Fupload%2Fcity%2Fseesight%2F2025%2F%25D0%2597%25D0%25B0%25D0%25B9%25D0%25BD%25D1%2583%25D0%25B4%25D0%25B4%25D0%25B8%25D0%25BD-%25D0%25B1%25D0%25BE%25D0%25B1%25D0%25BE-my.jpg&w=3840&q=75',
          info: "Shayx Zayniddin bobo maqbarasi Toshkentdagi XIII-XIV asrlarga oid qadimiy me'moriy yodgorlikdir. Shayx Zayniddin (vafoti 1259-yil) sharafiga Amir Temur davrida qurilgan deb ishoniladi. Majmua peshtoq-gumbazli bo'lib, tarkibida qadimiy chillaxona, masjid va qabriston mavjud. Maqbara Toshkentdagi eng salobatli ziyoratgohlardan hisoblanadi. Tasavvuf namoyandasi Zayniddin Kuvayi Orifonning maqbarasi (XIII-XIV asrlar). Maqbara ostidagi chillaxona o'zining noyob akustikasi bilan ajralib turadi.",
          location:
            'https://yandex.uz/maps/org/53962776489/?ll=69.203346%2C41.324022&mode=search&sll=69.313472%2C41.367427&sspn=0.056741%2C0.025664&text=Toshkent%20Zayniddin%20bobo%20maqbarasi&z=16.62',
          nearbyRestaurants: [{ name: "Ko'kcha Oshxonasi", distance: '150m' }],
        },
        {
          title: 'Xo‘ja Ahror Valiy masjidi',
          image:
            'https://uzbekistan.travel/storage/app/media/Rasmlar/Toshkent/cropped-images/IMG_0551.JPG-0-0-0-0-1738065894.jpg',
          info: "Xoʻja ahror valiy masjidi – Toshkent shahri Shayhontohur tumani 15-asr – meʼmoriy yodgorlik. Xoja Ahror qurdirgan, shaharning bosh jome masjidi boʻlgan, Usmon Qur’oni shu yerga keltirilgan edi. XV asrda Xo'ja Ahror Valiy tomonidan qurilgan Toshkentdagi eng qadimgi jome masjidlaridan biri. U o'zining uchta ulkan gumbazi bilan mashhur.",
          location:
            'https://yandex.uz/maps/org/207944509576/?ll=69.218130%2C41.324022&mode=search&sctx=ZAAAAAgBEAAaKAoSCW%2Fx8J4DTVFAEZ6Xio15qURAEhIJPgXAeAYNjT8RlialoNtLej8iBgABAgMEBSgKOABAop8GSAFqAnV6nQHNzMw9oAEAqAEAvQE8%2FhvKwgEGiNHV04YGggIkVG9zaGtlbnQgWG%2FigJhqYSBBaHJvciBWYWxpeSBtYXNqaWRpigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=69.218130%2C41.324022&sspn=0.056741%2C0.025681&text=Toshkent%20Xo%E2%80%98ja%20Ahror%20Valiy%20masjidi&z=14.62',
          nearbyRestaurants: [{ name: 'Minor Somsa', distance: '100m' }],
        },
        {
          title: 'Yunusxon maqbarasi',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAvw9ZYzoiwMgXVKmEEtvSRWqNqiHmLl3iJg&s',
          info: "Toshkentdagi Yunusxon maqbarasi XV asrga (1487-yildan keyin) oid me'moriy yodgorlik bo‘lib, Shayxontohur qabristonida, hozirgi Islom universiteti hududida joylashgan. Mogliyston hukmdori Yunusxon sharafiga o‘g‘li Ahmadxon (Olachaxon) tomonidan qurdirilgan. Bino to‘rtburchak tarhli, peshtoq gumbazli va xonaqohdan iborat bo‘lib, 1970 va 1999–2005-yillarda ta'mirlangan. U Shayxovantohur majmuasining ajralmas qismidir.",
          location:
            'https://yandex.uz/maps/10335/tashkent/search/Toshkent%20Yunusxon%20maqbarasi/?ll=69.257396%2C41.323092&sll=69.218130%2C41.324022&sspn=0.056741%2C0.025681&z=16.62',
          nearbyRestaurants: [{ name: 'Navvat Restaurant', distance: '300m' }],
        },
        {
          title: 'Abulqosim madrasasi',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/6/63/Madrasah_Abdulkasim_Sheikh_14-38.JPG',
          info: "Toshkentdagi tarixiy Abulqosim madrasasi XIX asrda barpo etilgan me'moriy yodgorlik bo'lib, Oliy Majlis binosi yaqinida joylashgan. Abulqosimxon tomonidan qurdirilgan ushbu maskan yirik ma'rifat markazi bo'lib, Abdulla Qodiriy va Munavvar-qori kabi zotlar ta'lim olgan. Hozirda bu yerda Hunarmand uyushmasi faoliyat yuritadi.XIX asrga oid madrasa, hozirda hunarmandchilik markazi. Bu yerda usta-hunarmandlar o'z mahsulotlarini tayyorlaydilar va sayyohlarga namoyish etadilar.",
          location:
            'https://yandex.uz/maps/org/51454105891/?ll=69.251734%2C41.316027&mode=search&sctx=ZAAAAAgBEAAaKAoSCcKHEi15UFFAEbTMIhRbqURAEhIJPgXAeAYNjT8RlialoNtLej8iBgABAgMEBSgKOABAop8GSAFqAnV6nQHNzMw9oAEAqAEAvQGUn9uuwgEGo7Kd178BggIcVG9zaGtlbnQgQWJ1bHFvc2ltIG1hZHJhc2FzaYoCAJICBjE5NTE3OJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=69.251734%2C41.316027&sspn=0.056741%2C0.025684&text=Toshkent%20Abulqosim%20madrasasi&z=14.62',
          nearbyRestaurants: [{ name: 'Humo Cafe', distance: '400m' }],
        },
        {
          title: 'Qaldirg‘ochbiy maqbarasi',
          image:
            'https://uzbekistan.travel/storage/app/media/Rasmlar/Toshkent/cropped-images/qaldirgochbiy-maqbarasi-4-0-0-0-0-1738058213.jpg',
          info: "XV asr me'morchiligi namunasi. Piramida shaklidagi gumbazi bilan boshqa maqbaralardan ajralib turadi. Shayxovantohur qabristonidagi eng qadimiy inshoot.",
          location:
            'https://yandex.uz/maps/org/97527945838/?ll=69.258914%2C41.323206&mode=search&sctx=ZAAAAAgBEAAaKAoSCaRS7GgcUFFAEZXTnpJzqERAEhIJqkavBigNrT8R9DEfEOhMmj8iBgABAgMEBSgKOABAop8GSAFqAnV6nQHNzMw9oAEAqAEAvQGnEVUiwgEG7rT5qOsCggIjVG9zaGtlbnQgUWFsZGlyZ%2BKAmG9jaGJpeSBtYXFiYXJhc2mKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=69.258914%2C41.323206&sspn=0.009656%2C0.006202&text=Toshkent%20Qaldirg%E2%80%98ochbiy%20maqbarasi&z=16.67',
          nearbyRestaurants: [{ name: 'Poytaxt Choyxonasi', distance: '350m' }],
        },
        {
          title: 'Baroqxon madrasasi',
          image:
            'https://uzbekistan.travel/storage/app/media/Rasmlar/Toshkent/cropped-images/MGOK2485-0-0-0-0-1738060175.jpg',
          info: "Toshkentdagi Baroqxon madrasasi XVI asrda (taxminan 1531-1532 yy.) Shayboniyxonlar sulolasidan bo‘lgan Navro‘z Ahmadxon (Baroqxon) tomonidan qurdirilgan tarixiy obidadir. Hastimom majmuasida joylashgan ushbu madrasa pishiq g‘ishtdan barpo etilgan, ichida Shayboniylar sulolasi vakillari maqbaralari mavjud va hozirda turistik ob’ekt hisoblanadi.Hastimom majmuasining markaziy qismi. Go'zal koshinlar va o'ymakorlik bilan bezatilgan.",
          location:
            'https://yandex.uz/maps/10335/tashkent/search/Toshkent%20Baroqxon%20madrasasi/?ll=69.250999%2C41.329669&sll=69.258914%2C41.323206&sspn=0.013702%2C0.006202&z=14.67',
          nearbyRestaurants: [
            { name: 'Qorasaroy Milliy Taomlar', distance: '300m' },
          ],
        },
      ],
    },
    shaxrisabz: {
      id: 5,
      name: 'Shahrisabz',
      mainImage:
        'https://uzbekistan.travel/storage/app/uploads/public/671/9e7/fbc/thumb_3985_1140_0_0_0_auto.jpg',
      description:
        "Amir Temurning vatani Shahrisabz — qadimiy 'Kesh' nomi bilan mashhur bo'lgan dunyodagi eng ko'hna shaharlardan biridir. Bu shahar Temuriylar saltanatining ikkinchi poytaxti hisoblangan va UNESCO Butunjahon merosi ro'yxatiga kiritilgan. Shahrisabz o'zining mahobatli Oqsaroyi, muqaddas Dorut Tilovat va Dorusiodat majmualari bilan sayyohlarni hayratga solib keladi.Shahrisabz — O‘zbekistonning eng qadimiy va boy tarixga ega shaharlaridan biri bo‘lib, u Qashqadaryo viloyatida joylashgan. Shahar o'zining 2000 yillikdan ortiq tarixi va Amir Temur tug'ilgan joy sifatida dunyoga mashhurdir. Umumiy ma'lumotlarJoylashuvi: Qashqadaryo viloyatining Kitob-Shahrisabz vohasida, Oqsuv va Tanxozdaryo daryolari oralig'ida joylashgan.Aholisi: Taxminan 174,8 ming kishi.Iqlimi: O'rta yer dengizi tipidagi iqlim (Köppen: Csa), qishi sovuq va yozi juda issiq hamda quruq keladi. Tarixiy ahamiyatiAmir Temur vatani: Buyuk sarkarda Amir Temur 1336-yilda Shahrisabz yaqinidagi Xo‘ja-Ilg‘or qishlog‘ida tug‘ilgan. U o'z saltanati davrida shaharni ilm-fan va madaniyat markaziga aylantirgan.Qadimiy nomlari: O‘rta asrlarda shahar Kesh yoki Nautaka nomlari bilan atalgan.UNESCO merosi: Shahrisabzning tarixiy markazi 2000-yilda UNESCO Butunjahon merosi ro‘yxatiga kiritilgan.",
      monuments: [
        {
          title: 'Oqsaroy majmuasi',
          image:
            'https://uzbekistan.travel/storage/app/media/uploaded-files/photo_2024-07-01_12-11-20.jpg',
          info: "Amir Temur tomonidan qurilgan eng mahobatli saroy. Uning saqlanib qolgan ulkan peshtoqi hamon o'zining nafis koshinlari va 'Agar bizning qudratimizga shubha qilsangiz, qurgan binolarimizga boqing' degan yozuvi bilan mashhur.",
          location:
            'https://yandex.uz/maps/101761/shahrisabz/search/Shahrisabz%20Oqsaroy%20maqbarasi/?ll=66.835461%2C39.062185&sll=66.824740%2C39.065217&sspn=0.001967%2C0.000921&z=12.9',
          nearbyRestaurants: [
            { name: 'Oqsaroy Restaurant', distance: '100m' },
            { name: 'Kesh Choyxonasi', distance: '250m' },
          ],
        },
        {
          title: 'Dorut Tilovat majmuasi',
          image:
            'https://uzbekistan.travel/storage/app/media/Yuliya/Dorut%20Tillovat/cropped-images/IMG_2149-0-0-0-0-1602233768.jpg',
          info: "Ushbu diniy majmua Shayx Shamsiddin Kulol maqbarasi, Gumbazi Sayyidon xilxonasi va mashhur Ko'k Gumbaz masjidini o'z ichiga oladi. Bu yer Temuriylar davrining eng muqaddas qadamjolaridan biridir.",
          location:
            'https://yandex.uz/maps/org/49835083192/?ll=66.828573%2C39.049507&mode=search&sctx=ZAAAAAgBEAAaKAoSCVcFajF4tVBAEaCmlq31h0NAEhIJC9Ri8DDtxz8Rj%2BOHSiNmtj8iBgABAgMEBSgKOABAz7oGSAFqAnV6nQHNzMw9oAEAqAEAvQEOaSSbwgEGuIuc07kBggIhU2hhaHJpc2FieiBEb3J1dCBUaWxvdmF0IG1ham11YXNpigIAkgIGMTAxNzYxmgIMZGVza3RvcC1tYXBz&sll=66.828573%2C39.049507&sspn=0.018206%2C0.008523&text=Shahrisabz%20Dorut%20Tilovat%20majmuasi&z=16.26',
          nearbyRestaurants: [{ name: 'Dorut Tilovat Cafe', distance: '150m' }],
        },
        {
          title: "Ko'k Gumbaz masjidi",
          image:
            'https://upload.wikimedia.org/wikipedia/commons/6/63/Kuk_Gumbaz_mosque_Shakhrisabz.jpg',
          info: "Shahrisabzdagi Ko‘k Gumbaz masjidi — 1435-1436-yillarda Ulug‘bek tomonidan Dorut-Tillavat majmuasida Shamsiddin Kulol maqbarasi qarshisida qurilgan jome masjididir. U ko‘k keramik plitkalar bilan qoplangan ulkan gumbazi bilan mashhur bo‘lib, ko‘k gumbaz degan ma’noni anglatadi MDK Travel va Advantour. Shahrisabzdagi eng yirik jome masjidi bo'lib, uning ulkan moviy gumbazi uzoqdan ko'zga tashlanadi.",
          location:
            'https://yandex.uz/maps/org/190930271536/?ll=66.828573%2C39.049507&mode=search&sll=66.828573%2C39.049507&sspn=0.018206%2C0.008523&text=Shahrisabz%20Ko%27k%20Gumbaz%20masjidi&z=16.26',
          nearbyRestaurants: [
            { name: 'Nasaf Milliy Taomlar', distance: '300m' },
          ],
        },
        {
          title: 'Dorus-Saodat majmuasi',
          image:
            'https://uzbekistan.travel/storage/app/media/uploaded-files/photo_2024-09-12_09-21-31.jpg',
          info: "Shahrisabzdagi Dorusiodat (Dorus-Saodat — Hokimiyat va saodat uyi majmuasi XIV asrda Amir Temur tomonidan barpo etilgan muhtasham yodgorlikdir. Oqsaroy yaqinida joylashgan bu majmua Temuriylar sulolasi vakillari (Jahongir, Umarshayx va Temurning oʻzi uchun) dafn etilgan, shuningdek, madrasa va masjidni oʻz ichiga olgan xotira majmuasidir. Temuriylar xonadoni uchun qurilgan xilxona. Majmua o'zining ulug'vorligi va mahzun go'zalligi bilan ajralib turadi.",
          location:
            'https://yandex.uz/maps/org/19088712299/?ll=66.828573%2C39.049507&mode=search&sll=66.828573%2C39.049507&sspn=0.018206%2C0.008523&text=Shahrisabz%20Dorus-Saodat%20majmuasi&z=16.26',
          nearbyRestaurants: [{ name: 'Temuriy Taomlar', distance: '200m' }],
        },
        {
          title: 'Chubin madrasasi',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/e7/Chubin_madrassah.jpg',
          info: "Shahrisabzdagi Chubin madrasasi XVI asrda qurilgan tarixiy me'moriy yodgorlik bo'lib, shaharning shimoliy-sharqiy qismida, Chubin mahallasida joylashgan. Madrasa UNESCOning Jahon merosi ro'yxatiga kiritilgan bo'lib, hozirgi kunda ushbu hududda Shahrisabz tarix muzeyi faoliyat yuritadi va mahalliy hamda xorijiy sayyohlar uchun ziyoratgoh hisoblanadi.",
          location:
            'https://yandex.uz/maps/org/178085183539/?ll=66.828573%2C39.052150&mode=search&sctx=ZAAAAAgBEAAaKAoSCVBWDFcHtVBAESf20D5WhkNAEhIJ0Chd%2Bpekkj8RXkccsoF0gT8iBgABAgMEBSgKOABAgZsGSAFqAnV6nQHNzMw9oAEAqAEAvQGZNDCxwgEGs4DRtZcFggIbU2hhaHJpc2FieiBDaHViaW4gbWFkcmFzYXNpigIAkgIGMTAxNzYxmgIMZGVza3RvcC1tYXBz&sll=66.828573%2C39.052150&sspn=0.036411%2C0.017046&text=Shahrisabz%20Chubin%20madrasasi&z=15.26',
          nearbyRestaurants: [{ name: 'Muzey Cafe', distance: '50m' }],
        },
        {
          title: 'Malik Ashtar masjidi',
          image: 'https://xabar.uz/static/crop/2/7/920__95_2730601860.jpg',
          info: "Shahrisabzdagi Malik Ajdar (yoki Maliki Ashtar) masjidi — XVIII-XIX asrlarga oid tarixiy meʼmoriy yodgorlikdir. Shahrisabzning sinchkorlik tipidagi mavze masjidi bo'lib, yirik berk xonaqosi va gumbazli tuzilishi bilan ajralib turadi. Hozirda majmua hovli atrofi bo'ylab joylashgan masjid va hujralardan tashkil topgan. Shaharning qadimiy qismida joylashgan ushbu masjid o'ziga xos ustunli ayvoni va tarixiy atmosferasi bilan sayyohlarni jalb qiladi.",
          location:
            'https://yandex.uz/maps/org/80240512136/?ll=66.826062%2C39.057446&mode=search&sctx=ZAAAAAgBEAAaKAoSCVBWDFcHtVBAEUI%2B6NmshkNAEhIJZOdtbHakoj8RXkccsoF0kT8iBgABAgMEBSgKOABAgZsGSAFqAnV6nQHNzMw9oAEAqAEAvQE4Eo7vwgEGiJnU9aoCggIfU2hhaHJpc2FieiBNYWxpayBBc2h0YXIgbWFzamlkaYoCAJICBjEwMTc2MZoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=66.826062%2C39.057446&sspn=0.018206%2C0.008522&text=Shahrisabz%20Malik%20Ashtar%20masjidi&z=16.26',
          nearbyRestaurants: [
            { name: 'Qadimiy Kesh Restaurant', distance: '400m' },
          ],
        },
      ],
    },
    termiz: {
      id: 6,
      name: 'Termiz',
      mainImage:
        'https://uzbekistan.travel/storage/app/uploads/public/5e6/b54/bc7/thumb_486_1140_0_0_0_auto.jpg',
      description:
        "Termiz — 2500 yillik tarixga ega, Amudaryo bo'yida joylashgan strategik shahar, Afg‘oniston chegarasiga yaqin joylashgan, muhim strategik va logistika nuqtasi hisoblanadi.. Bu yerda qadimgi Baqtriya madaniyati, Buddaviylik ibodatxonalari va Islom olamining buyuk mutafakkirlari merosi tutashgan. Surxondaryoning o'ziga xos issiq iqlimi va qadimiy qal'alari Termizni O'zbekistonning eng sirli sayyohlik maskanlaridan biriga aylantirgan.Termiz shahri va tumani haqida asosiy ma'lumotlar:Tashkil etilgan vaqti: Tuman 1926-yil 29-sentabrda tashkil etilgan.Joylashuvi: Surxondaryo viloyatining janubida, Amudaryo sohilida, Afgʻoniston va Tojikiston bilan chegaradosh.Ma'muriy tuzilishi: Tumanda Pattakesar, Paxtaobod, Uchqizil, Xotinrabot, Yangiariq kabi qishloq fuqarolar yig'inlari mavjud bo'lib, markazi Uchqizil qishlog'i hisoblanadi.Tarixiy yodgorliklar: Eski Termiz — eramizdan avvalgi VI asrdan XVII asrgacha bo'lgan davrni qamrab olgan arxeologik yodgorlik bo'lib, 2019-yildan buyon Termiz davlat muzey-qo'riqxonasi tarkibida davlat muhofazasiga olingan. Termiz shuningdek, mintaqadagi muhim islomiy va buddaviylik madaniyati o'rganiladigan ilmiy markaz sifatida ham ahamiyatga ega.",
      monuments: [
        {
          title: 'Hakim at-Termiziy majmuasi',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4wkMTmxionitzpjsK4AOPB-AtPFdZNKCMQ&s',
          info: "Termizdagi Hakim at-Termiziy majmuasi (IX-XV asrlar) buyuk islom olimi, tasavvuf shayxi Abu Abdulloh Muhammad ibn Hasan al-Hakim at-Termiziy qabri ustiga qurilgan muqaddas ziyoratgohdir. Surxondaryo viloyatida joylashgan majmua maqbara, masjid, xonaqoh va chillaxonalardan iborat bo'lib, asrlar davomida, xususan Temuriylar davrida qayta ta'mirlangan va kengaytirilgan.  Eski Termiz qal'asi hududida, Amudaryo sohilida joylashgan.",
          location:
            'https://yandex.uz/maps/org/233699306129/?ll=67.458677%2C37.284460&mode=search&sctx=ZAAAAAgBEAAaKAoSCfmdJjPetFBAEZyk%2BWNah0NAEhIJ0Chd%2Bpekkj8Rr0FfevtzgT8iBgABAgMEBSgKOABA0okMSAFqAnV6nQHNzMw9oAEAqAEAvQGYC%2F%2FmwgEGkdXBzOYGggIhVGVybWl6IEhha2ltIGF0LVRlcm1peml5IG1ham11YXNpigIAkgIGMTAxNzYxmgIMZGVza3RvcC1tYXBz&sll=67.458677%2C37.284460&sspn=1.050108%2C0.503772&text=Termiz%20Hakim%20at-Termiziy%20majmuasi&z=10.41',
          nearbyRestaurants: [
            { name: 'Termiziy Cafe', distance: '100m' },
            { name: 'Sohil Restaurant', distance: '300m' },
          ],
        },
        {
          title: 'Sulton Saodat majmuasi',
          image:
            'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/sultan-saodat-0-0-0-0-1599210715.jpg',
          info: "Termizdagi Sulton Saodat majmuasi — X–XVII asrlarga oid, payg‘ambarimiz Muhammad (s.a.v.) avlodlari (sayyidlar) dafn etilgan muqaddas ziyoratgohdir. Baxtlilar sultoni ma'nosini anglatuvchi ushbu majmua Hasan al-Amir maqbarasi atrofida shakllangan, o‘ziga xos pishiq g‘ishtli me’moriy uslubga ega va 2002/2019-yillarda qayta ta’mirlangan. Eski Termizning markazida, Amudaryo sohilida joylashgan.",
          location:
            'https://yandex.uz/maps/org/38503806200/?ll=67.300023%2C37.264039&mode=search&sctx=ZAAAAAgBEAAaKAoSCVqbxvZa3VBAEZWCbi9ppEJAEhIJmUnUCz7N8D8RE38UdeYe4D8iBgABAgMEBSgKOABA0okMSAFqAnV6nQHNzMw9oAEAqAEAvQEUueBhwgEG%2BOmFuI8BggIdVGVybWl6IFN1bHRvbiBTYW9kYXQgbWFqbXVhc2mKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=67.300023%2C37.264039&sspn=0.044518%2C0.021363&text=Termiz%20Sulton%20Saodat%20majmuasi&z=14.97',
          nearbyRestaurants: [{ name: 'Sulton Taomlari', distance: '200m' }],
        },
        {
          title: 'Fayoztepa buddaviylik ibodatxonasi',
          image:
            'https://uzbekistan.travel/storage/app/media/Rasmlar/Surxondaryo/cropped-images/Fayoztepa-0-0-0-0-1738314059.jpg',
          info: "Fayoztepa — Termiz yaqinidagi milodiy I—VII asrlarga oid qadimiy buddaviylik monastir majmuasi (vixara). 1963-yilda arxeolog L.Albaum tomonidan topilgan va R.F. Fayozov sharafiga nomlangan. Uch qismdan (ibodatxona, hovli, xo'jalik xonalari) iborat bo'lib, loydan yasalgan Budda haykali va mashhur Uchlik (Triada) tamg'asi topilgan joy hisoblanadi.",
          location:
            'https://yandex.uz/maps/10338/termez/geo/5794987724/?ll=67.251794%2C37.230688&z=16.9',
          nearbyRestaurants: [{ name: 'Arxeolog Oshxonasi', distance: '500m' }],
        },
        {
          title: "Qirq qiz qal'asi",
          image:
            'https://upload.wikimedia.org/wikipedia/commons/5/55/Qirq_qiz.jpg',
          info: "Termizdagi Qirq qiz qal’asi (IX-XV asrlar) — Surxondaryo viloyatidagi noyob me’moriy yodgorlik boʻlib, shahar tashqarisidagi zodagonlar saroyi, xonaqoh yoki karvonsaroy sifatida xizmat qilgan. Xom gʻishtdan qurilgan toʻrtburchak tarhli inshoot 2016-yildagi tadqiqotlar boʻyicha XIV-XV asrlarga oid deb taxmin qilinadi, 2023-2024-yillarda restavratsiya qilingan.  Afsonalarga ko'ra, bu yerda qahramon ayol Guloyim va uning 40 nafar dugonasi dushmanga qarshi jang qilgan.",
          location:
            'https://yandex.uz/maps/org/60403843652/?ll=67.271313%2C37.249379&mode=search&sctx=ZAAAAAgBEAAaKAoSCa%2FpQUEp0FBAEcu5FFeVnUJAEhIJqdkDrcCQdT8RfXpsy4CzZD8iBgABAgMEBSgKOABA4lBIAWoCdXqdAc3MzD2gAQCoAQC9AR43b1bCAQbEhOaC4QGCAhdUZXJtaXogUWlycSBxaXogcWFsJ2FzaYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=67.271313%2C37.249379&sspn=0.084233%2C0.040429&text=Termiz%20Qirq%20qiz%20qal%27asi&z=14.05',
          nearbyRestaurants: [{ name: 'Afsona Cafe', distance: '150m' }],
        },
        {
          title: 'Kampirtepa yodgorligi',
          image:
            'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/cropped-images/2-0-0-0-0-1583409456-0-0-0-0-1583409530.jpg',
          info: "Kampirtepa — Termiz shahridan 30 km g'arbda, Amudaryo bo'yida joylashgan miloddan avvalgi IV asrga oid antik Baqtriya yodgorligi. U ko'pincha Iskandar Zulqarnayn tomonidan asos solingan Oks Aleksandriyasi (Aleksandriya Oksiana) shahri deb hisoblanadi. Yodgorlikdan qadimiy saroy, mustahkam mudofaa devorlari va turar-joylar topilgan. Olimlar tomonidan 'Oks Aleksandriyasi' (Aleksandr Makedonskiy shahri) deb taxmin qilinadigan qadimiy port-shahar qoldiqlari.",
          location:
            'https://yandex.uz/maps/org/220576637134/?ll=66.824996%2C37.470467&mode=search&sctx=ZAAAAAgBEAAaKAoSCbN%2BMzFd0VBAEZOnrKbrn0JAEhIJsHQ%2BPEuQtT8RObaeIRyzpD8iBgABAgMEBSgKOABA4lBIAWoCdXqdAc3MzD2gAQCoAQC9AbXYxBLCAQbOwZHbtQaCAhxUZXJtaXogS2FtcGlydGVwYSB5b2Rnb3JsaWdpigIAkgIGMTk4MTY0mgIMZGVza3RvcC1tYXBz&sll=66.824996%2C37.470467&sspn=0.607324%2C0.290626&text=Termiz%20Kampirtepa%20yodgorligi&z=11.2',
          nearbyRestaurants: [
            { name: "Daryo Bo'yi Choyxonasi", distance: '1km' },
          ],
        },
        {
          title: 'Zurmala minorasi',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/5/5d/Zurmala_Stupa.jpg',
          info: "Zurmala minorasi — Termiz yaqinidagi (miloddan avvalgi II-asr) Kushonlar davriga oid eng qadimiy buddaviy stupa hisoblanadi. 14,5 metr balandlikdagi bu inshoot 1,2 millionga yaqin maxsus xom g'ishtdan qurilgan. U Buddaga sig'inish va muqaddas ashyolarni saqlash joyi bo'lib, Surxondaryodagi asosiy madaniy meros yodgorliklaridan biridir. Kushanlar davriga (I-II asrlar) oid buddaviylik stupasi bo'lib, O'zbekiston hududida saqlanib qolgan eng qadimiy g'ishtin inshootlardan biridir.",
          location:
            'https://yandex.uz/maps/org/12109662220/?ll=67.458677%2C37.284460&mode=search&sctx=ZAAAAAgBEAAaKAoSCSzVBbzMtFBAEXJsPUM4vEJAEhIJzm3CvTJv4z8Rx4FXy52Z0j8iBgABAgMEBSgKOABAvIcMSAFqAnV6nQHNzMw9oAEAqAEAvQE0pD8rwgEFjJCrji2CAhdUZXJtaXogWnVybWFsYSBtaW5vcmFzaYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=67.458677%2C37.284460&sspn=0.742539%2C0.356221&text=Termiz%20Zurmala%20minorasi&z=10.91',
          nearbyRestaurants: [
            { name: 'Termiz Milliy Taomlar', distance: '600m' },
          ],
        },
        {
          title: 'Abu Iso Muhammad at-Termiziy maqbarasi',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/d/d8/Abu_Iso_Muhammad_termiziy_maqbarasi.jpg',
          info: "Abu Iso Muhammad at-Termiziy maqbarasi (IX-XV asrlar) Termiz shahrining chekkasida, Amudaryo bo‘yida joylashgan buyuk tasavvuf shayxi, hakimlar oqimi asoschisi Abu Abdulloh ibn Hasan ibn Bashir al-Hakimiy at-Termiziy dafn etilgan muqaddas ziyoratgohdir. Majmua maqbara, xonaqoh va masjidlardan iborat bo‘lib, oq marmar sag‘ana va ganchkori bezaklar bilan bezatilgan.Mashhur 'Sahihi Termiziy' hadislar to'plami muallifi Imom Termiziyning ziyoratgohi (Sherobod tumanida joylashgan).",
          location:
            'https://yandex.uz/maps/org/190937222297/?ll=67.066822%2C37.677863&mode=search&sctx=ZAAAAAgBEAAaKAoSCVqbxvZa3VBAEZWCbi9ppEJAEhIJOSUgJuHC5z8Rpn9JKlPM1j8iBgABAgMEBSgKOABA0okMSAFqAnV6nQHNzMw9oAEAqAEAvQFwWdRnwgEGmZn7pccFggItVGVybWl6IEFidSBJc28gTXVoYW1tYWQgYXQtVGVybWl6aXkgbWFxYmFyYXNpigIAkgIFMTAzMziaAgxkZXNrdG9wLW1hcHM%3D&sll=67.066822%2C37.677863&sspn=0.041537%2C0.019821&text=Termiz%20Abu%20Iso%20Muhammad%20at-Termiziy%20maqbarasi&z=15.07',
          nearbyRestaurants: [{ name: 'Ziyorat Restaurant', distance: '100m' }],
        },
        {
          title: "Jarqo'rg'on minorasi",
          image:
            'https://uzbekistan.travel/storage/app/media/uploaded-files/minaret.jpg',
          info: "Jarqo‘rg‘on minorasi — Surxondaryo viloyatining Jarqo‘rg‘on tumanidagi Minor qishlog‘ida joylashgan, 1109-yilda me’mor Ali ibn Muhammad Seraxsiysiy tomonidan qurilgan noyob, burama g‘ishtli tarixiy obida. U Termizdan 60 km uzoqlikda bo‘lib, dastlabki ikki qavatli minoraning hozirda 21,6 metrli pastki qismi saqlanib qolgan va 16 ta yarim ustundan iborat. 1109-yilda qurilgan o'ziga xos 'qobirg'ali' dizayndagi minora. O'rta Osiyo me'morchiligida noyob hisoblangan g'isht terish uslubi bilan mashhur.",
          location:
            'https://yandex.uz/maps/105811/surxondaryo-province/geo/6828200254/?ll=67.396454%2C37.474630&z=14.67',
          nearbyRestaurants: [{ name: 'Minor Cafe', distance: '50m' }],
        },
        {
          title: 'Qoratepa majmuasi',
          image:
            'https://uzbekistan.travel/storage/app/media/uploaded-files/alasi-16.jpg',
          info: 'Termizdagi Qoratepa majmuasi — Eski Termiz shimoli-sharqida joylashgan, milodiy I–III asrlarga (Kushonlar davri) oid noyob budda g‘or ibodatxonalari majmuasidir. 8 gektardan ortiq maydonni egallagan ushbu yodgorlik uchta tabiiy tepalikda joylashgan bo‘lib, monastir, g‘orlar va ibodatxonalar majmuasidan iborat. Bu Markaziy Osiyoda buddizm rivojining muhim markazi hisoblanadi. Milodiy I–III asrlarga oid buddaviylik g‘or ibodatxonalari majmuasi. Bu yerda qadimiy buddaviylik haykallari va ibodatxonalar mavjud bo‘lib, ularning ba’zilari g‘or ichida joylashgan.',
          location:
            'https://yandex.uz/maps/geo/1901395811/?ll=65.793644%2C38.772962&mode=search&sctx=ZAAAAAgBEAAaKAoSCZQXmYBf2VBAEanZA63AvEJAEhIJRUseT8sPrD8RqDY4Ef3amj8iBgABAgMEBSgKOABAnYUMSAFqAnV6nQHNzMw9oAEAqAEAvQGCth0ywgEGkdXBzOYGggIdc3VyeG9uZGFyeW8gUW9yYXRlcGEgbWFqbXVhc2mKAgCSAgYxMDU4MTGaAgxkZXNrdG9wLW1hcHM%3D&sll=67.348376%2C37.375763&sspn=0.959622%2C0.459799&text=surxondaryo%20Qoratepa%20majmuasi&z=10.54',
          nearbyRestaurants: [{ name: 'Sohil Choyxonasi', distance: '400m' }],
        },
      ],
    },
    kokan: {
      id: 7,
      name: "Qo'qon",
      mainImage:
        'https://storage.otpusk.uz/source/1/bkcQqni2WUSDte4XVMXqF9xe9hTOJ-wn.webp',
      description:
        "Qo‘qon – Farg‘ona vodiysining eng qadimiy va yirik shaharlaridan biri, 1709-1876 yillarda Qo‘qon xonligining poytaxti bo‘lgan. O‘zbekistonning madaniy va hunarmandchilik markazi sifatida tanilgan, uzbekistan.travel saytida ta'kidlanganidek 300 dan ortiq masjid va qadimiy obidalarga ega. Hozirda aholisi 314 mingdan ortiq, Vikipediya saytida ta'kidlanganidek shahar xalqaro amaliy sanʼat festivali o‘tkaziladigan maskandir. Qo‘qon shahri haqida batafsil ma'lumotlar:Tarixi: 10-asrda “Xovakend” yoki “Xokand” nomi bilan mashhur bo‘lgan, Mo‘g‘ullar istilosidan so‘ng qayta tiklangan. 18-asrda Shohruxbiy tomonidan asos solingan Qo‘qon xonligi poytaxtiga aylangan.Geografik joylashuvi: Farg‘ona viloyatida, So‘x daryosining quyi oqimida joylashgan.Diqqatga sazovor joylar: Qo‘qon xonlari saroyi (Xudoyorxon o‘rdasi), Jome masjidi, Norbo‘tabek madrasasi, Buyuk allomalar muzeyi kabi ko‘plab tarixiy obidalar mavjud.Hunarmandchilik: Qadimdan yog‘och o‘ymakorligi, kulolchilik va ipakchilik rivojlangan shahar. Qo‘qon shahar hokimligining ma'lumotlariga ko‘ra, shahar madaniy meros ob’ektlariga boy bo‘lib, turizm salohiyati yuqori hisoblanadi.",
      monuments: [
        {
          title: "Xudoyorxon o'rdasi",
          image:
            'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/1-0-0-0-0-1583484255-0-0-0-0-1585225098.jpg',
          info: "Xudoyorxon oʻrdasi — Arki oliy Sayyid Muhammad Xudoyorxon. Meʼmoriy yodgorlik; Qoʻqon xoni Xudoyorxon qurdirgan.Qo'qon xonlarining hashamatli saroyi bo'lib, 1871-yilda qurib bitkazilgan. U yetti hovli va 119 xonadan iborat bo'lgan, hozirda shahar o'lkashunoslik muzeyi hisoblanadi.Saroy o'zining jozibador peshtoqi, rang-barang koshinlari va ganchkorlik san'ati bilan mashhur bo'lib, O'zbekistonning eng muhim turistik ob'ektlaridan biri sanaladi.",
          location:
            'https://yandex.uz/maps/org/33153725567/?ll=70.935145%2C40.538732&mode=search&sll=65.793644%2C38.772962&sspn=0.596930%2C0.451026&text=Qo%27qon%20Xudoyorxon%20o%27rdasi&z=16.54',
          nearbyRestaurants: [{ name: 'Xon Saroy', distance: '150m' }],
        },
        {
          title: 'Jome masjidi',
          image:
            'https://uzbekistan.travel/storage/app/media/Rasmlar/Fergana/cropped-images/arkhitekturnyy-komp-3-0-0-0-0-1738063781.jpg',
          info: "Qo‘qon Jome masjidi (yoki Oltin masjid) 1819-1822 yillarda Qo‘qon xoni Umarxon tomonidan barpo etilgan tarixiy obidadir. Masjidning 100 ga yaqin o'ymakor ustunlar bilan ko'tarib turilgan uzun ayvoni Markaziy Osiyo me'morchiligining nodir namunasidir.U 98 ta naqshin ustunli ayvon, 22,5 metrli minora va ajoyib ganchkorlik bezaklari bilan ajralib turadi. ",
          location:
            'https://yandex.uz/maps/org/230692863494/?ll=70.935145%2C40.538926&mode=search&sctx=ZAAAAAgBEAAaKAoSCSYBamrZu1FAEYOnkCv1RERAEhIJnPwWnSy1jj8RkQw5tp4hfD8iBgABAgMEBSgKOABA3FBIAWoCdXqdAc3MzD2gAQCoAQC9AfXO7JvCAQaG%2FPay2waCAhNRbydxb24gSm9tZSBtYXNqaWRpigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=70.935145%2C40.538926&sspn=0.030831%2C0.014122&text=Qo%27qon%20Jome%20masjidi&z=15.5',
          nearbyRestaurants: [{ name: 'Milliy Taomlar', distance: '300m' }],
        },
        {
          title: "Norbo'tabiya madrasasi",
          image: 'https://www.ferganatourism.uz/d/norbutabiy.jpg',
          info: "Qo‘qondagi Norbo‘tabiy madrasasi (shuningdek, Madrasai Mir nomi bilan mashhur) — XVIII asr oxirida (taxminan 1795–1798-yillarda) Qo‘qon xoni Norbo‘tabiy buyrug‘iga binoan qurilgan yirik me’moriy obida hisoblanadi.XVIII asr oxirida qurilgan ushbu madrasa Qo'qondagi eng yirik bilim maskanlaridan biri bo'lgan. U o'zining pishiq g'ishtdan ishlangan salobatli ko'rinishi bilan ajralib turadi.",
          location:
            'https://yandex.uz/maps/org/66864052853/?ll=70.955153%2C40.536941&z=16.63',
          nearbyRestaurants: [{ name: 'Osh Markazi', distance: '400m' }],
        },
        {
          title: 'Modarixon maqbarasi',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZXAPT7n4N7Z2BukV8HkegopeHgKFZAK07Sg&s',
          info: "Qo‘qon shahridagi Modarixon maqbarasi (1825-yil) — Qo‘qon xoni Umarxonning onasi sharafiga bunyod etilgan va mashhur shoira Nodira bilan bog‘liq me’moriy yodgorlikdir. Daxmai shohon majmuasi tarkibida joylashgan bu obida koshinli peshtoqi, zangori gumbazi va nafis o‘yma naqshlari bilan ajralib turadi. Maqbara shohlar daxmasi yaqinida qad ko‘targan. Bu yodgorlik majmuasi Qo'qon ayollar me'morchiligi va san'atining yuqori namunasi hisoblanadi.",
          location:
            'https://yandex.uz/maps/org/79620267029/?ll=70.953369%2C40.538526&mode=search&sctx=ZAAAAAgBEAAaKAoSCZFGBU62vFFAERfYYyKlQ0RAEhIJ3uS36GSprT8RFTYDXJAtmz8iBgABAgMEBSgKOABA3FBIAWoCdXqdAc3MzD2gAQCoAQC9AXB%2FWzbCAQaVuPPNqAKCAhNNb2Rhcml4b24gbWFxYmFyYXNpigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=70.953369%2C40.538526&sspn=0.014483%2C0.006634&text=Modarixon%20maqbarasi&z=16.59',
          nearbyRestaurants: [{ name: 'Nodira kafe', distance: '200m' }],
        },
        {
          title: 'Dasturxonchi madrasasi',
          image:
            'https://meros.uz/upload/2017/02/f3204b165638db9268ea853d139c9435-large.jpg',
          info: "Qo‘qondagi Dasturxonchi madrasasi 1833-yilda Muhammad Janokiyning o‘g‘li, Qo‘qon xonligi vaziri Mahmud Dasturxonchi tomonidan qurilgan tarixiy me’moriy yodgorlikdir. Ushbu madrasa 25 ta hujra, darsxona va ayvonli masjidni o‘z ichiga olgan bo‘lib, 68 nafar talabaga mo‘ljallangan.XIX asrda qurilgan ushbu madrasa Qo'qon xonligi davridagi o'ziga xos me'moriy uslubni va o'sha davr ta'lim tizimi tarixini o'zida mujassam etgan.Hozirda ta’mirlangan va sayyohlar uchun ochiq ob’ekt hisoblanadi.",
          location:
            'https://yandex.uz/maps/org/160464573000/?ll=70.949438%2C40.539312&mode=search&sctx=ZAAAAAgBEAAaKAoSCUsBaf8DvVFAEdkFg2vuRERAEhIJcqPIWkOpjT8R36eq0EAsez8iBgABAgMEBSgKOABA3FBIAWoCdXqdAc3MzD2gAQCoAQC9AUJeFinCAQbIpLzj1QSCAhZEYXN0dXJ4b25jaGkgbWFkcmFzYXNpigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=70.949438%2C40.539312&sspn=0.014483%2C0.006634&text=Dasturxonchi%20madrasasi&z=16.59',
          nearbyRestaurants: [{ name: 'Choyxona', distance: '250m' }],
        },
      ],
    },
    nukus: {
      id: 8,
      name: 'Nukus',
      mainImage:
        'https://uzbekistan.travel/storage/app/media/cropped-images/nukus-0-0-0-0-1595245944.jpg',
      description:
        "Nukus – Qoraqalpogʻiston Respublikasining poytaxti, maʼmuriy, iqtisodiy va madaniy markaz boʻlib, Amudaryo boʻyida joylashgan. 1932-yildan shahar maqomiga ega, aholisi 330 mingdan ortiq. Shahar mashhur Savitskiy nomidagi davlat sanʼat muzeyi va Qizilqum cho‘li yaqinidagi joylashuvi bilan tanilgan, oʻrtacha harorat yanvarda Nukus haqida asosiy ma'lumotlar:Joylashuvi: Qoraqalpogʻiston Respublikasining markazida, Amudaryoning oʻng sohilida, Qizilqum cho‘li bilan oʻralgan, 109 m balandlikda joylashgan.Aholisi: 2024-yil ma'lumotlariga ko'ra, 343,5 ming kishidan ortiq.Tarixi: Qadimiy Shurcha qal’asi o‘rnida shakllangan, 1932-yil 1-apreldan poytaxt hisoblanadi, 2003-yilda “Do‘stlik” ordeni bilan taqdirlangan.Diqqatga sazovor joylari:I.V. Savitskiy nomidagi Qoraqalpogʻiston davlat sanʼat muzeyi: Dunyodagi ikkinchi eng katta avangard sanʼati toʻplamiga ega.Qoraqalpogʻiston oʻlkashunoslik muzeyi: Hudud tarixi va tabiati haqida maʼlumot beradi.Mizdakxan majmuasi: Shahar yaqinidagi qadimiy qabriston va ziyoratgoh.",
      monuments: [
        {
          title: "Savitskiy nomidagi san'at muzeyi",
          image:
            'https://uzbekistan.travel/storage/app/media/Rasmlar/cropped-images/7F1A4042-0-0-0-0-1737973158.jpg',
          info: "I.V. Savitskiy nomidagi Qoraqalpogʻiston davlat sanʼat muzeyi Nukus shahrida joylashgan boʻlib, u dunyo miqyosida Sahrodagi Luvr (Louvre in the Sands) nomi bilan mashhur. 1966-yilda rassom va etnograf Igor Vitalyevich Savitskiy tomonidan tashkil etilgan ushbu muzey Oʻzbekistonning eng yirik va muhim madaniy maskanlaridan biri hisoblanadi.Dunyoga mashhur muzey. Bu yerda rus avangard san'atining ikkinchi eng yirik to'plami va boy qoraqalpoq amaliy san'ati namunalari saqlanadi.",
          location:
            'https://yandex.uz/maps/org/186145302632/?ll=59.964047%2C42.465186&mode=search&sctx=ZAAAAAgBEAAaKAoSCRnlmZfDvFFAEZEr9SwIRURAEhIJcqPIWkOpjT8R36eq0EAsez8iBgABAgMEBSgKOABA3FBIAWoCdXqdAc3MzD2gAQCoAQC9AR1q19HCAQbo0P%2B4tQWCAiBTYXZpdHNraXkgbm9taWRhZ2kgc2FuJ2F0IG11emV5aYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=59.613710%2C42.465186&sspn=1.853867%2C0.824094&text=Savitskiy%20nomidagi%20san%27at%20muzeyi&z=9.59',
          nearbyRestaurants: [{ name: 'Nukus Plaza', distance: '200m' }],
        },
        {
          title: 'Mizdaxon majmuasi',
          image:
            'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/mizdaxan2-0-0-0-0-1596019450.jpg',
          info: "Mizdaxon (yoki Mizdaxqon) arxeologik majmuasi Qoraqalpog‘istonning Xo‘jayli tumani yaqinida joylashgan, miloddan avvalgi IV asrdan milodiy XIV asrgacha bo‘lgan davrni qamrab olgan qadimiy qabriston va shahar majmuasidir. 200 gektardan ortiq maydonni egallagan bu yodgorlik jahon soatlari deb ham ataladi va afsonaviy, sirli joy hisoblanadi.IV asrga oid ulkan arxeologik majmua. Bu yerda 'Dunyo soati' deb ataladigan maqbara, Yer osti masjidi va afsonaviy Gavyomard maqbarasi joylashgan.",
          location:
            'https://yandex.uz/maps/org/244767101654/panorama/?ll=59.389937%2C42.399672&panorama%5Bdirection%5D=-90.200000%2C10.000000&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=59.390233%2C42.400440&panorama%5Bspan%5D=0.000000%2C0.000000&z=15',
          nearbyRestaurants: [
            { name: 'Mizdaxon Choyxonasi', distance: '500m' },
          ],
        },
        {
          title: 'Chilpiq (Quyosh minorasi)',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/5/58/Chilpiq.JPG',
          info: "Chilpiq (yoki Chilpiqqal'a) – Nukus shahridan 43-45 km janubda, Amudaryo bo‘yida joylashgan, miloddan avvalgi I asr – milodiy IV asrlarga oid qadimiy zardushtiylik «Sukunat minorasi» (daxma) hisoblanadi. U Sulton Uvays tog‘ining alohida tepaligida qurilgan bo‘lib, quyoshga sig‘inish va o‘liklarni dafn etish (qoldiqlarni qoldirish) joyi sifatida xizmat qilgan. ",
          location:
            'https://yandex.uz/maps/org/119458979687/?ll=59.921088%2C42.335393&mode=search&sctx=ZAAAAAgBEAAaKAoSCTSdnQyOzk1AEU5HADeLO0VAEhIJWyOCcXCp%2FT8R641aYfpe6j8iBgABAgMEBSgKOABA2LoGSAFqAnV6nQHNzMw9oAEAqAEAvQELWrsrwgEG5769gr0DggIZQ2hpbHBpcSAoUXV5b3NoIG1pbm9yYXNpKYoCAJICBjEwMjMwNJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=59.921088%2C42.335393&sspn=0.356145%2C0.158647&text=Chilpiq%20%28Quyosh%20minorasi%29&z=11.97',
          nearbyRestaurants: [{ name: 'Amudaryo', distance: '2km' }],
        },
        {
          title: 'Sulton Uvays bobo majmuasi',
          image:
            'https://uzbekistan.travel/storage/app/media/Otabek/Sulton%20uvays%20qoraniy/cropped-images/DJI_0097-0-0-0-0-1724066827.jpg',
          info: "Sulton Uvays bobo majmuasi — Qoraqalpogʻistonning Beruniy tumanida joylashgan, VII asrda yashagan islom avliyosi Uvays al-Qaroniy xotirasiga bag‘ishlangan mashhur ziyoratgoh (XII-XIX asrlar). Majmua tarkibiga ramziy maqbara, masjid, chillaxonalar va shifobaxsh buloq kiradi. Islom olamidagi muqaddas qadamjolardan biri. Majmua o'zining muqaddas baliqlari bo'lgan hovuzi va qadimiy maqbaralari bilan ziyoratchilarni jalb qiladi, u Oʻzbekistonning moddiy madaniy meros obyekti sifatida davlat muhofazasiga olingan.",
          location:
            'https://yandex.uz/maps/org/20030661646/?ll=60.650192%2C42.009315&mode=search&sctx=ZAAAAAgBEAAaKAoSCXheKjbm9U1AEVcnZyjuKkVAEhIJJZLoZRTL1j8RueNNfotOxD8iBgABAgMEBSgKOABA0%2BULSAFqAnV6nQHNzMw9oAEAqAEAvQGnlM7qwgEFjsiuz0qCAhpTdWx0b24gVXZheXMgYm9ibyBtYWptdWFzaYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=60.646630%2C42.009315&sspn=0.018848%2C0.008440&text=Sulton%20Uvays%20bobo%20majmuasi&z=16.21',
          nearbyRestaurants: [{ name: 'Ziyorat', distance: '300m' }],
        },
        {
          title: "Toproqqal'a",
          image:
            'https://uzbekistan.travel/storage/app/media/uploaded-files/fotomaniya2.jpg',
          info: "Tuproq qal’a — Qoraqalpogʻiston Respublikasining (Nukus yaqinida) eng mashhur arxeologik yodgorliklaridan biri boʻlib, eramizning II-III asrlariga oid qadimgi Xorazm shohlarining qarorgohi hisoblanadi. Ushbu shahar UNESCOning Jahon merosi roʻyxatiga kiritilgan va oʻzining ajoyib saroy majmualari, devoriy rasmlari hamda oʻsha davr madaniyatini aks ettiruvchi topilmalari bilan mashhur. III asrda Xorazm shohlari qarorgohi bo'lgan ulkan saroy-qal'a. Bu yerda qadimiy devoriy rasmlar va noyob arxeologik topilmalar aniqlangan.",
          location:
            'https://yandex.uz/maps/org/84698742285/?ll=60.837235%2C41.909933&mode=search&sctx=ZAAAAAgBEAAaKAoSCWZOl8XEUk5AEV4u4jsxAUVAEhIJx0lh3uNMkz8Rfm%2FTn%2F1IgT8iBgABAgMEBSgKOABA3uULSAFqAnV6nQHNzMw9oAEAqAEAvQFovoE3wgEGjfzAw7sCggIbVHVwcm9xcWFs4oCZYSAoVG9wcmFxLUthbGEpigIAkgIGMTA1ODE1mgIMZGVza3RvcC1tYXBz&sll=60.837235%2C41.909933&sspn=0.181814%2C0.081540&text=Tuproqqal%E2%80%99a%20%28Topraq-Kala%29&z=12.94',
          nearbyRestaurants: [{ name: "Qal'a kafesi", distance: '800m' }],
        },
      ],
    },
    margilan: {
      id: 9,
      name: "Marg'ilon",
      mainImage: 'https://margilan.uz/_nuxt/margilan_image.Bjpp-_xB.jpg',
      description:
        "Margʻilon – Fargʻona viloyatidagi qadimiy va yirik shahar boʻlib, 2000 yillik tarixga ega, ipakchilik markazi hisoblanadi. Aholisi 300 mingdan ortiq, asosan oʻzbeklar istiqomat qiladi. Shahar oʻzining Yodgorlik ipak fabrikasi, Said Ahmadxoʻja madrasasi va hunarmandchiligi bilan mashhur. Iqlimi kontinental, qish yumshoq va yoz juda issiq keladi. Asosiy ma'lumotlar:Joylashuvi: Fargʻona viloyati, Oʻzbekiston.Tarixi: 2007-yilda 2000 yillik yubileyi nishonlangan. Tarixiy manbalarda VII asrdan ma'lum.Margʻilon oʻzining adras va atlas mahsulotlari bilan dunyoga mashhur boʻlib, hunarmandchilik an'analari saqlanib qolgan.",
      monuments: [
        {
          title: 'Yodgorlik ipak fabrikasi',
          image:
            'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/B52I5049-0-0-0-0-1583482818.jpg',
          info: 'Margʻilon “Yodgorlik” ipak fabrikasi 1924-yilda tashkil etilgan boʻlib, qoʻlda toʻqilgan tabiiy ipak matolar (atlas, adras) ishlab chiqaruvchi eng yirik va tarixiy korxonalardan biridir. Fabrikada ipak qurti boqishdan tortib, tayyor mahsulotgacha boʻlgan anʼanaviy jarayonlar saqlab qolingan. Sayyohlar uchun ipak ishlab chiqarishning barcha bosqichlarini koʻrish imkoniyati mavjud.',
          location:
            'https://yandex.uz/maps/org/2211480254/?display-text=marg%20ilon%20yodgorlik%20ipak%20fabrikasi&ll=71.755133%2C40.469065&mode=search&sll=71.755133%2C40.469065&sspn=0.113097%2C0.083368&text=marg%20ilon%20yodgorlik%20ipak%20fabrikasi&z=12.94',
          nearbyRestaurants: [{ name: 'Ipakchi Cafe', distance: '100m' }],
        },
        {
          title: "Said Ahmadxo'ja eshon madrasasi",
          image: 'https://ferganatourism.uz/d/jmj_9252.jpg',
          info: 'Marg‘ilon shahridagi Said Ahmadxo‘ja eshon madrasasi XIX asr oxiri – XX asr boshlariga (taxminan 1907-1909-yillar) oid meʼmoriy yodgorlikdir. Sayyid Axmadxonxo‘ja G‘iyosxo‘jayev tomonidan qurilgan bu majmua anʼanaviy uslubda, g‘ishtdan bunyod etilgan bo‘lib, hozirda faoliyat yurituvchi masjid va ziyoratgoh hisoblanadi. ',
          location:
            "https://yandex.uz/maps/101425/margilan/search/Said%20Ahmadxo'ja%20eshon%20madrasasi/?ll=71.722904%2C40.471545&sll=71.755133%2C40.469065&sspn=0.113097%2C0.083368&z=15.29",
          nearbyRestaurants: [{ name: 'Anor', distance: '250m' }],
        },
        {
          title: 'Pir Siddiq majmuasi (Kaptarli mozor)',
          image:
            'https://zamin.uz/uploads/posts/2019-10/1572261873_original_68-1200x800.jpg',
          info: "XVIII asrning o'rtalarida barpo etilgan majmua. Afsonaga ko'ra, kaptarlar avliyoni dushmanlardan qutqarib qolgan, shuning uchun bu yerda minglab kaptarlar yashaydi.",
          location:
            'https://yandex.uz/maps/org/100304311322/?ll=71.725613%2C40.474247&mode=search&sll=71.722904%2C40.471545&sspn=0.035662%2C0.016352&text=Pir%20Siddiq%20majmuasi&z=14.29',
          nearbyRestaurants: [
            { name: "Marg'ilon Milliy Taomlar", distance: '400m' },
          ],
        },
        {
          title: "Xo'ja Ma'oz maqbarasi",
          image:
            'https://uzbekistan.travel/storage/app/media/uploaded-files/photo_2021-01-21_16-32-47.jpg',
          info: "Marg‘ilon shahridagi Xo‘ja Ma’oz (yoki Xo‘ja Mag‘iz) maqbarasi XVIII asrning birinchi yarmida bunyod etilgan tarixiy obida va mahalliy me’morchilikning yorqin namunasidir. Farg‘ona viloyati, Marg‘ilon shahrida joylashgan ushbu bir xonali bino o‘zining nafis dekorativ elementlari va mutanosib shakllari bilan ajralib turadi.Qadimiy qadamjolardan biri bo'lib, o'zining tinch muhiti va sharqona me'moriy uslubi bilan ziyoratchilarni jalb qiladi.",
          location:
            'https://yandex.uz/maps/101425/margilan/geo/1755635156/?ll=71.767187%2C40.487743&z=17.16',
          nearbyRestaurants: [{ name: 'Lazzat', distance: '500m' }],
        },
        {
          title: "Erkin Vohidov nomidagi ijodkorlar bog'i",
          image:
            'https://uzreport.news/fotobank/image/cbaaa8b1fc6f7cfd19c706b2d54250db.jpeg',
          info: 'Marg‘ilon shahridagi Erkin Vohidov nomidagi Ijodkorlar bog‘i buyuk shoir va O‘zbekiston Qahramoni xotirasiga bag‘ishlab barpo etilgan madaniyat maskanidir. 2017-yilda tashkil etilgan ushbu bog‘da shoirning haykali o‘rnatilgan, shuningdek, uning ijodiga oid Memorial muzey va maxsus ijod maktabi ham joy olgan.',
          location:
            'https://yandex.uz/maps/org/83484941225/?ll=71.809155%2C40.429410&mode=search&sll=71.878171%2C40.963103&sspn=0.019111%2C0.008698&text=Farg%E2%80%98ona%20viloyati%2C%20Marg%E2%80%98ilon%20shahri%2C%20Xiyobon%20ko%E2%80%98chasi.&z=12.19',
          nearbyRestaurants: [{ name: "Bog' Kafe", distance: '100m' }],
        },
      ],
    },
    navoi: {
      id: 10,
      name: 'Navoiy',
      mainImage:
        'https://uzbekistan.travel/storage/app/media/uploaded-files/IMG_20221027_143255_335.jpg',
      description:
        "Navoiy viloyati — O‘zbekistonning sanoati rivojlangan yirik hududlaridan biri bo‘lib, 1982-yilda tashkil etilgan (1992-yilda qayta tiklangan), ma'muriy markazi Navoiy shahri. Maydoni 111 ming km² bo‘lgan viloyat, boy tog‘-kon (oltin, uran), metallurgiya va kimyo sanoati (Navoiy KMK) bilan mashhur. Hududda Aydarko‘l, Sarmishsoy petrogliflari va Raboti Malik kabi tarixiy obidalar mavjud.Navoiy — Buyuk Ipak yo'li chorrahasida joylashgan, qadimiy karvonsaroylar va sirlarga boy qoyatosh rasmlari bilan mashhur zamonaviy sanoat va madaniyat markazi.",
      monuments: [
        {
          title: 'Raboti Malik karvonsaroyi',
          image:
            'https://uzbekistan.travel/storage/app/media/Rasmlar/Navoiy/cropped-images/2T0A0144-0-0-0-0-1738326340.jpg',
          info: "Raboti Malik (Podshoh raboti) — Navoiy viloyati Karmana tumanida joylashgan XI asrga oid noyob me'moriy yodgorlik va karvonsaroydir. U Markaziy Osiyodagi eng qadimgi va eng yirik karvonsaroylardan biri hisoblanadi. Bugungi kunda uning mahobatli peshtoqi saqlanib qolgan bo'lib, u cho'ldagi eng yirik saroylardan biri bo'lgan.",
          location:
            'https://yandex.uz/maps/org/56919818368/?ll=65.055017%2C40.034370&mode=search&sll=71.809155%2C40.429410&sspn=0.190206%2C0.140291&text=Raboti%20Malik%20karvonsaroyi&z=10.59',
          nearbyRestaurants: [{ name: 'Malik Restoran', distance: '50m' }],
        },
        {
          title: 'Sardoba Raboti Malik',
          image:
            'https://uzbekistan.travel/storage/app/media/Rasmlar/Navoiy/cropped-images/2T0A0179-0-0-0-0-1738326362.jpg',
          info: "Raboti Malik va uning tarkibidagi Sardoba — Navoiy viloyatining Karmana tumanida joylashgan, XI asrga oid noyob me'moriy yodgorliklar majmuasidir. Ushbu majmua Buyuk Ipak yo'li yoqasida qad ko'targan bo'lib, o'z davrining eng yirik karvonsaroylaridan biri hisoblangan.Raboti Malik qarshisida joylashgan noyob suv ombori (sardoba). Bu inshoot cho'l o'rtasida karvonlar uchun suvni salqin va toza saqlash vazifasini bajargan.",
          location:
            'https://yandex.uz/maps/org/56919818368/?ll=65.362938%2C40.043067&mode=search&sll=65.055017%2C40.034370&sspn=0.926934%2C0.427792&text=Sardoba%20Raboti%20Malik&z=10.99',
          nearbyRestaurants: [{ name: 'Karvon Kafe', distance: '100m' }],
        },
        {
          title: 'Qosim Shayx majmuasi',
          image:
            'https://meros.uz/upload/2017/02/ae75e4635d21ad907b24dfdcf6e57e56-large.jpg',
          info: 'Qosim Shayx majmuasi Navoiy viloyatining Karmana tumanida joylashgan XVI–XX asrlarga oid tarixiy meʼmoriy yodgorlikdir. 1558-yilda Abdullaxon II tomonidan Shayx Qosim Azizon sharafiga qurilgan xonaqoh, daxmalar va masjidni o‘z ichiga oladi, u yirik ziyoratgoh hisoblanadi',
          location:
            'https://yandex.uz/maps/org/152058228194/?ll=65.367581%2C40.133166&mode=search&sll=65.362938%2C40.043067&sspn=0.436978%2C0.324164&text=Qosim%20Shayx%20majmuasi&z=15.33',
          nearbyRestaurants: [{ name: 'Shirin', distance: '300m' }],
        },
        {
          title: "Nurota Chashmasi va qal'asi",
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ee/Nurata_town.jpg',
          info: "Navoiy viloyatidagi Nurota shahri o'zining qadimiy Chashma ziyoratgohi va Nur qal'asi bilan mashhur bo'lib, ular mintaqaning eng muhim tarixiy va madaniy obidalari hisoblanadi. Muqaddas chashma va uning yonidagi qadimiy qal'a xarobalari (Nur qal'asi). Afsonalarga ko'ra, qal'a Iskandar Zulqarnayn (Aleksandr Makedonskiy) buyrug'i bilan qurilgan.",
          location:
            'https://yandex.uz/maps/org/211576183115/?ll=65.681016%2C40.567976&mode=search&sll=65.367581%2C40.133166&sspn=0.021577%2C0.015985&text=Nurota%20Chashmasi%20va%20qal%27asi&z=13.63',
          nearbyRestaurants: [{ name: 'Chashma Kafe', distance: '150m' }],
        },
        {
          title: 'Mir Sayyid Bahrom maqbarasi',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/7/7b/Mir-Sayid_Bakhrom_Mausoleum_%285%29.jpg',
          info: "Mir Sayyid Bahrom maqbarasi — Navoiy viloyati Karmana shaharchasidagi X—XI asrlarga (taxminan 1020-yil) oid eng qadimiy meʼmoriy yodgorlik va O‘zbekistondagi eng kichik maqbaralardan biri (4,5x4,5 m). Buxorodagi Somoniylar maqbarasiga o‘xshash uslubda qurilgan bo‘lib, ko‘fiy xatidagi yozuvlar va murakkab geometrik g‘ishtin bezaklar bilan ajralib turadi. X asrga oid noyob me'moriy obida (Karmana tumani). G'isht terish uslubi bo'yicha u Buxorodagi Somoniylar maqbarasiga juda yaqin va juda qadimiy hisoblanadi.",
          location:
            'https://yandex.uz/maps/org/155109599209/?ll=65.361188%2C40.142877&mode=search&sll=65.681016%2C40.567976&sspn=0.112698%2C0.051599&text=Mir%20Sayyid%20Bahrom%20maqbarasi&z=16.62',
          nearbyRestaurants: [
            { name: 'Karmana Osh Markazi', distance: '400m' },
          ],
        },
      ],
    },
    namangan: {
      id: 11,
      name: 'Namangan',
      mainImage:
        'https://uzbekistan.travel/storage/app/media/noviy/DJI_0004.jpg',
      description:
        'Namangan — Fargʻona vodiysining shimolida joylashgan, aholi soni boʻyicha Oʻzbekistonda Toshkentdan keyin ikkinchi oʻrinda turuvchi yirik sanoat va hunarmandchilik markazidir. Gullar shahri nomi bilan mashhur boʻlib, 1961-yildan buyon xalqaro gullar festivali oʻtkaziladi. Sanoati rivojlangan, qadimiy meʼmoriy yodgorliklarga ega va aholisi 700 mingdan oshiq. ',
      monuments: [
        {
          title: 'Axsikent arxeologik yodgorligi',
          image:
            'https://uzbekistan.travel/storage/app/media/uploaded-files/axsikent.jpg',
          info: 'Axsikent — Namangan viloyati To‘raqo‘rg‘on tumanida, Sirdaryo bo‘yida joylashgan qadimiy shahar xarobasi (mil.avv. III-II asrlar - mil. XVII asr). Farg‘ona vodiysining eng yirik poytaxti va hunarmandchilik markazi, Zahiriddin Muhammad Bobur tug‘ilgan joy hisoblanadi. Hozirda bu yer Ochiq osmon ostidagi muzey sifatida o‘rganilmoqda.',
          location:
            'https://yandex.uz/maps/org/170143999493/?ll=71.452224%2C40.886771&mode=search&sctx=ZAAAAAgBEAAaKAoSCUrtRbQdV1BAEeAsJctJEkRAEhIJPgXAeAYNjT8RkE3yI37Fej8iBgABAgMEBSgKOABAvPELSAFqAnV6nQHNzMw9oAEAqAEAvQHciF9nwgEGhcz96vkEggIeQXhzaWtlbnQgYXJ4ZW9sb2dpayB5b2Rnb3JsaWdpigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=71.452224%2C40.886771&sspn=1.815715%2C0.827327&text=Axsikent%20arxeologik%20yodgorligi&z=9.62',
          nearbyRestaurants: [{ name: 'Sirdaryo Restoran', distance: '1km' }],
        },
        {
          title: 'Mulla Bozor Oxund majmuasi',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyTWXtNy8-aRKYfEFTQaqo9cyWPRHl56DgQ&s',
          info: "Namangan shahridagi Mulla Bozor Oxund majmuasi (XVII asr) — mashhur shoir Boborahim Mashrabning ustozi, olim Xoja Ubaydulloh ibn Sulton Muhammad Bobur Qoraxon sharafiga bunyod etilgan tarixiy ziyoratgohdir. Labbaytogʻa dahasida joylashgan majmua maqbara va masjiddan iborat boʻlib, 1990-yillarda qayta tiklangan. Majmua o'zining moviy gumbazi va osoyishta hovlisi bilan ajralib turadi.",
          location:
            'https://yandex.uz/maps/org/33646850131/?ll=71.675688%2C41.011367&mode=search&sctx=ZAAAAAgBEAAaKAoSCdid7jzx3FFAEUcFTraBcURAEhIJzLT9KysN%2FT8RHSEDeXZ56j8iBgABAgMEBSgKOABA0boGSAFqAnV6nQHNzMw9oAEAqAEAvQHZv1yJwgEF0%2BCIrH2CAhpNdWxsYSBCb3pvciBPeHVuZCBtYWptdWFzaYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=71.675688%2C41.011367&sspn=0.014891%2C0.006772&text=Mulla%20Bozor%20Oxund%20majmuasi&z=16.55',
          nearbyRestaurants: [{ name: 'Chustiy Osh', distance: '450m' }],
        },
        {
          title: "Xo'ja Amin maqbarasi",
          image:
            'https://uzbekistan.travel/storage/app/media/Yuliya/cropped-images/130-2-0-0-0-0-1603196647.jpg',
          info: 'Namangan shahridagi XVIII asrga oid Xo‘ja Amin maqbarasi Shayx Xovandi Tohur avlodidan bo‘lgan Iminxo‘ja Eshon qabri ustiga qurilgan me’moriy yodgorlikdir. 9x12 metr o‘lchamdagi peshtoq-gumbazli bino pishiq g‘ishtdan o‘yma girih naqshlar bilan bezatilgan. U qadimgi an’analar asosida bunyod etilgan bo‘lib, hozirda muhim ziyoratgoh hisoblanadi.',
          location:
            'https://yandex.uz/maps/org/55527671199/?ll=71.675688%2C41.011234&mode=search&sctx=ZAAAAAgBEAAaKAoSCS2T4Xg%2B61FAEXegTnl0gURAEhIJB7MJMCx%2Fjj8RAMl06PS8ez8iBgABAgMEBSgKOABAwqYBSAFqAnV6nQHNzMw9oAEAqAEAvQGjTo4ZwgEGn4vU7c4BggIUWG8namEgQW1pbiBtYXFiYXJhc2mKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=71.675688%2C41.011234&sspn=0.059976%2C0.027276&text=Xo%27ja%20Amin%20maqbarasi&z=14.54',
          nearbyRestaurants: [{ name: 'Namangan Taomlari', distance: '300m' }],
        },
        {
          title: "Afsonalar vodiysi (Bog'i Bobur)",
          image:
            'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/park1-0-0-0-0-1596777407.jpg',
          info: "Namangandagi Afsonalar vodiysi (sobiq Bog'i Bobur) — Markaziy Osiyodagi eng yirik zamonaviy istirohat bog'laridan biri bo'lib, 100 gektardan ortiq maydonni egallaydi. U o'zida akvapark, attraksionlar, savdo majmualari va gullar festivali o'tkaziladigan hududlarni birlashtirgan. Nbu.uz va Kun.uz manbalariga ko'ra, bu maskan mahalliy aholi va sayyohlar uchun asosiy hordiq chiqarish markazidir.Markaziy Osiyodagi eng yirik ko'ngilochar bog'lardan biri. Garchi zamonaviy bo'lsa-da, u shaharning 'Gullar bayrami' an'analarini o'zida mujassam etgan.",
          location:
            'https://yandex.uz/maps/org/39003407814/?ll=71.617579%2C41.003005&mode=search&sctx=ZAAAAAgBEAAaKAoSCS2T4Xg%2B61FAEThNnx1wgURAEhIJnPwWnSy1rj8Rat%2FcXz3umz8iBgABAgMEBSgKOABAwqYBSAFqAnV6nQHNzMw9oAEAqAEAvQGkA3p9wgEGxoujppEBggIfQWZzb25hbGFyIHZvZGl5c2kgKEJvZydpIEJvYnVyKYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=71.617579%2C41.003005&sspn=0.018206%2C0.008281&text=Afsonalar%20vodiysi%20%28Bog%27i%20Bobur%29&z=16.26',
          nearbyRestaurants: [{ name: 'Afsona Restaurant', distance: '100m' }],
        },
      ],
    },
    jizzakh: {
      id: 12,
      name: 'Jizzax',
      mainImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQCbJ3HBfbFM_ZD6YMUrmALEB45unrHIWkA&s',
      description:
        "Jizzax — Oʻzbekistonning markaziy qismida, Sangzor daryosi boʻyida joylashgan viloyat markazi (1973-yilda tashkil etilgan). Toshkent va Samarqand oraligʻida, Nurota tizmasining shimoliy etaklarida joylashgan boʻlib, transport yoʻllari tutashgan muhim iqtisodiy va madaniy markazdir. Aholisi 188 mingdan ortiq (2023), sanoati va qishloq xoʻjaligi rivojlangan.Jizzax — qadimiy 'Ipak yo'li' bo'yida joylashgan, 'Ilonoti' darasi va betakror Zomin tog'lari bilan mashhur bo'lgan so'lim va tarixiy o'lka.",
      monuments: [
        {
          title: 'Amir Temur darvozasi',
          image: 'https://aniq.uz/photos/news/O3vPo5vNw16JeLm.jpeg',
          info: "Jizzaxdagi Amir Temur darvozasi (yoki Ilon o'tdi darasi) — Jizzax viloyatida, Sangzor daryosi vodiysida joylashgan qadimiy va strategik ahamiyatga ega tabiiy daradir. U temuriylar davridan boshlab muhim harbiy va savdo yo'li bo'lib, o'zining baland qoyalari va go'zal manzarasi bilan mashhur. Ushbu hudud Amir Temur faoliyati bilan bog'liq tarixiy maskan hisoblanadi. Morguzar va Nurota tog' tizmalari tutashgan joydagi tabiiy dara. Bu yerda qadimiy yozuvlar va Amir Temur davriga oid muhim tarixiy qaydlar saqlanib qolgan.",
          location:
            'https://yandex.uz/maps/?ll=67.613700%2C39.985121&mode=search&sll=67.689624%2C39.986684&text=39.986684%2C67.689624&z=12.48',
          nearbyRestaurants: [{ name: 'Jizzax Somsa', distance: '1km' }],
        },
        {
          title: "O'rda ekologik bog'i",
          image:
            'https://storage.kun.uz/source/4/WaURtEUoU7j6BLy76ylJZdJkNK1wHWoJ.jpg',
          info: "Jizzax shahridagi O‘rda ekologik madaniyat va istirohat bog‘i (O‘rda eko parki) shahar markazidagi eng so‘lim va xushmanzara maskanlardan biri hisoblanadi.Jizzax shahrining tarixiy markazida joylashgan. Bu yerda qadimiy qal'a o'rni va shaharning madaniy merosini aks ettiruvchi yashil maydon barpo etilgan.",
          location:
            'https://yandex.uz/maps/org/134086142444/?ll=67.832564%2C40.160621&mode=search&sctx=ZAAAAAgBEAAaKAoSCYhjXdxG51BAESnN5nEY%2FkNAEhIJhlj9EYYB0D8RUkSGVbyRvT8iBgABAgMEBSgKOABA6e4LSAFqAnV6nQHNzMw9oAEAqAEAvQG48kNYwgEG7NOgwfMDggIUTydyZGEgZWtvbG9naWsgYm9nJ2mKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=67.832564%2C40.160621&sspn=0.184352%2C0.084922&text=O%27rda%20ekologik%20bog%27i&z=12.92',
          nearbyRestaurants: [{ name: 'Nur', distance: '200m' }],
        },
        {
          title: "Pishag'or g'ori",
          image:
            'https://uzbekistan.travel/storage/app/media/uploaded-files/peshagor5.jpg',
          info: "Jizzax viloyati Forish tumanidagi Peshag‘or g‘ori (Pishag‘or) to‘rtta tabiiy g‘ordan iborat qadimiy majmua bo‘lib, Peshag‘or darasida joylashgan. Bu yerda VIII-XII asrlarga oid Xo‘jayi Serob Ota ziyoratgohi va baliqli Niyatlar bulog‘i mavjud. G‘orlar majmuasi o‘zining sirli stalaktitlari va o‘ziga xos tuzilishi bilan mashhur. Arxeologik ahamiyatga ega bo'lgan qadimiy g'or. Bu yerdan ibtidoiy odamlar yashaganidan dalolat beruvchi ashyolar va qadimgi chizmalar topilgan.",
          location:
            'https://yandex.uz/maps/geo/3186888727/?ll=68.125855%2C39.969060&z=13.82',
          nearbyRestaurants: [{ name: "Tog' lola", distance: '1.5km' }],
        },
        {
          title: "Xo'jamushkent ota ziyoratgohi",
          image:
            'https://yuz.uz/imageproxy/1280x/https://yuz.uz/file/news/f1bb905744cc466c61ef3a5b570ea81e.jpg',
          info: "G'allaorol tumanida joylashgan, o'rta asrlarga oid me'moriy va tabiiy yodgorlik. Majmua atrofidagi archazorlar va buloqlar juda go'zal.Ushbu ziyoratgoh o‘zining uzoq tarixi, shifobaxsh suvlari va betakror tabiati bilan mashhur.",
          location:
            'https://yandex.uz/maps/org/137009002359/?ll=68.385882%2C39.933932&mode=search&sctx=ZAAAAAgBEAAaKAoSCXBCIQIOCFFAEU7udygK%2FENAEhIJIT8buW5KuT8R1uHoKt1dpz8iBgABAgMEBSgKOABA9e0LSAFqAnV6nQHNzMw9oAEAqAEAvQGy%2BuixwgEG9%2B79sv4DggIdWG8namFtdXNoa2VudCBvdGEgeml5b3JhdGdvaGmKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=68.385882%2C39.933932&sspn=0.790336%2C0.365291&text=Xo%27jamushkent%20ota%20ziyoratgohi&z=10.82',
          nearbyRestaurants: [{ name: 'Bulbulcha', distance: '500m' }],
        },
        {
          title: "Zomin milliy bog'i (O'zbekiston Shveytsariyasi)",
          image:
            'https://uzbekistan.travel/storage/app/media/Otabek/asosiydagi%20rasmlar/cropped-images/2T0A0390-0-0-0-0-1728557400.jpg',
          info: "Zomin milliy tabiat bog'i (Jizzax viloyati) — o‘zining betakror archazorlari, toza havosi va baland tog‘ landshafti tufayli O‘zbekiston Shveytsariyasi deb ataladigan eng qadimgi qo‘riqxonalardan biridir. Dengiz sathidan 2000-2500 metr balandlikda joylashgan bu maskan shifobaxsh iqlimi, noyob flora va faunasi bilan ekoturizm uchun asosiy kurort hudud hisoblanadi.Tabiat durdonasi. Bu yerda qadimiy 'Sher-afkan' (Sherni yenggan) qal'asi xarobalari va yoshi 700 yildan oshgan ulkan archalar mavjud.",
          location:
            'https://yandex.uz/maps/org/14841987239/?ll=68.468360%2C39.656282&mode=search&sll=68.385882%2C39.933932&sspn=0.790336%2C0.365291&text=Zomin%20milliy%20bog%27i%20%28O%27zbekiston%20Shveytsariyasi%29&z=11.36',
          nearbyRestaurants: [{ name: 'Zomin Hotel', distance: '100m' }],
        },
      ],
    },
    andijan: {
      id: 13,
      name: 'Andijon',
      mainImage:
        'https://uzbekistan.travel/storage/app/media/noviy/zakhiriddin-mukhammad-bobur-1.jpg',
      description:
        'Andijon — O‘zbekistonning Farg‘ona vodiysida joylashgan, maydoni bo‘yicha eng kichik, ammo aholi zichligi eng yuqori (3,6 mln+ kishi) viloyat markazidir. 1941-yilda tashkil etilgan ushbu shahar yirik sanoat (GM avtozavodi), transport va madaniyat markazi hisoblanadi. Qadimiy tarixga ega bo‘lib, Zahiriddin Muhammad Bobur vatani sifatida tanilgan, shuningdek, gaz-neft sanoati rivojlangan hududdir.',
      monuments: [
        {
          title: "Bog'i Bobur majmuasi",
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe6I_txoYXlojr3Ih-PJzcTT7LDu1ByM1Vfw&s',
          info: 'Andijon shahridagi Bog‘i Bobur (yoki Bobur milliy bog‘i) — buyuk shoir va sarkarda Zahiriddin Muhammad Bobur xotirasiga bag‘ishlangan, Bog‘ishamol adirida joylashgan yirik me’moriy-manzarali majmuadir. Majmua o‘z ichiga Bobur uy-muzeyi, ramziy qabr, osma yo‘l, so‘lim bog‘lar va dam olish maskanlarini oladi.',
          location:
            'https://yandex.uz/maps/org/16733053932/?ll=72.082802%2C40.997120&mode=search&sctx=ZAAAAAgBEAAaKAoSCUuwOJz5HVFAEQt6bwwB1ENAEhIJacai6exk4T8Rs5lDUgsl0D8iBgABAgMEBSgKOABA9e0LSAFqAnV6nQHNzMw9oAEAqAEAvQFBTYclwgEF7Mf4qj6CAhRCb2cnaSBCb2J1ciBtYWptdWFzaYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=71.671914%2C40.997120&sspn=2.174280%2C0.989039&text=Bog%27i%20Bobur%20majmuasi&z=9.36',
          nearbyRestaurants: [{ name: 'Boburshoh', distance: '200m' }],
        },
        {
          title: 'Jome masjidi va madrasasi',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYabRzp9lLm2t0-qEext8asK07jYrxwzrGfg&s',
          info: "Andijon Jome masjidi va madrasasi majmuasi XIX asr oxiriga (1870–1890 yillar) oid meʼmoriy yodgorlik boʻlib, u masjid, madrasa va minoradan iborat. Mahalliy boy Mahmud Aliboy tashabbusi bilan qurilgan bu majmua Wikipedia saytida ta'kidlanganidek 1,5-2 gektar maydonni egallaydi va 27,5-32 metrli baland minora hamda oʻyma naqshli ayvoni bilan mashhur.",
          location:
            'https://yandex.uz/maps/org/61031257558/?ll=72.338103%2C40.788195&z=16.67',
          nearbyRestaurants: [{ name: 'Milliy Taomlar', distance: '300m' }],
        },
        {
          title: "Xonobod sihatgohi va bog'i",
          image:
            'https://uzbekistan.travel/storage/app/media/Rasmlar/Mingtepa/cropped-images/khonabod-shar-23-0-0-0-0-1738055487.jpg',
          info: "Andijon viloyati Xonobod shahridagi sihatgoh va bog'i Farg'ona vodiysining sharqiy chekkasida, toza havo va shifobaxsh mineral suvlar (ayniqsa, yod-bromli) manbasi bo'lgan kurort maskanidir. U asosan yurak-qon tomir, asab tizimi, tayanch-harakat a'zolari va ginekologik kasalliklarni davolashga ixtisoslashgan bo'lib, zamonaviy fizioterapiya, mineral vannalar va tuzli shaxta xizmatlarini taqdim etadi.",
          location:
            'https://yandex.uz/maps/org/153942887219/?ll=72.981802%2C40.807129&z=15',
          nearbyRestaurants: [{ name: 'Fayz', distance: '400m' }],
        },
        {
          title: 'Imom-ota ziyoratgohi',
          image:
            'https://uzbekistan.travel/storage/app/media/uploaded-files/photo_2020-08-20_18-31-27.jpg',
          info: "Imom-ota ziyoratgohi — Andijon viloyati Xo‘jaobod tumanida joylashgan XVIII asrga oid tarixiy va muqaddas qadamjo, 1982-yildan davlat muhofazasida. Majmua Imom Muhammad Hanafiy sharafiga nomlangan bo‘lib, o‘zining musaffo tabiati, qadimiy maqbarasi va turistik salohiyati bilan mashhur. 2019-yilda Milliy ro‘yxatga kiritilgan, hozirda turizm qishlog‘i maqomiga ega.Qadimiy qadamjolardan biri bo'lib, tog'lar orasida joylashgan. Bu yer ziyoratchilar uchun ham ma'naviy, ham ekologik turizm maskani hisoblanadi.",
          location:
            'https://yandex.uz/maps/org/63920805575/gallery/?ll=72.608260%2C40.564476&z=15',
          nearbyRestaurants: [{ name: 'Ziyorat Kafe', distance: '600m' }],
        },
        {
          title: 'Mingtepa arxeologik yodgorligi',
          image:
            'https://uzbekistan.travel/storage/app/media/Rasmlar/Mingtepa/cropped-images/2T0A8500-0-0-0-0-1738050124.jpg',
          info: "Andijon viloyatining Marhamat tumanida joylashgan Mingtepa (mil. avv. IV—V asrlar) — qadimgi Dovon davlatining poytaxti, mashhur Ershi shahri xarobalari hisoblanadi. Buyuk Ipak yo‘lidagi yirik hunarmandchilik va dehqonchilik markazi bo‘lgan bu yodgorlik 2019-yildan buyon davlat muhofazasiga olingan hamda O‘zbekiston-Xitoy qo‘shma ekspeditsiyalari tomonidan o‘rganilmoqda.Antik davrga (mil. avv. IV asr) oid ulkan shahar xarobalari. Bu joy qadimiy Davan davlatining yirik markazlaridan biri bo'lgan deb hisoblanadi.",
          location:
            'https://yandex.uz/maps/org/200512246106/?ll=72.065349%2C40.539391&mode=search&sctx=ZAAAAAgBEAAaKAoSCUW4yagyGlJAEZRqn47HSERAEhIJGM3K9iFv5z8R9kArMGR11T8iBgABAgMEBSgKOABAzLoGSAFqAnV6nQHNzMw9oAEAqAEAvQHujZclwgEG2qLY%2B%2BoFggIeTWluZ3RlcGEgYXJ4ZW9sb2dpayB5b2Rnb3JsaWdpigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=72.065349%2C40.539391&sspn=0.161604%2C0.074023&text=Mingtepa%20arxeologik%20yodgorligi&z=13.11',
          nearbyRestaurants: [{ name: 'Marhamat Osh', distance: '1.2km' }],
        },
      ],
    },
    sirdaryo: {
      id: 14,
      name: 'Sirdaryo',
      mainImage:
        'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/cropped-images/2-0-0-0-0-1583469330-0-0-0-0-1583469382.jpg',
      description:
        'Sirdaryo viloyati 1963-yil 16-fevralda tashkil etilgan boʻlib, Oʻzbekistonning markaziy qismida, Sirdaryo daryosining chap sohilida joylashgan. Markazi — Guliston shahri, aholisi 925 mingdan ortiq (2024), maydoni 4,28 ming kv. km. Viloyat Qozogʻiston, Tojikiston, Toshkent va Jizzax viloyatlari bilan chegaradosh, iqtisodiyoti asosan qishloq xoʻjaligi (paxtachilik, gʻallachilik) va sanoatga asoslangan.',
      monuments: [
        {
          title: 'Sirdaryo daryosi sohili',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4zQVNIXPXaaPgIvMvMfH6_GQBdkOe93fC2g&s',
          info: "Sirdaryo — Markaziy Osiyodagi eng uzun (3019 km, Norin bilan birga) daryolardan biri bo'lib, O‘zbekiston, Tojikiston, Qirg‘iziston va Qozog‘iston hududidan oqib o‘tadi. Sirdaryo viloyati asosan daryoning chap sohilida joylashgan bo'lib, Mirzacho‘l cho'li bilan chegaradosh. Daryo sohili ekologik ahamiyatga ega, qirg'oqlari chiqindilardan tozalanib, sayyohlik maskanlariga aylantirilmoqda.Markaziy Osiyodagi eng yirik daryolardan biri. Bu joy baliq ovlash va tabiat qo'ynida dam olish uchun asosiy tarixiy va tabiiy obidadir.",
          location:
            'https://yandex.uz/maps/10000/earth/geo/138498579/?ll=66.299476%2C43.249161&z=6.71',
          nearbyRestaurants: [{ name: 'Baliqlar Maskani', distance: '300m' }],
        },
      ],
    },
};

const travelData = {
  uz: travelDataUz,
  ru: mergeTravelLocales(travelDataUz, travelPatchRu),
  en: mergeTravelLocales(travelDataUz, travelPatchEn),
};

/** Kartochka uchun bir qatorlik tavsif */
export function getCardTagline(city) {
  if (city?.cardTagline) return city.cardTagline;
  const raw = (city?.description || '').trim();
  if (!raw) return '';
  const stop = raw.search(/[.:](?=\s|$)/);
  const first = stop > 0 ? raw.slice(0, stop) : raw;
  const max = 100;
  return first.length > max ? `${first.slice(0, max - 1).trim()}…` : first;
}

export const normalizeTravelLang = (language = 'uz') => {
  const base = String(language || 'uz').split('-')[0].toLowerCase();
  return ['uz', 'en', 'ru'].includes(base) ? base : 'uz';
};

export const getCityBySlug = (slug, language = 'uz') => {
  const lang = normalizeTravelLang(language);
  const langData = travelData[lang] || travelData.uz;
  return langData[slug] || null;
};

export default travelData;


