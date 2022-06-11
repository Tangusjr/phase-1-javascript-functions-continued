// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
  }
  //console.log(saturdayFun());
  
  function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
  }
 
  /*function wrapAdjective(style="*"){
  return function(adjective="special"){
  return `You are ${style} ${adjective} ${style}! `
  }
  }*/

  function wrapAdjective (d = "*"){
    let result = function (a= 'a hard worker'){
       return `You are ${d}${a}${d}!`
    }
    return result
   }
  
  