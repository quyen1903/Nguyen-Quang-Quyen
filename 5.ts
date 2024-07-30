function time(time: string): string{
    let [hour, minute] = time.split(':').map(Number)

    if(hour >=24 || hour < 0 || minute < 0 || minute > 59){
        return ('hour must be positive and smaller 24, minute must be positive and smaller 60')
     }
    if (hour === 12){
        return (`12:${minute}PM`)
    }

    if (hour === 0){
        return (`12:${minute}AM`)
    }
    if (hour > 12) {
        hour -=12
        return (`${hour}:${minute}PM`)
    }


    return (`${hour}:${minute}AM`)
}

console.log(time('0:30'));