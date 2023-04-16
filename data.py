import random

# Definir la URL
url = ""
# Abrir el archivo de texto para escribir
with open("resultados.csv", "w") as archivo:

    # Repetir 10 veces
    for i in range(1000):
        # Generar un número aleatorio entre 1 y 800
        codigo = random.randint(1, 100)
        
        # Unir la URL con el código aleatorio
        url_codigo = url + str(codigo)
        
        # Escribir la URL con el código en el archivo de texto
        archivo.write(url_codigo + "\n")
    
    