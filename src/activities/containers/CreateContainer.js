import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {activitiesOperations} from '../redux';

const schema = yup.object().shape({
    id: yup.number().positive('must be greater than 0').required("id is required"),
    name: yup.string().required('name is required').min(3, 'min 3 characters'),
    color: yup.string().required('please select a color')
});

class CreateContainer extends React.PureComponent{
    bgColor(values) {
        if (values.color === 'red') {
            return 'red'
        }
        if (values.color === 'blue') {
            return 'blue'
        }
        if (values.color === 'green') {
            return 'green'
        }
        return 'yellow'
    }

    render(){
        return(
            <Formik
                initialValues={{name:'toyo',id:'', color:''}}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    console.log(values);
                    this.props.create(values);
                    setSubmitting(false);
                    resetForm();
                    }}
                validationSchema={schema}
            >
                {({values, handleChange, handleSubmit, isSubmitting, touched, errors, isValid})=>(
                    <form onSubmit={handleSubmit}>
                        <input name='id' onChange={handleChange} value={values.id} /><br/>
                        {errors.id && touched.id && errors.id}
                        <br/>
                        
                        <input name='name' onChange={handleChange} value={values.name} /><br/>
                        {errors.name && touched.name && errors.name}
                        
                        <br/>

                        <select name='color' value={values.color} onChange={handleChange}>
                            <option value=''>Select a color</option>
                            <option value='red'>Red</option>
                            <option value='blue'>Blue</option>
                            <option value='green'>Green</option>
                        </select><br/>
                        {errors.color && touched.color && errors.color}
                        <br/>
                        <button style={{ backgroundColor: this.bgColor(values)}} disabled={isSubmitting } type='submit'>Create</button>
                    </form>
                )}
            </Formik>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    create:activitiesOperations.createActivity
}, dispatch)

export default connect(null, mapDispatchToProps)(CreateContainer);