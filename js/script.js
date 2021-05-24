    let showData;

    const $characterName = $('#characterName');
    const $status = $('#status');
    const $species = $('#species');
    const $origin = $('#origin');

    function render() {
        $characterName.text(showData['results'][0]['name']);
        $status.text(showData['results'][0]['species']);
        $species.text(showData['results'][0]['status']);
        $origin.text(showData['results'][0]['origin']['name']);


    };

    function handleGetData(event) {
        event.preventDefault();
        const $searchCharacter = $('input#search').val();

        $.ajax ({
            url: `https://rickandmortyapi.com/api/character`
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


