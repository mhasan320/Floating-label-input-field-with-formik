import { SignupSchema } from '@/scema/signupScema';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '@/styles/signup.module.css';
import { SelectDatePicker, SelectForm } from '@/component/fromComponent';
import { typesData } from '@/data/data';
import Link from 'next/link';

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
      <Link passHref href="https://github.com/mhasan320/Floating-label-input-field-with-formik" className='text-sm flex gap-3 mt-7 items-center'>
        <svg height="25" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="25" data-view-component="true">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
        Source Code
      </Link>
    </div>
  );
}