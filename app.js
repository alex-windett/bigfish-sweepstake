$(document).ready( _ => {

    let teams, fishs
    const teamsList = 'teams'
    const fishsList = 'fishs'
    const drawnTeams = 'drawnTeams'
    const drawnFishs = 'drawnFishs'

    $('#shuffleMessage').hide()
    $('#draw').hide()

    teams = [
        "Albania",
        "Austria",
        "Belgium",
        "Croatia",
        "Czech Republic",
        "England",
        "France",
        "Germany",
        "Hungary",
        "Iceland",
        "Italy",
        "Northern",
        "Poland",
        "Portugal",
        "Republic of Ireland",
        "Romania",
        "Russia",
        "Slovakia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Turkey",
        "Ukraine",
        "Wales",
    ]

    fishs = [
        "Alex",
        "Stephi",
        "Natalie",
        "Vicki",
        "Emily W",
        "Will",
        "Lewis",
        "Caitlin",
        "Michaely",
        "Scott",
        "Olivia",
        "Hannah",
        "Aga",
        "Sally",
        "Rob",
    ]

    function printObj(arr, htmlTargetID) {
        const target = $(`#${htmlTargetID}`)
        let items = []

        for (var i = 0; i < arr.length; i++) {
            items += `<li class="list-group-item">${i + 1}. ${arr[i]}</li>`
        }

        target.append(items)
    }

    function shuffle(array) {
        let rand, i = -1,
        length = array.length,
        result = Array(length);
        while (++i < length) {
            rand = Math.floor(Math.random() * (i + 1))
            result[i] = result[rand]
            result[rand] = array[i]
        }
        return result
    }

    function clearList(id) {
        $(`#${id}`).find('li').remove()
    }

    printObj(fishs, fishsList)
    printObj(teams, teamsList)

    $('#shuffle').click( _ => {
        $('#draw').show()
        clearList(fishsList)
        clearList(teamsList)

        teams = shuffle(teams)
        fishs = shuffle(fishs)

        printObj(fishs, fishsList)
        printObj(teams, teamsList)

        $('')
    })

    $('#draw').click( _ => {

        clearList(drawnTeams)
        clearList(drawnFishs)

        $('#shuffleMessage').show()

        setTimeout(function(){

            teams = shuffle(teams)
            printObj(teams, 'drawnTeams')

            const target = $(`#drawnFishs`)
            let toBeDrawnFishs = []

            fishs = shuffle(fishs)

            $('#shuffleMessage').hide()

            for (var i = 0; i < fishs.length; i++) {
                toBeDrawnFishs.push(`<li class="list-group-item">${i + 1}. ${fishs[i]}</li>`)
            }

            target.append(toBeDrawnFishs)

            var elementArray = $('#drawnFishs li')

            $(elementArray).hide().each(function(i) {
                $(this).delay(i * 1000).fadeIn(1500)
            })
        }, 2000)
    })
})
