let data = [{
    id: '01',
    name: 'Rave Autumn',
    date: '14.09.2019',
    city: 'Amsterdam',
    genre: 'Electronic',
    image: 'https://cdn3.xsolla.com/files/uploaded/113250/826adbf1a19ba19e6ba9af9308d2b309.png',
  },
  {
    id: '02',
    name: 'Best of 2019',
    date: '20.09.2019',
    city: 'Berlin',
    genre: 'Electronic',
    image: 'https://cdn3.xsolla.com/files/uploaded/113250/ec3917285ef4db8532c8a9cd9a2112ce.png',
  },
  {
    id: '03',
    name: 'Faderhead',
    date: '10.11.2019',
    city: 'Rome',
    genre: 'Electronic',
    image: 'https://cdn3.xsolla.com/files/uploaded/113250/53486baba5ec9d256ce20816a3e54e51.png',
  },
  {
    id: '04',
    name: 'Purple Fog Side',
    date: '05.06.2019',
    city: 'Berlin',
    genre: 'Electronic',
    image: 'https://cdn3.xsolla.com/files/uploaded/113250/e1baa378009391210cc0e64f65c7784e.png',
  },
  {
    id: '05',
    name: 'Carbon based Liveform',
    date: '14.02.2019',
    city: 'St.Petersburg',
    genre: 'Electronic',
    image: 'https://cdn3.xsolla.com/files/uploaded/113250/b1f06edaf618c3e3ad19c159eb5aa036.jpeg',
  },
  {
    id: '06',
    name: 'Neuroticfish',
    date: '25.05.2019',
    city: 'St.Petersburg',
    genre: 'Electronic',
    image: 'https://cdn3.xsolla.com/files/uploaded/113250/49705480ff397085ad34685c4181c1ab.jpeg',
  },
  {
    id: '07',
    name: 'Faderhead',
    date: '20.11.2019',
    city: 'Rome',
    genre: 'Electronic',
    image: 'https://cdn3.xsolla.com/files/uploaded/113250/de9f4b49cc5ba737911b0db30f082fff.jpeg',
  },
  {
    id: '08',
    name: 'Rave Winter',
    date: '15.02.2019',
    city: 'Berlin',
    genre: 'Electronic',
    image: 'https://cdn3.xsolla.com/files/uploaded/113250/826adbf1a19ba19e6ba9af9308d2b309.png',
  },
  {
    id: '09',
    name: 'Not a Robot',
    date: '22.06.2019',
    city: 'Rome',
    genre: 'Electronic',
    image: 'https://cdn3.xsolla.com/files/uploaded/113250/14bce6211e055410a043e02a22cec69b.jpeg',
  },
  {
    id: '10',
    name: 'Carbon Based lifeforms',
    date: '22.09.2019',
    city: 'Berlin',
    genre: 'Electronic',
    image: 'https://cdn3.xsolla.com/files/uploaded/113250/7d655ea8b13f5fdda4469fb0035bd7a3.jpeg',
  },
  {
    id: '11',
    name: 'Icon of Coil',
    date: '19.05.2019',
    city: 'Rome',
    genre: 'Electronic',
    image: 'https://cdn3.xsolla.com/files/uploaded/113250/8c76c770ded42cea343dbf2d8523791e.jpeg',
  },
  {
    id: '12',
    name: 'Solar Fields',
    date: '20.06.2019',
    city: 'St.Petersburg',
    genre: 'Electronic',
    image: 'https://cdn3.xsolla.com/files/uploaded/113250/9ddae28837d2e4217e5c2e99bbd6f3a0.jpeg',
  },
  {
    id: '13',
    name: 'Apoptygma Berzerk',
    date: '14.11.2019',
    city: 'Amsterdam',
    genre: 'Electronic',
    image: 'https://cdn3.xsolla.com/files/uploaded/113250/720e3b29bf238cd40785ffe157b1151a.jpeg',
  },
  {
    id: '14',
    name: 'Mental Discipline',
    date: '16.11.2019',
    city: 'Rome',
    genre: 'Electronic',
    image: 'https://cdn3.xsolla.com/files/uploaded/113250/76372b51ab7408e826a191577abcd79d.jpeg',
  },
  {
    id: '15',
    name: 'Apoptygma Berzerk',
    date: '25.02.2019',
    city: 'Berlin',
    genre: 'Electronic',
    image: 'https://cdn3.xsolla.com/files/uploaded/113250/aec8583caa5bbe34b2c5695e2546ea3b.jpeg',
  },
  {
    id: '16',
    name: 'Solar Fields',
    date: '14.02.2019',
    city: 'Amsterdam',
    genre: 'Electronic',
    image: 'https://cdn3.xsolla.com/files/uploaded/113250/0662c0df7663f71831e83be091228413.jpeg',
  },
];

let cards = document.querySelector('ul');

for (let i = 0; i < data.length; i++) {
  let card = document.createElement('li');
  card.classList.add('cards__item');
  card.classList.add(data[i].city);
  card.classList.add(data[i].date.substring(3, 5));

  let date = document.createElement('p');
  date.textContent = data[i].date.slice(0, 2);
  date.classList.add('cards__date');

  let name = document.createElement('h3');
  name.textContent = data[i].name;
  name.classList.add('cards__title');

  card.appendChild(date);
  card.appendChild(name);
  cards.appendChild(card);

  card.style.backgroundImage = 'url(' + data[i].image + ')';
};

let cityFilter = document.getElementById('city');

cityFilter.onchange = function () {
  console.log(this.value);
  let items = cards.getElementsByClassName('cards__item');
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains(this.value)) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
};

let monthFilter = document.getElementById('month');

monthFilter.onchange = function () {
  console.log(this.value);
  let items = cards.getElementsByClassName('cards__item');
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains(this.value)) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
};
