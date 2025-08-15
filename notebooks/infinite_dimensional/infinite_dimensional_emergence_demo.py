"""
Jupyter Notebook Demo: Infinite-Dimensional Emergence

This notebook demonstrates the key concepts and computational methods
for studying infinite-dimensional emergence in physics.

Run this as a Python script or convert to Jupyter notebook format.
"""

import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint
from scipy.optimize import minimize
import sys
import os

# Add src to path for imports
sys.path.append(os.path.join(os.path.dirname(__file__), '..', '..', 'src'))

try:
    from emergence.infinite_dimensional.infinite_dimensional_framework import (
        QuantumInfiniteDimensional,
        GaugeTheoryInfiniteDimensional, 
        StatisticalMechanicsInfiniteDimensional,
        EmergenceAnalysis
    )
except ImportError:
    print("Warning: Could not import infinite_dimensional_framework")
    print("Running standalone demo instead...")


def plot_infinite_dimensional_convergence():
    """
    Demonstrate convergence behavior in infinite-dimensional calculations.
    """
    print("=== Infinite-Dimensional Convergence Analysis ===\n")
    
    # Simulate convergence of infinite-dimensional calculation
    dimensions = [10, 20, 50, 100, 200, 500, 1000, 2000]
    
    # Example: Sum of infinite series ∑(1/n²) = π²/6
    def partial_sum(max_n):
        return np.sum(1.0 / np.arange(1, max_n + 1)**2)
    
    results = [partial_sum(d) for d in dimensions]
    exact_value = np.pi**2 / 6
    errors = [abs(r - exact_value) for r in results]
    
    # Plot convergence
    plt.figure(figsize=(12, 8))
    
    plt.subplot(2, 2, 1)
    plt.semilogx(dimensions, results, 'bo-', label='Partial sums')
    plt.axhline(y=exact_value, color='r', linestyle='--', label=f'Exact value: π²/6 ≈ {exact_value:.6f}')
    plt.xlabel('Maximum dimension')
    plt.ylabel('Series value')
    plt.title('Convergence to Infinite-Dimensional Limit')
    plt.legend()
    plt.grid(True)
    
    plt.subplot(2, 2, 2)
    plt.loglog(dimensions, errors, 'ro-')
    plt.xlabel('Maximum dimension')
    plt.ylabel('Absolute error')
    plt.title('Convergence Error (Log-Log Scale)')
    plt.grid(True)
    
    # Quantum harmonic oscillator energy levels
    plt.subplot(2, 2, 3)
    quantum_system = create_quantum_system()
    n_levels = 20
    x = np.linspace(-5, 5, 1000)
    
    # Analytical harmonic oscillator energies
    energies = np.arange(n_levels) + 0.5
    
    plt.plot(range(n_levels), energies, 'bo-', label='Energy levels')
    plt.xlabel('Quantum number n')
    plt.ylabel('Energy (ℏω units)')
    plt.title('Infinite-Dimensional Quantum Spectrum')
    plt.legend()
    plt.grid(True)
    
    # Emergence of finite-dimensional behavior
    plt.subplot(2, 2, 4)
    
    # Simulate system with varying coupling to infinite-dimensional bath
    couplings = np.logspace(-3, 0, 50)
    effective_dimensions = []
    
    for coupling in couplings:
        # Model: effective dimension decreases with stronger coupling to environment
        eff_dim = 1000 * np.exp(-coupling * 10) + 1
        effective_dimensions.append(eff_dim)
    
    plt.semilogx(couplings, effective_dimensions, 'go-')
    plt.xlabel('Coupling to environment')
    plt.ylabel('Effective dimension')
    plt.title('Dimensional Reduction via Environment Coupling')
    plt.grid(True)
    
    plt.tight_layout()
    plt.show()
    
    print(f"Series convergence: {results[-1]:.8f} (exact: {exact_value:.8f})")
    print(f"Final error: {errors[-1]:.2e}")


def create_quantum_system():
    """Create a quantum system for demonstration."""
    try:
        return QuantumInfiniteDimensional(dimension_cutoff=100)
    except:
        # Fallback implementation
        class SimpleQuantumSystem:
            def __init__(self, dimension_cutoff=100):
                self.dimension_cutoff = dimension_cutoff
        return SimpleQuantumSystem()


