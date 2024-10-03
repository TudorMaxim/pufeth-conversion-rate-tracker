import request from 'supertest';
import server from '..';

describe("GET /api/pufeth/conversion/", () => {
    it("should query smart contract", async () => {
        return request(server)
            .get("/api/pufeth/conversion/")
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.statusCode).toBe(200);
                expect(Object.keys(res.body).includes('conversionRate')).toBeTruthy();
                expect(Object.keys(res.body).includes('totalSupply')).toBeTruthy();
                expect(Object.keys(res.body).includes('totalAssets')).toBeTruthy();
                expect(Object.keys(res.body).includes('timestamp')).toBeTruthy();
            });
    });
});