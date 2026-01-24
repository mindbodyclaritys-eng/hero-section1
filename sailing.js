            /* ================= ON LOAD ================= */
            window.addEventListener('load', () => {

                /* ================= CARD CLICK BLUE SHADOW ================= */
                const cards = document.querySelectorAll('.card');
                cards.forEach(card => {
                    card.addEventListener('click', () => {
                        cards.forEach(c => c.classList.remove('active-card'));
                        card.classList.add('active-card');
                    });
                });

                /* ================= VIEW DETAILS OVERLAY DATA ================= */
                const details = [
                    { title: 'Luxury Yacht', type: 'Yacht', description: 'This is a luxurious yacht with modern amenities. Price: $1,500,000' },
                    { title: 'Wedding Cruise', type: 'Wedding Ship', description: 'Perfect wedding cruise. Price: $800,000' },
                    { title: 'Fishing Boat', type: 'Fishing Ship', description: 'Durable fishing ship. Price: $120,000' },
                    { title: 'Premium Yacht', type: 'Yacht', description: 'Premium yacht with luxury interiors. Price: $2,200,000' },
                    { title: 'Romantic Wedding Ship', type: 'Wedding Ship', description: 'Ideal for wedding celebrations. Price: $950,000' },
                    { title: 'Speed Fishing Boat', type: 'Fishing Ship', description: 'Fast and efficient fishing boat. Price: $150,000' },
                    { title: 'Explorer Yacht', type: 'Yacht', description: 'Perfect yacht for long journeys. Price: $1,800,000' },
                    { title: 'Luxury Wedding Ship', type: 'Wedding Ship', description: 'Ideal for luxury wedding parties. Price: $1,100,000' }
                ];

                const overlay = document.getElementById('detailsOverlay');
                const overlayTitle = document.getElementById('overlayTitle');
                const overlayType = document.getElementById('overlayType');
                const overlayDescription = document.getElementById('overlayDescription');

                document.querySelectorAll('.view-btn').forEach((btn, index) => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        overlay.style.display = 'flex';
                        overlayTitle.textContent = details[index].title;
                        overlayType.textContent = "Type: " + details[index].type;
                        overlayDescription.textContent = details[index].description;
                    });
                });

                window.closeOverlay = () => overlay.style.display = 'none';

                window.openModal = (title, price, desc) => {
                    document.getElementById("modal").style.display = "block";
                    document.getElementById("mTitle").innerText = title;
                    document.getElementById("mPrice").innerText = price;
                    document.getElementById("mDesc").innerText = desc;
                };

                window.closeModal = () => {
                    document.getElementById("modal").style.display = "none";
                };

                /* ================= 🔥 LUXURY CAROUSEL – SMART START ================= */
                const yachtCarouselEl = document.querySelector('#carouselExampleIndicators');
                if (!yachtCarouselEl) return;

                const yachtCarousel = new bootstrap.Carousel(yachtCarouselEl, {
                    interval: 5000,
                    pause: false,
                    ride: false
                });

                let started = false;

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !started) {
                            started = true;

                            // 🔥 instant luxury feel
                            yachtCarousel.next();
                            yachtCarousel.cycle();

                            observer.disconnect(); // start only once
                        }
                    });
                }, {
                    threshold: 0.4
                });

                observer.observe(yachtCarouselEl);

            });
