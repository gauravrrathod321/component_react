function Footer(props) {
    console.log(props)
    return (
    <>
        <h1>I am footer-{props.empdata.name}</h1>
        <table border="2px">
        <p>Id -{props.empdata.id}</p>
        
        <p>Name - {props.empdata.name}</p>
        
        <p>gmail- {props.empdata.gmail}</p>
        </table>
    </>
    )
} 
export default Footer