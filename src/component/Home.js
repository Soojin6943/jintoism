import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>진토이즘</h1>
            <Link to="/camera"><button>촬영하기</button></Link>
        </>
    )
}