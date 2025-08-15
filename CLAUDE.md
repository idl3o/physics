# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Mission

This repository is dedicated to understanding the fundamental laws of reality that give rise to physical emergence through computational simulation and theoretical modeling. The goal is to explore how complex behaviors and structures emerge from simple underlying rules and interactions.

## Core Research Areas

### 1. Physical Emergence Theory
- **Weak Emergence**: Phenomena derivable in principle from constituent laws and properties
- **Strong Emergence**: Phenomena not derivable even with exhaustive knowledge of constituents
- **Computational Emergence Theory (CET)**: Physical reality as self-organizing computational processes on infinite graph spaces

### 2. Fundamental Physics Domains
- **Quantum Mechanics**: Study emergence of classical behavior from quantum foundations
- **Statistical Mechanics**: Phase transitions and critical phenomena as emergent behaviors
- **Thermodynamics**: Emergence of macroscopic properties from microscopic dynamics
- **Cosmology**: Large-scale structure formation and universal constants emergence

### 3. Computational Approaches
- **Monte Carlo Simulations**: Statistical sampling for complex system behavior
- **Cellular Automata**: Simple rule-based systems showing complex emergent patterns
- **Agent-Based Modeling**: Bottom-up modeling of complex systems from individual agents
- **Quantum Computing**: Simulation of quantum many-body systems and emergent phenomena

## Recommended Technology Stack

### Primary Languages and Frameworks

#### Python Ecosystem (Recommended for Rapid Prototyping)
```bash
# Core scientific libraries
pip install numpy scipy matplotlib pandas
# Quantum physics simulations
pip install qutip
# Agent-based modeling
pip install mesa
# Physics simulations
pip install pymunk
# Jupyter for interactive research
pip install jupyter
```

#### Julia (Recommended for High-Performance Computing)
```julia
# Core packages
using Pkg
Pkg.add(["MonteCarlo", "QuantumOptics", "Plots", "DifferentialEquations"])
# Install Carlo.jl for Monte Carlo framework
Pkg.add(url="https://github.com/lukas-weber/Carlo.jl")
```

#### C++ (Recommended for Performance-Critical Simulations)
- **Quantum++**: Modern quantum computing library
- **Project Chrono**: Physics-based simulation infrastructure
- **ReactPhysics3D**: 3D physics engine
- **Eigen**: Linear algebra template library

### Specialized Libraries by Domain

#### Quantum Mechanics
- **Python**: QuTiP (Quantum Toolbox in Python)
- **Julia**: QuantumOptics.jl, QuantumBayesian.jl
- **C++**: Quantum++, libquantum, QEngine

#### Statistical Mechanics & Monte Carlo
- **Python**: SciPy, custom Monte Carlo implementations
- **Julia**: MonteCarlo.jl, Carlo.jl
- **C++**: Custom implementations with MPI parallelization

#### Agent-Based Modeling
- **Python**: Mesa framework (Python alternative to NetLogo)
- **NetLogo**: Established ABM platform with turtle-based programming
- **Java/Scala**: MASON, Repast frameworks

#### Cellular Automata
- **Python**: NumPy-based implementations, Conway's Game of Life variants
- **C++**: High-performance CA implementations with OpenMP
- **Wolfram Language**: Built-in CA functions and Rule 110 explorations

## Project Architecture

