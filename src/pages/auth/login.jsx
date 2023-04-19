import React from 'react'
import LoginComponent from '../../components/Auth/LoginComponent/index'
import { redirect } from 'next/dist/server/api-utils';

const Login = ({ redirect }) => {
  return (
    <div className='Login'>
      <LoginComponent redirect={redirect} />
    </div>
  )
}
export default Login;

export async function getServerSideProps(context) {
  if (context.query.redirect !== null) {
    return {
      props: { redirect: context.query.redirect }
    }
  }
  else {
    return { props: { redirect: "" } }
  }

}