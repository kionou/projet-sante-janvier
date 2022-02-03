 let monde11 = document.querySelector('.monde11');
 let monde222 = document.querySelector('.monde222');
 let search = document.querySelector('input');
//  console.log(search);




 
fetch(`https://disease.sh/v3/covid-19/all
`)
.then(res => res.json())
.then(word => {
    console.log(word);

    monde11.innerHTML = `
    
     <div class="row">
                    <div class="col-12 ">
                      <div class="jumbotron rouge ">
                                <p class="text-center">${word.cases} <br>Cas confirmés au total</p>
                                
                      </div>
                    </div>
                    <div class="col-12 ">
                      <div class="jumbotron orange ">
                        <p class="text-center">${word.active} <br> Cas actifs</p>
                        
                      </div>
                    </div>
                    <div class="col-12 ">
                      <div class="jumbotron vert ">
                        <p class="text-center">${word.recovered} <br> Cas guéris</p>
                        
                      </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                      <div class="jumbotron noir ">
                        <p class="text-center">${word.deaths} <br>Décès </p>
                       
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="jumbotron bleu ">
                        <p class="text-center">${word.tests} <br> Nombre total de tests</p>
                       
                      </div>
                    </div>

                    <div class="col-12 ">
                      <div class="jumbotron bleu">
                        <p class="text-center">${word.affectedCountries} <br> Pays affectés<p>
                         
                      </div>
                    </div>
                </div>

    `
})

let recherche = '';

const cherche = async()  => {
  monde = await fetch(`https://disease.sh/v3/covid-19/countries/${recherche}`)
  .then(res => res.json())
  return monde;

}

async function affiche(){
  country = await cherche()
  console.log(country);


   for (let i = 0; i < country.length; i++) {
        const element = country[i];
        monde222.innerHTML +=  ` 
                        
                        <td class="text-center" data-label="pays">${ country[i].country}</td>
                        <td class="text-center" data-label="cas confirmes">${ country[i].cases}</td>
                        <td class="text-center" data-label="guerri">${ country[i].recovered}</td>
                        <td class="text-center" data-label="morts">${ country[i].deaths}</td>
                        <td class="text-center" data-label="cas actifs">${ country[i].active}</td>
                        <td class="text-center" data-label="tests ">${ country[i].tests}</td>
        
        
        `        
    }
}
affiche();

  

search.addEventListener('input' , (e)   =>{
    e.preventDefault();
    recherche = e.target.value


async function affichepays(){
  country = await cherche()
  console.log(country);

        monde222.innerHTML ="";
        monde222.innerHTML +=  ` 
                        
                        <td class="text-center" data-label="pays">${ country.country}</td>
                        <td class="text-center" data-label="cas confirmes">${ country.cases}</td>
                        <td class="text-center" data-label="guerri">${ country.recovered}</td>
                        <td class="text-center" data-label="morts">${ country.deaths}</td>
                        <td class="text-center" data-label="cas actifs">${ country.active}</td>
                        <td class="text-center" data-label="tests ">${ country.tests}</td>
        
        
        `        
}
affichepays();



if (search === "") {
  console.log(search);
  
}

});

