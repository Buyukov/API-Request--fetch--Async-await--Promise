'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/////////////////////////////////////// API GA Request jo'natishning 1 usuli
//-------------------------------------------------------------------------------------------//
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/Uzbekistan`);
// request.send();

// request.addEventListener('load', function(){
//     const [data] = JSON.parse(request.responseText); // Ma'lumotni Objectga aylantirish uchun JSON.parse() ni ishlatamiz
//     console.log('Data:', data);
//     renderCountry(data);
// }); 
//-----------------------------------------------------------------------------------------//



//--------------------------- CALLBACK HELL ---------------------------------//
// const getCountryData = (countryName) => {
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
// request.send();


// // // ASYNCHRONOUS CODE 
// request.addEventListener('load', function(){
//     const [data] = JSON.parse(request.responseText); // Ma'lumotni Objectga aylantirish uchun JSON.parse() ni ishlatamiz
//     console.log('Data:', data);

//     renderCountry(data)

//     //--------------------------------------------------
//     const neighbour = data.borders?.[0];

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function(){
//         const [data2] = JSON.parse(request2.responseText)
//         console.log(data2);

//         renderCountry(data2, 'neighbour');
//     })
//   });
// };
// getCountryData('korea');
//--------------------------------------------------------------------------//


function renderCountry(data, className = '') {
    const html = `
    <article class="${className}">
   <img class="country__img" src="${data.flags.png}" />
   <div class="country__data">
       <h3 class="country__name">${data.altSpellings[1]}</h3>
       <h4 class="country__region">${data.region}</h4>
       <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} mln people</p>
       <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
       <p class="country__row"><span>💰</span>${Object.keys(data.currencies)}</p>
   </div>
   </article>`;

       countriesContainer.insertAdjacentHTML('beforeend', html);
       countriesContainer.style.opacity = 1;
};



//--------------------- PROMISES AND THE FETCH API -------------------//
// API GA Request jo'natishning 2 usuli
//  const getCountryAndNeighbour = (country) => {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then((res) => {
//             if (!res.ok) throw new Error(`Something went wrong (${res.status}). Try again!!!`)
//             return res.json();
//     })
//         .then(([data]) => { 
//             renderCountry(data); 

//             const neighbour = data.borders?.[0];

//             if(!neighbour) throw new Error('No neighbour found');

//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((res) => res.json())
//     .then(([data]) => renderCountry(data, 'neighbour'))
//     .catch((err) => {
//         countriesContainer.insertAdjacentText('beforeend', err.message)
//         countriesContainer.style.opacity = 1
//     });
// };

// btn.addEventListener('click', function(){
//     getCountryAndNeighbour('uzbekistan')
// });
//--------------------------------------------------------------------//




//--------------------------------------------------------------------------------------------------------------------//
// The first way to send a request
// const sendRequest = function(val){
// const testRequest = new XMLHttpRequest();
// testRequest.open('GET', `https://restcountries.com/v3.1/name/${val}`);
// testRequest.send();

// testRequest.addEventListener('load', function(){
//     const [data] = JSON.parse(testRequest.responseText);
//     console.log('Data:', data);
//    });
// };
// sendRequest('Usa');


// // The second way to send a request
// const fetchRequest = function(val) {
//     fetch(`https://restcountries.com/v3.1/name/${val}`).then(res => res.json()).then(data => console.log(data));
// }
// fetchRequest('usa');
//--------------------------------------------------------------------------------------------------------------------//




//------------------------------------ Coding challenge #1 -------------------------------------------//
/* Coding challenge #1 */
// const whereAmI = function(lat, long){
//     fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
//     .then((res) => { if(!res.ok) throw new Error(`Somithing went Wrong (${res.status}). Try again!`) 
//     return res.json()})
//     .then((data) => {console.log(data), console.log(`You are in ${data.country}`)})
//     .catch((err) => {console.log(`${err}`)})
// };

// whereAmI('52.508','13.381');
//----------------------------------------------------------------------------------------------------//




//------------------ lotteryPromise Experience ---------------------//
// const lotteryPromise = new Promise(function(resolve, reject){
//    console.log(`Lottery draw is happening🎰`);

//    setTimeout(function(){
//     if(Math.random() >= 0.5) {
//         resolve('You win 💰');
//     } else{
//         reject(`You lost your money🙁`);
//     };
//    }, 2000);
// });

// lotteryPromise
// .then((res) => console.log(res))
// .then((err) => console.log(err));
//------------------------------------------------------------------//



//-------------------------------------- WITHOUT CALLBACK HALL ---------------------------------//
// const await = function(second){
//     return new Promise(function(resolve){
//        setTimeout(resolve, second * 1000)
//     });
// };

