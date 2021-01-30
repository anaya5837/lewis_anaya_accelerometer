while True:
    print(input.acceleration(Dimension.X))
    if input.acceleration(Dimension.X) < 0:
        light.set_all(light.rgb(100, 0, 100))
    elif input.acceleration(Dimension.X) > 100:
        light.set_all(light.rgb(0, 100, 100))
    else:
        light.set_all(light.rgb(0, 0, 0)) 