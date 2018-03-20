const frisby = require('frisby');

describe("English Wikipedia REST API", function() {
  const ENV = require("../support/env.json");
  const BASE_URL = ENV.integration.wikipediaServiceBaseUrl;
 
  describe("GET /page/summary/{title}", function() {
 
    it("should return the summary for the given page title", function(done) {
      frisby
        .get(BASE_URL + "/page/summary/Wolverine_(character)")
        .then(function(response) {
          expect(response.status).toBe(200);
          expect(response.json.title).toBe("Wolverine (character)");
          expect(response.json.pageid).toBe(302602);
          expect(response.json.extract).toContain("Marvel");
        })
        .done(done);
    })
 
  });
 
  // ...
});
