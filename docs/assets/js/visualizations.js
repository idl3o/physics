/**
 * Reality Protocol - Interactive Visualizations
 * Advanced visualizations for infinite-dimensional concepts and consciousness representation
 */

class QuantumFieldVisualization {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            particleCount: 50,
            fieldIntensity: 0.8,
            quantumFluctuations: true,
            entanglementConnections: true,
            ...options
        };
        this.particles = [];
        this.connections = [];
        this.animationId = null;
        
        this.init();
    }

    init() {
        if (!this.container) return;
        
        this.setupCanvas();
        this.createParticles();
        this.setupInteraction();
        this.animate();
    }

    setupCanvas() {
        // Create SVG for quantum field visualization
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('width', '100%');
        this.svg.setAttribute('height', '100%');
        this.svg.style.position = 'absolute';
        this.svg.style.top = '0';
        this.svg.style.left = '0';
        
        // Create defs for gradients and patterns
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        
        // Quantum field gradient
        const fieldGradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
        fieldGradient.setAttribute('id', 'quantumField');
        fieldGradient.innerHTML = `
            <stop offset="0%" stop-color="#6366f1" stop-opacity="0.3"/>
            <stop offset="50%" stop-color="#8b5cf6" stop-opacity="0.1"/>
            <stop offset="100%" stop-color="transparent"/>
        `;
        
        // Particle glow
        const particleGlow = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
        particleGlow.setAttribute('id', 'particleGlow');
        particleGlow.innerHTML = `
            <feGaussianBlur stdDeviation="3"/>
            <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        `;
        
        defs.appendChild(fieldGradient);
        defs.appendChild(particleGlow);
        this.svg.appendChild(defs);
        
        this.container.appendChild(this.svg);
    }

    createParticles() {
        const rect = this.container.getBoundingClientRect();
        
        for (let i = 0; i < this.options.particleCount; i++) {
            const particle = {
                id: `particle_${i}`,
                x: Math.random() * rect.width,
                y: Math.random() * rect.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                spin: Math.random() * 360,
                spinVelocity: (Math.random() - 0.5) * 4,
                energy: Math.random(),
                phase: Math.random() * Math.PI * 2,
                entangled: null,
                element: null
            };
            
            // Create SVG element for particle
            particle.element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            particle.element.setAttribute('r', 2 + particle.energy * 3);
            particle.element.setAttribute('fill', this.getParticleColor(particle.energy));
            particle.element.setAttribute('filter', 'url(#particleGlow)');
            particle.element.style.opacity = 0.7 + particle.energy * 0.3;
            
            this.svg.appendChild(particle.element);
            this.particles.push(particle);
        }
        
        // Create quantum entanglements
        if (this.options.entanglementConnections) {
            this.createEntanglements();
        }
    }

    getParticleColor(energy) {
        const colors = [
            '#6366f1', // Low energy - blue
            '#8b5cf6', // Medium energy - purple  
            '#06b6d4', // High energy - cyan
            '#10b981'  // Very high energy - green
        ];
        
        const index = Math.floor(energy * (colors.length - 1));
        return colors[index];
    }

    createEntanglements() {
        // Create quantum entanglement connections between random particles
        const entanglementCount = Math.floor(this.options.particleCount * 0.2);
        
        for (let i = 0; i < entanglementCount; i++) {
            const particle1 = this.particles[Math.floor(Math.random() * this.particles.length)];
            const particle2 = this.particles[Math.floor(Math.random() * this.particles.length)];
            
            if (particle1 !== particle2 && !particle1.entangled && !particle2.entangled) {
                // Create entanglement connection
                const connection = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                connection.setAttribute('stroke', '#6366f1');
                connection.setAttribute('stroke-width', '1');
                connection.setAttribute('stroke-opacity', '0.3');
                connection.setAttribute('stroke-dasharray', '5,5');
                connection.style.animation = 'quantumEntanglement 2s infinite';
                
                this.svg.insertBefore(connection, this.svg.firstChild);
                
                particle1.entangled = particle2;
                particle2.entangled = particle1;
                
                this.connections.push({
                    element: connection,
                    particle1: particle1,
                    particle2: particle2
                });
            }
        }
    }

    setupInteraction() {
        // Mouse interaction affects quantum field
        this.container.addEventListener('mousemove', (e) => {
            const rect = this.container.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            this.particles.forEach(particle => {
                const dx = mouseX - particle.x;
                const dy = mouseY - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    particle.vx += (dx / distance) * force * 0.5;
                    particle.vy += (dy / distance) * force * 0.5;
                    particle.energy = Math.min(1, particle.energy + force * 0.1);
                }
            });
        });

        // Click creates quantum measurement collapse
        this.container.addEventListener('click', (e) => {
            const rect = this.container.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            this.createMeasurementCollapse(clickX, clickY);
        });
    }

    createMeasurementCollapse(x, y) {
        // Create expanding circle for measurement effect
        const collapse = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        collapse.setAttribute('cx', x);
        collapse.setAttribute('cy', y);
        collapse.setAttribute('r', '0');
        collapse.setAttribute('fill', 'none');
        collapse.setAttribute('stroke', '#06b6d4');
        collapse.setAttribute('stroke-width', '2');
        collapse.setAttribute('opacity', '0.8');
        
        this.svg.appendChild(collapse);
        
        // Animate collapse
        collapse.style.animation = 'dimensionalRipple 1s ease-out forwards';
        
        // Remove after animation
        setTimeout(() => {
            if (collapse.parentNode) {
                collapse.parentNode.removeChild(collapse);
            }
        }, 1000);
        
        // Affect nearby particles
        this.particles.forEach(particle => {
            const dx = x - particle.x;
            const dy = y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                // Measurement collapses wavefunction
                particle.vx *= 0.5;
                particle.vy *= 0.5;
                particle.energy *= 0.8;
                
                // Update entangled particle
                if (particle.entangled) {
                    particle.entangled.energy = particle.energy;
                    particle.entangled.phase = -particle.phase;
                }
            }
        });
    }

    animate() {
        const rect = this.container.getBoundingClientRect();
        
        this.particles.forEach(particle => {
            // Update position with quantum fluctuations
            if (this.options.quantumFluctuations) {
                particle.vx += (Math.random() - 0.5) * 0.1;
                particle.vy += (Math.random() - 0.5) * 0.1;
            }
            
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.spin += particle.spinVelocity;
            particle.phase += 0.02;
            
            // Boundary conditions (periodic)
            if (particle.x < 0) particle.x = rect.width;
            if (particle.x > rect.width) particle.x = 0;
            if (particle.y < 0) particle.y = rect.height;
            if (particle.y > rect.height) particle.y = 0;
            
            // Apply quantum phase oscillation
            const phaseOpacity = 0.5 + 0.5 * Math.sin(particle.phase);
            
            // Update particle element
            particle.element.setAttribute('cx', particle.x);
            particle.element.setAttribute('cy', particle.y);
            particle.element.setAttribute('r', 2 + particle.energy * 3);
            particle.element.setAttribute('fill', this.getParticleColor(particle.energy));
            particle.element.style.opacity = phaseOpacity * (0.7 + particle.energy * 0.3);
            particle.element.style.transform = `rotate(${particle.spin}deg)`;
            
            // Decay energy over time
            particle.energy *= 0.999;
            particle.vx *= 0.98;
            particle.vy *= 0.98;
        });
        
        // Update entanglement connections
        this.connections.forEach(connection => {
            connection.element.setAttribute('x1', connection.particle1.x);
            connection.element.setAttribute('y1', connection.particle1.y);
            connection.element.setAttribute('x2', connection.particle2.x);
            connection.element.setAttribute('y2', connection.particle2.y);
        });
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.svg && this.svg.parentNode) {
            this.svg.parentNode.removeChild(this.svg);
        }
    }
}

