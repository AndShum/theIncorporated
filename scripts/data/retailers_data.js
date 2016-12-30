var retailersLocalData = [
  {
    name: 'Gr8',
    address: 'Japan, Tokyo, Shibuya, Jingumae, 1 Chome-11-6, Laforet Harajuku',
    address_href: 'https://www.google.com/maps/place/Laforet+Harajuku/@35.6691202,139.7031854,17z/data=!4m5!3m4!1s0x60188ca48de018ad:0x7f96d764aa0f19cf!8m2!3d35.6691202!4d139.7053741',
    href: 'http://gr8.jp/gr8.html',
  },
  {
    name: 'ANSH46',
    address: 'Van Oldenbarneveltstraat 99, 3012 GS Rotterdam, Netherlands',
    address_href: 'https://www.google.com/maps/place/Ansh46/@51.919258,4.4720181,17z/data=!4m13!1m7!3m6!1s0x47c434a0e1c89c69:0x4054d64caea54cf5!2sVan+Oldenbarneveltstraat+99,+3012+GS+Rotterdam,+Netherlands!3b1!8m2!3d51.919258!4d4.4742068!3m4!1s0x47c434a0e1c89c69:0xbde79f9288e9033f!8m2!3d51.919258!4d4.4742068',
    href: 'http://ansh46.com/',
  },
  {
    name: 'A Ma Maniere',
    address: '969 Marietta St #200, Atlanta, GA 30318',
    address_href: 'https://www.google.com/maps/place/A+Ma+Mani%C3%A9re/@33.7788649,-84.4115913,17z/data=!4m13!1m7!3m6!1s0x88f50493aaa6517f:0x522f0b51e5b624cb!2s969+Marietta+St+NW+%23200,+Atlanta,+GA+30318!3b1!8m2!3d33.7788649!4d-84.4094026!3m4!1s0x88f5049254dc773f:0xbf76eee16055455e!8m2!3d33.77892!4d-84.409441',
    href: 'http://www.a-ma-maniere.com/',
  },
  {
    name: 'km20',
    address: 'ul.kuznetskiy Most, 20, Moscow, Russia, 107031',
    address_href: 'https://www.google.com/maps/place/ul.+Kuznetskiy+Most,+20,+Moskva,+Russia,+107031/@55.761941,37.6219923,17z/data=!3m1!4b1!4m5!3m4!1s0x46b54a5cddc41ced:0xedc523e7989a3348!8m2!3d55.761941!4d37.624181',
    href: 'http://en.km20.ru/',
  },
  {
    name: 'Luisa Via Roma',
    address: 'Via Roma, 19/21r 50123 Firenze, Italia',
    address_href: 'https://www.google.com/maps/place/Luisaviaroma/@43.7724775,11.2521086,17z/data=!3m1!4b1!4m5!3m4!1s0x132a540227ef3695:0x23ea53f5feb63065!8m2!3d43.7724775!4d11.2542973',
    href: 'http://www.luisaviaroma.com/',
  },
  {
    name: 'Hypebeast',
    address: '12 Mercer St, New York, NY 10013',
    address_href: 'https://www.google.com/maps/place/12+Mercer+St,+New+York,+NY+10013/@40.7204351,-74.0041594,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598a35d8ec67:0x145ce973a0dd3f0!8m2!3d40.7204351!4d-74.0019707',
    href: 'http://hbx.com/',
  },
  {
    name: 'Lessons',
    address: 'Lessons 575 Wellington St, Perth WA 6000, Australia',
    address_href: 'https://www.google.com/maps/place/Lessons/@-31.950633,115.8537913,17z/data=!3m1!4b1!4m5!3m4!1s0x2a32a16fc230c8d3:0xd78f5a3951cae96f!8m2!3d-31.950633!4d115.85598',
    href: 'http://www.lessonsconceptstore.com/',
  },
  {
    name: 'The Factory',
    address: '#103, 1100 N Broadway Ave, Oklahoma City, OK 73103',
    address_href: 'https://www.google.com/maps/place/The+Factory/@35.4783246,-97.5158941,17z/data=!4m13!1m7!3m6!1s0x87b2173a0b073965:0xd68a31db04a82ddb!2sPontiac+Building,+1100+N+Broadway+Ave+%23103,+Oklahoma+City,+OK+73103!3b1!8m2!3d35.4783246!4d-97.5137054!3m4!1s0x87b2173a0b0e559d:0xb6fffb9616376c2c!8m2!3d35.478348!4d-97.513793',
    href: 'https://www.thefactoryokc.com/',
  },
  {
    name: 'Feature',
    address: '3735 W Spring Mountain Rd #205, Las Vegas, NV 89102',
    address_href: 'https://www.google.com/maps/place/Feature/@36.1264874,-115.1908078,17.3z/data=!4m13!1m7!3m6!1s0x80c8c6a77d2ef477:0xb5cd6f2d573a30e1!2s3735+W+Spring+Mountain+Rd+%23205,+Las+Vegas,+NV+89102!3b1!8m2!3d36.1264823!4d-115.1891238!3m4!1s0x0:0xd9db02d9e1422642!8m2!3d36.1261279!4d-115.1891492',
    href: 'https://www.featuresneakerboutique.com/',
  },

  {
    name: 'Stone Soup',
    address: 'Char. Trikoupi 18, Athina 106 79, Greece',
    address_href: 'https://www.google.com/maps/place/Stone+Soup/@37.9830286,23.7313837,17z/data=!4m13!1m7!3m6!1s0x14a1bd3752cf63b7:0x1308510c4174b24d!2sChar.+Trikoupi+18,+Athina+106+79,+Greece!3b1!8m2!3d37.9830244!4d23.7335777!3m4!1s0x14a1bd30ace7821b:0x2dafa6b6a0a34616!8m2!3d37.9829726!4d23.7334375',
    href: '',
  },

  {
    name: 'FLat Hat Club',
    address: '288 East Exchange Street Akron, Ohio 44304',
    address_href: 'https://www.google.com/maps/place/288+E+Exchange+St,+Akron,+OH+44304/@41.072809,-81.5149125,17z/data=!3m1!4b1!4m5!3m4!1s0x883129ded75f541f:0x7b3487e28bc245e8!8m2!3d41.072805!4d-81.5127185',
    href: 'https://www.theflathatclub.com/',
  },

  {
    name: 'Addicted',
    address: '24 Seolleung-ro 155-gil, Gangnam-gu, Seoul',
    address_href: 'https://www.google.com/maps/place/24+Seolleung-ro+155-gil,+Gangnam-gu,+Seoul,+South+Korea/@37.5256926,127.0376685,20.64z/data=!4m5!3m4!1s0x357ca3887b2336d1:0x826d7cd5d7079b0b!8m2!3d37.5256774!4d127.0378133',
    href: 'http://www.addicted.kr/',
  },
];
