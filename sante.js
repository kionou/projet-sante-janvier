 let cote = document.querySelector('.cas1')
 let monde11 = document.querySelector('.monde11');
 let monde222 = document.querySelector('.monde222')

// let key='16908a9acc764c4c877354d843e8834b';



fetch(`https://disease.sh/v3/covid-19/countries/cote%20d%27ivoire?strict=true`)
.then(res => res.json())
.then(data => {
    console.log(data);
    cote.innerHTML = `
     <div class="row ">
                    <div class=" col-lg-4 col-md-4 col-sm-12 " >
                        <div class="row w-75">
                            <div class="block2   ">
                              <div class="conff rouge" style="border: 1px solid;">
                                <div class="card-body">
                                  <h5 class="card-title">${data.cases}</h5>
                                  <p class="card-text">Cas confirmés au total</p>
                                 
                                </div>
                              </div>
                            </div>
                            <div class="block2">
                              <div class="test bleu"style="border: 1px solid;">
                                <div class="card-body">
                                  <h5 class="card-title">${data.tests}</h5>
                                  <p class="card-text">Nombre total de tests</p>
                                  
                                </div>
                              </div>
                            </div>

                          </div>
                    </div>
                    <div class=" col-lg-4 col-md-4 col-sm-12 block1">
                
                        <div class="row  w-75 ">
                            <div class="block2">
                              <div class="guerri vert" style="border: 1px solid;">
                                <div class="card-body">
                                  <h5 class="card-title">${data.recovered}</h5>
                                  <p class="card-text">Cas guéris  </p>
                                  
                                </div>
                              </div>
                            </div>
                            <div class="block2">
                              <div class=" rouge" style="border: 1px solid;">
                                <div class="card-body">
                                  <h5 class="card-title">${data.updated}</h5>
                                  <p class="card-text"></p>
                                 
                                </div>
                              </div>
                            </div>
                          </div>


                    </div>
                    <div class=" col-lg-4 col-md-4 col-sm-12 block1">
                
                        <div class="row  w-75 ">
                            <div class="block2">
                              <div class="deces noir" style="border: 1px solid;">
                                <div class="card-body">
                                  <h5 class="card-title">${data.deaths}</h5>
                                  <p class="card-text">Décès</p>
                                 
                                </div>
                              </div>
                            </div>
                            <div class="block2">
                              <div class=" actif orange" style="border: 1px solid;">
                                <div class="card-body">
                                  <h5 class="card-title">${data.active}</h5>
                                  <p class="card-text">Cas actifs</p>
                                 
                                </div>
                              </div>
                            </div>
                          </div>


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
    

 <div class="row ">
                    <div class=" col-lg-4 col-md-4 col-sm-12 " >
                        <div class="row w-75">
                            <div class="block2   ">
                              <div class="conff rouge" style="border: 1px solid;">
                                <div class="card-body">
                                  <h5 class="card-title">${word.cases}</h5>
                                  <p class="card-text">Cas confirmés au total</p>
                                 
                                </div>
                              </div>
                            </div>
                            <div class="block2">
                              <div class="test bleu"style="border: 1px solid;">
                                <div class="card-body">
                                  <h5 class="card-title">${word.tests}</h5>
                                  <p class="card-text">Nombre total de tests</p>
                                  
                                </div>
                              </div>
                            </div>

                          </div>
                    </div>
                    <div class=" col-lg-4 col-md-4 col-sm-12 block1">
                
                        <div class="row  w-75 ">
                            <div class="block2">
                              <div class="guerri vert" style="border: 1px solid;">
                                <div class="card-body">
                                  <h5 class="card-title">${word.recovered}</h5>
                                  <p class="card-text">Cas guéris  </p>
                                  
                                </div>
                              </div>
                            </div>
                           
                          </div>


                    </div>
                    <div class=" col-lg-6 col-md-6 col-sm-12 block1">
                
                        <div class="row  w-75 ">
                            <div class="block2">
                              <div class="deces noir" style="border: 1px solid;">
                                <div class="card-body">
                                  <h5 class="card-title">${word.deaths}</h5>
                                  <p class="card-text">Décès</p>
                                 
                                </div>
                              </div>
                            </div>
                            <div class="block2">
                              <div class=" actif orange" style="border: 1px solid;">
                                <div class="card-body">
                                  <h5 class="card-title">${word.active}</h5>
                                  <p class="card-text">Cas actifs</p>
                                 
                                </div>
                              </div>
                            </div>
                          </div>


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
        // monde222.innerHTML +=  ` 
        //                  <tr>
        //                     <td>${[i+1]}</td>
        //                     <td>${element.country}</td>
        //                     <td>${element.cases}</td>
        //                     <td>${element.recovered}</td>
        //                     <td>${element.deaths}</td>
        //                     <td>${element.active}</td>
        //                     <td>${element.tests}</td>
        //                 </tr>
        
        // `


    
 

        
    }
})





//  <div class="card monde3">
//                             <div class="card-body text-center">
//                                 <h5 class="card-title">${word.cases}</h5>
//                                 <p class="card-text">cars confirmes</p>
                        
//                             </div>
//                         </div>
                        
//                         <div class="card monde3">
//                             <div class="card-body text-center">
//                                 <h5 class="card-title">${word.recovered}</h5>
//                                 <p class="card-text">cars guerris</p>
                        
//                             </div>
//                         </div>
                        
//                         <div class="card monde3">
//                             <div class="card-body text-center">
//                                 <h5 class="card-title">${word.deaths}</h5>
//                                 <p class="card-text">morts</p>
                        
//                             </div>
//                         </div>
                        
//                         <div class="card monde3">
//                             <div class="card-body text-center">
//                                 <h5 class="card-title">${word.active}</h5>
//                                 <p class="card-text">cars actifs</p>
                        
//                             </div>
//                         </div>
                        
//                         <div class="card monde3">
//                             <div class="card-body text-center">
//                                 <h5 class="card-title">${word.tests}</h5>
//                                 <p class="card-text">total test</p>
                        
//                             </div>
//                         </div>
    

