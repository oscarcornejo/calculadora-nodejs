const { inquirerMenu, leerInput, pausa } = require('./helpers/inquirer');
const { sumar, restar, multiplicar, dividir } = require('./calculator');

const main = async () => {
  let opt = '';

  do {
    // Imprimir el Menú
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        // Sumar
        const sum1 = await leerInput('Primer Valor:');
        const sum2 = await leerInput('Segundo Valor:');
        console.log();
        console.log('El resultado de la suma es: ', sumar(Number(sum1), Number(sum2)));
        break;

      case '2':
        // Restar
        const rest1 = await leerInput('Primer Valor:');
        const rest2 = await leerInput('Segundo Valor:');
        console.log();
        console.log('El resultado de la resta es: ', restar(Number(rest1), Number(rest2)));
        break;

      case '3':
        // Multiplicar
        const mult1 = await leerInput('Primer Valor:');
        const mult2 = await leerInput('Segundo Valor:');
        console.log();
        console.log('El resultado de la multiplicación es: ', multiplicar(Number(mult1), Number(mult2)));
        break;

      case '4':
        // Dividir
        const div1 = await leerInput('Primer Valor:');
        const div2 = await leerInput('Segundo Valor:');
        console.log();
        if (!dividir(Number(div1), Number(div2))) {
          console.log('¡Oops! Resultado indeterminado');
        } else {
          console.log('El resultado de la división es: ', dividir(Number(div1), Number(div2)));
        }
        break;
    }

    // TODO: Guardar en DB
    // guardarDB(resultado);

    if (opt !== '0') await pausa();
  } while (opt !== '0');
};

main();
