while True:
    print(input.rotation(Rotation.ROLL))
    if input.rotation(Rotation.ROLL) < 45:
        light.set_all(light.rgb(0, 0, 0))
    elif input.rotation(Rotation.ROLL) >= 45:
        light.set_all(light.rgb(250, 0, 0))