class InfiniteDimensionalVisualization {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            maxDimensions: 12,
            expansionSpeed: 1000,
            convergenceThreshold: 0.001,
            adaptiveExpansion: true,
            ...options
        };
        this.dimensions = [];
        this.currentDimension = 3;
        this.isExpanding = false;
        
        this.init();
    }

    init() {
        if (!this.container) return;
        
        this.setupVisualization();
        this.createDimensionalLayers();
        this.setupControls();
        this.startExpansion();
    }

    setupVisualization() {
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('width', '100%');
        this.svg.setAttribute('height', '100%');
        this.svg.setAttribute('viewBox', '0 0 300 300');
        this.svg.style.position = 'absolute';
        this.svg.style.top = '0';
        this.svg.style.left = '0';
        
        // Create center point
        const center = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        center.setAttribute('cx', '150');
        center.setAttribute('cy', '150');
        center.setAttribute('r', '3');
        center.setAttribute('fill', '#06b6d4');
        center.style.filter = 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.8))';
        
        this.svg.appendChild(center);
        this.container.appendChild(this.svg);
        
        // Add dimension counter
        this.dimensionCounter = document.createElement('div');
        this.dimensionCounter.className = 'dimension-counter';
        this.dimensionCounter.style.cssText = `
            position: absolute;
            top: 1rem;
            left: 1rem;
            background: rgba(15, 15, 35, 0.9);
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            border: 1px solid #334155;
            font-family: 'JetBrains Mono', monospace;
            color: #06b6d4;
        `;
        this.container.appendChild(this.dimensionCounter);
        
        this.updateDimensionCounter();
    }

    createDimensionalLayers() {
        for (let i = 1; i <= this.options.maxDimensions; i++) {
            const dimension = this.createDimensionLayer(i);
            this.dimensions.push(dimension);
            this.svg.appendChild(dimension.element);
        }
    }

    createDimensionLayer(dimension) {
        const layer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        const size = 30 + dimension * 15;
        
        // Create geometric representation based on dimension
        let shape;
        if (dimension <= 3) {
            // 1D: line, 2D: square, 3D: cube representation
            shape = this.create3DRepresentation(dimension, size);
        } else {
            // Higher dimensions: hypersphere projections
            shape = this.createHypersphereProjection(dimension, size);
        }
        
        layer.appendChild(shape);
        
        const dimensionData = {
            element: layer,
            dimension: dimension,
            size: size,
            active: dimension <= this.currentDimension,
            convergence: 1.0
        };
        
        this.updateDimensionVisibility(dimensionData);
        
        return dimensionData;
    }

    create3DRepresentation(dimension, size) {
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttribute('transform', 'translate(150, 150)');
        
        switch(dimension) {
            case 1:
                // Line
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', -size/2);
                line.setAttribute('y1', 0);
                line.setAttribute('x2', size/2);
                line.setAttribute('y2', 0);
                line.setAttribute('stroke', '#6366f1');
                line.setAttribute('stroke-width', '2');
                group.appendChild(line);
                break;
                
            case 2:
                // Square
                const square = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                square.setAttribute('x', -size/2);
                square.setAttribute('y', -size/2);
                square.setAttribute('width', size);
                square.setAttribute('height', size);
                square.setAttribute('fill', 'none');
                square.setAttribute('stroke', '#8b5cf6');
                square.setAttribute('stroke-width', '2');
                group.appendChild(square);
                break;
                
            case 3:
                // Cube (3D projection)
                const front = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                front.setAttribute('x', -size/2);
                front.setAttribute('y', -size/2);
                front.setAttribute('width', size);
                front.setAttribute('height', size);
                front.setAttribute('fill', 'none');
                front.setAttribute('stroke', '#06b6d4');
                front.setAttribute('stroke-width', '2');
                group.appendChild(front);
                
                const back = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                back.setAttribute('x', -size/2 + 10);
                back.setAttribute('y', -size/2 - 10);
                back.setAttribute('width', size);
                back.setAttribute('height', size);
                back.setAttribute('fill', 'none');
                back.setAttribute('stroke', '#06b6d4');
                back.setAttribute('stroke-width', '1');
                back.setAttribute('opacity', '0.6');
                group.appendChild(back);
                
                // Connecting lines
                const connections = [
                    [-size/2, -size/2, -size/2 + 10, -size/2 - 10],
                    [size/2, -size/2, size/2 + 10, -size/2 - 10],
                    [size/2, size/2, size/2 + 10, size/2 - 10],
                    [-size/2, size/2, -size/2 + 10, size/2 - 10]
                ];
                
                connections.forEach(conn => {
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('x1', conn[0]);
                    line.setAttribute('y1', conn[1]);
                    line.setAttribute('x2', conn[2]);
                    line.setAttribute('y2', conn[3]);
                    line.setAttribute('stroke', '#06b6d4');
                    line.setAttribute('stroke-width', '1');
                    line.setAttribute('opacity', '0.4');
                    group.appendChild(line);
                });
                break;
        }
        
        return group;
    }

    createHypersphereProjection(dimension, size) {
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttribute('transform', 'translate(150, 150)');
        
        // Create multiple circles to represent hypersphere projection
        const circles = Math.min(8, dimension - 2);
        const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
        
        for (let i = 0; i < circles; i++) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            const radius = (size / 2) * (1 - i * 0.1);
            const rotation = (360 / circles) * i;
            
            circle.setAttribute('cx', 0);
            circle.setAttribute('cy', 0);
            circle.setAttribute('r', radius);
            circle.setAttribute('fill', 'none');
            circle.setAttribute('stroke', colors[i % colors.length]);
            circle.setAttribute('stroke-width', '1.5');
            circle.setAttribute('opacity', 0.7 - i * 0.08);
            circle.setAttribute('transform', `rotate(${rotation})`);
            
            group.appendChild(circle);
        }
        
        // Add dimensional annotation
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', 0);
        text.setAttribute('y', 5);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', colors[(dimension - 4) % colors.length]);
        text.setAttribute('font-size', '12');
        text.setAttribute('font-family', 'JetBrains Mono');
        text.textContent = `${dimension}D`;
        group.appendChild(text);
        
        return group;
    }

    updateDimensionVisibility(dimensionData) {
        const opacity = dimensionData.active ? 
            Math.max(0.1, dimensionData.convergence) : 0;
        const scale = dimensionData.active ? 
            0.5 + 0.5 * dimensionData.convergence : 0.3;
        
        dimensionData.element.style.opacity = opacity;
        dimensionData.element.style.transform = `scale(${scale})`;
        
        if (dimensionData.active) {
            dimensionData.element.style.animation = 
                `infiniteDimensionExpansion ${3 + dimensionData.dimension * 0.5}s infinite ease-in-out`;
        } else {
            dimensionData.element.style.animation = 'none';
        }
    }

    setupControls() {
        const controls = document.createElement('div');
        controls.className = 'dimension-controls';
        controls.style.cssText = `
            position: absolute;
            bottom: 1rem;
            left: 1rem;
            right: 1rem;
            display: flex;
            gap: 1rem;
            align-items: center;
            justify-content: center;
        `;
        
        // Dimension slider
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '1';
        slider.max = this.options.maxDimensions;
        slider.value = this.currentDimension;
        slider.style.cssText = `
            flex: 1;
            max-width: 200px;
        `;
        
        slider.addEventListener('input', (e) => {
            this.setDimension(parseInt(e.target.value));
        });
        
        // Auto-expand button
        const expandBtn = document.createElement('button');
        expandBtn.textContent = '∞';
        expandBtn.style.cssText = `
            padding: 0.5rem 1rem;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border: none;
            border-radius: 0.5rem;
            color: white;
            cursor: pointer;
            font-weight: 600;
        `;
        
        expandBtn.addEventListener('click', () => {
            this.expandToInfinity();
        });
        
        controls.appendChild(slider);
        controls.appendChild(expandBtn);
        this.container.appendChild(controls);
    }

    setDimension(newDimension) {
        this.currentDimension = Math.max(1, Math.min(this.options.maxDimensions, newDimension));
        
        this.dimensions.forEach((dimensionData, index) => {
            dimensionData.active = (index + 1) <= this.currentDimension;
            this.updateDimensionVisibility(dimensionData);
        });
        
        this.updateDimensionCounter();
    }

    expandToInfinity() {
        if (this.isExpanding) return;
        this.isExpanding = true;
        
        let targetDimension = this.currentDimension + 1;
        
        const expandStep = () => {
            if (targetDimension <= this.options.maxDimensions) {
                this.setDimension(targetDimension);
                targetDimension++;
                setTimeout(expandStep, this.options.expansionSpeed / this.options.maxDimensions);
            } else {
                // Reached maximum dimensions, show infinity effect
                this.showInfinityEffect();
                this.isExpanding = false;
            }
        };
        
        expandStep();
    }

    showInfinityEffect() {
        // Create infinity symbol overlay
        const infinity = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        infinity.setAttribute('x', '150');
        infinity.setAttribute('y', '150');
        infinity.setAttribute('text-anchor', 'middle');
        infinity.setAttribute('dominant-baseline', 'central');
        infinity.setAttribute('fill', '#06b6d4');
        infinity.setAttribute('font-size', '48');
        infinity.setAttribute('font-family', 'serif');
        infinity.textContent = '∞';
        infinity.style.animation = 'textGlow 2s ease-in-out infinite';
        
        this.svg.appendChild(infinity);
        
        // Remove after effect
        setTimeout(() => {
            if (infinity.parentNode) {
                infinity.parentNode.removeChild(infinity);
            }
        }, 3000);
    }

    updateDimensionCounter() {
        if (this.dimensionCounter) {
            const activeCount = this.dimensions.filter(d => d.active).length;
            this.dimensionCounter.textContent = `Dimensions: ${activeCount}${activeCount === this.options.maxDimensions ? '→∞' : ''}`;
        }
    }

    destroy() {
        if (this.svg && this.svg.parentNode) {
            this.svg.parentNode.removeChild(this.svg);
        }
    }
}

