// let apie = document.querySelector('.api')
// let key='16908a9acc764c4c877354d843e8834b';



fetch(` https://koumoul.com/data-fair/embed/dataset/sites-de-vaccination-de-covid-19-dans-le-district-d'abidjan/thumbnails`)
.then(res => res.json())
.then(data => {
    console.log(data);
});








