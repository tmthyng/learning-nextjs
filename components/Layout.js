import Navigation from './Navigation'

const Layout = ({ children }) => {
  return (
    <div className='main'>
      <Navigation />
      { children }
    </div>
  );
}
 
export default Layout;
