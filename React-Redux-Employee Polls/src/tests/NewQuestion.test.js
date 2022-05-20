import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewQuestion from '../components/NewQuestion';
import middleware from "../middleware";
import reducer from "../reducers";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer, middleware);

var component = render(
    <Provider store={store}>
        <Router>
            <NewQuestion/>
        </Router>
    </Provider>
);
var inputOne = component.getByTestId('option-one-input');
var inputTwo = component.getByTestId('option-two-input');
var submitButton = component.getByTestId('option-submit');

describe('NewQuestion', () => {
    it('will add a question to the array', async() => {
        fireEvent.change(inputOne, {target: {value: "Pet some dogs"}});
        fireEvent.change(inputTwo, {target: {value: "Pet some cats"}});
        fireEvent.click(submitButton);
        expect(component.getByTestId('success-header')).toBeInTheDocument();
        expect(component.queryByTestId('error-header')).not.toBeInTheDocument();
    });

    it('matches the snapshot when fields are not passed', () => {
        expect(component).toMatchSnapshot();
    });

    it('matches the snapshot when fields are passed', () => {
        fireEvent.change(inputOne, {target: {value: "Pet some dogs"}});
        fireEvent.change(inputTwo, {target: {value: "Pet some bunnies"}});
        expect(component).toMatchSnapshot();
    });
});