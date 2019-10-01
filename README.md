
# Experimentación Disponibilidad 

### Descripción:
Verificación de la capacidad del POS para continuar operando offline

### Propósito:
Verificar la capacidad del POS Web para continuar almacenando transacciones localmente mientras se encuentra trabajando en modo offline.

### Resultados esperados
El POS Web debe ser capaz de almacenar hasta 100.000 transacciones localmente

### Recursos
- Servidor HTTP
- Simulador de transacciones

### Resultados encontrados
Realizando la prueba de verificar el almacenamiento de 100.000 registros offline, la solución planteada guarda todos los registros sin problemas.

### Acciones a seguir
- Es importante tener en cuenta que el almacenamiento de estos datos tomo un tiempo de alrededor de 5 a 7 minutos.
- Los tamaños de los datos almacenados tendrán diferentes tamaños a los especificados en la prueba, esto debe tenerse en cuenta en otro tipo de pruebas.
- Posterior a esta prueba se hizo una prueba de almacenar 500.000 registros en la base de datos, la prueba fue exitosa pero los tiempos de registro de los datos subieron considerablemente ya que la prueba tomo alrededor 40 minutos.
