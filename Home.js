    import styles from './home.module.css';

    const Home = () => {
        return ( <
            div className = { styles.postsList } >
            <
            div className = { styles.postWrapper } >
            <
            div className = { styles.postHeader } >
            <
            div className = { styles.postAvatar } >
            <
            img src = "https://media-exp1.licdn.com/dms/image/C4E03AQEwDE13a8r9sQ/profile-displayphoto-shrink_100_100/0/1596010429246?e=1648684800&v=beta&t=9UG6xo7qxCtxxUf7DoZofHCHEsMPkqhkaTc-UAzX0UI"
            alt = "user-pic"
            className = 'img123' /
            >
            <
            div >
            <
            span className = { styles.postAuthor } > Aakasj < /span>  <
            span className = { styles.postTime } > a minute ago < /span>  <
            /div >  <
            /div>  <
            div className = { styles.postContent } > THIS IS A COMMENT ICON < /div>  <
            /div >  <
            /div>  <
            /div >
        );
    };

    export default Home;