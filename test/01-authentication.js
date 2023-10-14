
const { request, api, getCredential, credential } = require("./api-data");


describe("[Authentication]", async () => {
    
    before((done) => getCredential(done));

    // it("should be able get token", (done) => {
    //     let data = {
    //         username: 'lazi',
    //         password: "12345678"
    //     }
    //     request.put('/account/login')
    //             .send(data)
    //             .expect(200)
    //             .end(function(err, response) {
    //                 if (err) 
    //                     return done(err);
    //                 const res = JSON.parse(response.text);
    //                 expect(res.data.token).to.be.not.equal(undefined);
    //                 return done();
    //             });;
    // });

    // it("should be not able get token", (done) => {
    //     let data = {
    //         username: 'lazi',
    //         password: "12345677"
    //     }
    //     request.put('/account/login')
    //             .send(data)
    //             .expect(401)
    //             .end(function(err, res) {
    //                 if (err) 
    //                     return done(err);
    //                 return done();
    //             });;
    // })
})