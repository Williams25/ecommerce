module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "application controller",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name?"
      }
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "../templates/components/index.tsx.hbs"
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/styles.module.scss",
        templateFile: "../templates/components/styles.module.scss.hbs"
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "../templates/components/stories.tsx.hbs"
      }
    ]
  });
};
