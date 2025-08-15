/**
 * Reality Protocol - Main JavaScript
 * Advanced functionality for optimal user experience and engagement
 */

// Global app state
const RealityProtocol = {
    initialized: false,
    userProfile: null,
    searchIndex: null,
    animations: new Map(),
    observers: new Map(),
    
    // Initialize the application
    async init() {
        if (this.initialized) return;
        
        try {
            // Load user profile
            this.loadUserProfile();
            
            // Initialize core modules
            await this.initializeModules();
            
            // Set up event listeners
            this.setupEventListeners();
            
            // Initialize performance monitoring
            this.initializePerformance();
            
            // Initialize accessibility features
            this.initializeAccessibility();
            
            this.initialized = true;
            console.log('Reality Protocol website initialized successfully');
            
        } catch (error) {
            console.error('Failed to initialize Reality Protocol website:', error);
        }
    },

    // Load user profile and preferences
    loadUserProfile() {
        const stored = localStorage.getItem('rp_user_profile');
        this.userProfile = stored ? JSON.parse(stored) : {
            sections: {},
            searchTerms: [],
            timeOnPage: Date.now(),
            preferences: {
                reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
                highContrast: window.matchMedia('(prefers-contrast: high)').matches,
                theme: 'dark' // Default theme
            }
        };
    },

    // Save user profile
    saveUserProfile() {
        localStorage.setItem('rp_user_profile', JSON.stringify(this.userProfile));
    },

    // Initialize core modules
    async initializeModules() {
        // Initialize search functionality
        await this.initializeSearch();
        
        // Initialize analytics
        this.initializeAnalytics();
        
        // Initialize progressive enhancement
        this.initializeProgressiveEnhancement();
        
        // Initialize smooth scrolling
        this.initializeSmoothScrolling();
        
        // Initialize lazy loading
        this.initializeLazyLoading();
    },

    // Set up event listeners
    setupEventListeners() {
        // Navigation
        this.setupNavigationListeners();
        
        // Search
        this.setupSearchListeners();
        
        // Audience tracking
        this.setupAudienceTracking();
        
        // Performance tracking
        this.setupPerformanceTracking();
        
        // Keyboard shortcuts
        this.setupKeyboardShortcuts();
    },

    // Initialize search functionality
    async initializeSearch() {
        // Build search index from documentation
        this.searchIndex = await this.buildSearchIndex();
        
        // Initialize search suggestions
        this.initializeSearchSuggestions();
    },

    // Build comprehensive search index
    async buildSearchIndex() {
        const documents = [
            // Core documentation
            {
                id: 'infinite-dimensionality',
                title: 'Infinite Dimensionality & Physical Emergence',
                url: 'whitepapers/infinite_dimensionality_emergence.html',
                category: 'Whitepaper',
                content: 'infinite dimensional emergence theory IDET quantum mechanics consciousness',
                tags: ['theory', 'quantum', 'consciousness', 'mathematics'],
                audience: ['researchers', 'developers'],
                difficulty: 'advanced'
            },
            {
                id: 'mathematical-foundations',
                title: 'Mathematical Foundations',
                url: 'whitepapers/mathematical_foundations_infinite_dimensionality.html',
                category: 'Whitepaper',
                content: 'mathematical rigorous proofs infinite dimensional analysis functional analysis',
                tags: ['mathematics', 'proofs', 'theory'],
                audience: ['researchers'],
                difficulty: 'expert'
            },
            {
                id: 'reality-exposition',
                title: 'Reality Exposition',
                url: 'whitepapers/reality_exposition_infinite_dimensionality.html',
                category: 'Whitepaper',
                content: 'accessible explanation infinite dimensions reality natural language',
                tags: ['beginner', 'explanation', 'accessible'],
                audience: ['explorers', 'investors'],
                difficulty: 'beginner'
            },
            {
                id: 'web3-stack',
                title: 'Web3 Technology Stack',
                url: 'whitepapers/web3_informational_singularity_stack.html',
                category: 'Whitepaper',
                content: 'web3 blockchain technology stack reality protocol smart contracts',
                tags: ['web3', 'blockchain', 'technology'],
                audience: ['developers', 'investors'],
                difficulty: 'intermediate'
            },
            {
                id: 'developer-quickstart',
                title: 'Developer Quick Start',
                url: 'reality_protocol/developer/quick_start.html',
                category: 'Developer Guide',
                content: 'getting started development building applications consciousness smart contracts',
                tags: ['development', 'tutorial', 'getting-started'],
                audience: ['developers'],
                difficulty: 'intermediate'
            },
            {
                id: 'api-reference',
                title: 'API Reference',
                url: 'reality_protocol/technical/api_reference.html',
                category: 'Technical Documentation',
                content: 'API reference documentation interfaces quantum computing consciousness',
                tags: ['API', 'reference', 'documentation'],
                audience: ['developers'],
                difficulty: 'intermediate'
            },
            {
                id: 'getting-started',
                title: 'Getting Started Guide',
                url: 'reality_protocol/user_guides/getting_started.html',
                category: 'User Guide',
                content: 'beginner guide getting started consciousness authentication reality creation',
                tags: ['beginner', 'guide', 'authentication'],
                audience: ['explorers', 'developers'],
                difficulty: 'beginner'
            },
            {
                id: 'contributing',
                title: 'Contributing Guide',
                url: 'reality_protocol/community/contributing.html',
                category: 'Community',
                content: 'contributing guide community development research collaboration',
                tags: ['community', 'contributing', 'collaboration'],
                audience: ['developers', 'researchers'],
                difficulty: 'intermediate'
            }
        ];

        // Create searchable index
        const index = {
            documents: new Map(),
            terms: new Map(),
            categories: new Set(),
            tags: new Set(),
            audiences: new Set()
        };

        documents.forEach(doc => {
            index.documents.set(doc.id, doc);
            index.categories.add(doc.category);
            doc.tags.forEach(tag => index.tags.add(tag));
            doc.audience.forEach(audience => index.audiences.add(audience));
            
            // Build term index
            const terms = [...doc.title.toLowerCase().split(/\s+/), 
                          ...doc.content.toLowerCase().split(/\s+/),
                          ...doc.tags];
            
            terms.forEach(term => {
                if (term.length < 2) return;
                if (!index.terms.has(term)) {
                    index.terms.set(term, new Set());
                }
                index.terms.get(term).add(doc.id);
            });
        });

        return index;
    },

    // Perform intelligent search
    performSearch(query, options = {}) {
        if (!this.searchIndex || !query || query.length < 2) {
            return [];
        }

        const {
            audience = null,
            category = null,
            maxResults = 10,
            includeSnippets = true
        } = options;

        const terms = query.toLowerCase().split(/\s+/).filter(term => term.length > 1);
        const results = new Map();

        // Score documents based on term matches
        terms.forEach(term => {
            // Exact matches
            if (this.searchIndex.terms.has(term)) {
                this.searchIndex.terms.get(term).forEach(docId => {
                    const doc = this.searchIndex.documents.get(docId);
                    if (!results.has(docId)) {
                        results.set(docId, { doc, score: 0, matchedTerms: [] });
                    }
                    results.get(docId).score += 10;
                    results.get(docId).matchedTerms.push(term);
                });
            }

            // Partial matches
            for (const [indexTerm, docIds] of this.searchIndex.terms) {
                if (indexTerm.includes(term) || term.includes(indexTerm)) {
                    docIds.forEach(docId => {
                        const doc = this.searchIndex.documents.get(docId);
                        if (!results.has(docId)) {
                            results.set(docId, { doc, score: 0, matchedTerms: [] });
                        }
                        results.get(docId).score += 5;
                        if (!results.get(docId).matchedTerms.includes(indexTerm)) {
                            results.get(docId).matchedTerms.push(indexTerm);
                        }
                    });
                }
            }
        });

        // Filter by audience and category
        let filteredResults = Array.from(results.values());
        
        if (audience) {
            filteredResults = filteredResults.filter(result => 
                result.doc.audience.includes(audience));
        }
        
        if (category) {
            filteredResults = filteredResults.filter(result => 
                result.doc.category === category);
        }

        // Sort by relevance
        filteredResults.sort((a, b) => {
            // Primary sort: score
            if (b.score !== a.score) return b.score - a.score;
            
            // Secondary sort: number of matched terms
            if (b.matchedTerms.length !== a.matchedTerms.length) {
                return b.matchedTerms.length - a.matchedTerms.length;
            }
            
            // Tertiary sort: difficulty (beginners first for equal relevance)
            const difficultyOrder = { 'beginner': 0, 'intermediate': 1, 'advanced': 2, 'expert': 3 };
            return difficultyOrder[a.doc.difficulty] - difficultyOrder[b.doc.difficulty];
        });

        // Add snippets if requested
        if (includeSnippets) {
            filteredResults.forEach(result => {
                result.snippet = this.generateSnippet(result.doc, result.matchedTerms, query);
            });
        }

        return filteredResults.slice(0, maxResults);
    },

    // Generate search result snippet
    generateSnippet(doc, matchedTerms, query) {
        const content = `${doc.title} ${doc.content}`;
        const queryTerms = query.toLowerCase().split(/\s+/);
        
        // Find best position for snippet
        let bestPosition = 0;
        let bestScore = 0;
        
        for (let i = 0; i < content.length - 150; i += 10) {
            const window = content.substring(i, i + 150).toLowerCase();
            const score = queryTerms.reduce((acc, term) => {
                return acc + (window.includes(term) ? 1 : 0);
            }, 0);
            
            if (score > bestScore) {
                bestScore = score;
                bestPosition = i;
            }
        }
        
        let snippet = content.substring(bestPosition, bestPosition + 150);
        
        // Clean up snippet
        snippet = snippet.replace(/^\S*\s/, ''); // Remove partial word at start
        snippet = snippet.replace(/\s\S*$/, ''); // Remove partial word at end
        
        // Highlight matched terms
        queryTerms.forEach(term => {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            snippet = snippet.replace(regex, `<mark>${term}</mark>`);
        });
        
        return snippet + '...';
    },

    // Initialize search suggestions
    initializeSearchSuggestions() {
        const suggestions = {
            popular: [
                'consciousness authentication',
                'infinite dimensional algorithms',
                'quantum consensus',
                'reality creation',
                'emergence mining',
                'smart contracts',
                'web3 technology',
                'mathematical foundations'
            ],
            byAudience: {
                developers: [
                    'API reference',
                    'smart contracts',
                    'quantum computing',
                    'development guide',
                    'code examples'
                ],
                researchers: [
                    'mathematical foundations',
                    'research collaboration',
                    'academic papers',
                    'theoretical framework',
                    'peer review'
                ],
                explorers: [
                    'consciousness expansion',
                    'getting started',
                    'reality exploration',
                    'personal development',
                    'community'
                ],
                investors: [
                    'token economics',
                    'market opportunities',
                    'business model',
                    'partnerships',
                    'technology stack'
                ]
            }
        };
        
        this.searchSuggestions = suggestions;
    },

    // Setup navigation listeners
    setupNavigationListeners() {
        const navbar = document.getElementById('navbar');
        const navToggle = document.getElementById('nav-toggle');
        
        if (!navbar) return;

        // Scroll behavior
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateNavbar = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Hide/show navbar based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 300) {
                navbar.classList.add('nav-hidden');
            } else {
                navbar.classList.remove('nav-hidden');
            }
            
            lastScrollY = currentScrollY;
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        });

        // Mobile menu toggle
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navbar.classList.toggle('nav-open');
                
                // Track mobile menu usage
                this.trackEvent('navigation', 'mobile_menu_toggle', {
                    open: navbar.classList.contains('nav-open')
                });
            });
        }

        // Close mobile menu on link click
        const navLinks = navbar.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('nav-open');
            });
        });
    },

    // Setup search listeners
    setupSearchListeners() {
        const searchInput = document.getElementById('doc-search');
        const searchResults = document.getElementById('search-results');
        
        if (!searchInput) return;

        let searchTimeout;
        
        // Real-time search
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            const query = e.target.value.trim();
            
            if (query.length < 2) {
                if (searchResults) searchResults.innerHTML = '';
                return;
            }
            
            searchTimeout = setTimeout(() => {
                this.executeSearch(query);
                this.trackSearchQuery(query);
            }, 300);
        });

        // Search on enter
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.executeSearch(e.target.value.trim());
            }
        });

        // Search suggestions
        const suggestionTags = document.querySelectorAll('.suggestion-tag');
        suggestionTags.forEach(tag => {
            tag.addEventListener('click', () => {
                const term = tag.textContent;
                searchInput.value = term;
                this.executeSearch(term);
                this.trackEvent('search', 'suggestion_clicked', { term });
            });
        });
    },

    // Execute search and display results
    executeSearch(query) {
        const searchResults = document.getElementById('search-results');
        if (!searchResults || !query) return;

        // Show loading state
        searchResults.innerHTML = '<div class="search-loading">🔍 Searching across documentation...</div>';

        // Perform search
        setTimeout(() => {
            const results = this.performSearch(query, {
                includeSnippets: true,
                maxResults: 10
            });

            this.displaySearchResults(results, query);
        }, 200); // Small delay for better UX
    },

    // Display search results
    displaySearchResults(results, query) {
        const searchResults = document.getElementById('search-results');
        if (!searchResults) return;

        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-no-results">
                    <p>No results found for "${query}"</p>
                    <p>Try different keywords or browse our <a href="reality_protocol/README.html">main documentation</a></p>
                </div>
            `;
            return;
        }

        const resultsHTML = `
            <div class="search-results-header">
                <h4>Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"</h4>
            </div>
            ${results.map(result => this.renderSearchResult(result)).join('')}
        `;

        searchResults.innerHTML = resultsHTML;

        // Track successful search
        this.trackEvent('search', 'results_displayed', {
            query,
            resultCount: results.length
        });
    },

    // Render individual search result
    renderSearchResult(result) {
        const { doc, snippet, score, matchedTerms } = result;
        
        return `
            <div class="search-result" data-score="${score}">
                <div class="search-result-header">
                    <a href="${doc.url}" class="search-result-title" onclick="RealityProtocol.trackResultClick('${doc.id}')">${doc.title}</a>
                    <span class="search-result-category">${doc.category}</span>
                </div>
                <p class="search-result-excerpt">${snippet}</p>
                <div class="search-result-meta">
                    <div class="search-result-url">${doc.url}</div>
                    <div class="search-result-tags">
                        ${doc.tags.slice(0, 3).map(tag => `<span class="result-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    // Track search result clicks
    trackResultClick(docId) {
        this.trackEvent('search', 'result_clicked', { docId });
    },

    // Track search queries
    trackSearchQuery(query) {
        if (!this.userProfile.searchTerms.includes(query)) {
            this.userProfile.searchTerms.push(query);
            if (this.userProfile.searchTerms.length > 50) {
                this.userProfile.searchTerms = this.userProfile.searchTerms.slice(-50);
            }
        }
        this.saveUserProfile();
    },

    // Setup audience tracking
    setupAudienceTracking() {
        const audienceCards = document.querySelectorAll('.audience-card');
        
        audienceCards.forEach(card => {
            const audience = card.getAttribute('data-audience');
            
            // Track hover interactions
            card.addEventListener('mouseenter', () => {
                this.trackAudienceInteraction(audience, 'hover');
            });
            
            // Track clicks
            card.addEventListener('click', () => {
                this.trackAudienceInteraction(audience, 'click');
            });
        });
    },

    // Track audience interactions
    trackAudienceInteraction(audience, action) {
        if (!this.userProfile.sections[audience]) {
            this.userProfile.sections[audience] = { hovers: 0, clicks: 0 };
        }
        
        this.userProfile.sections[audience][action + 's']++;
        this.saveUserProfile();
        
        this.trackEvent('audience', action, { audience });
    },

    // Setup keyboard shortcuts
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K for search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.getElementById('doc-search');
                if (searchInput) {
                    searchInput.focus();
                    this.trackEvent('keyboard', 'search_shortcut');
                }
            }
            
            // Escape to close mobile menu
            if (e.key === 'Escape') {
                const navbar = document.getElementById('navbar');
                if (navbar && navbar.classList.contains('nav-open')) {
                    navbar.classList.remove('nav-open');
                }
            }
        });
    },

    // Initialize analytics
    initializeAnalytics() {
        // Custom analytics implementation
        this.analytics = {
            events: [],
            pageViews: 0,
            sessionStart: Date.now(),
            
            track: (category, action, data = {}) => {
                const event = {
                    category,
                    action,
                    data,
                    timestamp: Date.now(),
                    url: window.location.pathname,
                    userAgent: navigator.userAgent,
                    ...data
                };
                
                this.analytics.events.push(event);
                
                // Send to analytics service (if available)
                if (typeof gtag !== 'undefined') {
                    gtag('event', action, {
                        event_category: category,
                        event_label: JSON.stringify(data)
                    });
                }
                
                // Limit stored events
                if (this.analytics.events.length > 100) {
                    this.analytics.events = this.analytics.events.slice(-50);
                }
            }
        };

        // Track page view
        this.trackEvent('page', 'view', {
            path: window.location.pathname,
            referrer: document.referrer
        });
    },

    // Track custom events
    trackEvent(category, action, data = {}) {
        if (this.analytics) {
            this.analytics.track(category, action, data);
        }
    },

    // Initialize performance monitoring
    initializePerformance() {
        // Monitor Core Web Vitals
        if ('PerformanceObserver' in window) {
            // Largest Contentful Paint
            const lcpObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    this.trackEvent('performance', 'lcp', {
                        value: Math.round(entry.startTime)
                    });
                }
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // First Input Delay
            const fidObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    this.trackEvent('performance', 'fid', {
                        value: Math.round(entry.processingStart - entry.startTime)
                    });
                }
            });
            fidObserver.observe({ entryTypes: ['first-input'] });

            // Cumulative Layout Shift
            const clsObserver = new PerformanceObserver((list) => {
                let clsValue = 0;
                for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                }
                this.trackEvent('performance', 'cls', {
                    value: Math.round(clsValue * 1000) / 1000
                });
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });
        }
    },

    // Initialize accessibility features
    initializeAccessibility() {
        // Announce page changes to screen readers
        this.announceToScreenReader = (message) => {
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.setAttribute('class', 'sr-only');
            announcement.textContent = message;
            
            document.body.appendChild(announcement);
            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 1000);
        };

        // Skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--color-primary);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    },

    // Initialize progressive enhancement
    initializeProgressiveEnhancement() {
        // Add 'js-enabled' class
        document.documentElement.classList.add('js-enabled');
        
        // Progressive enhancement for animations
        if (!this.userProfile.preferences.reducedMotion) {
            this.initializeAnimations();
        }
        
        // Progressive enhancement for interactions
        this.initializeInteractionEnhancements();
    },

    // Initialize animations
    initializeAnimations() {
        // Intersection Observer for scroll animations
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    animationObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        // Observe elements for animation
        const animatableElements = document.querySelectorAll(
            '.audience-card, .feature-card, .doc-category, .stat-card, .community-link'
        );
        
        animatableElements.forEach(el => {
            el.classList.add('animate-on-scroll');
            animationObserver.observe(el);
        });

        // Counter animations
        this.initializeCounterAnimations();
    },

    // Initialize counter animations
    initializeCounterAnimations() {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target')) || 0;
                    this.animateCounter(counter, 0, target, 2000);
                    counterObserver.unobserve(counter);
                }
            });
        });

        const counters = document.querySelectorAll('[data-target]');
        counters.forEach(counter => counterObserver.observe(counter));
    },

    // Animate counter
    animateCounter(element, start, end, duration) {
        const range = end - start;
        let current = start;
        const increment = range / (duration / 16);
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const eased = progress < 0.5 
                ? 2 * progress * progress 
                : -1 + (4 - 2 * progress) * progress;
            
            current = start + (range * eased);
            
            if (end === Infinity || isNaN(end)) {
                element.textContent = '∞';
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = end === Infinity ? '∞' : end.toLocaleString();
            }
        };
        
        requestAnimationFrame(animate);
    },

    // Initialize interaction enhancements
    initializeInteractionEnhancements() {
        // Enhanced hover effects
        const enhanceableElements = document.querySelectorAll(
            '.audience-card, .feature-card, .doc-link, .community-link'
        );
        
        enhanceableElements.forEach(el => {
            el.addEventListener('mouseenter', (e) => {
                this.addHoverEffect(e.target);
            });
            
            el.addEventListener('mouseleave', (e) => {
                this.removeHoverEffect(e.target);
            });
        });
    },

    // Add hover effect
    addHoverEffect(element) {
        if (this.userProfile.preferences.reducedMotion) return;
        
        element.style.transition = 'all 0.3s ease';
        element.style.transform = 'translateY(-4px)';
    },

    // Remove hover effect
    removeHoverEffect(element) {
        if (this.userProfile.preferences.reducedMotion) return;
        
        element.style.transform = 'translateY(0)';
    },

    // Initialize smooth scrolling
    initializeSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    const headerHeight = 80;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL without triggering navigation
                    history.pushState(null, '', anchor.getAttribute('href'));
                }
            });
        });
    },

    // Initialize lazy loading
    initializeLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    },

    // Setup performance tracking
    setupPerformanceTracking() {
        // Track time on page
        window.addEventListener('beforeunload', () => {
            const timeOnPage = Date.now() - this.userProfile.timeOnPage;
            this.trackEvent('engagement', 'time_on_page', {
                duration: Math.round(timeOnPage / 1000)
            });
        });

        // Track scroll depth
        let maxScrollDepth = 0;
        const trackScrollDepth = () => {
            const scrollPercentage = Math.round(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
            );
            
            if (scrollPercentage > maxScrollDepth) {
                maxScrollDepth = scrollPercentage;
                
                // Track milestones
                if ([25, 50, 75, 90].includes(scrollPercentage)) {
                    this.trackEvent('engagement', 'scroll_depth', {
                        percentage: scrollPercentage
                    });
                }
            }
        };

        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(trackScrollDepth, 100);
        });
    },

    // Get user insights for personalization
    getUserInsights() {
        const insights = {
            primaryInterest: this.getPrimaryInterest(),
            experienceLevel: this.getExperienceLevel(),
            engagementLevel: this.getEngagementLevel(),
            preferredContent: this.getPreferredContent()
        };
        
        return insights;
    },

    // Determine primary interest based on interactions
    getPrimaryInterest() {
        const sections = this.userProfile.sections;
        const interests = Object.keys(sections);
        
        if (interests.length === 0) return 'unknown';
        
        const sorted = interests.sort((a, b) => {
            const scoreA = (sections[a].hovers || 0) + (sections[a].clicks || 0) * 3;
            const scoreB = (sections[b].hovers || 0) + (sections[b].clicks || 0) * 3;
            return scoreB - scoreA;
        });
        
        return sorted[0];
    },

    // Determine experience level from search terms and interactions
    getExperienceLevel() {
        const searchTerms = this.userProfile.searchTerms;
        const advancedTerms = ['quantum', 'infinite', 'mathematical', 'algorithm', 'consensus'];
        const beginnerTerms = ['getting started', 'tutorial', 'guide', 'introduction'];
        
        const advancedCount = searchTerms.filter(term => 
            advancedTerms.some(advanced => term.toLowerCase().includes(advanced))
        ).length;
        
        const beginnerCount = searchTerms.filter(term => 
            beginnerTerms.some(beginner => term.toLowerCase().includes(beginner))
        ).length;
        
        if (advancedCount > beginnerCount) return 'advanced';
        if (beginnerCount > advancedCount) return 'beginner';
        return 'intermediate';
    },

    // Calculate engagement level
    getEngagementLevel() {
        const totalInteractions = Object.values(this.userProfile.sections)
            .reduce((total, section) => 
                total + (section.hovers || 0) + (section.clicks || 0), 0);
        
        const timeOnPage = Date.now() - this.userProfile.timeOnPage;
        const searchQueries = this.userProfile.searchTerms.length;
        
        const score = totalInteractions + (timeOnPage / 30000) + searchQueries * 2;
        
        if (score > 50) return 'high';
        if (score > 20) return 'medium';
        return 'low';
    },

    // Get preferred content types
    getPreferredContent() {
        const searchTerms = this.userProfile.searchTerms;
        const contentTypes = {
            technical: ['api', 'reference', 'development', 'code', 'implementation'],
            theoretical: ['theory', 'mathematics', 'research', 'paper', 'analysis'],
            practical: ['guide', 'tutorial', 'getting started', 'example', 'how to'],
            community: ['community', 'contributing', 'collaboration', 'discussion']
        };
        
        const scores = {};
        
        Object.keys(contentTypes).forEach(type => {
            scores[type] = searchTerms.filter(term =>
                contentTypes[type].some(keyword => 
                    term.toLowerCase().includes(keyword))
            ).length;
        });
        
        const sortedTypes = Object.keys(scores)
            .sort((a, b) => scores[b] - scores[a]);
        
        return sortedTypes[0] || 'practical';
    }
};

// Navigation to audience-specific pages
function navigateToAudience(audienceType) {
    // Show loading
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'flex';
    }
    
    // Track audience selection
    RealityProtocol.trackEvent('navigation', 'audience_selection', {
        audience: audienceType,
        timestamp: Date.now()
    });

    // Store audience preference
    RealityProtocol.userProfile.selectedAudience = audienceType;
    RealityProtocol.saveUserProfile();

    // Define routes for each audience
    const routes = {
        developers: 'reality_protocol/developer/quick_start.html',
        researchers: 'whitepapers/mathematical_foundations_infinite_dimensionality.html',
        explorers: 'whitepapers/reality_exposition_infinite_dimensionality.html',
        investors: 'whitepapers/web3_informational_singularity_stack.html'
    };

    // Navigate with smooth transition
    setTimeout(() => {
        window.location.href = routes[audienceType] || 'reality_protocol/README.html';
    }, 300);
}

// Global search function
function performSearch(query = null) {
    const searchInput = document.getElementById('doc-search');
    const searchQuery = query || (searchInput && searchInput.value.trim());
    
    if (searchQuery) {
        RealityProtocol.executeSearch(searchQuery);
    }
}

// Search for specific term
function searchFor(term) {
    const searchInput = document.getElementById('doc-search');
    if (searchInput) {
        searchInput.value = term;
        RealityProtocol.executeSearch(term);
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        RealityProtocol.init();
    });
} else {
    RealityProtocol.init();
}

// Export for global access
window.RealityProtocol = RealityProtocol;
window.navigateToAudience = navigateToAudience;
window.performSearch = performSearch;
window.searchFor = searchFor;