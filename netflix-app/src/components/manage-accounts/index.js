'use client';

import { GlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import CircleLoader from "../circle-loader";
import AccountForm from "./account-form";

const initialFormData = {
  name:'',
  pin:''
}
export default function ManageAccounts() {
  const {accounts,setAccounts,pageLoader,setPageLoader} = useContext(GlobalContext)
  const [showAccountForm,setShowAccountForm] = useState(false)
  const [formData,setFormData] = useState(initialFormData)
  const {data:session} = useSession()
  async function getAllAccounts() {
    const res = await fetch(
      `/api/account/get-all-account?id=${session?.user?.uid}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    console.log("Data received from API:", data);
  
    if (data && data.data && data.data.length) {
      setAccounts(data.data);
      console.log("Updated accounts state:", accounts);
      setPageLoader(false);
    } else {
      setPageLoader(false);
    }
  }
  
  useEffect(()=>{
    getAllAccounts()
  })
  async function handleSave(){
   const res =  await fetch('/api/account/create-account',{
    method:'POST',
    headers:{
      'Content-Type':'application-json'
    },
    body:JSON.stringify({
      ...formData,
      uid:session?.user?.uid
    })
   })
   const data = await res.json()
   if(data.success){
    getAllAccounts()
    setFormData(initialFormData)
    setShowAccountForm(false)
   }else{
    getAllAccounts()
   }
   console.log(data)
  }
  if(pageLoader ) return <CircleLoader/>
  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <div className="flex justify-center items-center flex-col">
        <h1 className= "text-white font-bold text-5xl my-6 text-center">
          Who's Watching?
        </h1>
        <ul className=" flex gap-8 p-0 my-[25px]">
       
          {
            accounts && accounts.length ? accounts.map(item =><li className="max-w-[200px] min-w-[200px] w-[155px] flex flex-col gap-3 items-center cursor-pointer" key={item._id}>
              <div className="relative">
              <img src="https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"
                      alt="Account"
                      className="max-w-[200px] rounded min-w-[84px] max-h-[200px] min-h-[84px] object-cover w-[155px] h-[155px]"
                    />
              </div>
              <span className="mb-4">{item.name} </span>
              <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon svg-icon-profile-lock ltr-0 e1mhci4z1"
                    data-name="Lock"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7H19C20.1046 7 21 7.89543 21 9V18.6529C21 19.6274 20.2885 20.4855 19.2814 20.6076C18.0287 20.7593 15.492 21 12 21C8.50801 21 5.97128 20.7593 4.71855 20.6076C3.71153 20.4855 3 19.6274 3 18.6529V9C3 7.89543 3.89543 7 5 7H7V6ZM15 6V7H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM5 9V18.627C6.19927 18.7708 8.63769 19 12 19C15.3623 19 17.8007 18.7708 19 18.627V9H5ZM11 12V16H13V12H11Z"
                      fill="currentColor"
                    ></path>
                  </svg>
            </li>)
             :null
          }
           {accounts && accounts.length < 4 ? ( 
            <li
              onClick={() => setShowAccountForm(!showAccountForm)}
              className="border text-black bg-[#e5b109] font-bold text-lg border-black max-w-[200px] rounded min-w-[84px] max-h-[200px] min-h-[84px] w-[155px] h-[155px] cursor-pointer flex justify-center items-center"
            >
              Add Account
            </li>
          ) : null}
        </ul>
        
      </div>
      <AccountForm handleSave={handleSave} formData={formData} setFormData={setFormData} showAccountForm={showAccountForm}/>
    </div>
  );
}
