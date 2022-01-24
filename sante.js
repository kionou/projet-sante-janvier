// let apie = document.querySelector('.api')
// let key='16908a9acc764c4c877354d843e8834b';



// fetch(`https://covid-19-statistics.p.rapidapi.com/regions`)
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// });





// https://koumoul.com/data-fair/embed/dataset/sites-de-vaccination-de-covid-19-dans-le-district-d'abidjan/thumbnails"

// https://data.gouv.ci/data-fair/api/v1/datasets/sites-de-vaccination-de-covid-19-dans-le-district-d'abidjan/

fetch("https://covid-19-fastest-update.p.rapidapi.com/summary", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-fastest-update.p.rapidapi.com",
		"x-rapidapi-key": "69110c8a4amsh0658ef5da418e7fp14727bjsnb22e39f4d02c"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});