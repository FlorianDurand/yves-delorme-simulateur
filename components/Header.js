import Link from 'next/link';

const backStyle = {
  backgroundColor :'rgba(0, 0, 0, 0.1)',
  color : '#FFF',
  paddingTop : 10 
};

const absolute = {
  position : 'fixed',
  zIndex : 5
};

const back = {
  width : 30
}

const Header = () => (
  <div style={absolute}>
    <Link href="/" style={{ textDecoration : 'none'}}>
      <a style={backStyle}>
        <img src="/img/back.svg" alt="my image" style={back} />
        Retour au site
      </a>
    </Link>
    <div>
      <a>Settings</a>
    </div>
  </div>
);

export default Header;
