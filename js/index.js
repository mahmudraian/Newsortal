console.log('running')

const cat_load=()=>{
    const url=`https://openapi.programming-hero.com/api/news/categories`

    fetch(url)
    .then(res=>res.json())
    .then(data=>dis_cat(data?.data))
    .catch(error => displayError())


}

const news_data=(news)=>{
    console.log(news);
}


cat_load();

    // const dis=document.getElementById('display').addEventListener('click',function(){
    //     cat_load();


    // })

    const dis_cat=(catagory)=>{
    
       console.log(catagory);

      // const id= {catagory.news_category.category_id};

    const cat_con =document.getElementById("cata_con");
    cat_con.innerHTML=` 
    <a class="display:flex"></a>
    `
        
    catagory.news_category.forEach(cat => {
    
    const cat_div= document.createElement("div");
    cat_div.classList.add('col');
    cat_div.classList.add('nai');
     cat_div.innerHTML =`
    <a onclick="fullpage(${cat.category_id})"class="navbar-brand" href="#">${cat.category_name}</a>

    
`;

//<a class="nav-link active" aria-current="page" href="#">${cat.category_name}</a>
    
  cat_con.appendChild(cat_div);
  
  
    
 });
    // }
    // document.getElementById('fullpage').addEventListener('click',function(){
       
    //     fullpage(id);
    //   })

}

const fullpage=(category_id)=>{
    togglespin(true);

const url= `https://openapi.programming-hero.com/api/news/category/0${category_id}`
console.log(url);
fetch(url)
.then(res=>res.json())
.then(data=>displaynews(data.data))
.catch(error => displayError());

}

const displaynews=(data)=>{
    console.log(data);
   

    const dataf = document.getElementById('datafound')
    dataf.innerHTML=`
    <div class="alert alert-primary" role="alert">
   <b> ${data.length} News found! <?b>
     </div>

    
    `

    const dis_news= document.getElementById('disnews');
    dis_news.innerHTML=`

  

    `

    data.forEach(nws => {

        const div_news=document.createElement('div');
    div_news.classList.add('col');

    div_news.innerHTML=`

        
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="${nws.thumbnail_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${nws.title}</h5>
                <p class="card-text">${nws.details}</p>
                <img id="atr_img" src="${nws.author.img}" class="img-fluid img-thumbnail" alt="...">
                <p class=""><b>${nws.author.name?nws.author.name: " No found"} </b></p>
                <p class="card-text">  ${nws.rating.badge}</p>
                <p class="card-text  fa-solid fa-star"> <i class="fa-regular fa-star"></i> ${nws.rating.number?nws.rating.number:"No Found"}</p>
                <p class="card-text fa-regular fa-eye"> ${nws.total_view?nws.total_view:"No Found"}</p>
               
              


                <p class="card-text"><small class="text-muted">${nws.author.published_date}</small></p>

            </div>
            </div>
        </div>
        </div>
`
    dis_news.appendChild(div_news);
    
            
    });
    togglespin(false);
   

}

const togglespin = isLoading=>{
const spinload  = document.getElementById('spin')
if(isLoading){
    spinload.classList.remove('d-none');
}
else(
spinload.classList.add('d-none')

)


}

displayError=()=>{
 console.log("vuwa");

 const errormsz =document.getElementById('error')
 errormsz.innerHTML=`
 <p>
 <strong>Please enter valid api</strong> 
</p>

 
 `

}