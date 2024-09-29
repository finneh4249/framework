## FinnehCSS: A Layered Approach to Responsive Web Design

**Understanding CSS Layers**

FinnehCSS employs a layered approach to organising your CSS, breaking down the length of your stylesheet into more manageable sections. This structure enhances code readability, maintainability, and reusability.

### The Layers:

1. **Reset:**
   * Provides a consistent baseline for all elements, ensuring cross-browser compatibility and eliminating default styles.
   * Includes rules to normalize margins, paddings, fonts, and other common properties.
   * Examples of reset rules might include:
     ```css
     body {
       margin: 0;
       padding: 0;
     }

     h1, h2, h3, h4, h5, h6, p {
       margin: 0;
     }
     ```

2. **Base:**
   * Defines the foundation for your website's visual style.
   * Includes global styles like typography, colors, and general layout settings.
   * Examples of base styles include:
     ```css
     body {
       background-color: var(--clr-neutral-a10);
     }

     h1 {
       font-family: "Montserrat", "Arial", sans-serif;
     }
     ```

3. **Components:**
   * Houses styles for specific reusable UI elements.
   * Examples include buttons, navigation menus, forms, cards, and other common components.
   * Each component has its own CSS file to promote modularity and reusability.
   * For example, `buttons.css` contain styles for different button types:
     ```css
     .button-primary {
       background-color: #007bff;
       color: #fff;
       padding: 10px 20px;
       border: none;
       cursor: pointer;
     }

     .button-secondary {
       background-color: #f0f0f0;
       color: #333;
       border: 1px solid #ccc;
       padding: 10px 20px;
       cursor: pointer;
     }
     ```

4. **Utilities:**
   * Offers a collection of low-level utility classes for quick styling adjustments.
   * Includes classes for spacing, sizing, alignment, display properties, and more.
   * Utility classes can be used to rapidly style elements without creating custom CSS rules.
   * For example, `spacing.css` contains utility classes for different margin and padding values:
     ```css
     .m-0 {
       margin: 0;
     }

     .m-2 {
       margin: 0.5rem;
     }

     .p-4 {
       padding: 1rem;
     }
     ```

5. **Page:**
   * A dedicated space for your custom styles related to a specific page.
   * Allows you to override or extend existing styles to create unique page-specific layouts and designs.
   * For example, a `homepage.css` file might contain styles specific to the homepage:
     ```css
     .hero-section {
       background-image: url('hero-image.jpg');
       background-size: cover;
       height: 300px;
     }
     ```

**Benefits of the Layered Approach:**

* **Improved Readability:** The organised structure makes your CSS easier to understand and navigate.
* **Enhanced Maintainability:** Changes to components or utilities can be made without affecting the entire stylesheet.
* **Increased Reusability:** Reusable components and utility classes promote efficient development.
* **Better Scalability:** As your project grows, the layered approach helps manage complexity.
* **Improved Organization:** By separating styles into different layers, you can more easily manage and maintain your codebase.
* **Easier Collaboration:** The layered approach can make it easier for multiple developers to work on the same project without stepping on each other's toes.

By following this layered structure, you can create well-organized, maintainable, and scalable CSS for your projects.

### Installation

**Using npm:**

1. Create a new project directory.
2. Initialize npm: `npm init -y`
3. Install FinnehCSS: `npm install finnehcss`

**Using yarn:**

1. Create a new project directory.
2. Initialize yarn: `yarn init -y`
3. Install FinnehCSS: `yarn add finnehcss`

**Manual Installation:**

1. Download the latest FinnehCSS release from [GitHub repository link].
2. Extract the contents to your project's `assets/css` directory.
3. Include the `finnehcss.css` file in your HTML `<head>`:

   ```html
   <link rel="stylesheet" href="assets/css/finnehcss.css">
   ```

### Usage

**Basic Usage:**

To use FinnehCSS, simply include the `finnehcss.css` file in your HTML `<head>` as shown above. You can then use the framework's built-in classes to style your elements.

**Example:**

```html
<div class="container">
  <h1 class="text-center">Welcome to FinnehCSS</h1>
  <p class="lead">This is a paragraph with the "lead" class.</p>
  <button class="btn btn-primary">Click me</button>
</div>
```

### Customizing FinnehCSS

You can customize FinnehCSS by overriding its default styles or creating your own custom classes.

**Overriding Default Styles:**

To override a default style, simply create a more specific CSS rule. For example, to change the background color of the `.container` class:

```css
.container {
  background-color: #f0f0f0;
}
```

**Creating Custom Classes:**

You can create your own custom classes to style your elements. For example, to create a custom class for a heading:

```css
.my-heading {
  font-size: 2em;
  color: #333;
}
```

### Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch.**
3. **Make your changes.**
4. **Submit a pull request.**

Please make sure your changes adhere to the project's coding style and guidelines.

### Security

FinnehCSS is committed to providing a secure and reliable framework. We take security seriously and strive to address any vulnerabilities promptly. If you discover a security issue, please report it to us privately through GitHub.

### License

FinnehCSS is licensed under the MIT License. See the LICENSE file for more details.

### Additional Notes

* FinnehCSS is still under development, so please be aware that the API and features may change.
* For more information and examples, please refer to the FinnehCSS documentation.
