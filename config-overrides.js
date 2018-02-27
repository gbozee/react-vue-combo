const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
function rewireVueJS(config, env) {
  let rules = config.module.rules[1].oneOf;
  let vueConfig = {
    test: /\.vue$/,
    loader: "vue-loader",
    // options: {
    //   extractCSS: true
    // }
  };
  rules = [vueConfig].concat(rules)
  // rules.push(vueConfig);
  config.module.rules[1].oneOf = rules;
  // console.log(JSON.stringify(config.module.rules[1], null, 2));
  // config.module.rules = [...config.module.rules, ]
  // config.module.rules.push(vueConfig);
  // config.vue = {
  //   loaders: {
  //     js: 'babel'
  //   }
  // }
  let extensions = config.resolve.extensions;
  let aliases = config.resolve.alias;
  extensions.push(".vue");
  aliases = Object.assign(aliases, {
    vue$: "vue/dist/vue.esm.js",
    "@": resolve("src")
    // vue: "vue/dist/vue.js"
  });
  config.resolve = Object.assign({}, config.resolve, {
    extensions: extensions,
    alias: aliases
  });
  // console.log(JSON.stringify(config.resolve, null, 2));
  // config.resolve = {
  //   extensions: [".js", ".vue", ".json"],
  //   alias: {
  //     vue$: "vue/dist/vue.esm.js",
  //     "@": resolve("src")
  //     // vue: "vue/dist/vue.js"
  //   }
  // };

  return config;
}

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config = rewireVueJS(config, env);
  return config;
};
