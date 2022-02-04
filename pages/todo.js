import Link from "next/link"

export default function Todo() {
    return (
        <div className="mx-10 mt-6">
            <ul className="list-decimal list-outside px-7 ">
                <li className="h1-blue my-7 w-fill">Responsive Design</li>
                <li className="h1-blue my-7 w-fill">Dark Mode</li>
            </ul>
            <Link href={"/"}><button className="px-4 py-2 rounded-md bg-rose-600 text-white font-bold tracking-wider">
                Return</button></Link>
        </div>
    )
}