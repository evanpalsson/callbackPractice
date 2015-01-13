

/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/

Problem #1

  //Code Here for first

var first = function(arr, callback) {
  callback(arr[0]);          
};

  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});


------------------------------------------------------------------------------------------

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

Problem #2

  //Code Here for last

var last = function(arr, callback) {
  callback(arr[0]);
};


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});


------------------------------------------------------------------------------------------

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

Problem #3

  //Code Here for multiply

var multiply = function(numOne, numTwo, callback) {
  callback(numOne * numTwo);
}

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})


------------------------------------------------------------------------------------------


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

Problem #4

  //Code Here for contains

debugger;
var contains = function(arr, str, callback) {
  for (var i = 0; i < arr.length; i++); {
    if (arr[i] === str) {                         <--- NEED HELP
      callback(true);
    }
    else {
      callback(false);
    }
  }
};


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});


------------------------------------------------------------------------------------------


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

Problem #5

    //Code Here for uniq

var uniq = function(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i]) {
      arr[i].splice(i, 1);            <--NEED HELP
    }
  }
  callback(arr);
};



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});


------------------------------------------------------------------------------------------


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

Problem #6

    //Code Here for each

var each = function(arr, callback) {
  var itemNum = 0
  for (var i = 0; i < arr.length; i++) {
      console.log(i);                     //<-- this is close
    }                                     //returns 'The item in the 0 position is Tyler'
  callback(arr[0], itemNum);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});



------------------------------------------------------------------------------------------

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

Problem #7

//code here for getUserById

var getUserById = function(obj, str, callback) {
  for (var key in obj) {
    if (key.id === str) {
      callback(key.email, key.name);
    }
  }
};

                                                                /*

var getUserById = function(arr, str, callback) {
  var user;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id === str) {
    user = arr[i];
    callback(user);
    }
  }
};

                                                                */

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
