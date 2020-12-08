var espacio = document.getElementById('espacio_datos');

get_datos();

function get_datos() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        espacio.innerHTML ='';

        data.forEach(element => {
            att_city = element['address']['city'];
            att_street = element['address']['street'];
            att_name = element['company']['name'];
            espacio.innerHTML +=`
            
            <div class="col mb-4">
                <div class="card border-success mb-3" style="max-width: 18rem;">
                    <div class="card-header">${att_name}</div>
                    <div class="card-body text-success">
                        <p>Ciudad: ${att_city}</p>
                        <p>Calle: ${att_street}</p>
                    </div>
                </div>
            </div>`
        });
    });
}