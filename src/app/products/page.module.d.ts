// app/products/page.module.d.ts

// Define an interface for the CSS module
interface PageCSSModule {
    [className: string]: string; // Define class names and their types
  }
  
  // Export the interface as the default export
  declare const styles: PageCSSModule;
  export default styles;