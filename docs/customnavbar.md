## **FinnehCSS Documentation**

### **Creating a Custom Navbar**

To create a custom navbar in FinnehCSS, follow these steps:

1. **Create a new CSS file:** Create a new CSS file named `navbar-c.css` in your project's `components` directory.
2. **Define the navbar structure:** Inside `navbar-c.css`, define the HTML structure of your navbar using CSS classes from FinnehCSS or your own custom classes.
3. **Apply styles:** Customize the appearance of your navbar by adding CSS rules to `navbar-c.css`. Use FinnehCSS's utility classes or create your own custom classes to style the navbar elements.
4. **Import the navbar file:** In your `components.css` file, import the `navbar-c.css` file into the custom layer:
   ```css
   /* ... other imports ... */

   @import './navbar-c.css' layer(custom);
   ```

**Example:**

```css
/* navbar-c.css */

.navbar {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

.navbar-brand {
  font-size: 1.2em;
}

.navbar-nav {
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-nav li {
  display: inline-block;
  margin-right: 15px;
}

.navbar-nav a {
  color: #fff;
  text-decoration: none;
}

.navbar-nav a:hover {
  text-decoration: underline;
}
```

**Using the custom navbar:**

Once you've created and imported the `navbar-c.css` file, you can use the `navbar` class to apply the navbar styles to your HTML element:

```html
<nav class="navbar">
  <a class="navbar-brand" href="#">My Website</a>
  <ul class="navbar-nav">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

This will create a simple navbar with a brand name and navigation links, styled according to the rules defined in `navbar-c.css`. You can further customize the navbar by adding more elements, modifying the styles, or using FinnehCSS's utility classes.
