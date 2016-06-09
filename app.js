$(document).ready( _ => {

    let teams, fishs
    const teamsList     = 'teams'
    const fishsList     = 'fishs'
    const drawnTeams    = 'drawnTeams'
    const drawnFishs    = 'drawnFishs'

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
        "Northern Ireland",
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
        {
            name: "Alex",
            team: '',
        },
        {
            name: "Stephi",
            team: '',
        },
        {
            name: "Natalie",
            team: '',
        },
        {
            name: "Vicki",
            team: '',
        },
        {
            name: "Emily W",
            team: '',
        },
        {
            name: "Will",
            team: '',
        },
        {
            name: "Lewis",
            team: '',
        },
        {
            name: "Caitlin",
            team: '',
        },
        {
            name: "Michaely",
            team: '',
        },
        {
            name: "Scott",
            team: '',
        },
        {
            name: "Olivia",
            team: '',
        },
        {
            name: "Hannah",
            team: '',
        },
        {
            name: "Aga",
            team: '',
        },
        {
            name: "Sally",
            team: '',
        },
        {
            name: "Rob",
            team: '',
        },
    ]

    function printArr(arr, htmlTargetID) {
        const target = $(`#${htmlTargetID}`)
        let items = []

        for (var i = 0; i < arr.length; i++) {
            items += `<li class="list-group-item">${i + 1}. ${arr[i]}</li>`
        }

        target.append(items)
    }

    function printObj(obj, htmlTargetID) {
        const target = $(`#${htmlTargetID}`)
        let items = []

        Object.keys(obj).forEach( i => {
            items += `<li class="list-group-item">${parseInt(i) + 1}. ${obj[i].name}</li>`
        })

        target.append(items)
    }

    function shuffle(array) {
        let rand, i = -1,
        length = array.length,
        result = Array(length)
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
    printArr(teams, teamsList)

    $('#shuffle').click( _ => {
        $('#draw').show()
        clearList(fishsList)
        clearList(teamsList)

        teams = shuffle(teams)
        fishs = shuffle(fishs)

        printObj(fishs, fishsList)
        printArr(teams, teamsList)
    })

    $('#draw').click( _ => {

        clearList(drawnTeams)
        clearList(drawnFishs)

        setTimeout(function(){
            $('#shuffleMessage').hide()
            const target        = $(`#drawnFishs`)
            let toBeDrawnFishs  = []
            teams               = shuffle(teams)
            fishs               = shuffle(fishs)

            for (var i = 0; i < fishs.length; i++) {
                fishs[i].team = teams[i]
                toBeDrawnFishs.push(`<li class="list-group-item">${i + 1}. ${fishs[i].name} <span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span> ${fishs[i].team}</li>`)
            }

            target.append(toBeDrawnFishs)

            var elementArray    = $('#drawnFishs li')

            $(elementArray).hide().each(function(i) {
                $(this).delay(i * 2000).fadeIn(1500)
            })
        }, 1000)
    })
})
