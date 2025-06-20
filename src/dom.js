
function searchBar() {
    const weatherForm = document.getElementById('weather-form')
    weatherForm.addEventListener('submit', (e)=> {
        e.preventDefault();
    })
}

export {searchBar};