
export default function LandingBtn(props){
    //Creating button that gets information from the landing page component
    return(
    
            <button onClick={props.link}>
            <h3>{props.account}</h3></button>
        
    )
}