def demonstrate_quantum_emergence():
    """
    Demonstrate emergence in infinite-dimensional quantum systems.
    """
    print("=== Quantum Emergence in Infinite Dimensions ===\n")
    
    # Parameters
    n_particles = 5
    dimension_per_particle = 20
    total_dimension = dimension_per_particle ** n_particles
    
    print(f"System: {n_particles} particles")
    print(f"Dimension per particle: {dimension_per_particle}")
    print(f"Total Hilbert space dimension: {total_dimension}")
    print(f"Note: This grows exponentially with particle number!\n")
    
    # Simulate quantum entanglement growth
    particle_numbers = range(1, 8)
    hilbert_dimensions = [dimension_per_particle ** n for n in particle_numbers]
    entanglement_entropies = []
    
    for n in particle_numbers:
        # Model entanglement entropy growth
        # Real systems show area law (slower growth)
        if n <= 3:
            entropy = 0.5 * n * np.log(dimension_per_particle)  # Area law
        else:
            entropy = 0.3 * n * np.log(dimension_per_particle)  # Saturation
        entanglement_entropies.append(entropy)
    
    plt.figure(figsize=(12, 6))
    
    plt.subplot(1, 2, 1)
    plt.semilogy(particle_numbers, hilbert_dimensions, 'bo-', label='Hilbert space dimension')
    plt.xlabel('Number of particles')
    plt.ylabel('Hilbert space dimension')
    plt.title('Exponential Growth of Quantum Complexity')
    plt.legend()
    plt.grid(True)
    
    plt.subplot(1, 2, 2)
    plt.plot(particle_numbers, entanglement_entropies, 'ro-', label='Entanglement entropy')
    # Compare with volume law (exponential growth)
    volume_law = [n * np.log(dimension_per_particle) for n in particle_numbers]
    plt.plot(particle_numbers, volume_law, 'r--', alpha=0.5, label='Volume law (maximum)')
    plt.xlabel('Number of particles')
    plt.ylabel('Entanglement entropy')
    plt.title('Entanglement Growth (Area vs Volume Law)')
    plt.legend()
    plt.grid(True)
    
    plt.tight_layout()
    plt.show()
    
    # Quantum measurement as dimensional reduction
    print("Quantum Measurement as Dimensional Reduction:")
    print("-" * 45)
    
    initial_superposition_terms = 1000
    measurement_outcomes = [2, 5, 10, 20]
    
    for outcomes in measurement_outcomes:
        reduction_factor = initial_superposition_terms / outcomes
        information_lost = np.log2(reduction_factor)
        
        print(f"Measurement with {outcomes:2d} outcomes:")
        print(f"  Dimensional reduction: {reduction_factor:8.1f}x")
        print(f"  Information lost: {information_lost:8.2f} bits")
    

def demonstrate_gauge_theory_emergence():
    """
    Demonstrate emergence in infinite-dimensional gauge theory.
    """
    print("\n=== Gauge Theory Emergence ===\n")
    
    # Yang-Mills theory: infinite-dimensional gauge group
    print("Yang-Mills Theory Structure:")
    print("- Configuration space: A(M) = {all connections}")
    print("- Gauge group: G = Map(M,G) (infinite-dimensional)")
    print("- Physical space: A(M)/G (moduli space)")
    print("- Observable: finite-dimensional gauge-invariant quantities\n")
    
    # Simulate gauge field fluctuations
    spacetime_points = 100
    gauge_group_generators = 3  # SU(3)
    spacetime_directions = 4    # 4D spacetime
    
    # Generate random gauge field configuration
    np.random.seed(42)
    gauge_field = np.random.normal(0, 0.1, 
                                  (spacetime_points, spacetime_directions, 
                                   gauge_group_generators, gauge_group_generators))
    
    # Compute Wilson loops (gauge-invariant observables)
    loop_sizes = range(1, 21)
    wilson_loop_values = []
    
    for loop_size in loop_sizes:
        # Simplified Wilson loop calculation
        path_length = 4 * loop_size  # Square loop perimeter
        # Wilson loop ~ exp(-σ * Area) for confining theory
        wilson_value = np.exp(-0.1 * loop_size**2)  # Area law
        wilson_loop_values.append(wilson_value)
    
    plt.figure(figsize=(12, 6))
    
    plt.subplot(1, 2, 1)
    # Plot gauge field fluctuations
    field_component = gauge_field[:, 0, 0, 0]  # One component
    plt.plot(field_component, 'b-', alpha=0.7)
    plt.xlabel('Spacetime point')
    plt.ylabel('Gauge field value')
    plt.title('Infinite-Dimensional Gauge Field Fluctuations')
    plt.grid(True)
    
    plt.subplot(1, 2, 2)
    plt.semilogy(loop_sizes, wilson_loop_values, 'ro-', label='Area law')
    # Compare with perimeter law
    perimeter_law = [np.exp(-0.05 * size) for size in loop_sizes]
    plt.semilogy(loop_sizes, perimeter_law, 'b--', alpha=0.7, label='Perimeter law')
    plt.xlabel('Loop size')
    plt.ylabel('Wilson loop expectation value')
    plt.title('Gauge-Invariant Observables (Finite-Dimensional)')
    plt.legend()
    plt.grid(True)
    
    plt.tight_layout()
    plt.show()
    
    print("Gauge Theory Emergence:")
    print("- Infinite gauge field configurations → Finite physical observables")
    print("- Gauge invariance reduces infinite dimensions to finite physics")
    print("- Wilson loops show area law → confinement (emergent phenomenon)")


