function scuberGreetingForFeet(ride) {
  // Write your code here!
  //const ride = 400;
  if (ride <= 400) {
    return 'This one is on me!'
  } else if (ride > 2000 && ride <2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (ride > 2500) {
    return 'No can do.'
  }
}
scuberGreetingForFeet()

function ternaryCheckCity(city) {
  // Write your code here!
  
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}
ternaryCheckCity()

function switchOnCharmFromTip(tip) {
  // Write your code here!
  //const tip = 'Generous';
  switch (tip) {
    case 'generous':
      return "Thank you so much."
      break
    case 'not as generous':
      return 'Thank you.'
      break
    default:
      return 'Bye.'
  }
}
switchOnCharmFromTip()