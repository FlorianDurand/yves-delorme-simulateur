import Header from '../components/Header';

const background = {
    width : '100vw',
    heigth : '100vh',
}

export default function Index() {
    return (
      <div>
        <Header />
        <img src="/img/background.png" alt="my image" style={background} />
        <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
      </div>
    );
}
