(function() {
      const fadeElements = document.querySelectorAll('.fade-up');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      }, { threshold: 0.15 });
      fadeElements.forEach(el => observer.observe(el));

      const hamburger = document.getElementById('hamburger');
      const navLinks = document.getElementById('navLinks');
      hamburger?.addEventListener('click', () => navLinks.classList.toggle('active'));

      const navItems = document.querySelectorAll('.nav-links a');
      window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section[id]').forEach(section => {
          if (window.scrollY >= section.offsetTop - 120) current = section.getAttribute('id');
        });
        navItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
      });

      document.getElementById('getStartedBtn')?.addEventListener('click', () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }));
      document.getElementById('viewWorkBtn')?.addEventListener('click', () => {
        const p = document.getElementById('portfolio');
        p ? p.scrollIntoView({ behavior: 'smooth' }) : alert('Portfolio coming soon!');
      });
      document.getElementById('resumeCta')?.addEventListener('click', () => document.getElementById('services').scrollIntoView({ behavior: 'smooth' }));
      document.getElementById('contactFromAbout')?.addEventListener('click', () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }));

      document.getElementById('demoForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Message sent (demo).');
        e.target.reset();
      });

      document.querySelector('.newsletter-form button')?.addEventListener('click', () => {
        const inp = document.querySelector('.newsletter-form input');
        inp && inp.value.includes('@') ? alert('Subscribed!') : alert('Enter valid email.');
      });

      document.querySelectorAll('.service-link').forEach(l => l.addEventListener('click', e => { e.preventDefault(); alert('Details coming soon.'); }));
    })();