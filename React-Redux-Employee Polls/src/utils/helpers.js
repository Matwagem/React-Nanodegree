export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion(question, author, authedUser){
  let hasAnswered = false;
  let isAuthor = false;
  let selectedVote = '';

  const {
    id,
    optionOne: {
      // eslint-disable-next-line
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      // eslint-disable-next-line
      votes: [],
      text: optionTwoText,
    },
    timestamp,
  } = question;

  if(question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)){
    hasAnswered = true;
    if(question.optionOne.votes.includes(authedUser)){
      selectedVote = question.optionOne.text;
    } else if (question.optionTwo.votes.includes(authedUser)){
      selectedVote = question.optionTwo.text;
    }
  }

  if(author === authedUser){
    isAuthor = true;
  }

  const l1 = question.optionOne.votes.length;
  const l2 = question.optionTwo.votes.length;
  const totalVotes = l1 + l2;
  const percentageOptionOne = Math.round((l1 / totalVotes) * 100);
  const percentageOptionTwo = Math.round((l2 / totalVotes) * 100);

  //combined struct of the questions & author array results
  return {
    id, 
    timestamp, 
    name: author.name,
    avatarURL : author.avatarURL,
    optionOneText,
    optionTwoText,
    hasAnswered,
    selectedVote,
    isAuthor,
    totalVotes,
    percentageOptionOne,
    percentageOptionTwo,
  }
}
