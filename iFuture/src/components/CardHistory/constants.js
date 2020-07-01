export const turnsDate = (createdAt) => {

    let creationDate = new Date(createdAt)

    let year = creationDate.getFullYear()
    let month = JSON.stringify(creationDate.getMonth() + 1)
    if(month === '1'){
        month = 'Janeiro'
    }
    if(month === '2'){
        month = 'Fevereiro'
    }
    if(month === '3'){
        month = 'Março'
    }
    if(month === '4'){
        month = 'Abril'
    }
    if(month === '5'){
        month = 'Maio'
    }
    if(month === '6'){
        month = 'Junho'
    }
    if(month === '7'){
        month = 'Julho'
    }
    if(month === '8'){
        month = 'Agosto'
    }
    if(month === '9'){
        month = 'Setembro'
    }
    if(month === '10'){
        month = 'Outubro'
    }
    if(month === '11'){
        month = 'Novembro'
    }
    if(month === '12'){
        month = 'Dezembro'
    }

    let day = creationDate.getDate()
    if (day < 10) {
        day = '0' + day
    }

    let newDate = `${day} ${month} ${year}`

    return newDate

}