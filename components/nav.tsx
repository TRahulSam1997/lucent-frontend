const Nav = () => {
  return (
    <nav>
      <ul style={{ display: "flex", flexDirection: "row" }}>
        <li style={{ padding: '8px' }}><a href="#">Lucent</a></li>
        <li style={{ padding: '8px' }}><a href="#">Salon</a></li>
        <li style={{ padding: '8px' }}><a href="#">Blog</a></li>
        <li style={{ padding: '8px' }}><a href="#">Resources</a></li>
        <li style={{ padding: '8px' }}><a href="#">Sign In</a></li>
        <li style={{ padding: '8px' }}><a href="#">Get started </a></li>
      </ul>
    </nav>
  );
}

export default Nav;