class ConsciousnessNetworkVisualization {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            nodeCount: 20,
            connectionProbability: 0.3,
            consciousnessLevels: 5,
            networkEvolution: true,
            ...options
        };
        this.nodes = [];
        this.connections = [];
        this.animationId = null;
        
        this.init();
    }

    init() {
        if (!this.container) return;
        
        this.setupNetwork();
        this.createNodes();
        this.createConnections();
        this.setupInteraction();
        this.animate();
    }

    setupNetwork() {
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('width', '100%');
        this.svg.setAttribute('height', '100%');
        this.svg.style.position = 'absolute';
        this.svg.style.top = '0';
        this.svg.style.left = '0';
        
        // Create defs for effects
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        
        // Consciousness glow filter
        const glow = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
        glow.setAttribute('id', 'consciousnessGlow');
        glow.innerHTML = `
            <feGaussianBlur stdDeviation="4"/>
            <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        `;
        
        defs.appendChild(glow);
        this.svg.appendChild(defs);
        this.container.appendChild(this.svg);
    }

    createNodes() {
        const rect = this.container.getBoundingClientRect();
        
        for (let i = 0; i < this.options.nodeCount; i++) {
            const node = {
                id: i,
                x: 50 + Math.random() * (rect.width - 100),
                y: 50 + Math.random() * (rect.height - 100),
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                consciousness: Math.random(),
                activity: 0,
                connections: [],
                element: null,
                pulsePhase: Math.random() * Math.PI * 2
            };
            
            // Create visual element
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('r', 4 + node.consciousness * 8);
            circle.setAttribute('fill', this.getConsciousnessColor(node.consciousness));
            circle.setAttribute('filter', 'url(#consciousnessGlow)');
            
            // Add consciousness level indicator
            const inner = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            inner.setAttribute('r', 2 + node.consciousness * 4);
            inner.setAttribute('fill', '#ffffff');
            inner.setAttribute('opacity', 0.3 + node.consciousness * 0.4);
            
            group.appendChild(circle);
            group.appendChild(inner);
            group.setAttribute('transform', `translate(${node.x}, ${node.y})`);
            
            node.element = group;
            this.svg.appendChild(group);
            this.nodes.push(node);
        }
    }

    getConsciousnessColor(level) {
        const colors = [
            '#475569', // Low consciousness - gray
            '#6366f1', // Basic consciousness - blue
            '#8b5cf6', // Enhanced consciousness - purple
            '#06b6d4', // Advanced consciousness - cyan
            '#10b981'  // Transcendent consciousness - green
        ];
        
        const index = Math.floor(level * (colors.length - 1));
        return colors[index];
    }

    createConnections() {
        // Create connections between nodes based on consciousness compatibility
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const node1 = this.nodes[i];
                const node2 = this.nodes[j];
                
                // Connection probability based on consciousness similarity and distance
                const consciousnessDiff = Math.abs(node1.consciousness - node2.consciousness);
                const distance = Math.sqrt(
                    Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)
                );
                
                const connectionProbability = this.options.connectionProbability * 
                    (1 - consciousnessDiff) * (1 - Math.min(distance / 200, 1));
                
                if (Math.random() < connectionProbability) {
                    this.createConnection(node1, node2);
                }
            }
        }
    }

    createConnection(node1, node2) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('stroke', '#6366f1');
        line.setAttribute('stroke-width', '1');
        line.setAttribute('stroke-opacity', '0.4');
        line.setAttribute('stroke-dasharray', '2,3');
        
        this.svg.insertBefore(line, this.svg.firstChild);
        
        const connection = {
            element: line,
            node1: node1,
            node2: node2,
            strength: (node1.consciousness + node2.consciousness) / 2,
            activity: 0,
            dataFlow: 0
        };
        
        node1.connections.push(connection);
        node2.connections.push(connection);
        this.connections.push(connection);
    }

    setupInteraction() {
        // Click to activate consciousness node
        this.container.addEventListener('click', (e) => {
            const rect = this.container.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            // Find closest node
            let closestNode = null;
            let minDistance = Infinity;
            
            this.nodes.forEach(node => {
                const distance = Math.sqrt(
                    Math.pow(clickX - node.x, 2) + Math.pow(clickY - node.y, 2)
                );
                if (distance < minDistance) {
                    minDistance = distance;
                    closestNode = node;
                }
            });
            
            if (closestNode && minDistance < 50) {
                this.activateConsciousness(closestNode);
            }
        });

        // Hover enhances nearby connections
        this.container.addEventListener('mousemove', (e) => {
            const rect = this.container.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            this.connections.forEach(connection => {
                const midX = (connection.node1.x + connection.node2.x) / 2;
                const midY = (connection.node1.y + connection.node2.y) / 2;
                const distance = Math.sqrt(
                    Math.pow(mouseX - midX, 2) + Math.pow(mouseY - midY, 2)
                );
                
                if (distance < 100) {
                    connection.activity = Math.max(connection.activity, (100 - distance) / 100);
                }
            });
        });
    }

    activateConsciousness(node) {
        // Enhance consciousness level
        node.consciousness = Math.min(1, node.consciousness + 0.1);
        node.activity = 1;
        
        // Propagate activation through connections
        const propagateActivation = (currentNode, strength, visited = new Set()) => {
            if (visited.has(currentNode.id) || strength < 0.1) return;
            visited.add(currentNode.id);
            
            currentNode.activity = Math.max(currentNode.activity, strength);
            
            currentNode.connections.forEach(connection => {
                const otherNode = connection.node1 === currentNode ? 
                    connection.node2 : connection.node1;
                
                connection.activity = Math.max(connection.activity, strength);
                
                setTimeout(() => {
                    propagateActivation(otherNode, strength * 0.7, visited);
                }, 100);
            });
        };
        
        propagateActivation(node, 1);
    }

    animate() {
        const rect = this.container.getBoundingClientRect();
        
        // Update nodes
        this.nodes.forEach(node => {
            // Gentle movement
            node.x += node.vx;
            node.y += node.vy;
            
            // Boundary conditions
            if (node.x < 30 || node.x > rect.width - 30) node.vx *= -1;
            if (node.y < 30 || node.y > rect.height - 30) node.vy *= -1;
            
            // Keep in bounds
            node.x = Math.max(30, Math.min(rect.width - 30, node.x));
            node.y = Math.max(30, Math.min(rect.height - 30, node.y));
            
            // Update consciousness pulse
            node.pulsePhase += 0.05;
            const pulseIntensity = 0.8 + 0.2 * Math.sin(node.pulsePhase);
            
            // Update visual
            const radius = (4 + node.consciousness * 8) * pulseIntensity;
            const opacity = (0.7 + node.activity * 0.3) * pulseIntensity;
            
            const circle = node.element.firstChild;
            circle.setAttribute('r', radius);
            circle.setAttribute('fill', this.getConsciousnessColor(node.consciousness));
            circle.style.opacity = opacity;
            
            node.element.setAttribute('transform', `translate(${node.x}, ${node.y})`);
            
            // Decay activity
            node.activity *= 0.95;
        });
        
        // Update connections
        this.connections.forEach(connection => {
            connection.element.setAttribute('x1', connection.node1.x);
            connection.element.setAttribute('y1', connection.node1.y);
            connection.element.setAttribute('x2', connection.node2.x);
            connection.element.setAttribute('y2', connection.node2.y);
            
            const opacity = 0.2 + connection.activity * 0.6;
            const width = 1 + connection.activity * 2;
            
            connection.element.setAttribute('stroke-opacity', opacity);
            connection.element.setAttribute('stroke-width', width);
            
            // Data flow animation
            if (connection.activity > 0.1) {
                connection.element.style.animation = 'neuralConnection 2s infinite';
            } else {
                connection.element.style.animation = 'none';
            }
            
            // Decay activity
            connection.activity *= 0.9;
        });
        
        // Network evolution
        if (this.options.networkEvolution && Math.random() < 0.001) {
            this.evolveNetwork();
        }
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    evolveNetwork() {
        // Occasionally create new connections or enhance existing ones
        if (Math.random() < 0.5 && this.connections.length < this.nodes.length * 2) {
            // Create new connection
            const node1 = this.nodes[Math.floor(Math.random() * this.nodes.length)];
            const node2 = this.nodes[Math.floor(Math.random() * this.nodes.length)];
            
            if (node1 !== node2 && !this.areConnected(node1, node2)) {
                this.createConnection(node1, node2);
            }
        } else {
            // Enhance a random node's consciousness
            const node = this.nodes[Math.floor(Math.random() * this.nodes.length)];
            node.consciousness = Math.min(1, node.consciousness + 0.01);
        }
    }

    areConnected(node1, node2) {
        return node1.connections.some(connection => 
            connection.node1 === node2 || connection.node2 === node2
        );
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.svg && this.svg.parentNode) {
            this.svg.parentNode.removeChild(this.svg);
        }
    }
}

