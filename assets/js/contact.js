(() => {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const services = form.querySelectorAll('input[name="service"]');
  const requireService = () => {
    const selected = Array.from(services).some(input => input.checked);
    services[0].setCustomValidity(selected ? '' : 'Choose at least one service.');
  };
  services.forEach(input => input.addEventListener('change', requireService));

  form.addEventListener('submit', event => {
    event.preventDefault();
    requireService();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const selectedServices = data.getAll('service');
    const body = [
      'TaxiSnaps photo booth enquiry',
      '',
      `Name: ${[data.get('prefix'), data.get('first-name'), data.get('last-name')].filter(Boolean).join(' ')}`,
      `Email: ${data.get('email')}`,
      `Telephone: ${data.get('telephone')}`,
      `Service: ${selectedServices.join(', ')}`,
      `Preferred hire duration: ${data.get('duration')}`,
      `Venue name/postcode: ${data.get('venue')}`,
      `Date required: ${data.get('date')}`,
      `Marketing offers opt-in: ${data.has('marketing') ? 'Yes' : 'No'}`
    ].join('\n');

    const subject = 'TaxiSnaps photo booth enquiry';
    window.location.href = `mailto:info@taxisnaps.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    form.querySelector('[data-contact-status]').textContent = 'Your email application should open with this enquiry in a draft. Review it there and choose whether to send it.';
  });
})();