var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', ()=> {
  it('should insert the value ', ()=> {
    var from = 'Ankit';
    var text = 'Hello baby';
    var message = generateMessage(from,text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});
