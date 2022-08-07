import styles from '../components/styles/MyCompany.module.css'

const { search,search_btn,search_input } = styles;

export default function Search() {
  return (
    <div id={search}>
      <input id={search_input} type="text" placeholder=""></input>
      <button id={search_btn}>SEARCH</button>
    </div>
  );
}