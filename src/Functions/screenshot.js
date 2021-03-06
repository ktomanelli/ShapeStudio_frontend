import * as THREE from 'three'

const screenshot=(gl,scene,camera,fd)=>{
    gl.render(scene,camera)
    gl.toneMapping = THREE.ACESFilmicToneMapping
    gl.toneMappingExposure = 0.6
    // gl.outputEncoding = THREE.sRGBEncoding
    gl.preserveDrawingBuffer = true
    return new Promise((resolve,reject)=>{
        gl.domElement.toBlob(
            (blob)=>{
               resolve(blob)
            },
            'image/jpg',
            1.0
        )
    })
}

export {screenshot}