def demonstrate_statistical_mechanics_emergence():
    """
    Demonstrate emergence in infinite-dimensional statistical systems.
    """
    print("\n=== Statistical Mechanics Emergence ===\n")
    
    # Renormalization Group flow in infinite-dimensional coupling space
    print("Renormalization Group Analysis:")
    print("- Infinite-dimensional coupling constant space")
    print("- RG flow reduces to finite-dimensional critical manifolds")
    print("- Emergent universality classes\n")
    
    # Simple RG flow example: Ising model
    temperatures = np.linspace(1.5, 3.5, 100)
    critical_temp = 2.269  # 2D Ising model
    
    # Order parameter (magnetization)
    magnetizations = []
    for T in temperatures:
        if T > critical_temp:
            m = 0  # Disordered phase
        else:
            # Critical behavior: m ~ (T_c - T)^β where β = 1/8 for 2D Ising
            m = (critical_temp - T)**(1/8) if T < critical_temp else 0
        magnetizations.append(m)
    
    # Correlation length
    correlation_lengths = []
    for T in temperatures:
        # ξ ~ |T - T_c|^(-ν) where ν = 1 for 2D Ising
        xi = 1.0 / abs(T - critical_temp)**1.0 if abs(T - critical_temp) > 0.01 else 100
        correlation_lengths.append(min(xi, 100))  # Cap for plotting
    
    plt.figure(figsize=(15, 5))
    
    plt.subplot(1, 3, 1)
    plt.plot(temperatures, magnetizations, 'b-', linewidth=2)
    plt.axvline(x=critical_temp, color='r', linestyle='--', alpha=0.7, label=f'T_c = {critical_temp}')
    plt.xlabel('Temperature')
    plt.ylabel('Order parameter (magnetization)')
    plt.title('Emergent Order Parameter')
    plt.legend()
    plt.grid(True)
    
    plt.subplot(1, 3, 2)
    plt.semilogy(temperatures, correlation_lengths, 'g-', linewidth=2)
    plt.axvline(x=critical_temp, color='r', linestyle='--', alpha=0.7)
    plt.xlabel('Temperature')
    plt.ylabel('Correlation length')
    plt.title('Diverging Correlation Length')
    plt.grid(True)
    
    # Effective dimension near critical point
    plt.subplot(1, 3, 3)
    effective_dims = []
    for T in temperatures:
        # Near critical point, system exhibits infinite-dimensional correlations
        distance_from_critical = abs(T - critical_temp)
        if distance_from_critical < 0.1:
            eff_dim = 1000 * np.exp(-distance_from_critical * 50)
        else:
            eff_dim = 1
        effective_dims.append(eff_dim)
    
    plt.semilogy(temperatures, effective_dims, 'm-', linewidth=2)
    plt.axvline(x=critical_temp, color='r', linestyle='--', alpha=0.7)
    plt.xlabel('Temperature')
    plt.ylabel('Effective dimension')
    plt.title('Infinite-Dimensional Criticality')
    plt.grid(True)
    
    plt.tight_layout()
    plt.show()
    
    print("Critical Phenomena:")
    print("- Infinite-dimensional fluctuations at critical point")
    print("- Emergence of universal finite-dimensional behavior")
    print("- Scale invariance and conformal symmetry")
    print("- Dimensional reduction through relevant operators")


