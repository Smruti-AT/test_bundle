import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  experiments: {
    outputModule: true,
  },
  entry: './index.js', 
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module',
    },
  },
  resolve: {
    extensions: ['.js'],
  },
  mode: 'development',
};
