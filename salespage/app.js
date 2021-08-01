// uses a FACTORY to create 5 stores with varying data. each store has its own locale and the data will populate the table rows.
// the table itself is generated dynamically in this .JS file
 




// lets create some elements
let mainEl = document.getElementById('themain'); //get the main element

// create the table 
let tableEl = document.createElement('table'); 


let countRaw=1;
// append table to the main section
mainEl.appendChild(tableEl);

// function to create the table rows and headers dynamically
let tableH = function(){
    let tr = document.createElement('tr')
    tableEl.appendChild(tr)
    let th1 = document.createElement('th')
    tr.appendChild(th1)
    th1.textContent = ' '
    for(let i=0 ; i < hourArr.length; i++){
    let th2 = document.createElement('th')
    tr.appendChild(th2)
    th2.textContent = hourArr[i]
    
} }

// the data for our cookie factory

// let allStores = ['seattle', 'tokyo', 'dubai', 'paris', 'lima']


// array where the totals will be stored
let totArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// array to store the times pf operations
let hourArr = ['6:00am:','7:00am:','8:00am:','9:00am:','10:00am:','11:00am:','12:00pm:','1:00pm:','2:00pm:','3:00pm:','4:00pm:','5:00pm:','6:00pm:','7:00pm:','Daily Total:'];

// create thestore factory and give it some properties
function Stores(location,maximum,minimum,avg){
    this.locFac = location; //Factory name

    this.maxHoCu = maximum; //max customers per hour

    this.minHoCu = minimum; //minimum customers per hour

    this.avgCookieCu = avg; //average cookie sold

    this.cookiePerHo = []; //array to store average cookie sold per hour
    
    this.total = 0;
 
}
// function pushing daily cookie data to avg cookies per hour
let nt1=0 , nt2=0;
Stores.prototype.pushing = function(){
    let a = 0 , b = 0;
    for( let i = 0 ; i < hourArr.length ; i++){
        
       b = b + a;
       a = Math.floor(getRandomInt(this.minHoCu, this.maxHoCu + 1) * this.avgCookieCu); //get a random cookie number
       
       if (i < hourArr.length - 1 ){ 
           this.cookiePerHo.push(a);
           totArr[i]+=this.cookiePerHo[i]
           
     
   }else if (i === hourArr.length - 1){ 
      
       this.cookiePerHo.push(b);
       totArr[i]+=this.cookiePerHo[i]
 }
}}
// function creating the table  dynamically
Stores.prototype.render = function(){

    countRaw++;

 let trEl = document.createElement('tr') //create the table rows

 tableEl.appendChild(trEl) //append to the table

 let td1 = document.createElement('td') //create the table data or cells

 trEl.appendChild(td1) //append to the rows

 td1.textContent = this.locFac
// looping through cookiePerho length to inject data in the cells
 for (let i = 0 ; i < seattle.cookiePerHo.length ; i++){

 let td2 = document.createElement('td')

 trEl.appendChild(td2)

 td2.textContent = this.cookiePerHo[i]
}}
// function to get a random number of customers
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
//call our methods and insert data to the table 
  tableH();
  let seattle = new Stores ('seattle',65,23,6.3)
  seattle.pushing();
  seattle.render();
  let tokyo = new Stores ('tokyo',24,3,1.2)
  tokyo.pushing();
  tokyo.render();
  let dubai = new Stores ('dubai',38,11,3.7)
  dubai.pushing();
  dubai.render();
  let paris = new Stores ('paris',38,20,2.3)
  paris.pushing();
  paris.render();
  let lima = new Stores ('lima',16,2,4.6)
  lima.pushing();
  lima.render();
  // 
  function tableF(){
    let a=0;
    let tr = document.createElement('tr')
    tableEl.appendChild(tr)
    let th1 = document.createElement('th')
    tr.appendChild(th1)
    th1.textContent = 'Totals'
    for ( let i = 0; i <totArr.length ; i++){
        
        let th2 = document.createElement('th')
        tr.appendChild(th2)
        th2.textContent = totArr[i];
    }
} 
tableF()

 
  let stores = document.getElementById('mystores')
  stores.addEventListener('submit',storesCreator)
  function storesCreator(event){
  event.preventDefault()
  let storeLocation = event.target.locfac.value;
//   console.log(event.target.locfac.value)
  let maxCH = event.target.maxCH.value;
  maxCH = parseInt(maxCH)
  let minCH = event.target.minCH.value;
  minCH = parseInt(minCH)
  let avgCC = event.target.avgCC.value;
  avgCC = parseFloat(avgCC)
  
  let newStore = new Stores(storeLocation, maxCH, minCH,avgCC);
  tableEl.deleteRow(countRaw);
  newStore.pushing()
  newStore.render()
  tableF()
} 
