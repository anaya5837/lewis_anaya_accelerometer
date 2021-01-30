while (true) {
    console.log(input.acceleration(Dimension.X))
    if (input.acceleration(Dimension.X) < 0) {
        light.setAll(light.rgb(100, 0, 100))
    } else if (input.acceleration(Dimension.X) > 100) {
        light.setAll(light.rgb(0, 100, 100))
    } else {
        light.setAll(light.rgb(0, 0, 0))
    }
    
}
