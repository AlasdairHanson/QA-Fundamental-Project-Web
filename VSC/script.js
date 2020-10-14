const createForm = document.getElementById("createForm");
const listOutput = document.getElementById("readDiv");

createForm.addEventListener('submit', function (event){
    event.preventDefault();
    const data = {
        gameTitle: this.name.value,
        gamePrice: this.price.value
    }
    fetch("http://localhost:8081/createGame", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': "application/json"
        }
    }).then(response => { 
        return response.json(); 
    }).then(data => { 
        renderGames();
        this.reset();
    }).catch(error => console.log(error));
});

function renderGames() {
    fetch("http://localhost:8081/getGames")
        .then(response => response.json())
        .then(arrayOfGames => {
            console.log(arrayOfGames);
            listOutput.innerHTML = '';
            arrayOfGames.forEach(function(game) {

                const card = document.createElement("div");
                card.className = "card";
                listOutput.appendChild(card);

                const cardBody = document.createElement("div");
                cardBody.className = "card-body";
                card.appendChild(cardBody);

                const title = document.createElement("h5");
                title.className = "card-title";
                title.innerText = game.gameTitle;
                cardBody.appendChild(title);

                const price = document.createElement("p");
                price.className = "card-body";
                price.innerText = "£" + game.gamePrice;
                cardBody.appendChild(price);

                //Delete Button-----------------------------------------
                const deleteButton = document.createElement("button");
                deleteButton.className = "card-button";
                deleteButton.innerText = "Delete";
                deleteButton.addEventListener("click", function () {
                    deleteGame(game.id);
                })
                cardBody.appendChild(deleteButton);

                //Update Button------------------------------------------
                const updateButton = document.createElement("button");
                updateButton.className = "card-button";
                updateButton.innerText = "Update";
                updateButton.addEventListener("click", function () {
                    updateGame(game.id);
                })
                cardBody.appendChild(updateButton);
                
                //-------------------------------------------------------
                const spacer = document.createElement("br");
                listOutput.appendChild(spacer);
            });

        }).catch(error => console.error(error));
}

renderGames();

function deleteGame(id) {
    fetch("http://localhost:8081/deleteGame" + id, {
        method: "DELETE"
    }).then(response => {
        console.log(response);
        renderGames();
    }).catch(error => console.error(error));
}

function updateGame(){

}