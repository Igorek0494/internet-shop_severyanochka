import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/typesConfig';
import path from 'path';

const paths: BuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
}

export default (env: BuildEnv) => {
    
    const PORT = env.port || 3000;
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    
    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
    
    return config;
}

