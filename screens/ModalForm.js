import React from 'react'
import { View, Text,TextInput,Button,StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik';
import * as yup from 'yup'
import ButtonComponent from '../shared/Button';

const reviewSchema = yup.object({ //keys will be the title of the form values
    title:yup.string()
        .min(4)
        .required(),
    body:yup.string()
        .min(8)
        .required(),
    // rating:yup.string()
    //     .required()
    //     .test('range 1-5','Choose between 1 to 5',(val) =>{
    //         return parseInt(val) < 6 && parseInt(val) > 0;
    //     })    
    rating:yup.number()
        .min(1)
        .max(5)
        .required()
})


export default function ModalForm({addReview}) {
    return (

        <View style = {globalStyles.container}>
            <Formik
                initialValues = {{title:'', body:'',rating:''}} //lists different fields we will have in our form
                validationSchema = {reviewSchema}
                onSubmit = {(values,actions) => { // values contains info of all the fields listed in initialValues
                    actions.resetForm();
                    addReview(values)
                }}
            >
                {/* We render form fields with a render function */}
                {(formikProps) =>(

                    <View>
                        <TextInput 
                            style = {globalStyles.input}
                            placeholder = "Review Title"
                            onChangeText = {formikProps.handleChange('title')} //update title on the 'values' in onSubmit
                            value = {formikProps.values.title} //onchange one will change 'values' and we are getting those values in the value prop
                            onBlur = {formikProps.handleBlur('title')} // used to get real time error msg and not only when we submit the form
                        />
                        {/* formikProps provide us with errors as well */}
                        <Text style = {globalStyles.errorText}>
                            { formikProps.touched.title && formikProps.errors.title } {/* Did this to get error instantly */}
                        </Text>
                        <TextInput
                            multiline 
                            // minHeight={60} 
                            style = {globalStyles.input}
                            placeholder = "Review Body"
                            onChangeText = {formikProps.handleChange('body')} //update title on the values in onSubmit
                            value = {formikProps.values.body} //onchange one will change 'values' and we are getting those values in the value prop
                            onBlur = {formikProps.handleBlur('body')} // used to get real time error msg and not only when we submit the form , it is triggered when we go away form and input field
                        />
                        <Text style = {globalStyles.errorText}>
                            { formikProps.touched.body && formikProps.errors.body } 
                        </Text>                        
                        <TextInput 
                            style = {globalStyles.input}
                            keyboardType='numeric'
                            placeholder = "Rating(1-5)"
                            onChangeText = {formikProps.handleChange('rating')} //update title on the values in onSubmit
                            value = {  formikProps.values.rating } //onchange one will change 'values' and we are getting those values in the value prop
                            onBlur = {formikProps.handleBlur('rating')} // used to get real time error msg and not only when we submit the form

                        />
                        <Text style = {globalStyles.errorText}>
                            { formikProps.touched.rating  && formikProps.errors.rating }
                        </Text>  
                        <ButtonComponent 
                            text = 'submit' 
                            buttonHandler = {formikProps.handleSubmit} 
                        />

                    </View>
                    
                )}
            </Formik>
        </View>

    )
}

