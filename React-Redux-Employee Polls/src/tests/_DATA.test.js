import { _saveQuestion, _saveQuestionAnswer, _getUsers} from "../utils/_DATA";
import { formatDate } from "../utils/helpers";

jest.setTimeout(10000);

describe('_saveQuestion', () => {
    it('will return the formatted question is successful', async() => {
        var question = {
            author: "mtsamis",
            optionOneText: 'Testing 1',
            optionTwoText: 'Testing 2',
        };
        var result = await _saveQuestion(question);
        //all fields are being populated
        expect(result.author).not.toBeNull();
        expect(result.id).not.toBeNull();
        expect(result.timestamp).not.toBeNull();
        expect(result.optionOne.text).not.toBeNull();
        expect(result.optionTwo.text).not.toBeNull();
    });

    it('will errors out if the wrong info is passed', async() => {
        var question = {
            author: "mtsamis",
            optionTwoText: 'Testing 2',
        };
        await expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });
});

describe('_getUsers', () => {
    it('will return the list of users if successful', async() => {
        var result = await _getUsers();
        expect(result).not.toBeNull();
    });
});


describe('_saveQuestionAnswer', () => {
    it('will true if successful', async() => {
        var object = {
            answer: "optionOne",
            authedUser: "mtsamis",
            qid: "loxhs1bqm25b708cmbf3g",
            type: "ANSWER_QUESTION"
        }
        await expect( _saveQuestionAnswer(object)).resolves.toBe(true);
    });

    it('will return an error if unsuccessful', async() => {
        var object = {
            answer: "optionOne",
            qid: "loxhs1bqm25b708cmbf3g",
            type: "ANSWER_QUESTION"
        }
        await expect( _saveQuestionAnswer(object)).rejects.toEqual("Please provide authedUser, qid, and answer");
    });
});