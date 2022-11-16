export default function Navbar(){
    return(
        <div className="fixed flex bg-transparent backdrop-blur-sm top-0 py-2 w-full border-b border-gray-300 justify-between z-10 px-10">
                <button className="rounded text-sm p-1 bg-sky-200">Contact</button>
                <button className="rounded text-sm p-1 bg-sky-200">Download Full CV</button>
        </div>
    )
}