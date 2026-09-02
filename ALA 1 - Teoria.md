# **Aplicando lo Aprendido 1** 

## **Integrantes:** 

López Pochetti Ezequiel López Pochetti Rodrigo Scibilia Belén 

## **Ejercicio 1:** 

### **Parte A:** 

1. Algunas de las reglas escritas de JavaScript son por ejemplo: 

   - a. Tipado dinámico y débil: las variables no tienen tipo fijo y el lenguaje realiza conversiones explícitas e implícitas automáticas. 

   - b. Sintaxis de tipo C: uso de llaves “ { } “ para abrir y cerrar bloques. 

   - c. Importación de librerías. 

   - d. Basado en prototipos: la herencia se realiza enlazando objetos a otros objetos (cadena de prototipos), no mediante clases tradicionales. 

   - e. Variables flexibles: no necesitas decirle al lenguaje si guardas un número o un texto. Una variable puede tener primero un dato de tipo entero y luego guardar un string sin problemas. 

2. Según la creencia de los profesionales se considera mejor a otros lenguajes por: 

   - a. Flexibilidad de las funciones: permite pasar de programación orientada a objetos a una programación funcional con extrema facilidad y expresividad. 

   - b. El uso del estándar JSON: la notación de objetos de JS se convirtió en el formato estándar universal para el intercambio de datos en la web. 

   - c. Funciona en todos lados: es el único lenguaje que entiende cualquier navegador de internet. 

### **Parte B:** 

1. Si, está completamente formalizado por el estándar ECMAScript (ECMA-262). Sin embargo, su semántica tiene conductas permisivas e intuitivamente “raras”. Además si cuenta con documentación oficial, está la mantiene la ECMA International. Para desarrolladores, la referencia estándar de facto la mantiene la comunidad en MDN Web Docs (Mozilla). 

2. Es comprobable, pero con limitaciones en el tiempo de escritura. Al ser un lenguaje interpretado y de tipado dinámico, la mayoría de los errores se descubren durante la ejecución y no al momento de compilar. Para verificar el 

código antes de ejecutarlo se recurre a herramientas externas como linters o pruebas unitarias automatizadas como Jest o Vitest. 

3. La confiabilidad de JS es moderada o incluso baja por diseño, ya que fue pensado para “no romperse fácilmente” en la web, por lo que intenta corregir errores silenciosamente en lugar de detener la ejecución. 

4. Es bajo, ya que la ortogonalidad exige que pocas reglas combinables generen resultados uniformes y predecibles. Combinar operadores o tipos produce comportamientos arbitrarios. 

5. Consistencia y Uniformidad: es inconsistente en varios aspectos. Conserva decisiones de diseño antiguas por compatibilidad hacia atrás con la web, como las declaraciones de variables, operadores de igualdad, etc. 

6. Extensibilidad: no permite modificar la sintaxis base ni sobrecargar operadores nativos, pero es altamente extensible mediante librerías, módulos y la adición de funciones al entorno global. Subconjuntos: “use strict” es un subconjunto nativo de  JS que elimina la posibilidad de que hayan comportamientos inseguros, como el uso de variables no declaradas. 

   - “typescript” añade la posibilidad de darle un comportamiento estático a las variables, de esta forma el sistema nos informa de los errores mientras que si no definimos el tipo de dato, solo podríamos darnos cuenta a la hora de ejecutar la aplicación. 

7. Transportabilidad (portabilidad): Es muy alta, el código escrito en JS es virtualmente ejecutable en cualquier plataforma, sistema operativo o arquitectura hardware sin necesidad de recompilar. Solo requiere un entorno de ejecución compatible con la especificación ECMAScript, como cualquier navegador web moderno o un motor de servicio como Node.js. 

