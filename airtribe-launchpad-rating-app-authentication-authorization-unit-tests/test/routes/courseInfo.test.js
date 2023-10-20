let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../../src/index');
const expect = require('chai').expect;

describe('Creates a course', () => {
    let singupBody = {
        fullName: 'test',
        email: 'test123@gmail.com',
        role: 'admin',
        password: 'test1234'
    }
    let signInBody = {
        email: 'test123@gmail.com',
        password: 'test1234'
    };
    let jwtToken = '';
    beforeEach((done) => {
        chai.request(server).post('/register').send(singupBody).end((err, res) => {
            chai.request(server).post('/login').send(signInBody).end((err, res) => {
                jwtToken = res.body.accessToken;
                done();
            });
        });
    });

    it('Signs in, validates the token and creates a course', (done) => {
        
        let courseDetails = {
            "course": "test",
            "courseId": 100,
            "cohort": 1,
            "college": "LPU",
            "semester": 2,
            "instructor": "test",
            "studentsVoted": 0,
            "averageRating": 0
        };
        chai.request(server).post('/courses').send(courseDetails).set('authorization', jwtToken).end((err, res) => {
            expect(res.status).equal(201);
            done();
        });
        
    });

    it('passed invalid token', (done) => {
        jwtToken = 'test'
        console.log(jwtToken);
        done();
    });

    it('not passing any auth header', (done) => {
        console.log(jwtToken);
        done();
    });
});
