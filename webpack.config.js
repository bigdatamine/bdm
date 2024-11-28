module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // Optionally exclude node_modules, or adjust if necessary
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-nullish-coalescing-operator',
            ],
          },
        },
      },
    ],
  },
  