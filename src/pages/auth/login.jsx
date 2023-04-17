import React from 'react'
import LoginComponent from '../../components/Auth/LoginComponent/index'

const Login = ({redirect}) => {
  return (
    <div className='Login'>
      <LoginComponent redirect={redirect}/>
    </div>
  )
}
export default Login;

export async function getServerSideProps(context){
  return {
    props: {redirect:context.query.redirect}
  }
}