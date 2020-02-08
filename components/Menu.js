import styles from './Menu.module.css';
import Button from './Styles/Button';
import Filter from './Filter';
import Article from './Article';

const articles = [
	{
		name : 'article 1',
		image : '/static/article.png',
		description: 'Satin - 120 fil/m²'
	},
	{
		name : 'article 2',
		image : '/static/article.png',
		description: 'Coton - 120 fil/m²'
	},
	{
		name : 'article 3',
		image : '/static/article.png',
		description: 'Coton - 120 fil/m²'
	}

]

const Menu = () => (
  <div className={styles.menu}>
    <h1 className={styles.title}>Housse de couette</h1>
    <Filter />
	<div className={styles.articles}>
		{articles.map(article=>
				<Article {...article }  key={article.name} />
			)} 
	</div>
  </div>
);

export default Menu;