const gymList = document.getElementById('gymList');
const searchBar = document.getElementById('search');
let gymCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = gymCharacters.filter((character) => {
        return (
            gym.name.toLowerCase().includes(searchString)
        );
    });
    displayGym(filteredGym);
});

const loadGym = async () => {
    try {
        const res = await fetch(["Gym1"; "Gym2"; "Gym3", "Gym4", "Gym5"]);
        gymCharacters = await res.json();
        displayGym(gymCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayGym = (gym) => {
    const htmlString = gym
        .map((gym) => {
            return `
            <li class="gym">
                <h2>${gym.name}</h2>
                
            </li>
        `;
        })
        .join('');
    gymList.innerHTML = htmlString;
};

loadGym();



//jQuery teste

$(#id).click(alert){
    alr
}