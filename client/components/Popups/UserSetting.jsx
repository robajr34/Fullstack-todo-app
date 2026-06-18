
import useAuth from '@/hook/useAuth';
import usePopups from '@/hook/usePopups';
import { logout } from '@/services/auth';
import { LogOut, Settings, User } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'

const UserSetting = () => {
    const {setUser} = useAuth()
    const router = useRouter()
    async function handleLogout() {
        const res = await logout()
        const data = await res.json()
        router.replace('/login')
        setUser(null)
        console.log(data)
    }

    const { userSettingIsOpen, setUserSettingIsOpen } = usePopups();
  return (
    <div className={`absolute ${userSettingIsOpen ? "flex" : "hidden"} flex-col z-1000 bottom-20 bg-slate-700 text-slate-300 gap-2 p-2 rounded-xl w-54`}>

      <button className="flex items-center gap-2 p-1 rounded-md hover:bg-slate-600">
        <User size={18} />
        <span>Profile</span>
      </button>
      <button className="flex items-center gap-2 p-1 rounded-md hover:bg-slate-600">
        <Settings size={18} />
        <span>Settings</span>
      </button>
      <button className="flex items-center gap-2 p-1 rounded-md hover:bg-slate-600" onClick={()=>handleLogout()}>
        <LogOut size={18} strokeWidth={1.5} className="text-slate-300" />
        <span className="">Logout</span>
      </button>
    </div>
  );
}

export default UserSetting
