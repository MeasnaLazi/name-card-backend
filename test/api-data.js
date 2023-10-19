const supertest= require('supertest');
const request= supertest('http://localhost:3000');
const prefix= '/api/v1';
const credential= {
    Authorization: undefined,
};

const api= (path) => {
	return prefix + path;
}

const getCredential= (done)=> {
    let data= {
        username: 'lazi',
        password: "12345678"
    }
	request.put(api('/account/login'))
                .send(data)
                .expect(200)
                .expect((res) => {
                    credential["Authorization"]= `Bearer ${res.body.data.token}`;
                })
                .end(done);
}

module.exports= {
    request,
    credential,
    getCredential,
    api,
}