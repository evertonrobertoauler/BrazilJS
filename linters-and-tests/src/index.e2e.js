describe('Hello App', function() {

  beforeAll(function() {
    browser.get('/');
  });

  it('should show text `Hello World!`', function() {
    expect(element(by.binding('ctrl.hello')).getText()).toEqual('Hello World!');
  });

  it('should update text to `Hello Guys!`', function() {
    element(by.model('field')).sendKeys('Guys');
    expect(element(by.binding('ctrl.hello')).getText()).toEqual('Hello Guys!');
  });
});