def demonstrate_holographic_emergence():
    """
    Demonstrate holographic emergence (AdS/CFT-type).
    """
    print("\n=== Holographic Emergence (AdS/CFT) ===\n")
    
    print("Holographic Principle:")
    print("- Bulk: (d+1)-dimensional infinite-volume theory")
    print("- Boundary: d-dimensional finite-area theory") 
    print("- Information preservation through dimensional projection")
    print("- Strong/weak duality: strongly coupled ↔ weakly coupled\n")
    
    # Simulate holographic encoding
    bulk_dimensions = range(2, 11)  # AdS_d dimensions
    boundary_dimensions = [d-1 for d in bulk_dimensions]  # CFT_{d-1} dimensions
    
    # Holographic entropy scaling
    bulk_entropies = []
    boundary_entropies = []
    
    for d_bulk in bulk_dimensions:
        d_boundary = d_bulk - 1
        
        # Bulk entropy scales with volume
        volume_entropy = d_bulk**3
        
        # Boundary entropy scales with area (holographic bound)
        area_entropy = d_boundary**2
        
        bulk_entropies.append(volume_entropy)
        boundary_entropies.append(area_entropy)
    
    plt.figure(figsize=(12, 6))
    
    plt.subplot(1, 2, 1)
    plt.plot(bulk_dimensions, bulk_entropies, 'bo-', label='Bulk entropy (volume)')
    plt.plot(bulk_dimensions, boundary_entropies, 'ro-', label='Boundary entropy (area)')
    plt.xlabel('Bulk dimension')
    plt.ylabel('Entropy')
    plt.title('Holographic Entropy Bound')
    plt.legend()
    plt.grid(True)
    plt.yscale('log')
    
    # Information compression ratio
    plt.subplot(1, 2, 2)
    compression_ratios = [bulk/boundary for bulk, boundary in zip(bulk_entropies, boundary_entropies)]
    plt.plot(bulk_dimensions, compression_ratios, 'go-')
    plt.xlabel('Bulk dimension')
    plt.ylabel('Information compression ratio')
    plt.title('Holographic Information Compression')
    plt.grid(True)
    plt.yscale('log')
    
    plt.tight_layout()
    plt.show()
    
    # Black hole information paradox resolution
    print("Black Hole Information Paradox:")
    print("-" * 32)
    
    black_hole_masses = np.logspace(0, 3, 20)  # Solar masses
    
    for i, mass in enumerate([1, 10, 100, 1000]):
        # Hawking radiation time scale
        evaporation_time = mass**3  # Proportional to M³
        
        # Information content (Bekenstein-Hawking entropy)
        entropy_bits = mass**2  # Proportional to area ~ M²
        
        print(f"Black hole ({mass:4.0f} M☉):")
        print(f"  Evaporation time: {evaporation_time:8.0f} years (scaled)")
        print(f"  Information content: {entropy_bits:8.0f} bits (scaled)")
        print(f"  Information rate: {entropy_bits/evaporation_time:8.2f} bits/year")


