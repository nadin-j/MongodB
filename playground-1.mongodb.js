

// Select the database to use.
use('MyMongoDB');


db.getCollection('teacher').insertMany([
  {
    tid: "T101",
    sin: "987654321",
    name: "Nadin Joma",
    city: "Istanbul",
    nationality: "Türkiye",
    age: 25,
    salary: 6000,
    gender: "F",
    works_for: [
      { name: "Al Manar School", city: "Istanbul", year_started: 1868, is_director: false },
      { name: "Oxford School", city: "Oxford", year_started: 1995, is_director: false }
    ],
    friends: [
      { sin: "123456789" },
      { sin: "321654987" }
    ],
    seminars: [
      {
        code: "S001",
        city: "London",
        country: "UK",
        time: "10:00",
        day: "Monday",
        role: "speaker",
        school: { name: "Oxford School", city: "Oxford" }
      },
      {
        code: "S003",
        city: "Antalya",
        country: "Türkiye",
        time: "14:00",
        day: "Wednesday",
        role: "listener",
        school: { name: "Al Manar School", city: "Istanbul" }
      }
    ]
  },
  {
    tid: "T102",
    sin: "123456789",
    name: "Ali Yılmaz",
    city: "Ankara",
    nationality: "Türkiye",
    age: 35,
    salary: 7000,
    gender: "M",
    works_for: [
      { name: "Cambridge School", city: "Cambridge", year_started: 2000, is_director: true }
    ],
    friends: [],
    seminars: [
      {
        code: "S001",
        city: "London",
        country: "UK",
        time: "10:00",
        day: "Monday",
        role: "participant",
        school: { name: "Cambridge School", city: "Cambridge" }
      }
    ]
  },
  {
    tid: "T103",
    sin: "321654987",
    name: "Ahmed Demir",
    city: "Paris",
    nationality: "Fransa",
    age: 30,
    salary: 6200,
    gender: "M",
    works_for: [],
    friends: [],
    seminars: [
      {
        code: "S002",
        city: "Paris",
        country: "France",
        time: "11:00",
        day: "Tuesday",
        role: "speaker",
        school: { name: "Lyon Academy", city: "Lyon" }
      }
    ]
  }
]);
//b-Find name(s) of male teacher(s) who participated in at least one seminar in France
db.teacher.find({
  gender: "M",
 "seminars.country": "France"
}, {
  name: 1,
  _id: 0
});


//c- Find teachers who works at schools in Istanbul and participated (only in / in any)
//seminars in Antalya
/*db.teacher.aggregate([
  {
    $match: {
      "works_for.city": "Istanbul",
      "seminars.city": "Antalya"
    }
  },
  {
    $group: {
      _id: "$name"
    }
  },
  {
    $project: {
      _id: 0,
      name: "$_id"
    }
  }
]);*/


// d-Find directors of schools who do not work as teachers at any school.
//db.teacher.find({
  //"works_for.is_director": true,
  //"works_for": {
   // $not: {
   //   $elemMatch: { is_director: false }
  //  }
 // }
//}, {
 // name: 1,
 // _id: 0
//});


//e- Find names of teachers who participated in seminars in Turkey?
//db.teacher.find(
 // { "seminars.country": "Türkiye" },
 // { name: 1, _id: 0 }
//)




  



