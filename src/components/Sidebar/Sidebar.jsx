import s from './Sidebar.module.css';
import UnderSidebar from './UnderSidebar/UnderSidebar';

const Sidebar = (props) => {
    // let postsElements =
    // props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);
    
    // let UnderSidebars = [
    //     {id: 1, name: 'PSG'}
    // ]

    let UnderSidebarElement =
        props.state.UnderSidebars.map( u => <UnderSidebar name={u.name}/>);
    return(
        <div>
           {UnderSidebarElement}  
        </div>
    )
}

export default Sidebar;