### Modular Structure
```
physics/
├── src/
│   ├── emergence/           # Core emergence theory implementations
│   │   ├── weak_emergence/  # Reducible phenomena models
│   │   ├── strong_emergence/ # Irreducible phenomena exploration
│   │   └── metrics/         # Emergence quantification tools
│   ├── quantum/             # Quantum mechanics simulations
│   │   ├── many_body/       # Many-body quantum systems
│   │   ├── decoherence/     # Quantum-to-classical transitions
│   │   └── field_theory/    # Quantum field theory models
│   ├── statistical/         # Statistical mechanics
│   │   ├── phase_transitions/ # Critical phenomena
│   │   ├── monte_carlo/     # MC simulation engines
│   │   └── renormalization/ # RG flow calculations
│   ├── cellular_automata/   # CA implementations
│   │   ├── elementary/      # Wolfram's elementary CA
│   │   ├── life_like/       # Conway's Game of Life variants
│   │   └── quantum_ca/      # Quantum cellular automata
│   ├── agents/              # Agent-based models
│   │   ├── swarm/           # Swarm intelligence
│   │   ├── social/          # Social emergence models
│   │   └── economic/        # Economic system emergence
│   └── cosmology/           # Cosmological models
│       ├── inflation/       # Cosmic inflation simulations
│       ├── structure/       # Large-scale structure formation
│       └── constants/       # Physical constant emergence
├── notebooks/               # Jupyter notebooks for research
├── tests/                   # Unit and integration tests
├── docs/                    # Documentation and theory
└── data/                    # Simulation data and results
```

### Performance Considerations
- Use NumPy/Julia for vectorized operations
- Implement MPI parallelization for large-scale simulations
- Consider GPU acceleration with CUDA/OpenCL for massively parallel CA
- Profile code regularly and optimize bottlenecks

## Development Commands

### Python Development
```bash
# Install dependencies
pip install -r requirements.txt

# Run tests
python -m pytest tests/

# Jupyter lab for research
jupyter lab

# Performance profiling
python -m cProfile -o profile.prof src/main.py
```

### Julia Development
```julia
# Activate project environment
using Pkg; Pkg.activate(".")

# Install dependencies
Pkg.instantiate()

# Run tests
Pkg.test()

# Start interactive session
julia --threads auto
```

### C++ Development
```bash
# Build with CMake
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make -j$(nproc)

# Run tests
ctest --parallel $(nproc)
```

## Key Theoretical Frameworks

### 1. Renormalization Group Theory
Study how physical systems change with scale, revealing universal behavior in phase transitions and critical phenomena.

### 2. Information Theory
Quantify emergence using measures like effective complexity, logical depth, and thermodynamic depth.

### 3. Network Science
Model complex systems as networks to study emergence of collective behaviors.

### 4. Computational Mechanics
Analyze the computational structure of complex systems using ε-machines and statistical complexity.

## Research Methodologies

### 1. Bottom-Up Simulation
Start with fundamental microscopic rules and observe macroscopic emergence.

### 2. Top-Down Analysis
Begin with observed emergent phenomena and reverse-engineer underlying mechanisms.

### 3. Comparative Studies
Compare different models showing similar emergent behaviors to identify universal principles.

### 4. Scaling Analysis
Study how emergent properties change with system size and parameter variations.

## Data Management

### Simulation Data
- Store large datasets in HDF5 format for efficient I/O
- Use version control for simulation parameters and configurations
- Implement data provenance tracking for reproducibility

### Analysis Results
- Generate publication-ready figures with matplotlib/Plots.jl
- Create interactive visualizations for complex data exploration
- Document all analysis procedures and statistical methods

## Collaboration Guidelines

### Code Standards
- Follow PEP 8 for Python, Julia style guide for Julia
- Write comprehensive docstrings and comments
- Implement unit tests for all core functions
- Use type hints/annotations where available

### Documentation
- Maintain theoretical background documentation
- Create tutorials for complex simulation setups
- Document unexpected results and failed approaches
- Keep bibliography of relevant research papers

## References and Resources

### Foundational Papers
- Wolfram, S. "A New Kind of Science" - Cellular automata and complexity
- Anderson, P.W. "More Is Different" - Emergence in condensed matter
- Hopfield, J.J. "Neural networks and physical systems" - Emergent computation

### Key Research Areas
- Santa Fe Institute complexity research
- Perimeter Institute foundational physics
- MIT Center for Collective Intelligence
- Complex Systems Society publications

### Online Resources
- arXiv.org sections: cond-mat.stat-mech, quant-ph, nlin.CG
- Complexity Explorer online courses
- NetLogo Models Library for ABM examples