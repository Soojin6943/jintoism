import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1 style={{ marginTop: '480px', fontSize: '60px' }}>진토이즘</h1>
            <Link to="/camera"><button style={{ fontSize: '23px', border: 'none', padding: '5px 12px', borderRadius: '3px', backgroundColor: 'steelblue', color: 'white' }}>촬영하기</button></Link>
        </>
    )
}