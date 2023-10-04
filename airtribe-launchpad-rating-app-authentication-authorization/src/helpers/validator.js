class Validator {
    static validateCourseInfo(courseInfo) {
        
        if(courseInfo.hasOwnProperty("course") &&
            courseInfo.hasOwnProperty("courseId") &&
            courseInfo.hasOwnProperty("cohort") &&
            courseInfo.hasOwnProperty("college") &&
            courseInfo.hasOwnProperty("semester") &&
            courseInfo.hasOwnProperty("instructor") &&
            courseInfo.hasOwnProperty("averageRating") &&
            courseInfo.hasOwnProperty("studentsVoted")) {
                return {
                    "status": true,
                    "message": "course has been added"
                }
            }
            else {
                return {
                    "status": false,
                    "message": "course info is malformed, please provided all the parameters"
                }
            }
    }
}

module.exports = Validator;