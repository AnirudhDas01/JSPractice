let products = [];

function loadProducts() {
  const xhr= new XMLHttpRequest();

    xhr.addEventListener('load', ()=>{
      products = JSON.parse(xhr.response)
      console.log(products);
    })

  xhr.open('GET', 'https://supersimplebackend.dev');
  xhr.send();
}

loadProducts();

