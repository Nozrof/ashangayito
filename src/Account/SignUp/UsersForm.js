import React from 'react'
import { Grid,Link } from "@material-ui/core";
import {UseForm,Form} from './UseForm';
import Controls from './controls/Controls';




const genderItems=[
    {id:'male',title:'Male'},
    {id:'Female',title:'Female'},
    {id:'other',title:'Other'}
]


const initialFValues = {
    id: 0,
    fullName:'',
    email:"",
    phone:'',
    gender:"male",
    acceptTerms:false,
    hiredate: new Date(),
    
}
export default function UsersForm() {

    const labels= ( 
        <Link
        href="/privacy"
        style={{ textDecoration: "none", color: "inherit" }}
      >Privacy</Link>
    )

   const{ values,setValues,handleInputChange} = UseForm(initialFValues)
    return (
      
            <Form>
            <Grid container>
                <Grid item xs={6}>
                <Controls.Input
                       label="Full Name"
                       name="fullName"
                       onChange={handleInputChange}
                       value={values.fullName} 
                    />
                    <Controls.Input
                       label="Email"
                       name="email"
                       onChange={handleInputChange}
                       value={values.email} 
                    />
                    
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                    name="gender"
                    value={values.gender}
                    label='Gender'
                    onChange={handleInputChange}
                    items={genderItems}
                    />

                    <Controls.Checked
                    name="acceptTerms"
                    label="I have read all the conditions and terms"
                    value={values.acceptTerms}
                    />
                   
                </Grid>
            </Grid>
            </Form>
        
    )
}
