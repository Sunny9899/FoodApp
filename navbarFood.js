function Navbar(){

return `
<h3><a href="search.html">Home</a></h3>

<h3 id="Search"> 
    <input type="text" placeholder="Whats cooking in your mind Today" id="search"/>
    <button id="submit">Search</button>
</h3>
<div id="options">
   <h3><a href="ROD.html">Today's Special</a></h3>
   <h3><a href="latest.html">Latest</a></h3>        
</div>
`

}

export default Navbar;