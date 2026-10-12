window.initContacts = function () {
  var config = window.CONNECTIVE_CONFIG || {};
  var phone = String(config.whatsapp || '').replace(/[+\s()-]/g, '');
  var validPhone = /^[1-9]\d{7,14}$/.test(phone);
  var notice = document.getElementById('contact-notice');
  document.querySelectorAll('[data-whatsapp]').forEach(function (link) {
    if (validPhone) {
      link.href = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(link.dataset.whatsapp);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else { link.href = '#contact-details'; }
    link.addEventListener('click', function () {
      if (!validPhone) {
        notice.hidden = false;
        notice.textContent = 'Kontak WhatsApp resmi sedang disiapkan. Silakan kunjungi kembali untuk memulai percakapan.';
        return;
      }
      var source = link.dataset.source || 'unknown';
      // Works with a configured Plausible or Umami installation; no personal data.
      if (typeof window.plausible === 'function') window.plausible('WhatsApp Click', { props: { source: source } });
      if (window.umami && typeof window.umami.track === 'function') window.umami.track('whatsapp_click', { source: source });
      window.dispatchEvent(new CustomEvent('connective:whatsapp-click', { detail: { source: source } }));
    });
  });
  var phoneEl = document.querySelector('[data-contact="phone"]');
  if (validPhone) phoneEl.textContent = '+' + phone;
  var email = String(config.email || '').trim();
  var emailEl = document.querySelector('[data-contact="email"]');
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { emailEl.href = 'mailto:' + email; emailEl.textContent = email; emailEl.hidden = false; }
  var handle = String(config.instagram || '').trim().replace(/^@/, '');
  var instaEl = document.querySelector('[data-contact="instagram"]');
  if (/^[a-zA-Z0-9._]{1,30}$/.test(handle)) {
    instaEl.href = 'https://www.instagram.com/' + encodeURIComponent(handle) + '/';
    instaEl.textContent = '@' + handle; instaEl.hidden = false;
    var schema = document.querySelector('script[type="application/ld+json"]');
    try { var org = JSON.parse(schema.textContent); org.sameAs = [instaEl.href]; schema.textContent = JSON.stringify(org); } catch (_) {}
  }
};