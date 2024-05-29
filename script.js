fetch("https://api.pexels.com/v1/search?query=cane", { //passiamo a URL un oggetto
    method: "GET",
    headers: {
    "authorization": "xdWAQKHptD1vwwfzwPvFjNpkY60krQ5zuNfb9Wp5sRoHye337tTTdCbg",//api rilasciata da pexels 
    "content-type": "application/json"
  }
})

.then((response) => {
    response.json().then((pluto) => {
        pluto.photos.forEach(element => {
            var container = document.querySelector("#prova");
            container.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${element.src.original}" class="card-img-top" alt="Image">
                        <div class="card-body">
                            <p class="card-text">Descrizione dell'immagine</p>
                        </div>
                    </div>
                </div>
            `;
        });
    });
})
.catch((error) => {
    console.error('Error fetching photos:', error);
});
// .then((response) => {
//     response.json().then((pluto)=>{
//         pluto.photos.forEach(element => {
//             console.log(element.src.original)
//             var container = document.querySelector("#prova")
//             container.innerHTML += "<div><img src='" + element.src.original + "' alt=''></div>" 
           
//         });
//     })
// })


