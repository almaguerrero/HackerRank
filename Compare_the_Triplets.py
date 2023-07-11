#Alice y Bob crearon cada uno un problema para HackerRank.
#Un revisor califica los dos desafíos, otorgando puntos en una
#escala del 1 al 100 para tres categorías: claridad del problema, originalidad y dificultad.
#La calificación del desafío de Alicia es el triplete a = (a[0], a[1], a[2]), y la calificación
#del desafío de Bob es el triplete b = (b[0], b[1], b [2]).
#La tarea es encontrar sus puntos de comparación comparando a[0] con b[0], a[1] con b[1] y a[2] con b[2].

#     Si a[i] > b[i], entonces Alice recibe 1 punto.
#     Si a[i] < b[i], Bob recibe 1 punto.
#     Si a[i] = b[i], entonces ninguna persona recibe un punto.
#Los puntos de comparación son los puntos totales que ganó una persona.
#Dados a y b, determine sus respectivos puntos de comparación.
#Ejemplo

#a = [1, 2, 3]
#b = [3, 2, 1]

#     Para los elementos *0*, Bob recibe un punto porque a[0] .
#     Para los elementos iguales a[1] y b[1], no se obtienen puntos.
#     Finalmente, para los elementos 2, a[2] > b[2], por lo que Alice recibe un punto.

#La matriz de retorno es [1, 1] con la puntuación de Alice primero y la de Bob en segundo lugar.
