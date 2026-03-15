document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
});

async function handleFormSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    message: formData.get('message')
  };
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      alert('Thank you for your inquiry! We will contact you soon.');
      e.target.reset();
    } else {
      alert('There was an error submitting your form. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error submitting your form. Please try again.');
  }
}