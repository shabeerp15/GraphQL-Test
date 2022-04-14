const UserList = [
   {
      id: 1,
      name: 'Rajesh',
      username: 'rajesh',
      age: 21,
      nationality: 'INDIA',
      friends: [
         {
            id: 2,
            name: 'Vishal',
            username: 'vishal',
            age: 25,
            nationality: 'USA',
         },
         {
            id: 3,
            name: 'Vikas',
            username: 'vikas',
            age: 27,
            nationality: 'CANADA',
         },
      ],
      favoriteMovies: [
         1, 2, 3
      ]
   },
   {
      id: 2,
      name: 'Vishal',
      username: 'vishal',
      age: 25,
      nationality: 'USA',
      friends: [
         {
            id: 1,
            name: 'Rajesh',
            username: 'rajesh',
            age: 21,
            nationality: 'INDIA',
         },
         {
            id: 3,
            name: 'Vikas',
            username: 'vikas',
            age: 27,
            nationality: 'CANADA',
         },
      ],
   },
   {
      id: 3,
      name: 'Vikas',
      username: 'vikas',
      age: 27,
      nationality: 'CANADA',
   },
   {
      id: 4,
      name: 'Rajan',
      username: 'rajan',
      age: 30,
      nationality: 'UK',
   },
   {
      id: 5,
      name: 'Kishore',
      username: 'kishore',
      age: 35,
      nationality: 'CHINA',
   },
]

const MovieList = [
   {
       "id": 1,
       "name": "Avengers: Infinity War",
       "description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
       "director": "Anthony Russo",
       "producer": "Russo Brothers",
       "release_date": "27 Apr 2018",
       "rating": "PG-13",
       "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
   },
   {
       "id": 2,
       "name": "Black Panther",
       "description": "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
       "director": "Ryan Coogler",
       "producer": "Ryan Coogler",
       "release_date": "16 Feb 2018",
       "rating": "PG-13",
       "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
   },
   {
       "id": 3,
       "name": "Black Widow",
       "description": "Natasha Romanoff (played by Daisy Johnson) is a S.H.I.E.L.D. agent and the former HYDRA member Black Widow. She has survived her first mission as Black Widow and has become a favorite of S.H.I.E.L.D. agents and the Avengers.",
       "director": "Sam Mendes",
       "producer": "Sam Mendes",
       "release_date": "4 May 2016",
       "rating": "PG-13",
       "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg"
   },
   {
       "id": 4,
       "name": "Captain Marvel",
       "description": "Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers.",
       "director": "Anna Boden",
       "producer": "Kevin Feige",
       "release_date": "3 Nov 2019",
       "rating": "PG-13",
       "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg"
   },
   {
       "id": 5,
       "name": "Avengers: Endgame",
       "description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
       "director": "Anthony Russo",
       "producer": "Russo Brothers",
       "release_date": "26 Apr 2019",
       "rating": "PG-13",
       "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
   },
   {
       "id": 6,
       "name": "Spiderman: Far From Home",
       "description": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
       "director": "Jon Watts",
       "producer": "Jon Watts",
       "release_date": "2 Jul 2019",
       "rating": "PG-13",
       "image": "https://image.tmdb.org/t/p/w300_and_h450_bestv2/lcq8dVxeeOqHvvgcte707K0KVx5.jpg"
   },
]

module.exports = {
   UserList,
   MovieList
}
