import Profile from './profile/Profile'
import './App.css';
import me from './profile/me.jpg';

function App() {
  const btnalerte = () => {
    alert('Slim Dridi');
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Profile FullName="Slim Dridi" bio="Ouardia" age="22 yo " profession="Gamer" >
        <img style={{ borderRadius: ' 50px', width: '30%' }} src={me} alt="My Pic" />
      </Profile>
      <button style={{ marginTop: '5px' }} onClick={btnalerte}> Button </button>
    </div>
  );
}

export default App;
