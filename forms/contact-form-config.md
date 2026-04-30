# Contact Form Configuration

This template is designed to work seamlessly with serverless form providers.

## Option 1: Netlify Forms (Recommended)
To enable Netlify forms, add the `data-netlify="true"` attribute to the `<form>` tag in `contact.html`.

```html
<form id="contactForm" class="contact-form" data-netlify="true">
```

## Option 2: Formspree
1. Create an account at [Formspree](https://formspree.io/).
2. Update the `action` attribute of the form:

```html
<form action="https://formspree.io/f/your-id" method="POST">
```

## Validation Logic
The validation is handled in `assets/js/form-handler.js`. It checks for:
- Required fields (Name, Email, Message)
- Valid email format
- Submission tracking for Google Analytics
