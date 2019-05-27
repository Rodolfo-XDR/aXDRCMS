import KERNEL from './KERNEL-XDRCMS';
import config from './config.json';

global.__base           = __dirname;
global.__config         = config;

new KERNEL;