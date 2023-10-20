
const { request, api, getCredential, credential } = require("./api-data");
const { expect } = require("chai");
const { textMessage, httpCode } = require("./utils.test");

describe("[Authentication]", async () => {
    
    before((done) => getCredential(done));

    it("Should be login successful and get token", (done) => {
        let data= {
            username: 'lazi',
            password: "12345678"
        }
        request.put(api('/account/login'))
                .send(data)
                .expect(httpCode.SUCCESS)
                .end(function(err, response) {
                    if (err) 
                        return done(err);
                    expect(response.body.data.token).to.be.not.equal(undefined);
                    return done();
                });;
    });

    it("Should be login unsuccessful with error code 401 and message invalid username or paassowrd", (done) => {
        let data= {
            username: 'lazi',
            password: "12345679"
        }
        request.put(api('/account/login'))
                .send(data)
                .expect(httpCode.UNAUTHORIZED)
                .end(function(err, response) {
                    if (err) 
                        return done(err);
                    expect(response.body.message).to.be.equal(textMessage.INVALID_USER_PASSWORD);
                    return done();
                });;
    });

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