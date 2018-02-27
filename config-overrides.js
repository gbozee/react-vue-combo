function rewireVueJS(config, env) {
  // console.log(JSON.stringify(config.module.rules, null, 2));
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-loader'
  });
  // config.vue = {
  //   loaders: {
  //     js: 'babel'
  //   }
  // }
  config.resolve = {
    alias: {
      vue: "vue/dist/vue.js"
    }
  };

  return config;
}

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config = rewireVueJS(config, env);
  return config;
};
