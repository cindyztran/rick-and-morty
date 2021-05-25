let showData;
    const $characterName = $('#characterName');
    const $status = $('#status');
    const $species = $('#species');
    const $origin = $('#origin');
    const $img = $('#img')

    function render() {
        $img.innerHTML = showData['results'][0]['image'];
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
                render();

            },
            function(error) {
                console.log('BAD REQUEST: ', error)
            }
        );

    }
    $('form').on('submit', handleGetData);