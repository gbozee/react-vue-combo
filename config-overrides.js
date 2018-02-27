function rewireVueJS(config, env) {
  // config.module.loaders.push({
  //   test: /\.vue$/,
  //   loader: 'vue'
  // });
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
