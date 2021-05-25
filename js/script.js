let showData;
    const $characterName = $('#characterName');
    const $status = $('#status');
    const $species = $('#species');
    const $origin = $('#origin');
    const $img = $('#img')
    // const $cardContainer = $('#card-container')

    function render() {
        $img.attr("src",showData['results'][0]['image']);
        $characterName.text(showData['results'][0]['name']);
        $status.text(showData['results'][0]['status']);
        $species.text(showData['results'][0]['species']);
        $origin.text(showData['results'][0]['origin']['name']);


    };
    

    function handleGetData(event) {
        event.preventDefault();
        const $searchCharacter = $('input#search').val();

        $.ajax ({
        url: `https://rickandmortyapi.com/api/character/?name=${$searchCharacter}`
        })
        .then(
            function(data) {
                showData = data; 
                render(data.results);

            },
            function(error) {
                console.log('BAD REQUEST: ', error)
            }
        );

    }

    // function render(){
    //     const $img = $('#img')
    //     showData.results.forEach(i => {
    //         $img.innerHTML = $img.innerHTML + 
    //         `<img src=${i.image}></img>`
    //     });
    // }

    // function render(characters){
    //     cardContainer = document.getElementById('#card-container');
    //     characters.forEach(element => {
    //         cardContainer.innerHTML = cardContainer.innerHTML + 
    //         `<div id='character-card-${element.id}'
    //         <img src="${element.img}">
    //             <p>Name: </p>
    //             <p class="name">${element.name}</p>
    //             <p>Status: </p>
    //             <p class="status">${element.status}</p>
    //             <p>Species: </p>
    //             <p class="species">${element.species}</p>
    //             <p>Origin: </p>
    //             <p class="planet">${element.origin}</p>
    //         </div>`
    //     });
    // }

    $('form').on('submit', handleGetData);