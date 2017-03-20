import styles from './CommonFooter.css';

const CommonFooter = function({ serverQQ, sponsor }){
	return (
		<div className={styles.main}>
      <footer>
        <h3>技术交流QQ群：{serverQQ}</h3>
        <p>主办方：{sponsor}</p>
      </footer>
		</div>
	);
};

export default  CommonFooter;
