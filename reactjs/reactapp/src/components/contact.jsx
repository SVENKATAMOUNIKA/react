import React from "react";
 const Contact=()=>{
    return(
    <div class="Contact">
        <h2>Contact Me</h2>
        <form>
            <label>
                Name:
                <input type="text" name="name"/>
            </label>
            <label>
                Email:
                <input type="text" name="email"/>
            </label>
            <label>
                Message:
                <textarea name="messege"></textarea>
            </label>
            <button type="submit">Send</button>
        </form>
   </div>
    );
 };
 export default Contact;