## **FinnehCSS Documentation**

### **Quick Start**

**Installation**

* **Using npm:**
  ```bash
  npm install finnehcss
  ```
* **Using yarn:**
  ```bash
  yarn add finnehcss
  ```
* **Manual Installation:**
  1. Download the latest FinnehCSS release from [GitHub repository link].
  2. Extract the contents to your project's `assets/css` directory.
  3. Include the `finnehcss.css` file in your HTML `<head>`:
     ```html
     <link rel="stylesheet" href="assets/css/finnehcss.css">
     ```
  4. Include the `finnehcss.js` file in your HTML `<body>`:
     ```html
     <script src="assets/js/finnehcss.js"></script>
     ```

**Basic Usage**

1. **Create a new HTML file.**
2. Include the `finnehcss.css` and `finnehcss.js` files in the `<head>` and `<body>` sections, respectively.
3. Start using the framework's classes to style your elements and leverage its JavaScript features.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>My FinnehCSS Website</title>
  <link rel="stylesheet" href="assets/css/finnehcss.css">
</head>
<body>
  <div class="container">
    <h1 class="text-center">Welcome to FinnehCSS</h1>
    <p class="lead">This is a paragraph with the "lead" class.</p>
    <button class="btn btn-primary" data-toggle="modal" data-target="#myModal">Click me</button>
  </div>

  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  <script src="assets/js/finnehcss.js"></script>
</body>
</html>
```

In this example, we're using the `data-toggle` and `data-target` attributes to trigger a modal using FinnehCSS's JavaScript functionality.

**That's it!** You've now successfully installed and started using FinnehCSS, including its JavaScript features.
