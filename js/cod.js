let http = new XMLHttpRequest();

http.open('get', '/js/data.json', true);

http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status ==200){
        let kartu = JSON.parse(this.responseText);

        let output = "";

        for(let item of kartu){
            output +=`
            <div class="col-md-4">
          <div class="card mt-3">
              <div class="Healthy-Recipe align-items-center p-2 text-center">
                <a href=${item.href}>
                  <img src="${item.image}" alt="${item.title}" class="rounded" width="160">
                </a>
                  <a href=${item.href}>
                    <h5>${item.title}</h5>
                  </a>
                  <div class="m-3 info">
                      <span class="text1 d-block ">${item.description}</span>
                  </div>
              </div>

                <div class="p-3 avo-toast text-center text-white mt-3 cursor">
                  <a href=${item.title}>
                    <span class="text-uppercase">See</span>
                  </a>
                </div>
          </div>
      </div>          
            `;
        }
        document.querySelector(".kartu").innerHTML = output;
    }
}