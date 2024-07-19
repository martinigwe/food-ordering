'use client'
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import InfoBox from "@/components/layout/InfoBox";
import SuccessBox from "@/components/layout/SuccessBox";
import toast from "react-hot-toast";
import UserTabs from "@/components/layout/UserTabs";
import EditableImage from "../../components/layout/EditableImage";
import UserForm from "@/components/layout/UserForm"
// import { resolve } from "path";
// import { resolve } from "path";
// import { rejects } from "assert";

export default function ProfilePage() {
    const session = useSession();
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState('');
    const [profiledFetched, setProfileFetched] = useState(false);
    
    const {status} = session;
    
    // console.log(session);

    useEffect(() => {
        if (status ==='authenticated'){
            
            fetch('/api/profile').then(response =>{
                response.json().then(data =>{
                    // setPhone(data.phone);
                    // setStreetAddress(data.streetAddress);
                    // setPostalCode(data.postalCode);
                    // setCity(data.city);
                    // setCountry(data.country);
                    setUser(data);
                    setIsAdmin(data.admin)
                    setProfileFetched(true)
                });
            });
        }
    }, [session, status]);

    async function handleProfileInfoUpdate(ev, data) {
        ev.preventDefault();
        
        const savingPromise = new Promise (async(resolve, reject) => {
            const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            });

            if (response.ok)
                resolve()
            else
                reject();
        });

        await toast.promise(savingPromise, {
            loading: 'Saving...',
            success: 'Profile saved!',
            error: 'Error',
        });
        
    
    
}


    if (status === 'loading' || !profiledFetched) {
        return 'Loading...';
    }

    if (status === 'unauthenticated') {
        return redirect('/login');
    }
    return (
        <section className="mt-8">
          <UserTabs isAdmin={isAdmin}/>
            
            <div className="max-w-2xl mx-auto mt-8">
              
               <UserForm user={user} onSave={handleProfileInfoUpdate}/> 
               
            </div>
        </section>
    )
}