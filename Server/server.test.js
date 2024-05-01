const request = require('supertest');
const app = require('./server1.js')     


describe('POST auth', () => {
    describe('/login given mail and password', () => {
        it('should give 200 response on correct credentials ', async () => {
            const response = await request(app).post("/login").send({
                email: "surya@gmail.com",
                password: "Surya@123"
              })
              expect(response.statusCode).toBe(200)
        },20000);

});
})


