import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD10r7IDZ3Dd0Ci-Ap0AX1QEnVi16nyDnA",
    authDomain: "expensify-621c5.firebaseapp.com",
    databaseURL: "https://expensify-621c5-default-rtdb.firebaseio.com",
    projectId: "expensify-621c5",
    storageBucket: "expensify-621c5.appspot.com",
    messagingSenderId: "256605594704",
    appId: "1:256605594704:web:8ed231529840abe8fadd55",
    measurementId: "G-Z30FSF75LM"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export {firebase, database as default};


  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });


  // database.ref('expenses')
  // .on('value', (snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //    console.log(expenses);
  // });

  // console.log("changed")
  // database.ref('expenses').push({
  //   description: 'Water Bill',
  //   notes: 'Water bill for january',
  //   amount: 43.00,
  //   createdAt: '10/02/2022'
  // });

  // database.ref('expenses').push({
  //   description: 'PTCL Bill',
  //   notes: 'Water bill for january',
  //   amount: 21.00,
  //   createdAt: '11/02/2022'
  // });
  // const data = database.ref().on(('value'), (snapshot) => {
  //   const dataset = snapshot.val();
  //   console.log(`${dataset.name} is a ${dataset.job.title} at ${dataset.job.company}`);
  // }, (e) => {
  //   console.log('Error with data fetching', e);
  // })


  // setTimeout( () => {
  //   database.ref().update({
  //   'job/title': 'Senior Software Engineer'
  // }) }, 3500);
  //console.log(data);
  // database.ref().set({
  //   name: 'Khizar',
  //   streeLevel: 5,
  //   job: {
  //     title: "Software Engineer",
  //     company: "Afiniti"
  //   },
  //   age: 24,
  //   location: {
  //       city: 'Chakdara',
  //       country: 'Pakistan'
  //   } 
  // }).then(() => {
  //   console.log("Successfull");
  // }).catch((e) => {
  //   console.log("Failed", e);
  // });


  // database.ref().update({
  //   streeLevel: 9,
  //   'job/company': 'Systems Limited',
  //   'location/city': 'Islamabad'
  // }).then(() => {
  //   console.log("Data Changed!");
  // })

  


