
    //app state variable 
    let showData;

    //const variables 
    const $characterName = $('#characterName');
    const $status = $('#status');
    const $species = $('#species');
    const $origin = $('#origin');
    const $img = $('#img')


//functions

    function render() {
        $img.attr("src",showData['results'][0]['image']);
        $characterName.text(showData['results'][0]['name']);
        $status.text(showData['results'][0]['status']);
        $species.text(showData['results'][0]['species']);
        $origin.text(showData['results'][0]['origin']['name']);


    };

    function handleGetData(event) {
        //prevent page refresh
        event.preventDefault();
        const $searchCharacter = $('input#search').val();

        $.ajax ({
        url: `https://rickandmortyapi.com/api/character/?name=${$searchCharacter}`
        })
        .then(
            function(data) {
                //success
                showData = data;
                render();
               


            },
            function(error) {
                //failure 
                console.log('BAD REQUEST: ', error)
                alert('Aw geez! The character you entered does not belong to this multiverse.')
            }
        );

    }

    //event listener
    $('form').on('submit', handleGetData);
