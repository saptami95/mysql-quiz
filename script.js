const quizData = [
    {
      question: '1-Is a semicolon necessary after every query',
      options: ['TRUE','FALSE'],
      answer: 'TRUE',
    },
    {
      question: '2-In which form MYSQL query results are displayed?',
      options: ['LIST','TUPLE','ROWS AND COLUMNS' , 'LIST AND TUPLES'],
      answer: 'ROWS AND COLUMNS',
    },
    {
      question: '3-In MYSQL, can we write keywords in any letter case',
      options: ['YES' , 'NO'],
      answer: 'YES',
    },
    {
      question: '4-In MYSQL,can we write multiple statements in a single line?',
      options: ['YES','NO'],
      answer: 'YES',
    },
    {
      question: '5-To see all the database which command is used?',
      options: [
        'Show Database;',
        'Show Databases;',
        'Show Database();',
        'Show_all Database;'
      ],
      answer: 'Show Databases;',
    },
    {
      question: '6-Can we create a database named 01_test?',
      options: ['YES','NO'],
      answer: 'YES',
    },
    {
      question: '7-"Use Student;"in this statement, what do you mean by the "Student"?',
      options: [
        'Database name',
        'Row name',
        'Column name',
        'Table name'
      ],
      answer: 'Database name',
    },
    {
      question: '8-Which of the following command is used to delete a database?',
      options: [
        'Delete Database_Name;',
        'Drop Database_Name;',
        'Drop Database Database_Name;',
        'Delete Database Database_Name'
      ],
      answer: 'Drop Database Database_Name;',
    },
    {
      question: '9-ALTER command is a type of which SQL command?',
      options: [
        'DML',
        'DDL',
        'DCL',
        'DQL'
      ],
      answer: 'DDL',
    },
    {
      question: '10-Which of the following is the correct syntax to add a field using alter command?',
      options: [
        'Alter Table table_name add field_name data type;',
        'Alter Table table_name, field_name data type;',
        'Alter Table field_name data type;'
      ],
      answer: 'Alter Table table_name add field_name data type;',
    },
    {
      question:'11-Can you change the column name using alter command?',
      options:['YES','NO'],
      answer:'YES',
    },
    {
      question:'12-Suppose you are asked to drop a column using alter statement then which syntax you will follow?',
      options:['Alter Table_name table drop column column_name;',
              'Alter Table table_name drop column column_name;'],

      answer:'Alter Table table_name drop column column_name;',
    },
    {
      question:'13-Suppose you have two columns named student_name and student_department inside table student_details and you are asked to update the value of two columns wher ID=4 the what statement you will write?',
      options:['Update student_details set student_name="ram",student_department="Chemical" where ID=4;',
              'Update table student_details set column_name student_name="ram",student_department="Chemical" where ID=4;',
              'Update student_details set student_name="ram" and student_department="Chemical" where ID=4;'],
      answer:'Update student_details set student_name="ram",student_department="Chemical" where ID=4;',
    },
    {
      question:'14-If you are asked to delete the entire data of a table without disturbing the table definition then in such case which statement you will use?',
      options:['DELETE',
              'TRUNCATE',
              'DROP',
              'CLEAR'],
      answer:'TRUNCATE',
    },
    {
      question:'15-Which of the following syntax you will use to rename the table name?',
      options:['Rename table old_table_name to new_table_name;',
              'Rename new_table_name;',
              'Alter table_name rename new_table_name;'],
      answer:'Rename table old_table_name to new_table_name;',
    },
    {
      question:'16-MYSQL is the open sourse software - What do you mean by this statement?',
      options:['This means anyone can use this software.',
                'This means you can contact the source of the software.',
                'This means it gives the best security features.'],
      answer:'This means anyone can use this software.',
    },
    {
      question:'17-Which SQL command is used for granting or revoking the rights?',
      options:['DML',
              'DDL',
              'DCL',
              'DQL'],
      answer:'DCL',
    },
    {
      question:'18-Which SQL commands are used for manipulation/modifying the data present in the table?',
      options:['DML',
              'DDL',
              'DCL',
              'DQL'],
      answer:'DML',
    },
    {
      question:'19-If you want to add a row in a table then which command you will use?',
      options:['Insert into',
                'Add',
                'Alter',
                'Create'],
      answer:'Insert into',
    },
    {
      question:'20-How many tables may be included with a join?',
      options:['One',
                'Two',
                'Three',
                'All of the mentioned'],
    answer:'All of the mentioned',
    },
    {
      question:'21-How many join types in join condition:',
      options:['2',
                '3',
                '4',
                '5'],
      answer:'5',
    },
    {
      question:'22-Which join refers to join records from the right table that have no matching key in the left table are include in the result set:',
      options:['Left outer join',
                'Right outer join',
                'Full outer join'],
      answer:'Right outer join',
    },
    {
      question:'23-If we have not specified ASC or DESC after a SQL order by clause,the following is used be default',
      options:['Desc',
              'Asc',
              'There is no default value',
              'None of the mentioned'],
    answer:'Asc',
    },
    {
      question:'24-Which of the following is true about the having clause?',
      options:['Similar to the where clause but is used for columns rather than groups.',
                'Similar to where clause but is used for rows rather than columns.',
                'Similar to where clause but is used for groups rather than rows.',
                'Acts exactly like a where clause.'],
      answer:'Similar to where clause but is used for groups rather than rows.',
    },
    {
      question:'25-Which of the following is true about the sql as clause?',
      options:['The as clause in sql is used to change the column name in the output or assign a name to a derived column.',
                'The sql as clause can only be used with the join clause.',
                'The as clause in sql is used to defines a search condition.',
                'All of the mentioned.'],
      answer:'The as clause in sql is used to change the column name in the output or assign a name to a derived column.',
    },
    {
      question:'26-How can you change "Thomas" into "Michel" in the "LastName" column in the Users table?',
      options:['Update user set LastName="Thomas" into LastNmae="Michel"',
                'Modify users set LastNmae="Michel" where LastName="Thomas"',
                'Modify users set LastName="Thomas" into LastName="Michel"',
                'Update users set LastName="Michel" where LastName="Thomas"'],
      answer:'Update users set LastName="Michel" where LastName="Thomas"',
    },
    {
      question:'27-____command makes the updates performed by the transaction permanent in the database?',
      options:['Rollback',
                'Commit',
              'Truncate',
              'Delete'],
      answer:'Commit',
    },
    {
      question:'28-Which of the following is the correct order of sql statement?',
      options:['Select,Group by,Where,Having',
                'Select,Where,Group by,Having',
              'Select,Having,Where,Group by',
              'Select,Where,Having,Group by'],
      answer:'Select,Where,Group by,Having',
    },
    {
      question:'29-What is the difference a primary key and unique key?',
      options:['Primary key can store a null value,whereas a unique key cannot store null value.',
                'We can have only one primary key in a table while we can have multiple unique keys.',
                'Primary key cannot be a date variable whereas unique key can be',
                'None of the above'],
      answer:'We can have only one primary key in a table while we can have multiple unique keys.',
    },
    {
    question:'30-Which of the are synonyms for column and rows of the table?',
    options:['Row = tuple , column =attribute',
              'Column = field , row =record',
              'Row =record, column=attribute',],
    answer:'Column = field , row =record',
    },
    {
      question:'31-Which of the following statement is correct regarding the difference between truncate,delete and drop command?',
      options:['Delete operation can be rolled back but truncate and drop operations cannot be rolled back. ',
      'Truncate and drop operations can be rolled back but delete operationscannot be rolled back',
      'Truncate is an example of DML, but delete and drop are example of DDL',
      'All are an example of DDL'],
    answer:'Delete operation can be rolled back but truncate and drop operations cannot be rolled back. '
    },
    {
      question:'32-When the wildcard in a where clause is useful?',
      options:['When an exact math is require in a select statement.',
                'When an exact match is not possible in a select statement.',
              'When an exact match is required in a create statement.',
              'When an exact match is not possible in a create statement.'],
      answer:'When an exact match is not possible in a select statement.',
    },
    {
      question:'33-____ is a constraint that can be defined at the column level?',
      options:['UNIQUE',
              'NOT NULL'],
      answer:'UNIQUE',
    },
    {
      question:'34-Which of the following statement is correct to display all the cities with the condition, temperature, and humidity whose humidity is in a range of 60 to 75 from the "weather" table?',
      options:['Select * from weather where humidity in (60 to 75)',
              'Select * from weather where humidity between 60 and 75',
              'Select * from weather where humidity not in (60 and 75)',
              'Select * from weather where humidity not between 60 and 75'],
      answer:'Select * from weather where humidity between 60 and 75',
    },
    {
      question:'35-Find the cities name with the condition and temperature from table "weather" where condition = sunny or cloudy but temperature >=60.',
      options:['Select city,temperature,condition from weather where condition ="cloudy" and condition ="sunny" or temperature >= 60',
      'Select city,temperature,condition from weather where condition ="cloudy" or condition ="sunny" or temperature >= 60',
      'Select city,temperature,condition from weather where condition ="cloudy" or condition ="sunny" and temperature >= 60',
      'Select city,temperature,condition from weather where condition ="cloudy" and condition ="sunny" and temperature >= 60'],
    answer:'Select city,temperature,condition from weather where condition ="cloudy" or condition ="sunny" and temperature >= 60',
    },
  ];
  
  //forthe buttons
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  //shuffle the options every time
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();