def demonstrate_emergence_metrics():
    """
    Demonstrate quantitative measures of emergence.
    """
    print("\n=== Quantitative Emergence Metrics ===\n")
    
    # Generate synthetic multi-scale data
    np.random.seed(42)
    
    # Microscopic level: many random variables
    n_micro = 10000
    microscopic_data = np.random.normal(0, 1, n_micro)
    
    # Mesoscopic level: local averages
    n_meso = 1000
    mesoscopic_data = microscopic_data[:n_meso*10].reshape(n_meso, 10).mean(axis=1)
    
    # Macroscopic level: global patterns
    n_macro = 100
    macroscopic_data = mesoscopic_data[:n_macro*10].reshape(n_macro, 10).mean(axis=1)
    
    print(f"Data hierarchy:")
    print(f"  Microscopic: {n_micro:,} variables")
    print(f"  Mesoscopic:  {n_meso:,} variables (10:1 compression)")
    print(f"  Macroscopic: {n_macro:,} variables (100:1 compression)")
    
    # Compute emergence metrics
    def compute_complexity(data):
        # Simple complexity measure: normalized variance
        return np.var(data) / (np.mean(data)**2 + 1e-10)
    
    def compute_information_content(data):
        # Entropy-based information content
        hist, _ = np.histogram(data, bins=50, density=True)
        hist = hist[hist > 0]  # Remove zero entries
        return -np.sum(hist * np.log(hist))
    
    complexities = [
        compute_complexity(microscopic_data),
        compute_complexity(mesoscopic_data), 
        compute_complexity(macroscopic_data)
    ]
    
    information_contents = [
        compute_information_content(microscopic_data),
        compute_information_content(mesoscopic_data),
        compute_information_content(macroscopic_data)
    ]
    
    plt.figure(figsize=(15, 5))
    
    # Show data at different scales
    plt.subplot(1, 3, 1)
    plt.plot(microscopic_data[:1000], 'b-', alpha=0.7, linewidth=0.5, label='Microscopic')
    plt.plot(np.arange(0, 1000, 10), mesoscopic_data[:100], 'r-', linewidth=1.5, label='Mesoscopic')
    plt.plot(np.arange(0, 1000, 100), macroscopic_data[:10], 'g-', linewidth=2, label='Macroscopic')
    plt.xlabel('Index')
    plt.ylabel('Value')
    plt.title('Multi-Scale Data Hierarchy')
    plt.legend()
    plt.grid(True, alpha=0.3)
    
    # Complexity scaling
    plt.subplot(1, 3, 2)
    scales = ['Microscopic', 'Mesoscopic', 'Macroscopic']
    plt.bar(scales, complexities, color=['blue', 'red', 'green'], alpha=0.7)
    plt.ylabel('Complexity measure')
    plt.title('Complexity Across Scales')
    plt.xticks(rotation=45)
    
    # Information content scaling  
    plt.subplot(1, 3, 3)
    plt.bar(scales, information_contents, color=['blue', 'red', 'green'], alpha=0.7)
    plt.ylabel('Information content')
    plt.title('Information Across Scales')
    plt.xticks(rotation=45)
    
    plt.tight_layout()
    plt.show()
    
    # Emergence strength calculation
    print("\nEmergence Analysis:")
    print("-" * 18)
    
    # Mutual information between scales (simplified)
    correlation_micro_meso = np.corrcoef(
        microscopic_data[:1000], 
        np.repeat(mesoscopic_data[:100], 10)
    )[0, 1]
    
    correlation_meso_macro = np.corrcoef(
        mesoscopic_data[:100],
        np.repeat(macroscopic_data[:10], 10)
    )[0, 1]
    
    print(f"Micro-Meso correlation: {correlation_micro_meso:.4f}")
    print(f"Meso-Macro correlation: {correlation_meso_macro:.4f}")
    
    # Emergence index
    emergence_strength = (complexities[2] - complexities[0]) / complexities[0]
    print(f"Emergence strength: {emergence_strength:.4f}")
    
    information_compression = information_contents[0] / information_contents[2]
    print(f"Information compression: {information_compression:.2f}x")


def main():
    """
    Main demonstration function running all examples.
    """
    print("INFINITE-DIMENSIONAL EMERGENCE DEMONSTRATION")
    print("=" * 55)
    print("This notebook demonstrates computational approaches to")
    print("studying emergence in infinite-dimensional physical systems.")
    print("=" * 55)
    
    # Set matplotlib backend for headless environments
    import matplotlib
    matplotlib.use('Agg')  # Use non-interactive backend
    
    try:
        # Run all demonstrations
        plot_infinite_dimensional_convergence()
        demonstrate_quantum_emergence()
        demonstrate_gauge_theory_emergence()
        demonstrate_statistical_mechanics_emergence()
        demonstrate_holographic_emergence()
        demonstrate_emergence_metrics()
        
        print("\n" + "=" * 55)
        print("DEMONSTRATION COMPLETED SUCCESSFULLY")
        print("=" * 55)
        print("\nKey Insights:")
        print("1. Infinite-dimensional systems require careful numerical treatment")
        print("2. Emergence involves dimensional reduction from infinite to finite")
        print("3. Different physics domains show universal emergence patterns")
        print("4. Quantitative metrics can measure emergence strength")
        print("5. Computational approaches enable study of complex phenomena")
        
    except Exception as e:
        print(f"\nError during demonstration: {e}")
        print("This may be due to missing dependencies.")
        print("Required: numpy, scipy, matplotlib")


if __name__ == "__main__":
    main()