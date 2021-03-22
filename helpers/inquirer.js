const inquirer = require('inquirer');
require('colors');

const preguntas = [
  {
    type: 'list',
    name: 'opcion', // Nombre a destructurar para retornar (ver línea 25 y 27)
    message: '¿Qué operación desea realizar?',
    choices: [
      { value: '1', name: `${'1.'.green} Sumar` },
      { value: '2', name: `${'2.'.green} Restar` },
      { value: '3', name: `${'3.'.green} Multiplicar` },
      { value: '4', name: `${'4.'.green} Dividir` },
      { value: '0', name: `${'0.'.green} Salir` },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log('============================='.green);
  console.log(' Selecione una opción '.white);
  console.log('=============================\n'.green);

  const { opcion } = await inquirer.prompt(preguntas); /* Pass your questions in here */

  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'Enter'.green} para continuar`,
    },
  ];
  console.log('\n');
  await inquirer.prompt(question);
};

const leerInput = async (mensaje) => {
  //   const onlyNumber = new RegExp('^[0-9]+$');
  const onlyNumber = new RegExp('^[0-9]{1,2}([.][0-9]{1,2})?$');

  const question = [
    {
      type: 'input',
      name: 'desc',
      message: mensaje,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor';
        } else if (!onlyNumber.test(value)) {
          return 'Por favor ingrese un valor numérico';
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

const confirmar = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);

  return ok;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  confirmar,
};
