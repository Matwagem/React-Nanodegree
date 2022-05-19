export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion(question, author, authedUser){
  const hasAnswered = false;
  const isAuthor = false;
  console.log(author);

  const {
    id,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
    timestamp,
  } = question;

  if(question.optionOne.votes.includes(authedUser)){
    console.log("AUTHED USER HAS ANSWERED");
  }

  if(author === authedUser){
    console.log("AUTHED USER IS THE WRITER!");
    isAuthor = true;
  }

  const name = author.name;
  const avatarURL = author.avatarURL;
  //combined struct of the questions & author array results
  return {
    id, 
    timestamp, 
    name,
    avatarURL,
    optionOneText,
    optionTwoText,
    hasAnswered,
    isAuthor,
  }
}
