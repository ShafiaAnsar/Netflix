'use client'
import {motion} from 'framer-motion'
export default function AccountForm({formData,setFormData,showAccountForm,handleSave}){
    return( showAccountForm && 
     <motion.div initial ={{opacity:0}}
    whileInView ={{opacity:1}}
    viewport= {{once:true}}
    >
        <div className='px-8 py-8 h-[300px] fixed top-[10px] gap-3 flex flex-col items-start right-[10px] bg-black opacity-[0.84] z-[999]'>
            <div className='flex flex-col gap-5'>
                <input name='name' type='text' value={formData['name']} 
                onChange={(e)=>
                setFormData({
                    ...formData,
                    [e.target.name]:e.target.value
                })}
                placeholder='Enter your name'
                className='px-5 py-5 rounded-lg placeholder:text-red-700 text-lg text-[#e5b109] outline-none focus:outline-none'
                />
                <input name='pin' type='password' value={formData['pin']} 
                maxLength={4}
                onChange={(e)=>
                setFormData({
                    ...formData,
                    [e.target.name]:e.target.value
                })}
                placeholder='Enter your PIN'
                className='px-5 py-5 rounded-lg placeholder:text-red-700 text-lg text-[#e5b109] outline-none focus:outline-none'
                />
                <button 
                onClick={handleSave}
                className='border p-4 text-bold text-lg bg-[#e5b109]  text-black outline-none font-bold rounded-lg'>Save</button>
            </div>
        </div>
    </motion.div>)

}