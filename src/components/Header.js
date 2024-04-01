function Header (props){
    console.log(props)
    return (
        <>
        <h1> I am header compont-{props.name}</h1>
        </> 
    )
}
export default Header;