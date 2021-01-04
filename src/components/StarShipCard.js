import styles from './StarShipCard.module.css';

const StarShipCard = (props) => (
    <div className={styles.Cards}>
        Name: {props.result.name}
        <br />
        Class: {props.result.model}
        <br />
       Starship Class: {props.result.starship_class}
    </div>
);

export default StarShipCard;