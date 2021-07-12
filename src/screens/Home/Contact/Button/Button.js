import './Button.scss';

// ? Button types are
// ?    1 - email
// ?    2 - phone

const Button = ({text, type}) => {

    const clickHandler = () => {
        switch(type){
            case 'email': window.location = `mailto:${text}`; return;
            case 'phone': window.location = `tel:${text}`; return;
        }
    }
    return (
        <div className="contact-button" onClick={clickHandler}>
            <img src={`/${type}.png`} />
            <span>{text}</span>
        </div>
    )
}

export default Button;