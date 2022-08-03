import styles from '../components/styles/MyCompany.module.css'

const { card,card_pic,card_text} = styles

export default function Card(props) {
  const { pic, text,title } = props;
  return (
    <div className={card}>
      <img className={card_pic} src={pic} alt={title} />
      <div className={card_text}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}


