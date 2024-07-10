"use server"
type loginFormType={
  email:string,
  pass:string
}
export async function handleLogin(formData:loginFormType){
  console.log(formData);
  return `your returned value is ${formData.email}`
}
