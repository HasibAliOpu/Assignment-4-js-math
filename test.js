 ///// 1st-Problem: Ana To Vori \\\\\\\\\\\\\\\\
function anaToVori(anas) {
  const vori = anas / 16;
  if(anas < 0){
  return 'Please, give some Positive Number!!'
  }
  else{
  return vori;
  }
  }
  const givingAnas = anaToVori(120);
  console.log(givingAnas);
  ///////// 2nd-problem: Panda Cost \\\\\\\\\\\
  function pandaCost(singaraQuantity,somuchaQuantity,jilapiQuantity){
  // per Food Price \\
  const perSingaraPrice = 7;
  const perSomuchaPrice = 10;
  const perJilapiPrice = 15;
  // Food Calculation \\
  const totalSingaraPrice = singaraQuantity * perSingaraPrice;
  const totalSomuchaPrice = somuchaQuantity * perSomuchaPrice;
  const totalJilapiPrice = jilapiQuantity * perJilapiPrice;
  const totalFoodPrice = totalSingaraPrice + totalSomuchaPrice + totalJilapiPrice;
  if(singaraQuantity < 0){
  return 'Please, give positive number!!'
  }
  if(somuchaQuantity < 0){
  return 'Please, give positive number!!'
  }
  if(jilapiQuantity < 0){
  return 'Please, give positive number!!'
  }
  return totalFoodPrice;
  }
  const givingFoodQuantity = pandaCost(10,-10,10);
  console.log(givingFoodQuantity);
  ///////////// 3rd Problem: PicnicBudget \\\\\\\\\\\
  function picnicBudget(people) {
  const forFirst100people = 5000;
  const forSecond100people = 4000;
  const forMoreThan200people = 3000;
  if(people < 0){
  return "Sorry Sir/Ma'am, Please give us a Positive Number , Thank you !!"
  }
  if(people > 500){
  return "Sorry Sir/Ma'am, We Can't keep more than 500 People at our Resort !!"
  }
  if(people <= 100){
  const first100PeopleCalculation = people * forFirst100people;
  return first100PeopleCalculation;
  }
  else if(people <= 200){
  const first100people = 100 * forFirst100people;
  const second100Peoplecalculation = people - 100;
  const second100person = second100Peoplecalculation * forSecond100people;
  const totalPeopleCalculation = first100people + second100person;
  return totalPeopleCalculation;
  }
  else{
  const first100people = 100 * forFirst100people;
  const second100people = 100 * forSecond100people;
  const third100Peoplecalculation = people - 200;
  const third100person = third100Peoplecalculation * forMoreThan200people;
  const totalPeopleCalculation = first100people + second100people + third100person;
  return totalPeopleCalculation;
  }
  }
  const totalPeople = picnicBudget(-501);
  console.log(totalPeople);
  //////////// 4th problem: oddFriend \\\\\\\\\\
  const friendNameArr = ['Nishat','Ahad','Shihab','Opu','Rafi','Kakoli','Sagor','Ridu','Jariya','Sobuj','Fahmid'];
  function oddFriend(names) {
  for(const name of names){
  if(name.length%2!=0){
  return name;
  }
  }
  return "The Array doesn't have any oddNames";
  }
  const givingNameArr = oddFriend(friendNameArr);
  console.log(givingNameArr);