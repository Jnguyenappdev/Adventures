"use strict";

let categories = [
  "Adventures",
  "Arts & Crafts",
  "Museums",
  "Wine Tastings",
  "Other",
];

let activities = [
  {
    category: "Adventures",
    id: "A101",
    name: "Valley Hot Air Balloons",
    description:
      "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
    location: "121 S. Main Street",
    price: 265.0,
  },
  {
    category: "Adventures",
    id: "A102",
    name: "River Runners: Float Trip",
    description:
      "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.",
    location: "145 FM 103",
    price: 65.0,
  },
  {
    category: "Adventures",
    id: "A103",
    name: "River Runners: Ride the Rapids",
    description:
      "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!",
    location: "145 FM 103",
    price: 145.0,
  },
  {
    category: "Arts & Crafts",
    id: "AC101",
    name: "Painting with a Twist : Oils",
    description:
      "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.",
    location: "1991 Paint Drive",
    price: 40.0,
  },
  {
    category: "Arts & Crafts",
    id: "AC102",
    name: "Painting with a Twist : Watercolor",
    description:
      "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.",
    location: "1991 Paint Drive",
    price: 40.0,
  },
  {
    category: "Museums",
    id: "M101",
    name: "Bravings Airship Museum",
    description:
      "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.",
    location: "101 Airfield Drive",
    price: 10.0,
  },
  {
    category: "Museums",
    id: "M102",
    name: "Forks and Spoons Museum",
    description:
      "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!",
    location: "1056 Lost Knives Court",
    price: 3.0,
  },
  {
    category: "Museums",
    id: "M103",
    name: "Steenges Computing Museum",
    description:
      "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.",
    location: "103 Technology Way",
    price: 0.0,
  },
  {
    category: "Wine Tastings",
    id: "WT-101",
    name: "Hastings Winery Tours and Tastings",
    description:
      "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.",
    location: "10987 FM 1187",
    price: 12.0,
  },
  {
    category: "Wine Tastings",
    id: "WT-102",
    name: "Lone Oak Winery",
    description:
      "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.",
    location: "121 Burleson Court",
    price: 0.0,
  },
  {
    category: "Other",
    id: "OTH101",
    name: "Fire Department: Ride Along",
    description:
      "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!",
    location: "10 Redline Drive",
    price: 25.0,
  },
  {
    category: "Other",
    id: "OTH102",
    name: "Homes For Our Neighbors",
    description:
      "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!",
    location: "Call (555) 555-5555",
    price: 0.0,
  },
];

categories.unshift("Select One");
activities.unshift("Select One");

function activityDropDown() {
  const activitiesEl = document.getElementById("activites");
  for (let i = 0; i < categories.length; i++) {
    let optionEl = document.createElement("option");
    const categoriesEl = categories[i];
    optionEl.textContent = categoriesEl;
    activitiesEl.appendChild(optionEl);
  }
}
activityDropDown();

const table = document.getElementById("activitiesTable")

activities.forEach((activity) => {
    buildActivitiesRow(table, activity)
})

function buildActivitiesRow(myTable, myDetails){
    const row = myTable.insertRow(-1);

    const cell1 = row.insertCell(0)
    cell1.innerHTML = myDetails.category

    const cell2 = row.insertCell(1)
    cell2.innerHTML = myDetails.id

    const cell3 = row.insertCell(2)
    cell3.innerHTML = myDetails.name

    const cell4 = row.insertCell(3)
    cell4.innerHTML = myDetails.description

    const cell5 = row.insertCell(4)
    cell5.innerHTML = myDetails.location
    
    const cell6 = row.insertCell(5)
    cell5.innerHTML = myDetails.price
}

const activitiesEl = document.getElementById("activites");
activitiesEl.onchange = getActivitiesDetailChanged;

function getActivitiesDetailChanged(){
    const activitiesEl = document.getElementById("activites");
    const activitiesElValue = activitiesEl.value;

    const table = document.getElementById("activitiesTable")
    const activitesRow = table.querySelectorAll('row')
    Array.from(table).forEach((row) => {
        tableDiv.removeChild(row)
    })
  
    const matchingActivities = activities.filter((activity) => activity.category == activitiesElValue)
    matchingActivities.forEach((activity =>{
        buildActivitiesRow(table, activity)
    }))
}


//ben's demo

//.addEventListener('change', () => {

//})



// function getActivitiesDetailChanged() {

//   for (let i = 0; i < activities.length; i++) {
//     if (activitiesElValue == activities[i].category) {
//       let optionEl = document.createElement("option");
//       optionEl.textContent = activities[i].name;
//       displayDetailsEl.appendChild(optionEl);
//     }
//   }
// }

// const displayDetailsEl = document.getElementById("details");
// displayDetailsEl.onchange = getDetailsChanged;

// function getDetailsChanged() {
//   const displayDetailsEl = document.getElementById("details");
//   const displayDetailsElValue = displayDetailsEl.value;

//   let selectedName;
//   let selectedDescription;
//   let selectedLocation;
//   let selectedPrice;
//   for (let i = 0; i < activities.length; i++) {
//     if (displayDetailsElValue == activities[i].name) {
//       selectedName = activities[i].name;
//       selectedDescription = activities[i].description;
//       selectedLocation = activities[i].location;
//       selectedPrice = activities[i].price;
//     }
//   }
//   const messageEl1 = document.getElementById("activityName");
//   messageEl1.innerHTML = selectedName;

//   const messageEl2 = document.getElementById("activityDescription");
//   messageEl2.innerHTML = selectedDescription;

//   const messageEl3 = document.getElementById("location");
//   messageEl3.innerHTML = selectedLocation;

//   const messageEl4 = document.getElementById("price");
//   messageEl4.innerHTML = `$${selectedPrice.toFixed(2)}`;
// }

// function getForm() {
//   const form = document.getElementById("form");

//   const selectedPrice = activities.price;

//   if (selectedPrice > "0.00") {
//     form.style.display = "block";
//   } else {
//     form.style.display = "none";
//   }
// }

// getForm();