// Interactive Documentation Component
class InteractiveDocumentation {
    constructor() {
        this.visualizations = new Map();
        this.init();
    }

    init() {
        this.setupVisualizationContainers();
        this.createVisualizations();
        this.setupInteractiveElements();
    }

    setupVisualizationContainers() {
        // Add quantum field visualization to hero section
        const heroSection = document.querySelector('.hero-section');
        if (heroSection && !document.getElementById('quantum-field-hero')) {
            const quantumField = document.createElement('div');
            quantumField.id = 'quantum-field-hero';
            quantumField.className = 'quantum-field';
            quantumField.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 0;
            `;
            heroSection.insertBefore(quantumField, heroSection.firstChild);
        }
        
        // Add dimension visualization to features section
        const featuresSection = document.getElementById('features');
        if (featuresSection && !document.getElementById('dimension-viz')) {
            const dimensionViz = document.createElement('div');
            dimensionViz.id = 'dimension-viz';
            dimensionViz.className = 'infinite-dimension-viz';
            dimensionViz.style.cssText = `
                position: relative;
                margin: 2rem auto;
                max-width: 400px;
                height: 300px;
            `;
            
            const vizContainer = document.createElement('div');
            vizContainer.className = 'visualization-container';
            vizContainer.style.textAlign = 'center';
            vizContainer.appendChild(dimensionViz);
            
            const title = document.createElement('h3');
            title.textContent = 'Interactive Infinite-Dimensional Visualization';
            title.style.marginBottom = '1rem';
            
            vizContainer.insertBefore(title, dimensionViz);
            featuresSection.querySelector('.container').appendChild(vizContainer);
        }
        
        // Add consciousness network to community section
        const communitySection = document.getElementById('community-stats');
        if (communitySection && !document.getElementById('consciousness-network')) {
            const networkViz = document.createElement('div');
            networkViz.id = 'consciousness-network';
            networkViz.className = 'consciousness-network';
            networkViz.style.cssText = `
                position: relative;
                margin: 2rem auto;
                max-width: 500px;
                height: 350px;
                border-radius: 1rem;
                background: var(--color-bg-secondary);
                border: 1px solid var(--color-border);
            `;
            
            const title = document.createElement('h3');
            title.textContent = 'Interactive Consciousness Network';
            title.style.cssText = `
                text-align: center;
                margin-bottom: 1rem;
            `;
            
            const container = communitySection.querySelector('.container');
            container.appendChild(title);
            container.appendChild(networkViz);
        }
    }

    createVisualizations() {
        // Create quantum field visualization
        if (document.getElementById('quantum-field-hero')) {
            this.visualizations.set('quantum-field', 
                new QuantumFieldVisualization('quantum-field-hero', {
                    particleCount: 30,
                    quantumFluctuations: true,
                    entanglementConnections: true
                })
            );
        }
        
        // Create infinite dimensional visualization
        if (document.getElementById('dimension-viz')) {
            this.visualizations.set('infinite-dimensions',
                new InfiniteDimensionalVisualization('dimension-viz', {
                    maxDimensions: 11,
                    adaptiveExpansion: true
                })
            );
        }
        
        // Create consciousness network visualization
        if (document.getElementById('consciousness-network')) {
            this.visualizations.set('consciousness-network',
                new ConsciousnessNetworkVisualization('consciousness-network', {
                    nodeCount: 15,
                    networkEvolution: true
                })
            );
        }
    }

    setupInteractiveElements() {
        // Add interactive tooltips to complex concepts
        this.addConceptTooltips();
        
        // Setup interactive code examples
        this.setupCodeInteractions();
        
        // Setup progressive disclosure
        this.setupProgressiveDisclosure();
    }

    addConceptTooltips() {
        const concepts = [
            {
                terms: ['infinite-dimensional', 'infinite dimensions'],
                tooltip: 'Mathematical spaces with unlimited spatial dimensions, allowing for complete description of any system complexity'
            },
            {
                terms: ['consciousness-aware', 'consciousness awareness'],
                tooltip: 'Technology that adapts to individual consciousness patterns and complexity levels'
            },
            {
                terms: ['quantum consensus', 'quantum observer consensus'],
                tooltip: 'Consensus mechanism using quantum entanglement for unbreakable security and distributed agreement'
            },
            {
                terms: ['emergence mining'],
                tooltip: 'Process of earning tokens by solving emergence puzzles that contribute to understanding complex systems'
            }
        ];
        
        concepts.forEach(concept => {
            concept.terms.forEach(term => {
                const regex = new RegExp(`\\b${term}\\b`, 'gi');
                document.querySelectorAll('p, li, span').forEach(element => {
                    if (element.children.length === 0 && element.textContent.includes(term)) {
                        element.innerHTML = element.innerHTML.replace(regex, 
                            `<span class="concept-tooltip" data-tooltip="${concept.tooltip}">$&</span>`
                        );
                    }
                });
            });
        });
        
        // Style concept tooltips
        const style = document.createElement('style');
        style.textContent = `
            .concept-tooltip {
                border-bottom: 1px dotted var(--color-primary);
                cursor: help;
                position: relative;
            }
            
            .concept-tooltip:hover {
                color: var(--color-primary);
            }
            
            .concept-tooltip::after {
                content: attr(data-tooltip);
                position: absolute;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%) translateY(-8px);
                background: var(--color-bg-tertiary);
                color: var(--color-text);
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                font-size: 0.875rem;
                white-space: nowrap;
                max-width: 300px;
                white-space: normal;
                width: max-content;
                z-index: 1000;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                pointer-events: none;
                box-shadow: var(--shadow-lg);
                border: 1px solid var(--color-border);
            }
            
            .concept-tooltip:hover::after {
                opacity: 1;
                visibility: visible;
            }
        `;
        document.head.appendChild(style);
    }

    setupCodeInteractions() {
        // Add copy buttons to code blocks
        document.querySelectorAll('pre code, .code-block').forEach(codeBlock => {
            if (codeBlock.parentNode.querySelector('.code-copy-btn')) return;
            
            const copyBtn = document.createElement('button');
            copyBtn.className = 'code-copy-btn';
            copyBtn.textContent = 'Copy';
            copyBtn.style.cssText = `
                position: absolute;
                top: 0.5rem;
                right: 0.5rem;
                padding: 0.25rem 0.75rem;
                background: var(--color-bg);
                border: 1px solid var(--color-border);
                border-radius: 0.25rem;
                color: var(--color-text-secondary);
                font-size: 0.75rem;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(codeBlock.textContent).then(() => {
                    copyBtn.textContent = 'Copied!';
                    copyBtn.style.background = 'var(--color-success)';
                    copyBtn.style.color = 'white';
                    
                    setTimeout(() => {
                        copyBtn.textContent = 'Copy';
                        copyBtn.style.background = 'var(--color-bg)';
                        copyBtn.style.color = 'var(--color-text-secondary)';
                    }, 2000);
                });
            });
            
            const container = codeBlock.closest('pre') || codeBlock;
            container.style.position = 'relative';
            container.appendChild(copyBtn);
            
            container.addEventListener('mouseenter', () => {
                copyBtn.style.opacity = '1';
            });
            
            container.addEventListener('mouseleave', () => {
                copyBtn.style.opacity = '0';
            });
        });
    }

    setupProgressiveDisclosure() {
        // Add expand/collapse functionality to long sections
        document.querySelectorAll('.doc-category').forEach(category => {
            const links = category.querySelectorAll('.doc-link');
            if (links.length > 4) {
                const toggleBtn = document.createElement('button');
                toggleBtn.textContent = 'Show More';
                toggleBtn.style.cssText = `
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    background: var(--color-bg-tertiary);
                    border: 1px solid var(--color-border);
                    border-radius: 0.5rem;
                    color: var(--color-text-secondary);
                    cursor: pointer;
                    width: 100%;
                `;
                
                // Hide extra links initially
                for (let i = 4; i < links.length; i++) {
                    links[i].style.display = 'none';
                }
                
                toggleBtn.addEventListener('click', () => {
                    const isExpanded = toggleBtn.textContent === 'Show Less';
                    
                    for (let i = 4; i < links.length; i++) {
                        links[i].style.display = isExpanded ? 'none' : 'block';
                    }
                    
                    toggleBtn.textContent = isExpanded ? 'Show More' : 'Show Less';
                });
                
                category.appendChild(toggleBtn);
            }
        });
    }

    destroy() {
        this.visualizations.forEach(viz => viz.destroy());
        this.visualizations.clear();
    }
}

// Initialize interactive documentation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.InteractiveDoc = new InteractiveDocumentation();
    });
} else {
    window.InteractiveDoc = new InteractiveDocumentation();
}

// Export classes for external use
window.QuantumFieldVisualization = QuantumFieldVisualization;
window.InfiniteDimensionalVisualization = InfiniteDimensionalVisualization;
window.ConsciousnessNetworkVisualization = ConsciousnessNetworkVisualization;
window.InteractiveDocumentation = InteractiveDocumentation;