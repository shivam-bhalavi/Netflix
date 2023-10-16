let movies =[
                    {
                                        name:"Avengers Endgame",
                                        poster:"https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg",
                                        rating:8.7
                      },
                      {
                        name:"Spider Man",
                        poster:"https://m.media-amazon.com/images/I/61-rozyeQQL._AC_UF1000,1000_QL80_.jpg",
                        rating:9.1
                      },

                      {
                                        name:"Capton Marvel",
                                        poster:"https://rukminim2.flixcart.com/image/850/1000/jst930w0/poster/k/n/2/medium-captain-marvel-j2-captain-marvel-jumbo-poster-for-room-original-imafeasgw6gkscah.jpeg?q=90",
                                        rating:9.2
                      },
                      {
                                        name:"Moon Light",
                                        poster:"https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
                                        rating:7.2
                      },
                      {
                                        name:"Bohemian Raphsody",
                                        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwxT4IHK0yp3vvOAHfnjdiGKEzc7SD2yHorA&usqp=CAU",
                                        rating:8.0
                      },
                      {
                                        name:"The Avengers",
                                        poster:"https://img.fruugo.com/product/7/41/14532417_max.jpg",
                                        rating:7.6
                      },
                      {
                                        name:"Maleficient",
                                        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_e1CupDrNmGZWChnpHlt12_lo5N77xWnPqA&usqp=CAU",
                                        rating:6.8
                      },
                      {
                                        name:"john wick",
                                        poster:"https://rukminim2.flixcart.com/image/850/1000/k0lbdzk0/poster/4/w/g/medium-john-wick-poster-for-room-office-13-inch-x-19-inch-rolled-original-imafkc6fd8mc6jga.jpeg?q=90",
                                        rating:7.9
                      },
                      {
                                     name:"kgf",
                                     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXhrXNVv_JcL0WNXn2hN2HxgHtcmRLsUA_fg&usqp=CAU",
                                    rating:9.7
                   },
                   {
                                    name:"Lio",
                                    poster:"https://static.moviecrow.com/gallery/20230616/216676-Leo%20Vijay%20Naa%20Ready%20Alter%20Ego.jpg",
                                   rating:6.9
               },
               {
                                  name:"Matrix",
                                  poster:"https://rukminim1.flixcart.com/image/850/1000/kmns7m80/poster/l/p/f/medium-the-matrix-an-american-maxi-origins-jumbo-medium-size-original-imagfgb6gx9yhwzs.jpeg?q=90",
                                  rating:8.7
              },
         {
                                name:"pathan",
                                poster:"https://m.media-amazon.com/images/I/91uzbH0vmcL.jpg",
                                rating:9.9
      },
];
function searchMovie()
{
                 let movieName  =   document.getElementById('search').value;
             if(movieName!=="")
             {
               let result = movies.filter(function(movie)
                         {
                                return movie.name.toUpperCase().includes(movieName.toUpperCase())
                         })
                       displayMovie(result);
             }
             else{
                displayMovie(movies);
             }
}
function displayMovie(data)
{                 
            document.getElementById("movies").innerHTML="";
                    let htmlString= ``;
                    for(let i=0;i<data.length;i++)
                    {
                             htmlString=htmlString+`       
                               <div class="movie">
                                     <div class="overlay">
                                                 <div class="video"></div>
                                                 <div class="details">
                                                                     <h1>${data[i].name}</h1>
                                                                     <h2>${data[i].rating}</h2>
                                                                     <P>Rani Malek.jhon,</P>
         
                                                   </div>
                                  </div>
                         
         
                                   <img class="poster"src="${data[i].poster}" alt="poster">
                            </div>  `           
                    }
                    console.log(htmlString);
                    document.getElementById("movies").innerHTML=htmlString;
}
displayMovie(movies);
