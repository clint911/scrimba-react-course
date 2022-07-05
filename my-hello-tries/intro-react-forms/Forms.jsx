import React from "react";

export default function Form() {
    //state to hold current data
    const [formData,  setFormData] = React.useState({firstName: "", lastName : " ", email : "", comments: " ", isFriendly: true})

    /**challenge, track the participants last name as well
     */

    

    //function to handle the change
    function handlechange(event) {
        setFormData(prevFormData => {
            return {
                ...prevData,
                [event.target.name] : event.target.value
            }
        })
        
    }
    return (
        <form>
            <input 
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                />
            <input 
            type="text"
            placeholder="Last Name"
            onchange={handleChange}
            name="LastName"
            value={formData.LastName}
            />
            <input 
            type="email"
            placeholder="email"
            onchange={handleChange}
            name="email"
            value={formData.email}
            />
            <textarea value={formData.comments}/>
            <input type="checkbox" 
            id="isFriendly"
            checked={formData.isFriendly}/>
            onChange.handleChange
            <label htmlfor="isFriendly">Are you friendly</label>
        </form>
    )
}