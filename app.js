const { inquirerMenu, leerInput, pausa } = require('./helpers/inquirer');
const { sumar, restar, multiplicar, dividir } = require('./calculator');
const { guardarDB } = require('./helpers/guardarArchivo');

const main = async () => {
  let opt = '';
  let resultado = [];

  do {
    // Imprimir el Menú
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        // Sumar
        const sum1 = await leerInput('Primer Valor:');
        const sum2 = await leerInput('Segundo Valor:');
        const resultSum = sumar(Number(sum1), Number(sum2));
        console.log();
        console.log('El resultado de la suma es: ', resultSum);
        resultado.push({
          type: 'Suma',
          result: resultSum,
        });
        break;

      case '2':
        // Restar
        const rest1 = await leerInput('Primer Valor:');
        const rest2 = await leerInput('Segundo Valor:');
        const resultRest = restar(Number(rest1), Number(rest2));
        console.log();
        console.log('El resultado de la resta es: ', resultRest);

        resultado.push({
          type: 'Resta',
          result: resultRest,
        });
        break;

      case '3':
        // Multiplicar
        const mult1 = await leerInput('Primer Valor:');
        const mult2 = await leerInput('Segundo Valor:');
        const resultMulti = multiplicar(Number(mult1), Number(mult2));
        console.log();
        console.log('El resultado de la multiplicación es: ', resultMulti);

        resultado.push({
          type: 'Multiplicar',
          result: resultMulti,
        });
        break;

      case '4':
        // Dividir
        const div1 = await leerInput('Primer Valor:');
        const div2 = await leerInput('Segundo Valor:');
        const resultDiv = dividir(Number(div1), Number(div2));
        console.log();
        if (!dividir(Number(div1), Number(div2))) {
          console.log('¡Oops! Resultado indeterminado');
        } else {
          console.log('El resultado de la división es: ', resultDiv);

          resultado.push({
            type: 'Dividir',
            result: resultDiv,
          });
        }

        break;
    }

    // Guardar en DB
    guardarDB(resultado);

    if (opt !== '0') await pausa();
  } while (opt !== '0');
};

main();