// await(2)
// .then(() => {
//     console.log('I WANTED FOR 2 SECONDS')
//     return await(1)
// })
// .then(() => {
//     console.log('I WANTED FOR 2 SECONDS')
//     return await(1)
// })
// .then(() => {
//     console.log('I WANTED FOR 2 SECONDS')
//     return await(1)
// })
// .then(() => {
//     console.log('I WANTED FOR 2 SECONDS')
//     return await(1)
// })
// .then(() => {
//     console.log('I WANTED FOR 2 SECONDS')
//     return await(1)
// })
// .then(() => {
//     console.log('I WANTED FOR 2 SECONDS')
//     return await(1)
// })
// .then(() => {
//     console.log('I wanted another 1 second')
// });
//------------------------------------------------------------------------------------------------//



///////================ CODING CHALLENGE #1 ==============/////////
const getPosition = function(){
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });
};
// getPosition().then((res) => console.log(res));

// const whereAmI = function(){
//     getPosition().then((position) => {
//         const {latitude: lat, longitude: lng} = position.coords;
//         return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then((res) => {
//         if(!res.ok) throw new Error(`Problem with geolocation ${res.status}`);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data), console.log(`Your location is ${data.country}`)
//         return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//     })
//     .then(res => {
//         if(!res.ok) throw new Error(`Country not found (${res.status})`)
//         return res.json()
//     })
//     .then((data) => {
//         renderCountry(data[0])
//     })
//     .catch((err) => {console.error(`${err.message}👀`)})
//     .finally(() => countriesContainer.style.opacity = 1)
// }; 
// whereAmI();
//////////////////////////////////////////////////////////////////

 


//////========================== Async/Await =====================================//////
const whereAmI = async function(){
    try {
    const position = await getPosition()
    const {latitude: lat, longitude: lng} = position.coords;

    const res = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

    if(!res.ok) throw new Error(`Problem with geolocation ${res.status}`);

    const data = await res.json();

    const resCountry = await fetch(`https://restcountries.com/v3.1/name/${data.country}`);

    const dataCountry = await resCountry.json();
    renderCountry(dataCountry[0]);

    return `You are in ${data.city}, ${data.country}`;
    
    } catch(error){
    console.error(error)
        } finally{
            countriesContainer.style.opacity = 1
            }
}; 

btn.addEventListener('click', () => {
    whereAmI()
});

(async () => {
console.log(`1: Will get location`);
const result = whereAmI();
console.log(`2: ${await result}`);
console.log('3: Finished getting location');
})();
//-------------------------------------------------------------------------------//////




//------------------------------ Running Promises in Parallel -----------------------------------//
// const get3Countries = async function(){
//     const [c1] = await fetch(`https://restcountries.com/v3.1/name/usa`).then(res => res.json())
//     const [c2] = await fetch(`https://restcountries.com/v3.1/name/canada`).then(res => res.json())
//     const [c3] = await fetch(`https://restcountries.com/v3.1/name/germany`).then(res => res.json())
//     console.log([c1, c2, c3])
// };
// get3Countries();
//-----------------------------------------------------------------------------------------------//


//--------- .race Promise --------//
// const timeout = function(s){
//     return new Promise(function(resolved, rejected){
//        setTimeout(() => {
//         rejected(new Error(`Request took too long time`));
//        }, s * 1000);
//     });
// };

// Promise.race([
//     fetch(`https://restcountries.com/v3.1/name/Germany`).then(res => res.json()),
//     timeout(3),
// ])
//    .then((res) => console.log(res[0]))
//    .then((err) => console.log(err));
//---------------------------------------------------------//


//-------------- .allSettled ------------//
// Promise.allSettled([
//     Promise.resolve('Success'),
//     Promise.reject('Failed'),
//     Promise.resolve('Success')
// ]).then(res => console.log(res)); // .allSettled bizga hamma ma'lumotni qaytarib beraveradi fail bo'ladimi success farqi yo'q
// //----------------------------------------------------------------//



// //---------------- .all ----------------//
// Promise.all([
//     Promise.resolve('Success'),
//     Promise.reject('Failed'),
//     Promise.resolve('Success')
// ]).then(res => console.log(res)); // all da agar birorta feil bo'lib qolsa fail chiqaradi agar hammasi success bo'lsa unda success chiqaradi
// //----------------------------------------------------------------//



// //---------------- .any ----------------//
// Promise.any([
//     Promise.resolve('123'),
//     Promise.reject('456'),
//     Promise.resolve('678')
// ]).then(res => console.log(res)); // .any bizga birinchi success bo'lga ma'lumotni olib beradi any faqat success ma'lumot qidiradi agar ummuman success ma'lumot topolmasa reject fail ma'lumotni oladi
// //----------------------------------------------------------------//




// // async Function Expretionda qo'yish
// const FunctionExpretion = async function(){

// };

// // async Arrow Functionda qo'yish
// const ArrowFunction = async () => {

// };

// // async function declarationda qo'yish
// async function functionDeclaration(){

// };








