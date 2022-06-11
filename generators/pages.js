module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "application controller",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "name",
        message: "page name?"
      }
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/layouts/{{pascalCase name}}/index.tsx",
        templateFile: "../templates/pages/index.tsx.hbs"
      },
      {
        type: "add",
        path: "../src/layouts/{{pascalCase name}}/styles.module.scss",
        templateFile: "../templates/pages/styles.module.scss.hbs"
      },
      {
        type: "add",
        path: "../src/layouts/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "../templates/pages/stories.tsx.hbs"
      }
    ]
  });
};
