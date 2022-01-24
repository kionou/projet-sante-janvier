let apie = document.querySelector('.api')
let key='16908a9acc764c4c877354d843e8834b';


const data = async()  =>{
 covid = await  fetch(`https://covid19.mathdro.id/api`)
.then(res => res.json())
console.log(covid);
// .then(data => {
//     console.log(data);
// });
}
data();



// https://koumoul.com/data-fair/embed/dataset/sites-de-vaccination-de-covid-19-dans-le-district-d'abidjan/thumbnails"

// https://data.gouv.ci/data-fair/api/v1/datasets/sites-de-vaccination-de-covid-19-dans-le-district-d'abidjan/

