const axios = require('axios');
const { expect } = require("chai");

describe("PUT API Login with correct password", async () => {
   
    it("statue should be 200", async () => {
        expect(res.status).to.not.equal(200);
    }),
    
    it("should be able get token", async () => {
        let data = {
            username: 'lazi',
            password: "12345678"
        }
        axios.put('http://localhost:3000/api/v1/account/login', data)
            .then(res => {
               
                expect(res.data.token).to.not.equal(undefined);
            })
            .catch(err => {});
    })
})