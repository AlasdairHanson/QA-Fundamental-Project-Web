const createForm = document.getElementById("createForm");
const listOutput = document.getElementById("readDiv");
const updateCard = document.getElementById("updateForm");
const priceTotal = document.getElementById("totalPrice");

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
                
                //Spacer-------------------------------------------------
                const spacer = document.createElement("br");
                listOutput.appendChild(spacer);

            });

            //Total Price---------------------------------------
            let total = 0;
            arrayOfGames.forEach(function(game) {
                total += game.gamePrice;
            });
            priceTotal.innerText = "Total: £" + total;

        }).catch(error => console.error(error));
}

renderGames();

function deleteGame(id) {
    fetch("http://localhost:8081/deleteGame/" + id, {
        method: "DELETE"
    }).then(response => {
        console.log(response);
        renderGames();
    }).catch(error => console.error(error));
}

function updateGame(id) {

    const card = document.createElement("div");
    card.className = "update-card";
    updateCard.appendChild(card);

    const cardBody = document.createElement("div");
    cardBody.className = "update-body";
    card.appendChild(cardBody);

    const titleUpdate = document.createElement("input");
    titleUpdate.className = "update-input";
    titleUpdate.placeholder = "New Title..";
    cardBody.appendChild(titleUpdate);

    const priceUpdate = document.createElement("input");
    priceUpdate.className = "update-input";
    priceUpdate.placeholder = "New £..";
    cardBody.appendChild(priceUpdate);

    const updateButton = document.createElement("button")
    updateButton.className = "button-update";
    updateButton.innerText = "Save Changes";
    updateButton.addEventListener("click", function() {

        const data = {
        gameTitle: titleUpdate.value,
        gamePrice: priceUpdate.value
    }

    fetch("http://localhost:8081/updateGame/" + id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': "application/json"
        }
    }).then(response => {
        console.log(response);
        renderGames();
    }).catch(error => console.error(error));
    })

    cardBody.appendChild(updateButton);    
}
