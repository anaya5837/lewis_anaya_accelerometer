while (true) {
    console.log(input.rotation(Rotation.Roll))
    if (input.rotation(Rotation.Roll) < 45) {
        light.setAll(light.rgb(0, 0, 0))
    } else if (input.rotation(Rotation.Roll) >= 45) {
        light.setAll(light.rgb(250, 0, 0))
    }
    
}
