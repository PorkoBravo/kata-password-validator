# Kata password validator

En este ejercicio vamos a programar una función booleana que indica si una contraseña dada cumple con unos requisitos de fortaleza. Para que la función produzca un resultado verdadero, la contraseña debe de:

* Tener una longitud de al menos seis caracteres
* Contener algún número
* Contener alguna letra mayúscula
* Contener alguna letra minúscula
* Contener algún guion bajo


## Basic examples that I find interesting to test it:

Taking account of the requirements:
* Be at least six characters long
* Contain some number
* Contain any capital letters
* Contain any lowercase letters
* Contain any underscore

### Invalid examples:
* 1
* null
* ""
* 1Am_

###	Valid examples:
* 1Am_1A
* ___1As
* #daR1io#daR1io

# Template - Testing Sostenible con TypeScript

Plantilla base para practicar las katas del curso o para empezar un proyecto nuevo.

Incluye:
* TypeScript
* Jest
* ESLint
* Prettier
* Husky

## Instrucciones
* `npm install`
* `npm test`

Más información sobre el curso en [testingsostenible.com](https://testingsostenible.com).

![Testing Sostenible con TypeScript](cover.png)

### ESLint
[TypeScript ESLint Rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### Husky hooks
* Pre-commit: Execute npm analize (tsc + eslint --fix)
* Pre-push: Execute test
