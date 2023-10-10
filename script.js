// your code here
function updateUrl(){
    var name = document.getElementById('name').value;
    var year = document.getElementById('year').value;
    if(name && year){
        document.getElementById('url').textContent = `https://localhost:8080/?name=${name}&year=${year}`;
    }
    else if(name){
        document.getElementById('url').textContent = `https://localhost:8080/?name=${name}`;
    }
    else if(year){
        document.getElementById('url').textContent = `https://localhost:8080/?year=${year}`;
    }
}