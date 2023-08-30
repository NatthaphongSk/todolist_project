import ListItem from "./ListItem"
/*
prop={
    data : Array<{
        id: number, 
        text: string, 
        active: boolean, 
        icon: <Components/>
    }>
}
*/

function Lists(props){
    return(
        <ul className="list">
            {props.data.map((obj)=>(<ListItem key={obj.id}
                    text={obj.text}
                    icon={obj.icon}
                    active={obj.active}/>))}
        </ul>
    )
}

export default Lists