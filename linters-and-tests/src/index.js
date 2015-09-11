import angular from 'angular';
import HelloController from './hello.controller';

const hello = angular.module('hello', []);

hello.controller('HelloController', HelloController);

export default hello;
