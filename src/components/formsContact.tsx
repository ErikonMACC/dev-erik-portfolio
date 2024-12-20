import "../assets/styles/font.css";
import "../assets/styles/color.css";
import "../assets/styles/container-style.css";

function FormsContact() {
    return (
        <>
            <form className="contact-with-me col-start-8 col-span-5 container-main rounded-xl h-full">
                <div className="forms my-6 mx-5 text-center">
                    <input name="name" className="mb-3 px-4 text-poppins w-full h-12 background-primary rounded-xl placeholder:text-zinc-800 placeholder:font-normal focus:outline-none focus:border-y-red-800 focus:ring-red-900 focus:ring-2 sm:text-lg" type="text" placeholder="Seu Nome" required/>
                    <input name="email" className="mb-3 px-4 text-poppins w-full h-12 background-primary rounded-xl placeholder:text-zinc-800 placeholder:font-normal focus:outline-none focus:border-y-red-800 focus:ring-red-900 focus:ring-2 sm:text-lg" type="text" placeholder="Seu email" required/>
                    <input name="telephone" className="mb-3 px-4 text-poppins w-full h-12 background-primary rounded-xl placeholder:text-zinc-800 placeholder:font-normal focus:outline-none focus:border-y-red-800 focus:ring-red-900 focus:ring-2 sm:text-lg" type="text" placeholder="Seu número de Telefone" required/>
                    <textarea name="message" placeholder="Sua mensagem" className="p-4 text-poppins w-full h-12 background-primary rounded-xl placeholder:text-zinc-800 placeholder:font-normal focus:outline-none focus:border-y-red-800 focus:ring-red-900 focus:ring-2 sm:text-lg min-h-32 resize-none" required></textarea>
                    <button className="mt-5 px-8 py-2 rounded-2xl background-secondary subtitle-inter text-white shadow-xl" type="submit">Enviar</button>
                </div>
            </form>
        </>
    );
}

export default FormsContact;