/**
 * Hello Reality - Your First Reality Protocol Application
 * 
 * This example demonstrates:
 * - Consciousness authentication
 * - Basic reality creation
 * - Quantum state manipulation
 * - Emergence event observation
 * 
 * Run with: node examples/basic/hello_reality.js
 */

import { RealityProtocol, ConsciousnessInterface, QuantumBackend } from '@reality-protocol/sdk';

async function helloReality() {
    console.log('🌌 Welcome to the Reality Protocol!');
    console.log('=====================================\n');

    // Step 1: Initialize consciousness interface
    console.log('🧠 Step 1: Authenticating consciousness...');
    
    const consciousness = new ConsciousnessInterface({
        type: 'human',
        authMethod: 'neural_pattern',
        enhancementLevel: 'basic'
    });

    const auth = await consciousness.authenticate();
    console.log(`✅ Consciousness authenticated!`);
    console.log(`   Complexity Level: ${auth.complexityLevel}`);
    console.log(`   Dimensional Access: ${auth.dimensionalAccess}D`);
    console.log(`   Emergence Capacity: ${auth.emergenceCapacity}\n`);

    // Step 2: Connect to Reality Protocol network
    console.log('🌐 Step 2: Connecting to Reality Protocol...');
    
    const reality = new RealityProtocol({
        network: 'testnet',
        consciousness: consciousness,
        quantumBackend: new QuantumBackend({ simulator: true })
    });

    await reality.connect();
    const networkStatus = await reality.getNetworkStatus();
    console.log(`✅ Connected to ${networkStatus.networkName}`);
    console.log(`   Active Realities: ${networkStatus.activeRealities}`);
    console.log(`   Consciousness Nodes: ${networkStatus.consciousnessNodes}\n`);

    // Step 3: Create your first reality
    console.log('🎨 Step 3: Creating your first reality...');
    
    const myFirstReality = await reality.createReality({
        name: "Hello Reality World",
        description: "My first infinite-dimensional space",
        dimensions: 3,
        physics: {
            gravity: 9.81,
            lightSpeed: 299792458,
            quantumEffects: true
        },
        consciousness: {
            accessLevel: 'public',
            maxObservers: 10
        },
        emergence: {
            enabled: true,
            complexity: 'adaptive'
        }
    });

    console.log(`✅ Reality created!`);
    console.log(`   Reality ID: ${myFirstReality.id}`);
    console.log(`   Dimensions: ${myFirstReality.dimensions}`);
    console.log(`   Access URL: ${myFirstReality.accessUrl}\n`);

    // Step 4: Enter and explore the reality
    console.log('👁️ Step 4: Entering your reality...');
    
    const session = await reality.joinReality(myFirstReality.id);
    console.log('✅ Successfully entered reality!');

    // Get current state
    const state = await session.getCurrentState();
    console.log(`   Current time: ${state.time}`);
    console.log(`   Spatial dimensions: ${state.spatialDimensions}`);
    console.log(`   Active observers: ${state.observers.length}\n`);

    // Step 5: Perform quantum operations
    console.log('⚛️ Step 5: Exploring quantum mechanics...');
    
    // Create a quantum superposition
    const quantumParticle = await session.createQuantumObject({
        type: 'particle',
        position: 'superposition',
        spin: 'entangled'
    });

    console.log('✅ Quantum particle created in superposition');

    // Measure the particle (collapse wave function)
    const measurement = await session.measureQuantumObject(quantumParticle, {
        observable: 'position',
        basis: 'computational'
    });

    console.log(`   Measured position: (${measurement.position.x}, ${measurement.position.y}, ${measurement.position.z})`);
    console.log(`   Measurement uncertainty: ${measurement.uncertainty}`);
    console.log(`   Information gained: ${measurement.informationBits} bits\n`);

    // Step 6: Observe emergence events
    console.log('🌱 Step 6: Observing emergence...');
    
    // Set up emergence event listener
    session.onEmergenceEvent((event) => {
        console.log(`🔥 Emergence event detected!`);
        console.log(`   Type: ${event.type}`);
        console.log(`   Complexity: ${event.complexity}`);
        console.log(`   Information delta: ${event.informationDelta} bits`);
    });

    // Create conditions for emergence
    await session.addComplexitySource({
        type: 'consciousness_interaction',
        strength: 0.7
    });

    // Wait for emergence to occur
    console.log('   Waiting for emergence events...');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Step 7: Invite another consciousness (if available)
    console.log('\n🤝 Step 7: Consciousness networking...');
    
    try {
        const nearbyConsciousness = await reality.discoverConsciousness({
            proximityRadius: 5,
            minComplexity: 100
        });

        if (nearbyConsciousness.length > 0) {
            console.log(`   Found ${nearbyConsciousness.length} compatible consciousness nearby`);
            
            // Invite the first one to your reality
            const invited = nearbyConsciousness[0];
            await myFirstReality.inviteObserver(invited.id, {
                permissions: ['observe', 'interact'],
                duration: 3600  // 1 hour
            });
            
            console.log(`   Invited consciousness ${invited.id.substring(0, 8)}... to your reality`);
        } else {
            console.log('   No compatible consciousness found nearby');
        }
    } catch (error) {
        console.log('   Consciousness discovery not available in test mode');
    }

    // Step 8: Explore infinite dimensions
    console.log('\n♾️ Step 8: Exploring infinite dimensions...');
    
    try {
        // Request dimensional expansion
        const expansion = await consciousness.requestDimensionalExpansion(4);
        
        if (expansion.approved) {
            console.log('✅ Dimensional access expanded to 4D!');
            
            // Create a 4D object
            const hypercube = await session.createObject({
                type: 'hypercube',
                dimensions: 4,
                size: [1, 1, 1, 1]
            });
            
            console.log(`   Created 4D hypercube: ${hypercube.id}`);
            
            // Project to 3D for visualization
            const projection = await hypercube.projectTo3D();
            console.log(`   3D projection: ${projection.shape}`);
        } else {
            console.log('   Dimensional expansion pending - requires higher consciousness level');
        }
    } catch (error) {
        console.log('   Dimensional expansion not available in test mode');
    }

    // Step 9: Check your token balances
    console.log('\n💰 Step 9: Checking token balances...');
    
    const balances = await reality.getTokenBalances();
    console.log(`   REAL tokens: ${balances.REAL}`);
    console.log(`   CONS tokens: ${balances.CONS}`);
    console.log(`   EMERGE tokens: ${balances.EMERGE}`);
    console.log(`   INFO tokens: ${balances.INFO}`);

    // Step 10: Clean up and exit
    console.log('\n🏁 Step 10: Wrapping up...');
    
    // Leave the reality
    await session.leave();
    console.log('✅ Left reality successfully');

    // Optionally destroy the reality (comment out to keep it)
    // await reality.destroyReality(myFirstReality.id);
    // console.log('✅ Reality destroyed');

    // Disconnect from network
    await reality.disconnect();
    console.log('✅ Disconnected from Reality Protocol');

    console.log('\n🎉 Congratulations!');
    console.log('=====================================');
    console.log('You have successfully:');
    console.log('  ✓ Authenticated your consciousness');
    console.log('  ✓ Connected to Reality Protocol network');
    console.log('  ✓ Created your first reality');
    console.log('  ✓ Performed quantum measurements');
    console.log('  ✓ Observed emergence events');
    console.log('  ✓ Explored consciousness networking');
    console.log('  ✓ Experimented with infinite dimensions');
    console.log('\nWelcome to the infinite-dimensional future! 🌌');
    console.log('\nNext steps:');
    console.log('  - Try the advanced examples in examples/advanced/');
    console.log('  - Build your own reality applications');
    console.log('  - Join the community at https://discord.gg/reality-protocol');
    console.log('  - Read the full documentation at https://docs.reality-protocol.org');
}

// Error handling wrapper
async function main() {
    try {
        await helloReality();
    } catch (error) {
        console.error('\n❌ Error occurred:', error.message);
        console.error('\nThis might happen if:');
        console.error('  - Reality Protocol network is not accessible');
        console.error('  - Consciousness authentication failed');
        console.error('  - Insufficient permissions for requested operations');
        console.error('\nTry running in test mode with: REALITY_NETWORK=local node hello_reality.js');
        process.exit(1);
    }
}

// Run the example
if (import.meta.url === `file://${process.argv[1]}`) {
    main();
}

export { helloReality };