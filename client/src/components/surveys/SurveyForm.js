import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import formFields from './formFields';
import FieldFileInput from './fileUpload';
//import FieldFileRead from './readUploadFile';
// import * as Papa from 'papaparse';
//import ReactFileReader from 'react-file-reader';
import FileReader from './fileReader';
import formEmailField from './formEmailField';


class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return (
                <Field
                    key={name}
                    component={SurveyField}
                    type="text"
                    label={label}
                    name={name}
                />
            );
        });
    }
//key.name = recipients
    render() {
      return _.map(formEmailField, ({ label, name }) => {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}

                    <Field
                        key={'keystr'}
                        type="file"
                        component={FieldFileInput}

                        name={'namestr'}
                    />

                    <Field
                        key={name}
                        label={label}
                        name={name}

                        type="file"
                        component={FileReader}
                    />

                    <Link to="/surveys" className="green btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="green teal btn-flat right white-text">
                        Next
                    </button>
                </form>

            </div>

        );
      });
    }
}

export default reduxForm({
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
