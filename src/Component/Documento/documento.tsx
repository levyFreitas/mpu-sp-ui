import react from "react";
import './conteudo.css'

declare interface conteudoprops{
  children?: react.reactnode
}

const conteudo: react.FC<conteudoprops> = (props) => {
    return <div classname="Appconteudo">
        { props}
    </div>
}
