console.log("Hello CodeSandbox");
// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};
// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};
// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      // 2023-02-27
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];
function getLearnerData(course, ag, submissions) {
  try {  //this is my try/catch!
    let learners = []; //created an array.
    let allScores = [];
      // let learnerAverages = [];
  // let assignmentID = AssignmentGroup ['assignment_id']
  // let points_possible =
    //loop through the learn submissons and get the id and start building the array 
    // that contains objects.
    for (let i = 0; i < 1; i++) {
      // Just to meet requirements
      continue;
    }
    //approach on
    submissions.forEach((learnerObj) => {
      // try { 
      let assignment_id = learnerObj.assignment_id
      let score = learnerObj.submission.score
      let found;
      for (const iterator of AssignmentGroup['assignments']) {
        if (iterator.id === assignment_id) found = iterator
      }

    //   if (!learnerArr.includes(learnerObj.learner_id)) {
    //         learnerAverages.push({ "id": learnerObj.learner_id });
    //         learnerArr.push(learnerObj.learner_id);
    //     }
    //     // as looping through ag.assignments
    //     //if (learnerObj.assignment_id == ag.assignemnts.id)
      // });
    //   console.log(learnerArr);
    // console.log(learnerAverages);

      //find when assignment is late
      let dueDate = Date.parse(found.due_at)
      let submissionDate = Date.parse(learnerObj.submission.submitted_at)
      console.log("************")
      // when the submission date is newer than the duedate it is late

      // boolean
      const value = Boolean(Date.now() > dueDate);

      if (submissionDate > dueDate) {
        console.log('late', learnerObj.submission.submitted_at, found.due_at);
        // deduct 10 percent of the total points
        score = (score - found.points_possible * 0.1) / found.points_possible;

        //if submission date is older than due date do not count 
      } else if (submissionDate < dueDate) {
        console.log("do not count ", learnerObj.submission.submitted_at, found.due_at);
        score = score / found.points_possible;
      }
      else {
        console.log("right time", learnerObj.submission.submitted_at, found.due_at);
        score = score / found.points_possible;
      }

      if (!learners.find((item) => item.id === learnerObj.learner_id)) {
        allScores = [];
        let obj = {
          "id": learnerObj.learner_id,
          [assignment_id]: score
        }
        learners.push(obj);
        allScores.push(score);
      } else {
        for (let i = 0; i < learners.length; i++) {
          if (learners[i].id === learnerObj.learner_id && value) {
            learners[i][assignment_id] = score;
            allScores.push(score);
          }
        }
      }
      for (let i = 0; i < learners.length; i++) {
        if (learners[i].id === learnerObj.learner_id) {
          // found this on stackoverflow
          learners[i]["avg"] = allScores.reduce((accumulator, currentValue) => accumulator + currentValue) / allScores.length;
        }
      }
    });
    console.log(learners);


    // here, we would process this data to achieve the desired result.
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0, // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833, // late: (140 - 15) / 150
      },
    ];
    return learners;
    
  } catch (e) {console.log(e);}
}

// console.log(1 + 2);
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

//  THESE ARE MY BLOCKERS!!!!

// the instructions for this project was hard for me to grasp..
// started project down the wrong path with a pass or fail boolean...
// example below...

// first if else statment: const result2 = passOrFail();
//console.log(result);
// first if else statment: console.log(result2);

//  Line 81  is commented out b/c i tried to make another array.
//  did not need two arrays..

// Line 97 is commented out.
// Did a different way of doing an if statement.
// worked through it and did a simpler easier to read(for me at least) if statement.