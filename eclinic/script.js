
document.getElementById('auth-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (isLogin) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User signed in:', userCredential.user);
      })
      .catch((error) => {
        console.error('Error signing in:', error);
      });
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User created:', userCredential.user);
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  }
});


document.addEventListener('DOMContentLoaded', () => {
    // Book Appointment Button
    document.querySelector('.hero .btn-primary')?.addEventListener('click', () => {
        window.location.href = 'appointment.html';
    });

    // Contact Button
    document.getElementById('contactBtn')?.addEventListener('click', () => {
        const email = 'info@eclinic.com';
        window.location.href = `mailto:${email}`;
    });

    // Service Buttons Navigation
    document.querySelectorAll('.service-card .btn-secondary').forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.getAttribute('href')) {
                // If it's a link (has href), let it navigate naturally
                return;
            }
            const service = e.target.parentElement.querySelector('h3').textContent;
            alert(`${service} feature coming soon!`);
        });
    });

    // Online Consultation Card Interaction
    const consultationCard = document.querySelector('.service-card:first-child');
    if (consultationCard) {
        const learnMoreBtn = consultationCard.querySelector('.btn-secondary');
        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', () => {
                window.location.href = 'consultation.html';
            });
        }
    }

    // Close expanded card when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.service-card')) {
            const expandedCard = document.querySelector('.service-card.expanded');
            if (expandedCard) {
                expandedCard.classList.remove('expanded');
                const expandedContent = expandedCard.querySelector('.expanded-content');
                if (expandedContent) {
                    expandedContent.remove();
                }
            }
        }
    });
});
