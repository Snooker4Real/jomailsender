import '../App.css';
import {useRef} from "react";
import emailjs from 'emailjs-com';
import Header from "./Header";

function App() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
        ).then(
            result => console.log(result.text),
            result => alert(result.text),
            error => console.log(error.text)
        );
        e.target.reset();
    };

    return (
        <div>
            <Header/>

            <div className="App w-full max-w-xs flex items-center justify-between">
                <form ref={form} onSubmit={sendEmail} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Name</label>
                        <input id="username" placeholder="Username"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               type="text" name="user_name" required/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="email" name="user_email" placeholder="...@..com" required/>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="message" type="text" name="message" placeholder="" required/>
                    </div>


                    <div className="flex items-center justify-between">

                        <input type="submit" value="Send"
                               className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default App;
