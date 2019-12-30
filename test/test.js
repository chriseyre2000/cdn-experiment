
var chakram = require('chakram')
var expect = chakram.expect

describe("HTTP assertions", function () {
  it("caching should work", function () {
    var response = chakram.get("http://varnish:6081/now");
    expect(response).to.have.status(200);
    
    var response2 = chakram.get("http://varnish:6081/now");
    expect(response).to.have.status(200);
    
    expect(response.body).to.eql(response2.body)

    return chakram.wait();
  });

}); 