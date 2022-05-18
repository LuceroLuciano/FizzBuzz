const request = require("supertest");
const appServer = require("../lib/server")

describe("Unit Test of Endpoints", () => {
    test("GET /v1/explorers/:mission", () => {
        request(appServer)
        .get("/v1/explorers/:mission")
        .expect("Content-Type", /json/)
        // .expect(200)
        .expect((request) => {
            request.body.data.length = 10;
            request.body.data.mission = "node";
            request.body.toHaveProperty('get')
        // expect(res.statusCode).toEqual(201)
        // expect(res.body).toHaveProperty('post')
        })
       /* .end((err, res) => {
            if(err) return done(err);
            return done();
        }); */
    });
 });