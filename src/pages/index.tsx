import { SignupSchema } from '@/scema/signupScema';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '@/styles/signup.module.css';
import { SelectDatePicker, SelectForm } from '@/component/fromComponent';
import { typesData } from '@/data/data';

export default function SignupForm() {
  return (
    <div className={styles.mainForm}>
      <h2 className='mb-2 text-2xl font-bold'>Floating label input box with <span className={styles.curvedUnderline}>Formik</span></h2>
      <p className='mb-6 text-sm'>Next Js &#8226; Formik &#8226; Mantine</p>
      <div className={styles.mainBg}>
        <h2 className={styles.title}>Sign Up</h2>
        <Formik
          initialValues={{ name: '', email: '', password: '', type: '', dob: null  }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <Form>
              <div className="mb-4 floating-label">
                <Field
                  name="name"
                  placeholder="Name"
                  className={`${styles.inputField} ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                <label className={styles.label}>Name</label>

                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4 floating-label">
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={`${styles.inputField} ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                <label className={styles.label}>Email</label>
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <SelectForm
                    placeholder="Type"
                    label='Type'
                    value={formik.values.type}
                    onChange={(value) => {
                      formik.setFieldValue('type', value)
                    }}
                    searchable={false}
                    nameSelectBox="type"
                    data={typesData}
                    className="floatingLabel"
                />

                <ErrorMessage
                    id="type"
                    data-testid="type"
                    name="type"
                    component="span"
                    className="errorMessage"
                  />
              </div>

              <div className="floating-label mb-4">
                <SelectDatePicker
                  label="Date of Birth"
                  name="dob"
                  value={formik.values.dob}
                  className="floatingLabel"
                  onChange={(value: any) => {
                    formik.setFieldValue('dob', value)
                  }}
                  maxDate={new Date()}
                  placeholder="Date of Birth"
                  clearable={true}
                />
                <ErrorMessage name="dob" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4  floating-label">
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={`${styles.inputField} ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'}`}
                />
                 <label className={styles.label}>Password</label>
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>


              <button type="submit" className={styles.submit}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}