 let cote = document.querySelector('.cas1')
 let monde11 = document.querySelector('.monde11');
 let monde222 = document.querySelector('.monde222');
 let search = document.querySelectorAll('input');
 console.log(search);


//  LOCALSTRAGE





fetch(`https://disease.sh/v3/covid-19/countries/cote%20d%27ivoire?strict=true`)
.then(res => res.json())
.then(data => {
    console.log(data);
    cote.innerHTML = `
     <div class="row">
                    <div class="col-12 col-lg-4 col-md-4">
                      <div class="jumbotron rouge shadow-lg p-3 mb-5 bg-body rounded ">
                                <p class="text-center">${data.cases} <br> Cas confirmés au total</p>
                               
                      </div>
                    </div>
                    <div class="col-12 col-lg-4 col-md-4">
                      <div class="jumbotron orange shadow-lg p-3 mb-5 bg-body rounded">
                        <p class="text-center">${data.active} <br>Cas actifs</p>
                      
                      </div>
                    </div>
                    <div class="col-12 col-lg-4 col-md-4">
                      <div class="jumbotron vert shadow-lg p-3 mb-5 bg-body rounded">
                        <p class="text-center">${data.recovered} <br>Cas guéris </p>
                      </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-lg-4 col-md-4">
                      <div class="jumbotron noir shadow-lg p-3 mb-5 bg-body rounded">
                        <p class="text-center">${data.deaths} <br>Décès </p>
                        
                      </div>
                    </div>
                    <div class="col-12 col-lg-4 col-md-4">
                      <div class="jumbotron bleu shadow-lg p-3 mb-5 bg-body rounded">
                        <p class="text-center">${data.tests} <br>Nombre total de tests</p>
                        
                      </div>
                    </div>

                    <div class="col-12 col-lg-4 col-md-4">
                      <div class="jumbotron shadow-lg p-3 mb-5 bg-body rounded">
                        <h5 class="text-center">${data.updated} <br>ggggtttttt</h5>
                       
                      </div>
                    </div>
                </div>

    `
});


fetch(`https://disease.sh/v3/covid-19/all
`)
.then(res => res.json())
.then(word => {
    console.log(word);

    monde11.innerHTML = `
    
     <div class="row">
                    <div class="col-12 ">
                      <div class="jumbotron rouge shadow-lg p-3 mb-5 bg-body rounded ">
                                <p class="text-center">${word.cases}</p>
                                <h6 class="text-center">Cas confirmés au total</h6>
                      </div>
                    </div>
                    <div class="col-12 ">
                      <div class="jumbotron orange shadow-lg p-3 mb-5 bg-body rounded">
                        <p class="text-center">${word.active}</p>
                        <h6 class="text-center">Cas actifs</h6>
                      </div>
                    </div>
                    <div class="col-12 ">
                      <div class="jumbotron vert shadow-lg p-3 mb-5 bg-body rounded">
                        <p class="text-center">${word.recovered}</p>
                        <h6 class="text-center">Cas guéris</h6>
                      </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                      <div class="jumbotron noir shadow-lg p-3 mb-5 bg-body rounded">
                        <p class="text-center">${word.deaths} <br>Décès </p>
                        <h6 class="text-center">Décès</h6>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="jumbotron bleu shadow-lg p-3 mb-5 bg-body rounded">
                        <p class="text-center">${word.tests}</p>
                        <h6 class="text-center">Nombre total de tests</h6>
                      </div>
                    </div>

                    <div class="col-12 ">
                      <div class="jumbotron shadow-lg p-3 mb-5 bg-body rounded">
                        <h5 class="text-center">${word.updated}</h5>
                         <p class="text-center">gjyjgyjyj</p>
                      </div>
                    </div>
                </div>

    `
})





fetch(`https://disease.sh/v3/covid-19/countries`)
.then(res => res.json())
.then(country => {
    console.log(country);

     for (let i = 0; i < country.length; i++) {
        const element = country[i];
        monde222.innerHTML +=  ` 
                        
                        <td class="text-center" data-label="pays">${element.country}</td>
                        <td class="text-center" data-label="cas confirmes">${element.cases}</td>
                        <td class="text-center" data-label="guerri">${element.recovered}</td>
                        <td class="text-center" data-label="morts">${element.deaths}</td>
                        <td class="text-center" data-label="cas actifs">${element.active}</td>
                        <td class="text-center" data-label="tests ">${element.tests}</td>
        
        
        `


    
 

        
    }
})


