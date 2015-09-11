import angular from 'angular';
import HelloController from './hello.controller';

describe('Hello Controller', () => {
  let controller;

  beforeEach(() => {
    angular.module('test', [])
      .controller('Controller', HelloController);
  });

  beforeEach(angular.mock.module('test'));

  beforeEach(angular.mock.inject($injector => {
    controller = $injector.get('$controller')('Controller');
  }));

  it('should have `hello` property', () => {
    expect(controller.hello).toEqual('Hello World!');
  });

  it('should update `hello` property', () => {
    controller.hello = 'Guys';
    expect(controller.hello).toEqual('Hello Guys!');
  });

  it('should not update `hello` property', () => {
    controller.hello = 123;
    expect(controller.hello).toEqual('Hello World!');
  });
});
