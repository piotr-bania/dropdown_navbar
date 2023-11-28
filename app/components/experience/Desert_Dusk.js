'use client'

import { useRouter } from 'next/navigation'
import { Text } from '@react-three/drei'

const Desert_Dusk = ({ onRouteChange }) => {
    const router = useRouter()

    return (
        <mesh
            onClick={onRouteChange}
            position={[-1, 0, 0]}
        >
            <boxGeometry attach='geometry' args={[1, 1, 1]} />
            <meshPhysicalMaterial
                color={'yellow'}
                attach='material'
                metalness={1}
                roughness={0}
                clearcoat={1}
                clearcoatRoughness={0.5}
                reflectivity={1}
                envMapIntensity={1}
            />

            <Text
                color='black'
                fontSize={0.25}
                maxWidth={1}
                lineHeight={1}
                textAlign='center'
                anchorX='center'
                anchorY='middle'
                position={[0, 0, .51]}
            >
                Desert Dusk
            </Text>
        </mesh>
    )
}

export default Desert_Dusk