import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Investigate the data above. Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
const finals2014 = fifaData.filter(function(item){
    return item['Year']===2014 && item['Stage']==='Final';
})
console.log(finals2014);
//(a) Home Team name for 2014 world cup final
console.log (finals2014[0]["Home Team Name"]);
//(b) Away Team name for 2014 world cup final
console.log(finals2014[0]["Away Team Name"]);
//(c) Home Team goals for 2014 world cup final
console.log(finals2014[0]["Home Team Goals"]);
//(d) Away Team goals for 2014 world cup final
console.log(finals2014[0]["Away Team Goals"]);
//(e) Winner of 2014 world cup final */
function returnWinner(){if (finals2014[0]['Home Team Goals']> finals2014[0]["Away Team Goals"]){
    return `${finals2014[0]["Home Team Name"]} is the winner!`
}else{
    return `${finals2014[0]["Away Team Name"]} is the winner!`
}
}

console.log(returnWinner());
/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const finalists = data.filter(function(item){
            return item.Stage === 'Final'
    });
    return finalists;
}
   
// console.log(getFinals(fifaData));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(gfCB) {
   let years =  gfCB(fifaData).map(function(item){
        return item['Year'];
    })
 return years;
}

// console.log(getYears(getFinals));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data, finalsCB) {
    // let victors= finalsCB(fif);
    let winners= finalsCB(data).map(function(item){
        if (item['Home Team Goals']> item ['Away Team Goals']){
            return item["Home Team Name"];
        } else if (item["Home Team Goals"]< item["Away Team Goals"]){
            return item["Away Team Name"]
        } 
        else if (item['Win conditions'].includes(item["Home Team Name"])){
            return item['Home Team Name']
        } else if (item['Win conditions'].includes(item["Away Team Name"])){
            return item['Away Team Name']
        } 
    });
return winners;     
}

console.log(getWinners(fifaData,getFinals));

// if(finalsCB[data]['Home Team Goals']> finalsCB[data]["Away Team Goals"]){
//     winners.push(finalsCB[data]['Home Team Name']);
// }else{
//     winners.push(finalsCB[data]['Away Team Name']);
// // }



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

// let winners=[];
// let year= getYearsCB();
// let winner= getWinnersCB();
//   winners.push(winner) ;
//   winner.map((item, i ) =>{
//       console.log(item[i]);
//   })









// winYears=[];
//         let winners= getWinnerCB(data);
//         let year= getYearsCB(data);
//         winners.forEach(function(item,index){
//             winYears.push `In ${year[index]}, ${item} won the world cup!`;
//         });
//         return winYears






    function getWinnersByYear(data,getYearsCB,getWinnerCB) {
        let winners= getWinnerCB(data,getFinals);
        let year= getYearsCB(getFinals);
        console.log(winners)
       return winners.map(function(item, index){
            return `In ${year[index]}, ${item} won the world cup!`;
        })
        
    }




    console.log(getWinnersByYear(fifaData, getYears,getWinners));



















// let winYears=[];
// let winners= getWinnerCB(data);
// let year= getYearsCB(data);
// winners.forEach(function(item,index){
//     winnYears.push `In ${year[index]}, ${item} won the world cup!`;
// });
// return winYears
// }


// victors.push(getWinner);
// years.push(getYear);
// let yearResult = years.forEach((year)=>{
//     let result = victors.map((victor)=>{
//         return `In ${year}, ${victor} won the world cup!`
//     })
//     return result;
// })
// return yearResult;
// console.log(getWinnersByYear());
// console.log(getWinnersByYear(getWinners(getFinals(fifaData)),getYears(getFinals(fifaData))));
// if(item['Home Team Goals']>item['Away Team Goals']){
    //     return `In ${item.Year}, ${item['Home Team Goals']}`
    //  } else if(item['Home Team Goals']<item['Away Team Goals']){
    //     return `In ${item.Year}, ${item['Away Team Goals']}`
    //  }

// return `In ${item.Year}, ${winner}`

// `In ${getYearsCB}, ${getWinnersCB} won the world cup!`;

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
  const homeGoals=  data.map(function(item){
      return item['Home Team Goals']
  })
 const awayGoals= data.map(function(item){
    return item['Away Team Goals']
})

const homeAvg= homeGoals.reduce(function(acc,item){
return acc+item
},0)/data.length


const awayAvg= awayGoals.reduce(function(acc,item){
    return acc+item
    },0)/data.length
    
return (homeAvg+awayAvg).toFixed(2);

}
console.log(getAverageGoals(fifaData));





/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    // getWinnersByYear,
    getAverageGoals
}


//  rrrr                rrrr
// rrrrrr              rrrrrr
// rrrrrr              rrrrrr
//  rrrr     /          rrrr
//          /
//         /
//        /
//       (______

// -----------------------------
// \                           /
//  \  ---------------------- /
//   \                       /
//    \_____________________/

        